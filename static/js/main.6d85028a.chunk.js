(this.webpackJsonplivescore=this.webpackJsonplivescore||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(11),n=c.n(s),r=c(13),i=c.n(r),j=c(14),l=c(16),o=c(50),h=c(21),d=(c(28),c(2)),m=function(e){var t=Object(a.useState)({}),c=Object(l.a)(t,2),s=c[0],n=c[1];return function(){var t=Object(j.a)(i.a.mark((function t(){var c,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://cricapi.com/api/cricketScore?apikey=60VQyaOODae7huhwBR5Jm3OD9533&unique_id=".concat(e.id));case 2:return c=t.sent,t.next=5,c.json();case 5:a=t.sent,n(a),console.log(a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),Object(d.jsx)(d.Fragment,{children:!0===s.matchStarted?Object(d.jsx)("h4",{style:{color:"green"},children:s.score}):Object(d.jsx)("h4",{style:{color:"red"},children:"Match Not yet Started"})})},u=function(e){var t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cricapi.com/api/matches?apikey=60VQyaOODae7huhwBR5Jm3OD9533");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c.matches),console.log(c.matches);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsx)("div",{className:"cards",children:s.map((function(t){return t.type===e.name?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("h2",{className:"head",children:[t["team-1"]," vs ",t["team-2"]]}),Object(d.jsxs)("div",{className:"smd",children:[Object(d.jsxs)("h4",{className:"time",children:[new Date(t.dateTimeGMT).toLocaleDateString()," ",new Date(t.dateTimeGMT).toLocaleTimeString()]}),!0===t.matchStarted?Object(d.jsx)("h4",{className:"smh",style:{color:"green"},children:"Match Started"}):Object(d.jsx)("h4",{style:{color:"red"},className:"smh",children:"Match Not yet Started"})]}),Object(d.jsx)("div",{className:"team",children:t["team-1"]}),Object(d.jsx)("div",{className:"team",children:Object(d.jsx)("img",{src:"http://www.pngmart.com/files/11/Versus-Battle-Transparent-PNG.png",alt:"vs",className:"image"})}),Object(d.jsx)("div",{className:"team",children:t["team-2"]}),Object(d.jsx)("div",{}),Object(d.jsx)(h.a,{trigger:Object(d.jsx)(o.a,{size:"small",variant:"contained",color:"primary",className:"but",children:"Get Score"}),position:"center top",children:Object(d.jsx)(m,{id:t.unique_id})}),Object(d.jsx)("div",{})]})}):null}))})},b=c(3),O=c(12),x=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"nav",children:[Object(d.jsx)("h1",{className:"head p",children:"Live Cricket Score"}),Object(d.jsx)(O.b,{exact:!0,className:"menu",activeClassName:"active_class",to:"/",children:"others"}),Object(d.jsx)(O.b,{exact:!0,className:"menu",activeClassName:"active_class",to:"/oneday",children:"One Day"}),Object(d.jsx)(O.b,{exact:!0,className:"menu",activeClassName:"active_class",to:"/twenty20",children:"T-20"})]})})},p=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{}),Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(d.jsx)(u,{name:""})}}),Object(d.jsx)(b.b,{exact:!0,path:"/oneday",render:function(){return Object(d.jsx)(u,{name:"ODI"})}}),Object(d.jsx)(b.b,{exact:!0,path:"/twenty20",render:function(){return Object(d.jsx)(u,{name:"Twenty20"})}}),Object(d.jsx)(b.a,{to:"/"})]}),Object(d.jsx)("footer",{className:"foot",children:Object(d.jsxs)("div",{children:["Copyright \xa9 ",(new Date).getFullYear()," Saurabh Sawale"]})})]})};c(35);n.a.render(Object(d.jsx)(O.a,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.6d85028a.chunk.js.map