(this["webpackJsonpadvice-app"]=this["webpackJsonpadvice-app"]||[]).push([[0],{11:function(e,a,t){e.exports=t(23)},17:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(8),r=t.n(l),i=t(5),s=t.n(i),o=t(9),m=t(10),u=(t(17),t(2)),d=t(3),h=function(){return c.a.createElement("div",{className:"social-container"},c.a.createElement("h3",{className:"heading"},"Created by Nelson Cadenas"),c.a.createElement("a",{href:"https://github.com/nca1478",className:"github social",target:"blank"},c.a.createElement(u.a,{icon:d.a,size:"2x"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/cadenasnelson/",className:"linkedin social",target:"blank"},c.a.createElement(u.a,{icon:d.b,size:"2x"})),c.a.createElement("a",{href:"https://twitter.com/nca1478",className:"twitter social",target:"blank"},c.a.createElement(u.a,{icon:d.d,size:"2x"})),c.a.createElement("a",{href:"https://medium.com/@nca1478",className:"medium social",target:"blank"},c.a.createElement(u.a,{icon:d.c,size:"2x"})))},p=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1],r=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.adviceslip.com/advice").then((function(e){return e.json()})).then((function(e){return l(e.slip.advice)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"app"},c.a.createElement("h1",null,"WELCOME TO YOUR PERSONAL ADVISOR"),c.a.createElement("h3",null,"To keep you motivated and calm amidst chaos"),c.a.createElement("div",{className:"card"},c.a.createElement("h2",null,t),c.a.createElement("button",{className:"buton",onClick:r},c.a.createElement("span",null,c.a.createElement("h4",null,"Show today's advice"))))),c.a.createElement("footer",null,c.a.createElement(h,null)))};r.a.render(c.a.createElement(p,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.5e34c3e0.chunk.js.map