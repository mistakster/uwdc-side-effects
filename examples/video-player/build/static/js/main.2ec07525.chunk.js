(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},44:function(e,t,n){e.exports=n(88)},49:function(e,t,n){},50:function(e,t,n){},52:function(e,t){},88:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(35),i=n.n(r),o=(n(49),n(12)),s=function(e){var t=e.titles,n=e.children,r=Object(a.useState)(0),i=Object(o.a)(r,2),s=i[0],l=i[1],u=a.Children.toArray(n);return c.a.createElement("div",{className:"d-flex flex-column h-100"},c.a.createElement("div",{className:"nav nav-pills nav-fill my-2"},u.map(function(e,n){return c.a.createElement("div",{key:n,className:"nav-item"},c.a.createElement("span",{onClick:function(){return l(n)},className:"nav-link ".concat(s===n?"active":"text-primary")},t[n]))})),u[s])},l=(n(50),n(36)),u=n.n(l),m=function(){return c.a.createElement("img",{src:u.a,className:"Logo",alt:"React logo"})},d=n(10),p=n(43),v=(n(51),n(42)),f=n(41);var y=function(e,t){Object(a.useEffect)(e,function(e){var t=Object(a.useRef)(null);return Object(f.a)(e,t.current)||(t.current=e),t.current}(t))},E=function(e){var t=e.dispatch,n=e.src,r=Object(p.a)(e,["dispatch","src"]),i=Object(a.useRef)(null);return y(function(){var e=document.createElement("video");e.classList.add("video-js"),i.current.appendChild(e);var a=Object(v.a)(e,r,function(){t({type:"ready"})});return a.on("play",function(){t({type:"play"})}),a.on("pause",function(){t({type:"pause"})}),a.on("timeupdate",function(){t({type:"timeupdate",time:a.currentTime()})}),a.src(n),function(){a.dispose()}},[t,n,r]),c.a.createElement("div",{ref:i})},h=function(e){var t=e.ready,n=e.isPlaying,a=e.time;return c.a.createElement("div",{className:"text-light"},c.a.createElement("p",null,"Ready: ",t?"Yes":"No"),c.a.createElement("p",null,"Is playing: ",n?"Yes":"No"),c.a.createElement("p",null,"Time: ",Number(a).toFixed(4)))},g={ready:!1,isPlaying:!1,time:0};function b(e,t){switch(t.type){case"ready":return Object(d.a)({},e,{ready:!0});case"play":return Object(d.a)({},e,{isPlaying:!0});case"pause":return Object(d.a)({},e,{isPlaying:!1});case"timeupdate":return Object(d.a)({},e,{time:t.time});default:throw new Error("Unknown action")}}var j=function(e){var t=e.src,n=Object(a.useReducer)(b,g),r=Object(o.a)(n,2),i=r[0],s=r[1];return c.a.createElement("div",{className:"h-100 row"},c.a.createElement("div",{className:"col-8"},c.a.createElement(E,{dispatch:s,fluid:!0,aspectRatio:"640:264",controls:!0,preload:"auto",poster:"https://vjs.zencdn.net/v/oceans.png",src:t})),c.a.createElement("div",{className:"col-4"},c.a.createElement(h,i)))};var w=function(){return c.a.createElement(s,{titles:["Player","Logo"]},c.a.createElement(j,{src:[{type:"video/mp4",src:"https://vjs.zencdn.net/v/oceans.mp4"},{type:"video/webm",src:"https://vjs.zencdn.net/v/oceans.webm"},{type:"video/ogg",src:"https://vjs.zencdn.net/v/oceans.ogv"}]}),c.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.2ec07525.chunk.js.map