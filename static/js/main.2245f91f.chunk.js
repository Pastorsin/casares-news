(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{28:function(e,t,n){e.exports=n(78)},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(20),i=n.n(c),s=(n(33),n(1)),o=n(2),u=n(4),l=n(3),p=(n(34),n(35),n(36),n(37),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement("h1",{className:"News-column-title"},"\xdaltimas Noticias")}}]),n}(r.Component)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement("header",{className:"News-column-header"},a.a.createElement(p,null))}}]),n}(r.Component),f=n(6),d=n.n(f),m=n(7),b=(n(39),n(21)),v=n.n(b).a.create({baseURL:"https://casares-news.herokuapp.com/"}),y={"json-ld":{contentType:"application/ld+json",extension:"json"},"rdf/xml":{contentType:"application/rdf+xml",extension:"xml"},turtle:{contentType:"text/turtle",extension:"ttl"},"n-triples":{contentType:"application/n-triples",extension:"nt"},n3:{contentType:"text/n3",extension:"n3"}},j=y["json-ld"].contentType;function O(e){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(d.a.mark((function e(t){var n,r,a,c,i,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.start,r=t.offset,a=t.contentType,c=t.textPlain,e.next=3,v.get("articles/",{params:{start:n,offset:r},headers:{"Content-Type":a||j},data:{}});case 3:if(i=e.sent,s=i.data,!c||!w(i)){e.next=7;break}return e.abrupt("return",JSON.stringify(s));case 7:return e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return e.headers["content-type"].includes("json")}var k=n(9);function E(e){return e.filter((function(e){return"schema:NewsArticle"===e["@type"]}))}function x(e,t){var n=e["@graph"],r=t["@graph"];return t["@graph"]=[].concat(Object(k.a)(function(e,t){var n=E(t).sort((function(e,t){return N(t)-N(e)})),r=E(e);return[].concat(Object(k.a)(r),Object(k.a)(n))}(n,r)),Object(k.a)(function(e,t){var n=C(e),r=n.map((function(e){return e["@id"]})),a=C(t).filter((function(e){return!r.includes(e["@id"])}));return[].concat(Object(k.a)(n),Object(k.a)(a))}(n,r))),Object.assign(e,t)}function N(e){return new Date(e["schema:datePublished"])}function C(e){return e.filter((function(e){return"schema:NewsMediaOrganization"===e["@type"]}))}function S(e,t){return C(t["@graph"]).filter((function(t){return function(e,t){return t["@id"]===e["schema:creator"]["@id"]}(e,t)}))[0]}n(58),n(59),n(60);var A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.description;return a.a.createElement("div",{className:"Article-description"},e||"Sin descripci\xf3n.")}}]),n}(r.Component),M=(n(61),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.alt,t=this.props.src?this.props.src:"img/empty-img.png";return a.a.createElement("div",{className:"Article-image"},a.a.createElement("img",{src:t,alt:e}))}}]),n}(r.Component)),B=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.article;return a.a.createElement("div",{className:"Article-body"},a.a.createElement(M,{src:e["schema:thumbnailUrl"],alt:e["schema:headline"]}),a.a.createElement(A,{description:e["schema:text"]}))}}]),n}(r.Component),T=(n(62),n(63),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.date,t=new Date(e).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"});return a.a.createElement("time",null,t)}}]),n}(r.Component)),W=(n(64),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.source;return a.a.createElement("a",{href:e["schema:url"]},a.a.createElement("span",{className:"Article-author"},e["schema:name"]))}}]),n}(r.Component)),U=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.article,n=e.source,r=t["schema:datePublished"];return a.a.createElement("footer",{className:"Article-footer"},a.a.createElement("div",{className:"Article-footer-text"},a.a.createElement("small",null,a.a.createElement(T,{date:r}),a.a.createElement("span",null," por "),a.a.createElement(W,{source:n}))))}}]),n}(r.Component),P=(n(65),n(66),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.url;return a.a.createElement("a",{href:n},a.a.createElement("h2",{className:"Article-title"},t))}}]),n}(r.Component)),z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.article;return a.a.createElement("header",{className:"Article-header"},a.a.createElement(P,{url:e["schema:url"],title:e["schema:headline"]}))}}]),n}(r.Component),L=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.article,n=e.source;return a.a.createElement("article",{className:"Article"},a.a.createElement(z,{article:t}),a.a.createElement(B,{article:t}),a.a.createElement(U,{article:t,source:n}))}}]),n}(r.Component),D=n(22),K=n(25),F=n.n(K),J=(n(71),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.size;return a.a.createElement("div",{className:"lds-dual-ring ".concat(e)})}}]),n}(r.Component)),R=(n(72),n(26)),H=n.n(R),_=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={formatSelected:"json-ld",disabled:!1},r}return Object(o.a)(n,[{key:"export",value:function(){var e=Object(m.a)(d.a.mark((function e(){var t,n,r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.articles,n=this.state.formatSelected,this.setState({disabled:!0}),r=y[n],e.next=6,O({start:0,offset:t.length,contentType:r.contentType,textPlain:!0});case 6:a=e.sent,c="news.".concat(r.extension),H()(a,c),this.setState({disabled:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({formatSelected:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.disabled,n=e.formatSelected,r=Object.keys(y);return a.a.createElement("div",{className:"NewsExporter"},a.a.createElement("select",{value:n,onChange:this.handleChange.bind(this)},r.map((function(e){return a.a.createElement("option",{key:e,value:e},e)}))),a.a.createElement("button",{disabled:t,onClick:this.export.bind(this)},"Exportar"))}}]),n}(r.Component),q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).OFFSET=10,r.state={schema:{"@graph":[],"@context":{}},hasMoreNews:!0},r}return Object(o.a)(n,[{key:"fetchNextSchema",value:function(){var e=Object(m.a)(d.a.mark((function e(){var t,n,r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.schema,n=E(t["@graph"]),e.next=4,O({start:n.length,offset:this.OFFSET});case 4:r=e.sent,a=E(r["@graph"]),c=x(t,r),this.setState({schema:c,hasMoreNews:a.length>0});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.schema,t=E(e["@graph"]),n=JSON.stringify(e);return a.a.createElement(F.a,{loadMore:this.fetchNextSchema.bind(this),hasMore:this.state.hasMoreNews,loader:a.a.createElement(J,{key:0,size:"normal"})},a.a.createElement(_,{articles:t}," "),a.a.createElement(D.a,null,a.a.createElement("script",{type:"application/ld+json"},n)),a.a.createElement("section",{className:"News-column-section"},t.map((function(t){return a.a.createElement(L,{key:t["@id"],article:t,source:S(t,e)})}))))}}]),n}(r.Component),G=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"NewsColumn"},a.a.createElement(h,null),a.a.createElement(q,null))}}]),n}(r.Component),I=n(11),Q=(n(73),n(74),n(75),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.hide,n=e.text;return a.a.createElement("button",{className:"NotificationHideButton",onClick:t},n)}}]),n}(r.Component)),V=(n(76),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.type;return a.a.createElement("div",{className:'"NotificationMessage-"'.concat(n)},t)}}]),n}(r.Component)),X=(n(77),n(27)),Z=n.n(X);function Y(e){return $.apply(this,arguments)}function $(){return($=Object(m.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={browser:ee().toUpperCase(),p256dh:ne(t.getKey("p256dh")),auth:ne(t.getKey("auth")),registration_id:te(t)},e.next=3,v.post("notification/",n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(){var e=Z.a.getParser(window.navigator.userAgent).getBrowser();return console.log(e.name),e.name}function te(e){var t=e.endpoint.split("/");return t[t.length-1]}function ne(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(null,t))}function re(){return function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length),a=0;a<n.length;++a)r[a]=n.charCodeAt(a);return r}("BF-179EHZkJlgIQPpM739XEUfraaPYS_W14O5fGKtWX5ASVbKD79CtKhN45GLRzhQ18qf0MEe14BtqzwWZcjtlc")}function ae(){return ce.apply(this,arguments)}function ce(){return(ce=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.ready;case 2:return t=e.sent,e.next=5,t.pushManager.getSubscription();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){return se.apply(this,arguments)}function se(){return(se=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:return t=e.sent,e.abrupt("return",null!==t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){return ue.apply(this,arguments)}function ue(){return(ue=Object(m.a)(d.a.mark((function e(){var t,n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.ready;case 2:return t=e.sent,n=t.pushManager,r={applicationServerKey:re(),userVisibleOnly:!0},e.next=7,n.subscribe(r);case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var le=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={disabled:!1},r}return Object(o.a)(n,[{key:"suscribe",value:function(){this.disableButton(),this.showLoadMessage(),this.suscribeUser()}},{key:"disableButton",value:function(){this.setState({disabled:!0})}},{key:"showLoadMessage",value:function(){this.props.updateMessage({text:a.a.createElement(J,{size:"small"}),type:"info"}),this.props.updateButtons([])}},{key:"suscribeUser",value:function(){var e=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:if(!e.sent){e.next=8;break}this.showError(),console.error("Error, suscription already exists"),e.next=21;break;case 8:return e.prev=8,e.next=11,oe();case 11:return t=e.sent,e.next=14,Y(t);case 14:this.showSuccess(),console.log("Success suscription"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),"denied"===Notification.permission?(this.props.hide(),console.log("Permission was not granted")):(this.showError(),console.error("An error ocurred during the subscription process",e.t0));case 21:case"end":return e.stop()}}),e,this,[[8,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"showError",value:function(){this.props.updateMessage({text:"Ha ocurrido un error int\xe9ntelo m\xe1s tarde porfavor.",type:"error"}),this.done()}},{key:"showSuccess",value:function(){this.props.updateMessage({text:"Suscripci\xf3n realizada con \xe9xito",type:"success"}),this.done()}},{key:"done",value:function(){this.props.updateButtons([a.a.createElement(Q,{text:"Entendido.",hide:this.props.hide,key:"hide-button"})])}},{key:"render",value:function(){var e=this.props.text;return a.a.createElement("button",{className:"NotificationSuscribeButton",onClick:this.suscribe.bind(this),disabled:this.state.disabled},e)}}]),n}(r.Component),pe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={message:{text:"",type:""},buttons:[]},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({message:{text:"\xbfDesea recibir notificaciones sobre las \xfaltimas noticias?",type:"info"},buttons:[a.a.createElement(Q,{text:"No, gracias",hide:this.props.hide,key:"hide-button"}),a.a.createElement(le,{text:"S\xed",updateMessage:this.updateMessage.bind(this),updateButtons:this.updateButtons.bind(this),hide:this.props.hide,key:"suscribe-button"})]})}},{key:"updateMessage",value:function(e){this.setState({message:e})}},{key:"updateButtons",value:function(e){this.setState({buttons:e})}},{key:"render",value:function(){var e=this.state,t=e.buttons,n=e.message;return a.a.createElement("div",null,a.a.createElement(V,{text:n.text,type:n.type}),t)}}]),n}(r.Component),he=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={classNames:["Notification"],hide:!1},r.hide=r.hide.bind(Object(I.a)(r)),r}return Object(o.a)(n,[{key:"hide",value:function(){this.setState({classNames:this.state.classNames.concat("hide"),hide:!0})}},{key:"render",value:function(){var e="default"===Notification.permission,t=this.state.hide;return a.a.createElement("div",{className:this.state.classNames.join(" ")},e&&!t?a.a.createElement(pe,{hide:this.hide}):"")}}]),n}(r.Component),fe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e="Notification"in window;return a.a.createElement("div",{className:"App"},e?a.a.createElement(he,null):null,a.a.createElement(G,null))}}]),n}(r.Component),de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(fe,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/casares-news",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/casares-news","/").concat("service-worker.js");de?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):me(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):me(t,e)}))}}()}},[[28,1,2]]]);