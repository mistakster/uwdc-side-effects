(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(25),n(3)),i=n(1),s=n(18),u=n(19),m=(n(30),n(4)),E=n.n(m),d=n(13),p=n.n(d),f=n(14),h=n.n(f),v=n(15),b=n.n(v),A=E.a.Icon.extend({options:{iconUrl:p.a,iconRetinaUrl:h.a,shadowUrl:b.a,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]}});E.a.Marker.prototype.options.icon=new A;var w=null;function y(e){if(!w)return null;E.a.marker(e).addTo(w)}var _=Object(i.c)({markers:function(e,t){return"undefined"===typeof e?{list:[]}:"ADD_MARKER"===t.type?Object(u.a)({},e,{list:[].concat(Object(s.a)(e.list),[t.point])}):e}}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,g=Object(i.e)(_,M(Object(i.a)(function(e){return function(t){return function(n){switch(n.type){case"LEAFLET_CREATE_MAP":var a=e.getState().markers;c=n.element,o=a.list,w=E.a.map(c,{center:[55.167184,61.3932883],zoom:15,layers:[E.a.tileLayer("https://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWlzdGFrc3RlciIsImEiOiJjanc5MzA5aDgwMzVsNDhwbXp1eWF6ZXh3In0.flXS8A_nJbv_Pb_xWIq0WA",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18})]}),o.forEach(y);break;case"LEAFLET_DESTROY_MAP":w&&(w.remove(),w=null);break;case"LEAFLET_CREATE_RANDOM_MARKER":var r=function(){if(!w)return null;var e=w.getBounds(),t=e.getWest(),n=e.getEast(),a=e.getNorth(),r=e.getSouth();return[Math.random()*(a-r)+r,Math.random()*(n-t)+t]}();r&&e.dispatch({type:"ADD_MARKER",point:r});break;case"ADD_MARKER":y(n.point)}var c,o;return t(n)}}}))),R=n(17),k=function(e){var t=e.titles,n=e.children,c=Object(a.useState)(0),o=Object(R.a)(c,2),l=o[0],i=o[1],s=a.Children.toArray(n);return r.a.createElement("div",{className:"d-flex flex-column h-100"},r.a.createElement("div",{className:"nav nav-pills nav-fill my-2"},s.map(function(e,n){return r.a.createElement("div",{key:n,className:"nav-item"},r.a.createElement("span",{onClick:function(){return i(n)},className:"nav-link ".concat(l===n?"active":"text-primary")},t[n]))})),s[l])};var O=Object(l.b)(null,function(e){return{createMap:function(t){e({type:"LEAFLET_CREATE_MAP",element:t})},destroyMap:function(){e({type:"LEAFLET_DESTROY_MAP"})}}})(function(e){var t=e.createMap,n=e.destroyMap,c=Object(a.useRef)(null);return Object(a.useEffect)(function(){return t(c.current),function(){n()}}),r.a.createElement("div",{className:"w-100 h-100",ref:c})}),L=function(e){var t=e.list;return t&&t.length?r.a.createElement("table",{className:"w-100"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",{style:{width:"40%"}},"Latitude"),r.a.createElement("th",{style:{width:"40%"}},"Longitude"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1,"."),r.a.createElement("td",null,e[0].toFixed(4)),r.a.createElement("td",null,e[1].toFixed(4)))}))):null};var N=Object(l.b)(function(e){return e.markers},function(e){return{addMarker:function(){e({type:"LEAFLET_CREATE_RANDOM_MARKER"})}}})(function(e){var t=e.addMarker,n=e.list;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{onClick:t,className:"btn btn-success",type:"button"},"Add marker")),r.a.createElement("div",{className:"mt-2"},r.a.createElement(L,{list:n})))}),x=function(){return r.a.createElement("div",{className:"h-100 row"},r.a.createElement("div",{className:"col-8"},r.a.createElement(O,null)),r.a.createElement("div",{className:"col-4"},r.a.createElement(N,null)))},T=(n(31),n(16)),D=n.n(T),j=function(){return r.a.createElement("img",{src:D.a,className:"Logo",alt:"React logo"})},S=function(){return r.a.createElement(l.a,{store:g},r.a.createElement(k,{titles:["Map","Logo"]},r.a.createElement(x,null),r.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.4db2730e.chunk.js.map