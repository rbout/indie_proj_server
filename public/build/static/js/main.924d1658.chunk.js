(this.webpackJsonpindie_proj=this.webpackJsonpindie_proj||[]).push([[0],{114:function(e,t,a){e.exports=a(160)},160:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=a(44),i=a(29),s=a(83),m=a(84),u=a(97),d=a(93),p=a(38),g=a(96),f=a(214),b=a(200),h=a(98),y=a(46),E=a(221),v=a(7),O=a(21),w=a(203),j=a(208),x=a(204),k=a(209),N=a(205),C=a(88),P=a.n(C),S=a(3),D=a(206),L=a(207),A=Object(b.a)((function(e){return{card:{width:"20em",marginBottom:"5em",display:"inline-block"},header:{fontSize:14},expand:{transform:"rotate(0deg)",marginLeft:"41%",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})),B=function(e){var t=A(),a=e.title,n=e.content,o=e.primary,c=e.loginClick,l=e.type,i=r.a.useState(!1),s=Object(O.a)(i,2),m=s[0],u=s[1],d=r.a.createElement("div",null);return"login"===l&&(d=r.a.createElement("i",{className:"fas fa-sign-in-alt fa-4x"})),r.a.createElement(w.a,{className:t.card},r.a.createElement(x.a,{title:a,style:{textAlign:"center"}}),d,r.a.createElement(N.a,{disableSpacing:!0},r.a.createElement(D.a,{className:Object(S.a)(t.expand,Object(v.a)({},t.expandOpen,m)),onClick:function(){u(!m)},"aria-expanded":m,"aria-label":"show more"},r.a.createElement(P.a,null))),r.a.createElement(L.a,{in:m,timeout:"auto",unmountOnExit:!0},r.a.createElement(j.a,null,r.a.createElement(y.a,null,n)),r.a.createElement(N.a,{disableSpacing:!0},r.a.createElement(k.a,{variant:"contained",style:{background:o},onClick:c},"Go"))))},I=Object(b.a)((function(e){return{paper:{margin:"auto",marginTop:"1em",width:"42.5vw",height:"43em"},root:{textAlign:"center",width:"100vw"},img:{float:"right",width:"50%",height:"100%",borderRadius:"0px 3px 3px 0px"},fab:{bottom:0,marginBottom:"1em",position:"absolute",left:"50%"},footer:{display:"block",textAlign:"center",color:"#9e9e9e",margin:"2em",bottom:0,width:"100%",marginLeft:"0em"},icon:{margin:"0.5em",display:"inline-block"}}})),T=function(e){var t=I(),a=e.primary,n=e.history;return r.a.createElement("div",null,r.a.createElement(E.a,{className:t.root},r.a.createElement(h.a,{className:t.paper},r.a.createElement("div",{style:{padding:"2em",maxHeight:"500px",textAlign:"left"}},r.a.createElement(y.a,{component:"h1"},r.a.createElement("h1",null,"Tools I am using to build this website: ",r.a.createElement("br",null))),r.a.createElement(y.a,{component:"p"},r.a.createElement("div",{className:t.icon},r.a.createElement("i",{className:"fab fa-react fa-7x"}),r.a.createElement("h2",{style:{display:"inline",margin:"1em"}},"React")),r.a.createElement("br",null),r.a.createElement("div",{className:t.icon},r.a.createElement("i",{className:"fab fa-js fa-7x"}),r.a.createElement("h2",{style:{display:"inline",margin:"1em"}},"Javascript")),r.a.createElement("br",null),r.a.createElement("div",{className:t.icon},r.a.createElement("i",{className:"fab fa-node-js fa-7x"}),r.a.createElement("h2",{style:{display:"inline",margin:"1em"}},"Node.js")),r.a.createElement("br",null),r.a.createElement("div",{className:t.icon},r.a.createElement("i",{className:"fas fa-database fa-7x"}),r.a.createElement("h2",{style:{display:"inline",margin:"1em"}},"MongoDB")))))),r.a.createElement("div",{style:{textAlign:"center",marginTop:"3em"}},r.a.createElement(B,{title:"Login/Register Demo",content:"A simple login and register demo that uses a Node.JS server and a MongoDB database to store the info.",primary:a,loginClick:function(){n.push("/logindemo")},type:"login"})),r.a.createElement("footer",{className:t.footer},r.a.createElement("hr",{style:{borderColor:"#9e9e9e"}}),r.a.createElement(y.a,{component:"p"},"Made with ",r.a.createElement("i",{className:"fas fa-heart"})," by Robert Boutillier")))},R=a(16),Y=a.n(R),J=a(32),z=a(220),F=a(26),H=a.n(F);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V=function(e){var t=e.classes,a=e.primary,o=e.history,c=e.handleLogin,l=Object(n.useState)({email:"",password:"",confirmPassword:""}),i=Object(O.a)(l,2),s=i[0],m=i[1];return r.a.createElement(h.a,{className:t.paper},r.a.createElement(z.a,{variant:"outlined",onChange:function(e){m(G({},s,{email:e.target.value}))},value:s.email,type:"email",label:"Email",className:t.textfield,color:a,style:{marginTop:"33%"}}),r.a.createElement(z.a,{variant:"outlined",label:"Password",value:s.password,onChange:function(e){m(G({},s,{password:e.target.value}))},type:"password",className:t.textfield,color:a}),r.a.createElement(k.a,{variant:"contained",style:{background:a},className:t.button,onClick:Object(J.a)(Y.a.mark((function e(){var t,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={email:s.email,password:s.password},e.next=3,H.a.post("/api/isValid",t);case 3:if(200!==e.sent.status){e.next=11;break}return m(G({},s,{password:"",email:""})),e.next=8,H.a.get("/api/contacts/"+t.email);case 8:a=e.sent,o.push("/contacts"),c(t,a.data);case 11:case"end":return e.stop()}}),e)})))},"Login"))},_=a(224),q=a(212),W=a(89),K=a.n(W);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var X=function(e){var t=e.classes,a=e.primary,o=Object(n.useState)({email:"",password:"",confirmPassword:""}),c=Object(O.a)(o,2),l=c[0],i=c[1],s=r.a.useState(!1),m=Object(O.a)(s,2),u=m[0],d=m[1],p=function(e,t){"clickaway"!==t&&d(!1)};return r.a.createElement(h.a,{className:t.paper},r.a.createElement(z.a,{variant:"outlined",type:"email",value:l.email,label:"Email",className:t.textfield,color:a,onChange:function(e){i(U({},l,{email:e.target.value}))}}),r.a.createElement(z.a,{variant:"outlined",type:"password",value:l.password,label:"Password",className:t.textfield,color:a,onChange:function(e){i(U({},l,{password:e.target.value}))}}),r.a.createElement(z.a,{variant:"outlined",type:"password",value:l.confirmPassword,label:"Confirm Password",className:t.textfield,color:a,onChange:function(e){i(U({},l,{confirmPassword:e.target.value}))}}),r.a.createElement(k.a,{variant:"contained",style:{background:a},className:t.button,onClick:Object(J.a)(Y.a.mark((function e(){var t,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={email:l.email,password:l.password},l.password!==l.confirmPassword){e.next=8;break}return e.next=4,H.a.post("/api/users",t);case 4:a=e.sent,i(U({},l,{confirmPassword:"",password:"",email:""})),console.log(a.status),d(!0);case 8:case"end":return e.stop()}}),e)})))},"Register"),r.a.createElement(_.a,{className:t.success,style:{borderRadius:"1px"},anchorOrigin:{vertical:"bottom",horizontal:"left"},open:u,autoHideDuration:6e3,onClose:p},r.a.createElement(q.a,{className:t.success,style:{borderRadius:"1px"},"aria-describedby":"client-snackbar",message:"You created a user",action:[r.a.createElement(D.a,{key:"close","aria-label":"close",color:"inherit",onClick:p},r.a.createElement(K.a,{className:t.icon}))]})))},Z=a(213),$=Object(b.a)((function(e){return{paper:{width:"15em",height:"100%",margin:"1em",display:"inline-block",verticalAlign:"top",textAlign:"left"},textfield:{margin:"0.5em",width:"93%"},button:{margin:"0.5em",bottom:0},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:Z.a[600]}}})),ee=function(e){var t=$(),a=e.primary,n=e.history,o=e.handleLogin,c=e.getSession;return r.a.createElement("div",{style:{height:"17em",marginTop:"10%",textAlign:"center"}},r.a.createElement(h.a,{className:t.paper},r.a.createElement(y.a,{component:"p",style:{padding:"0.5em",textAlign:"left"}},"You'll need to register before you are able to login unless you have already created an account. You can use a fake email, I'm not sending an email to verify it."),r.a.createElement(k.a,{variant:"contained",style:{background:a,marginTop:"26%"},className:t.button,onClick:function(){n.push("/")}},"Home")),r.a.createElement(X,{classes:t,primary:a}),r.a.createElement(V,{classes:t,primary:a,history:n,handleLogin:o,getSession:c}))},te=a(215),ae=a(216),ne=a(91),re=a.n(ne),oe=a(90),ce=a.n(oe),le=function(e){var t=e.contacts,a=e.handleDeleteContact,n=e.primary,o=ce()((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},fab:{margin:e.spacing(1),display:"inline-block"}}}));return r.a.createElement(te.a,{container:!0,spacing:0},t.slice(0).reverse().map((function(e){return r.a.createElement(te.a,{item:!0,xs:12,key:e.email,style:{marginBottom:"1rem"}},r.a.createElement(h.a,{className:o.paper,style:{padding:"1rem",width:"58vw",top:0,bottom:0,left:0,right:0,margin:"auto"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"1rem"}},r.a.createElement("div",{style:{width:"15rem"}},r.a.createElement(y.a,{component:"h4"},r.a.createElement("h4",null,e.name)),r.a.createElement(y.a,{component:"p"},r.a.createElement("p",null,e.email))),r.a.createElement("div",{style:{width:"100%",textAlign:"right"}},r.a.createElement(ae.a,{"aria-label":"delete",className:o.fab,style:{background:n},onClick:Object(J.a)(Y.a.mark((function t(){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(e.email),t.next=3,H.a.delete("/api/contacts/"+e.email);case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))},r.a.createElement(re.a,null))))))})))},ie=a(92),se=a.n(ie),me=a(218),ue=a(219),de=a(223),pe=a(217);function ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ge(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ge(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var be=Object(b.a)((function(e){return{paper:{margin:"auto",width:"60vw",height:"25vh",marginBottom:"1em",marginTop:"1em",top:0,right:0,bottom:0,left:0},fab:{position:"absolute",bottom:e.spacing(4),right:e.spacing(4)},cancelButton:{left:e.spacing(1),position:"absolute"},nameDiv:{float:"right",margin:15},button:{margin:"1em"}}}));var he=function(e){var t,a=e.history,o=e.isLoggedIn,c=e.email,l=e.primary,i=e.contacts,s=e.handleAddContact,m=e.handleDeleteContact,u=e.handleLogout,d=r.a.useState(!1),p=Object(O.a)(d,2),g=p[0],f=p[1],b=function(){f(!1)},E=Object(n.useState)({email:"",firstName:"",lastName:""}),v=Object(O.a)(E,2),w=v[0],j=v[1],x=be();return t=o?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(h.a,{className:x.paper},r.a.createElement("div",{style:{padding:"2em"}},r.a.createElement(y.a,{component:"p"},"You are logged in and if you click this delete button you can delete this account. If you use the add button in the bottom right you can create a contact and add it to a list. This list is a separate database and is only unique to your account. Since this is a demo you can create fake contacts. These contacts can be deleted."),r.a.createElement(k.a,{variant:"contained",style:{background:l},className:x.button,onClick:Object(J.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.delete("/api/users/"+c);case 2:a.push("/logindemo");case 3:case"end":return e.stop()}}),e)})))},"Delete"),r.a.createElement(k.a,{variant:"contained",style:{background:l},className:x.button,onClick:function(){u(),a.push("/logindemo")}},"Logout"))),r.a.createElement(le,{contacts:i,handleDeleteContact:m,primary:l})),r.a.createElement(ae.a,{className:x.fab,style:{background:l},onClick:function(){f(!0)}},r.a.createElement(se.a,null)),r.a.createElement(de.a,{open:g,onClose:b},r.a.createElement(pe.a,null,r.a.createElement(k.a,{onClick:b,className:x.cancelButton},"Cancel"),r.a.createElement(k.a,{onClick:Object(J.a)(Y.a.mark((function e(){var t,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!1),t={creatorEmail:c,email:w.email,name:w.firstName+" "+w.lastName},e.next=4,H.a.post("/api/contacts",t);case 4:return e.next=6,H.a.get("/api/contacts/"+c);case 6:a=e.sent,s(a.data);case 8:case"end":return e.stop()}}),e)})))},"Save")),r.a.createElement(me.a,null,r.a.createElement(ue.a,null,"Add new contact"),r.a.createElement("div",{className:x.nameDiv},r.a.createElement(z.a,{margin:"dense",id:"first-name",label:"First Name",color:"secondary",onChange:function(e){j(fe({},w,{firstName:e.target.value}))}}),r.a.createElement("br",null),r.a.createElement(z.a,{margin:"dense",id:"last-name",label:"Last Name",color:"secondary",onChange:function(e){j(fe({},w,{lastName:e.target.value}))}})),r.a.createElement("br",null),r.a.createElement(z.a,{margin:"normal",id:"email",label:"Email Address",type:"email",color:"secondary",onChange:function(e){j(fe({},w,{email:e.target.value}))},fullWidth:!0})))):r.a.createElement(h.a,{className:x.paper},r.a.createElement("div",{style:{padding:"2em"}},r.a.createElement(y.a,{component:"p"},"You are not logged in"))),r.a.createElement("div",null,t)},ye="linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",Ee=Object(g.a)({palette:{type:"dark"}}),ve=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleLogin=function(e,t){a.setState({isLoggedIn:!0}),a.setState({email:e.email}),a.setState({contacts:t})},a.handleAddContact=function(e){a.setState({contacts:e})},a.handleDeleteContact=function(e){var t,n=a.state.contacts;for(t=0;t<n.length;t++)n[t].email===e&&n.splice(t,1);a.setState({contacts:n})},a.handleLogout=function(){a.setState({isLoggedIn:!1}),a.setState({email:""}),a.setState({contacts:[]})},a.state={isLoggedIn:!1,email:"",contacts:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{theme:Ee},r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(e){var t=e.history;return r.a.createElement(T,{primary:ye,history:t})}}),r.a.createElement(p.a,{exact:!0,path:"/logindemo",render:function(t){var a=t.history;return r.a.createElement(ee,{primary:ye,history:a,handleLogin:e.handleLogin})}}),r.a.createElement(p.a,{exact:!0,path:"/contacts",render:function(t){var a=t.history;return r.a.createElement(he,{history:a,isLoggedIn:e.state.isLoggedIn,email:e.state.email,primary:ye,contacts:e.state.contacts,handleAddContact:e.handleAddContact,handleDeleteContact:e.handleDeleteContact,handleLogout:e.handleLogout})}})))}}]),t}(r.a.Component);c.a.render(r.a.createElement(ve,null),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.924d1658.chunk.js.map