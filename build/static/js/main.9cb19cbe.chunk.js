(this["webpackJsonpcard-demo"]=this["webpackJsonpcard-demo"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a,c,r,i=n(0),o=n.n(i),s=n(11),d=n.n(s),u=(n(20),n(2)),b=n(15),l=n(5),p=(n(21),n(3)),f=n(1);var j,m=p.a.div(a||(a=Object(u.a)(['\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 8px;\n  background-image: url("./bg.jpg");\n  background-size: cover;\n  background-repeat: no-repeat;\n']))),g=p.a.div(c||(c=Object(u.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 8px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: rotateY(180deg);\n"]))),v=p.a.div(r||(r=Object(u.a)(["\n  position: relative;\n  width: 50px;\n  height: 75px;\n  transition: transform 0.2s;\n  transform-style: preserve-3d;\n"]))),O=function(t){var e=t.index,n=void 0===e?"cat1-1":e,a=t.imgName,c=void 0===a?"cat1":a,r=t.onClick,o=t.miss,s=void 0!==o&&o,d=t.flipBack,u=void 0!==d&&d;return Object(i.useEffect)((function(){var t=document.getElementsByClassName(n)[0];u&&t.style.transform&&t.style.removeProperty("transform")}),[u]),Object(f.jsxs)(v,{className:n,onClickCapture:function(t){return function(t){var e=t.currentTarget.style.transform;e&&"rotateY(180deg)"===e||(t.currentTarget.style.setProperty("transform","rotateY(180deg)"),r())}(t)},style:s?{visibility:"hidden"}:{},children:[Object(f.jsx)(m,{}),Object(f.jsx)(g,{style:{backgroundImage:"url(./".concat(c,".jpg)")}})]})};var h=p.a.div(j||(j=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  width: 240px;\n  height: 400px;\n"]))),x=function(){var t=Object(i.useState)(["cat1","cat2","cat3","cat4","cat5","cat6","cat1","cat2","cat3","cat4","cat5","cat6"]),e=Object(l.a)(t,2),n=e[0],a=(e[1],Object(i.useState)("")),c=Object(l.a)(a,2),r=c[0],o=c[1],s=Object(i.useState)([]),d=Object(l.a)(s,2),u=d[0],p=d[1],j=Object(i.useState)([]),m=Object(l.a)(j,2),g=m[0],v=m[1];return Object(i.useEffect)((function(){}),[]),Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("header",{className:"App-header",children:Object(f.jsx)(h,{children:n.map((function(t,e){return Object(f.jsx)(O,{index:"".concat(t,"-").concat(e),imgName:t,flipBack:g.includes(t),miss:u.includes(t),onClick:function(){return e=t,void(r?r===e?setTimeout((function(){p([].concat(Object(b.a)(u),[e])),o("")}),250):setTimeout((function(){v([r,e]),o("")}),250):(o(e),v([])));var e}})}))})})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};d.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),k()}},[[25,1,2]]]);
//# sourceMappingURL=main.9cb19cbe.chunk.js.map