(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={itemContact:"ContactList_itemContact__2fZ9P",itemContactBtn:"ContactList_itemContactBtn__1o9gS"}},12:function(t,e,n){t.exports={inputFilter:"Filter_inputFilter__2HVL4"}},18:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),i=n.n(r),o=(n(18),n(8)),s=n(13),u=n(3),l=n(4),h=n(6),b=n(5),m=n(24),d=n(2),j=n(9),p=n.n(j),f=n(0),O=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handlerChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;t.props.checkState(n)?(t.props.updateState(t.state),t.reset()):alert("'".concat(n," isalready in contacts'"))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{children:["Name",Object(f.jsx)("input",{className:p.a.inputStyle,type:"text",name:"name",placeholder:"Enter name",value:this.state.name,onChange:this.handlerChange})]}),Object(f.jsxs)("label",{children:["Number",Object(f.jsx)("input",{className:p.a.inputStyle,type:"tel",name:"number",placeholder:"Enter phone namber",value:this.state.number,onChange:this.handlerChange})]}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=n(10),x=n.n(C),v=function(t){var e=t.contacts,n=t.deleteContact;return Object(f.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(f.jsxs)("li",{className:x.a.itemContact,children:[e,": ",a,Object(f.jsx)("button",{className:x.a.itemContactBtn,type:"button",onClick:function(){return n(c)},children:"Delete"})]},c)}))})},S=n(12),g=n.n(S),y=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{children:["Find contacts by name",Object(f.jsx)("input",{className:g.a.inputFilter,type:"text",value:e,onChange:n})]})},k=(n(20),function(t){var e=t.children;return Object(f.jsx)("section",{children:e})}),_=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formUpdateState=function(e){t.setState((function(t){return{contacts:[Object(o.a)(Object(o.a)({},e),{},{id:Object(m.a)()})].concat(Object(s.a)(t.contacts))}}))},t.checkState=function(e){var n=!t.state.contacts.find((function(t){return t.name===e}));return console.log(n),n},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.state.filter.toLowerCase(),n=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(k,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(O,{updateState:this.formUpdateState,checkState:this.checkState}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(y,{value:t,onChange:this.changeFilter}),Object(f.jsx)(v,{contacts:n,deleteContact:this.deleteContact})]})})}}]),n}(a.Component);n(21);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={inputStyle:"ContactForm_inputStyle__3zEtp"}}},[[22,1,2]]]);
//# sourceMappingURL=main.0228bc70.chunk.js.map