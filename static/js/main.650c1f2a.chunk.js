(this["webpackJsonpx-climb"]=this["webpackJsonpx-climb"]||[]).push([[0],{107:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(77),c=t.n(l),m=(t(89),t(90),t(35)),s=t.n(m),o=t(66),i=t(83),u=t(36),d=t(73),p=t(67),f=p.a().shape({firstName:p.b().required("First Name is required."),lastName:p.b().required("Last Name is required.")}),E=function(e){var a=e.formValues,t=e.submitForm,n=e.deleteCar;return r.a.createElement(d.b,{initialValues:a,enableReinitialize:!0,validationSchema:f,onSubmit:function(e){return function(e){t(e)}(e)},render:function(e){var t=e.values,l=e.handleSubmit,c=e.handleChange,m=e.errors,s=e.touched,o=(e.isSubmitting,e.resetForm);e.setSubmitting;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"container"},a&&a.id&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col row"},r.a.createElement("div",{className:"col"},r.a.createElement("label",null,"ID:")),r.a.createElement("div",{className:"col"},r.a.createElement("p",null,a.id))),r.a.createElement("div",{className:"col row"},r.a.createElement("div",{className:"col"},r.a.createElement("label",null,"Entry #:")),r.a.createElement("div",{className:"col"},r.a.createElement("p",null,a.bibNumber)))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"firstName"},"First name:"),r.a.createElement("input",{id:"firstName",name:"firstName",className:"form-control",type:"text",placeholder:"Enter first Name",onChange:c,value:t.firstName}),s.firstName&&m.firstName?r.a.createElement("span",{className:"text-danger"},"* ",m.firstName):null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"lastName"},"Last name:"),r.a.createElement("input",{id:"lastName",name:"lastName",className:"form-control",type:"text",placeholder:"Enter last Name",onChange:c,value:t.lastName}),s.lastName&&m.lastName?r.a.createElement("span",{className:"text-danger"},"* ",m.lastName):null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{className:"btn btn-secondary form-control",type:"reset",onClick:o},"Reset")),r.a.createElement("div",{className:"col"},r.a.createElement("button",{className:"btn btn-primary form-control",type:"submit",onClick:l},"Submit")),a&&a.id&&r.a.createElement("div",{className:"col"},r.a.createElement("button",{className:"btn btn-warning form-control",type:"button",onClick:function(){return n(a.docId)}},"Delete")))))}})},b=function(e){var a=e.toggleForm,t=e.raceCar,n=e.addCarToList,l=e.deleteCar;return r.a.createElement("div",{className:"container animated fadeIn"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"p-3 m-3 border"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1"},r.a.createElement("i",{className:"fas fa-arrow-left fa-2x",onClick:function(){return a(!1)}})),r.a.createElement("div",{className:"col-10"},r.a.createElement("h3",{className:"text-center"},"Race Car Details"))),r.a.createElement("br",null),r.a.createElement(E,{deleteCar:l,formValues:t,submitForm:function(e){n(e)}}))),r.a.createElement("div",{className:"col-4"})))},N=function(e){var a=e.toggleForm,t=e.getTableData,n=e.raceCars,l=e.isLoading;return r.a.createElement("div",{className:"container-fluid animated fadeIn"},r.a.createElement("div",{className:"row py-3"},r.a.createElement("div",{className:"col d-flex justify-content-start"},r.a.createElement("h4",null,"Car List")),r.a.createElement("div",{className:"col d-flex justify-content-end"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:a},r.a.createElement("i",{className:"fas fa-plus mr-2"}),"Register Car"))),r.a.createElement("table",{className:"table table-striped table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Bib Number"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,l?r.a.createElement("tr",{role:"row"},r.a.createElement("td",{className:"v-align-middle text-center",colSpan:"5"},r.a.createElement("div",{className:"spinner-border",role:"status"}),r.a.createElement("p",null,"Loading"))):n.length>0?n.map((function(e,a){return r.a.createElement("tr",{role:"row",key:a},r.a.createElement("th",{scope:"row"},r.a.createElement("p",null,e.id)),r.a.createElement("td",null,r.a.createElement("p",null,e.bibNumber)),r.a.createElement("td",null,r.a.createElement("p",null,e.firstName)),r.a.createElement("td",null,r.a.createElement("p",null,e.lastName)),r.a.createElement("td",{className:"row"},r.a.createElement("button",{type:"button",className:"btn btn-info btn-sm",onClick:function(){return t(e)}},"View info")))})):r.a.createElement("tr",{role:"row"},r.a.createElement("td",{className:"v-align-middle text-center",colSpan:"5"},"No record found")))))},v=t(70),h=t.n(v);h.a.initializeApp({apiKey:"AIzaSyAlvV9eS3KLWl6JOgV6yHopTIC9PRahnP8",authDomain:"webraceapp.firebaseapp.com",databaseURL:"https://webraceapp.firebaseio.com",projectId:"webraceapp",storageBucket:"webraceapp.appspot.com",messagingSenderId:"1054099649668",appId:"1:1054099649668:web:ad70585e156694a5aefed1",measurementId:"G-BJ3BKN4VSQ"});var g=h.a,w=function(e){var a={firstName:"",lastName:""},t=Object(n.useState)([]),l=Object(u.a)(t,2),c=l[0],m=l[1],d=Object(n.useState)(0),p=Object(u.a)(d,2),f=p[0],E=p[1],v=Object(n.useState)(a),h=Object(u.a)(v,2),w=h[0],C=h[1],y=Object(n.useState)(!1),x=Object(u.a)(y,2),j=x[0],k=x[1],S=Object(n.useState)(g.firestore()),O=Object(u.a)(S,2),I=O[0],F=(O[1],Object(n.useState)(!1)),L=Object(u.a)(F,2),R=L[0],D=L[1];Object(n.useEffect)((function(){V()}),[]);var V=function(){m([]),D(!0),I.collection("raceCars").get().then((function(e){e.forEach((function(e){var a=e.data();a.docId=e.id,m((function(e){return[].concat(Object(i.a)(e),[a])}))})),D(!1)}))};console.log(c);var A=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.collection("counter").doc("AznLkk4ak9pF0wtKJRk4").get().then((function(e){E(e.data())}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:I.settings({timestampsInSnapshots:!0}),t&&!t.id?I.collection("raceCars").add({id:(t.firstName+t.lastName+f).replace(/\s/g,""),bibNumber:t.bibNumber=T(),firstName:t.firstName,lastName:t.lastName}):I.collection("raceCars").doc(t.docId).set(t),k(!1),V(),C(a);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),J=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.collection("raceCars").doc(t).delete();case 2:return e.next=4,V();case 4:k(!1),C(a);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),T=function(){return E((function(e){return e+1})),f};return r.a.createElement(r.a.Fragment,null,j?r.a.createElement(b,{addCarToList:B,deleteCar:J,raceCar:w,toggleForm:k}):r.a.createElement(N,{isLoading:R,toggleForm:function(){k(!0),C(a)},getTableData:function(e){C(e),k(!0)},raceCars:c}))},C=t(31),y=t(82),x=function(e){return r.a.createElement("div",{className:"bg-9127f5 py-2 fixed-header"},r.a.createElement("h3",{className:"text-white ml-3"},r.a.createElement("i",{className:"fas fa-car"}),"  Race Car Wep Application"))},j=function(e){return r.a.createElement("div",{className:"list-group"},r.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action active animated fadeInUp"},r.a.createElement("i",{className:"fas fa-list mr-2"}),"Cars"))};var k=function(){var e=[{path:"/",component:w},{path:"/raceCars",component:w},{path:"/WebRaceCar/",component:w}].map((function(e,a){return r.a.createElement(C.a,{exact:!0,path:e.path,component:e.component,key:a})}));return r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement(x,null),r.a.createElement("div",{className:"row p-0 m-0"},r.a.createElement("div",{className:"col-2 p-0 m-0"},r.a.createElement(j,null)),r.a.createElement("div",{className:"col-9"},r.a.createElement(C.c,null,e)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,a,t){e.exports=t(107)},89:function(e,a,t){},90:function(e,a,t){}},[[84,1,2]]]);
//# sourceMappingURL=main.650c1f2a.chunk.js.map