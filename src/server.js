const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const Contact = require('./models/contact');
const path = require('path');
const bcrypt = require('bcryptjs');

const app = express();

const clientAppDirectory = path.join(__dirname, '../public', 'build');

app.use(express.json());

app.use(express.static(clientAppDirectory));

mongoose.connect(process.env.ATLAS_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', async () => {
   console.log('connected to mongodb');
});

app.post('/api/users', async (request, response) => {
   const {email, password} = request.body;
   if(email !== '' && password !== '') {
       const newPassword = bcrypt.hashSync(password, 10);
       const user = new User({
           email: email,
           password: newPassword,
       });

       const newUser = await user.save();
       response.sendStatus(201).json(newUser);
   }
   else
       response.sendStatus(400);
});

app.post('/api/isValid', async (request, response) => {
   const {email, password} = request.body;

   const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
        return response.sendStatus(200);
    }
    return response.sendStatus(400);
});

app.delete('/api/users/:email', async (request, response) => {
    const {email} = request.params;

    await User.deleteOne({email: email});
    response.sendStatus(200);
});

app.post('/api/contacts', async (request, response) => {
   const {email, name, creatorEmail} = request.body;

    if(email !== '' && name !== '' && creatorEmail !== '') {

        const user = await User.findOne({email: creatorEmail});

        const id = user._id;

        const contact = new Contact({
            email: email,
            name: name,
            creatorID: id
        });

        const newContact = await contact.save();
        response.status(201).send(newContact);
    } else {
        response.sendStatus(400);
    }
});

app.get('/api/contacts/:email', async (request, response) => {
    const {email} = request.params;

    const user = await User.findOne({email: email});

    const contacts = await Contact.find({creatorID: user._id.toString()});
    response.status(201).send(contacts);
});

app.delete('/api/contacts/:email', async (request, response) => {
    const {email} = request.params;

    await Contact.deleteOne({email: email});
    response.sendStatus(201);
});

app.get('/*', (request, response) => {

    const indexPath = path.join(clientAppDirectory, 'index.html');

    return response.sendFile(indexPath);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server is up'));