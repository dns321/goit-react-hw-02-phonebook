(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=(n(15),n(8)),s=n(10),u=n(3),l=n(4),h=n(6),b=n(5),d=n(20),j=n(2),m=n(0),f=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handlerChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;t.props.checkState(n)?(t.props.updateState(t.state),t.reset()):alert("'".concat(n," isalready in contacts'"))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:this.state.name,onChange:this.handlerChange})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone namber",value:this.state.number,onChange:this.handlerChange})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),p=function(t){var e=t.contacts,n=t.deleteContact;return Object(m.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(m.jsxs)("li",{children:[e,": ",a,Object(m.jsx)("button",{type:"button",onClick:function(){return n(c)},children:"Delete"})]},c)}))})},O=function(t){var e=t.value,n=t.onChange;return Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{type:"text",value:e,onChange:n})]})},v=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formUpdateState=function(e){t.setState((function(t){return{contacts:[Object(i.a)(Object(i.a)({},e),{},{id:Object(d.a)()})].concat(Object(s.a)(t.contacts))}}))},t.checkState=function(e){var n=!t.state.contacts.find((function(t){return t.name===e}));return console.log(n),n},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.state.filter.toLowerCase(),n=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(f,{updateState:this.formUpdateState,checkState:this.checkState}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(O,{value:t,onChange:this.changeFilter}),Object(m.jsx)(p,{contacts:n,deleteContact:this.deleteContact})]})}}]),n}(a.Component);n(17);o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5f8d4262.chunk.js.map