(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o);function c(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(17),u=n.n(l),d=n(19),p=n(22),f=n(23),m=n(25),h=n(24),g=n(26),b=n(4),v=n(40),E=n.n(v),k=(n(109),n(41)),w=n.n(k),y=n(42),O=n.n(y),j=function(e){return r.a.createElement(b.c,{className:"listorg",multiline:!0},r.a.createElement(b.e,{style:{background:"#eee",borderRadius:"7px",borderBottom:"1px solid #5181b8"}},r.a.createElement(b.e,{style:{display:"flex",justifyContent:"space-between",alignItems:"stretch",background:"#eee",padding:"0"}},r.a.createElement(b.e,{style:{background:"#eee",paddingLeft:"0",paddingRight:"0"}},r.a.createElement("b",null,e.info[0])),r.a.createElement(b.e,null,r.a.createElement("img",{style:{width:"90px"},src:e.info[2],alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}))),r.a.createElement(b.e,{style:{background:"#4bb34b26",borderRadius:"4px",border:"1px solid #4eb94e",position:"relative"}},r.a.createElement(b.e,{style:{position:"absolute",left:"-14px",top:"7px",padding:"0"}},r.a.createElement(O.a,{fill:"#5181b8"})),e.info[6]),r.a.createElement(b.e,{style:{paddingLeft:"0",paddingRight:"0"}},r.a.createElement(b.i,{href:"https://vk.com/im?media=&sel=-120490298",onClick:e.message,target:"_blank"},"\u041e\u0442\u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c\u0441\u044f"))))},x=n(43),R=n.n(x),C=function(e){return r.a.createElement(b.c,{before:r.a.createElement(R.a,{className:"rating"})},null===e.rating?r.a.createElement(b.p,{size:"small"}):r.a.createElement("span",{className:"rating"},e.rating))},U=n(21),W=(n(110),function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).readQRCode=function(){U.a.send("VKWebAppOpenQR",{})},n.checkUserLocation=Object(d.a)(u.a.mark(function e(){var t,n,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://kritbots.ru/?ul=123&lat=123",alert(t),e.next=4,fetch(t,{method:"get"});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,console.log(a);case 9:case"end":return e.stop()}},e)})),n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.fetchedUser,n=this.props.organizations,a=this.props.rating,o=this.props.go;return r.a.createElement(b.l,{id:this.props.id},r.a.createElement(b.m,null),t&&r.a.createElement(b.f,{title:""},r.a.createElement(b.k,{before:t.photo_200?r.a.createElement(b.a,{src:t.photo_200}):null,description:t.city&&t.city.title?"".concat(t.city.title):""},"".concat(t.first_name," ").concat(t.last_name))),t&&r.a.createElement(b.f,null,r.a.createElement(b.c,null,r.a.createElement(b.b,{before:r.a.createElement(w.a,null),size:"l",onClick:function(){return e.readQRCode()}},"\u0421\u0447\u0438\u0442\u0430\u0442\u044c QR-code")),r.a.createElement(b.o,null),r.a.createElement(C,{rating:a})),r.a.createElement(b.f,null,r.a.createElement(b.e,null,r.a.createElement(b.b,{size:"xl",level:"2",onClick:o,"data-to":"aboutPanel"},"\u0422\u0443\u0442\u043e\u0440\u0438\u0430\u043b"),r.a.createElement(b.b,{onClick:function(){return e.checkUserLocation()}},"test"))),r.a.createElement(b.f,{title:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"},r.a.createElement(b.j,null,n&&n.map(function(e,t){return r.a.createElement(j,{key:t,info:e})}))))}}]),t}(a.Component)),z=n(44),P=n.n(z),A=n(45),K=n.n(A),V=Object(b.r)(),_=function(e){return r.a.createElement(b.l,{id:e.id},r.a.createElement(b.m,{left:r.a.createElement(b.g,{onClick:e.go,"data-to":"mainPanel"},V===b.h?r.a.createElement(P.a,null):r.a.createElement(K.a,null))},"\u041e \u043d\u0430\u0441"),r.a.createElement(b.f,{title:"\u041d\u0430\u0448\u0438 \u0446\u0435\u043b\u0438"}),r.a.createElement(b.f,{title:"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0441\u044c\u044f"}),r.a.createElement(b.f,{title:"\u041f\u043e\u043b\u0443\u0447\u0430\u0439 \u0440\u0435\u0439\u0442\u0438\u043d\u0433"}))},B=E.a.isWebView(),I=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.getOrganizations=Object(d.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sheets.googleapis.com/v4/spreadsheets/1X848YaAiDmhD05BkYf-s7Up__I36zrdSBqRKxdBGrFI/values/A2:G",{headers:{"Content-Type":"application/json",Authorization:"Bearer ya29.GluCB_EwfUueFRaPMKUXKJc8dCyGn4SYyC1dCSOuOyvsMMiqfnecP-qLzuW5kOPab7-ynE98N-KEKRitd0yqMQRSpIXlfBWOn5UBrj4vG_0X8oaTyhy1G-n9MNi1"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return n.sheetsdata=e.sent,console.log(n.sheetsdata),e.abrupt("return",n.sheetsdata);case 8:case"end":return e.stop()}},e)})),n.getRating=Object(d.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:setInterval(function(){n.setState({rating:3600})},4e3);case 1:case"end":return e.stop()}},e)})),n.checkUserLocation=function(){var e=Object(d.a)(u.a.mark(function e(t){var n,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.hasOwnProperty("qr_data")){e.next=8;break}return n=t.qr_data.split(","),a="https://kritbots.ru/laravel/api/geolocation/calc/".concat(n[0].trim(),"/").concat(n[1].trim()),alert(a),e.next=6,fetch(a).then(function(e){console.log(e)});case 6:e.next=8;break;case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.state={activePanel:"mainPanel",fetchedUser:null,rating:null,organizations:null},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){var e=this;U.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppOpenQRResult":e.checkUserLocation(t.detail.data);break;case"VKWebAppOpenQRFailed":break;default:console.log(t.detail.type)}}),U.a.send("VKWebAppInit",{}),U.a.send("VKWebAppGetUserInfo",{}).then(function(t){e.getRating()}),this.getOrganizations().then(function(t){e.setState({organizations:t.values})})}},{key:"render",value:function(){return r.a.createElement(b.d,{insets:this.props.insets,isWebView:B},r.a.createElement(b.n,{activeView:"mainView"},r.a.createElement(b.q,{id:"mainView",activePanel:this.state.activePanel},r.a.createElement(W,{fetchedUser:this.state.fetchedUser,id:"mainPanel",accessToken:this.props.accessToken,go:this.go,token:this.state.token,organizations:this.state.organizations,rating:this.state.rating}),r.a.createElement(_,{id:"aboutPanel",go:this.go}))))}}]),t}(a.Component);i.a.render(r.a.createElement(I,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/volunteer",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/volunteer","/service-worker.js");s?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):c(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):c(e)})}}()},97:function(e,t,n){e.exports=n(111)}},[[97,1,2]]]);
//# sourceMappingURL=main.336d034c.chunk.js.map