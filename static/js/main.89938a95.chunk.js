(this.webpackJsonpspltr=this.webpackJsonpspltr||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),i=a.n(r),o=(a(19),a(2)),c=a(3),s=a(5),m=a(4),u=a(7),p=a.n(u);a(21);p.a.initializeApp({apiKey:"AIzaSyDsaJneEsu2c-805ApRtKW68PgiaBr9YQE",authDomain:"spltrproject.firebaseapp.com",databaseURL:"https://spltrproject.firebaseio.com",projectId:"spltrproject",storageBucket:"spltrproject.appspot.com",messagingSenderId:"427025200282",appId:"1:427025200282:web:ecec4d99169110f50d1b23",measurementId:"G-B104P7SX9W"});var h=p.a,d=a(13),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.clearForm=function(t){t.preventDefault(),e.setState({name:"",group:"",amount:"",tip:""})},e.state={name:"",group:"",amount:"",tip:""},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("form",null,l.a.createElement("div",{className:"tipApp"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"groupName"},l.a.createElement("i",{className:"icon fas fa-id-card"}),"Group Name?"),l.a.createElement("input",{onChange:this.handleChange,type:"text",id:"groupName",value:this.state.name,maxLength:"14",placeholder:"Name your group",name:"name"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"groupSize"},l.a.createElement("i",{className:"icon fas fa-users"}),"How many?"),l.a.createElement("input",{onChange:this.handleChange,type:"number",id:"groupSize",value:this.state.group,min:"1",step:"1",placeholder:"Add the group size",name:"group",required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"billAmount"},l.a.createElement("i",{className:"icon fas fa-receipt"}),"How much?"),l.a.createElement("input",{onChange:this.handleChange,type:"number",id:"billAmount",value:this.state.amount,min:"0",step:".01",placeholder:"Add the bill total",name:"amount",required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"tipAmount"},l.a.createElement("i",{className:"heart fas fa-heart"}),"Tip?"),l.a.createElement("input",{onChange:this.handleChange,type:"number",id:"tipAmount",value:this.state.tip,min:"10",step:"5",placeholder:"Add the tip %",name:"tip"}))),l.a.createElement("button",{className:"formButton clear",onClick:this.clearForm},"Reset"),l.a.createElement("button",{className:"formButton submit",onClick:function(t){return e.props.getTotal(t,e.state)}},"Split it!"))}}]),a}(n.Component),E=function(e){return l.a.createElement("ul",null,e.receipts.map((function(t){return l.a.createElement("li",{key:t.id},l.a.createElement("p",null,t.name),l.a.createElement("p",null,"$",t.value),l.a.createElement("button",{className:"remove",onClick:function(){return e.delete(t.id)}},l.a.createElement("i",{className:"fas fa-times-circle"})))})))},v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleClick=function(t,a){t.preventDefault();var n=h.database().ref(),l=a.amount/a.group*(a.tip/100+1);l?(n.push({result:l.toFixed(2),name:a.name}),e.setState({total:l.toFixed(2)})):alert("Please fill all forms!")},e.deleteBill=function(e){h.database().ref().child(e).remove()},e.state={bills:[],total:0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var l in a)n.push({id:l,name:a[l].name,value:a[l].result});e.setState({bills:n})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",{className:"logoName"},"Spl|tr"),l.a.createElement("h3",null,"Bill Splitting App"),l.a.createElement(f,{getTotal:this.handleClick}),l.a.createElement("h2",null,"$",this.state.total),l.a.createElement("h3",{className:"dataHeader"},l.a.createElement("span",null,"Previous Bills")),l.a.createElement(E,{receipts:this.state.bills,delete:this.deleteBill}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.89938a95.chunk.js.map