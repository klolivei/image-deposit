(function(e){function t(t){for(var a,c,i=t[0],s=t[1],u=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"17d8":function(e,t,n){"use strict";var a=n("762e"),r=n.n(a);r.a},"2d91":function(e,t,n){"use strict";var a=n("822f"),r=n.n(a);r.a},5072:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"router",(function(){return re}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("8c4f"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("AppHeader"),n("router-view")],1)},c=[],i=n("5530"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui secondary pointing menu"},[n("router-link",{staticClass:"active item",attrs:{to:"/"}},[e._v(" Image Storage ")]),n("div",{staticClass:"right menu"},[e.isLoggedIn?n("div",{staticClass:"row"},[n("router-link",{staticClass:"item",attrs:{to:"/"}},[e._v("Galleries")]),n("router-link",{staticClass:"item",attrs:{to:"/upload"}},[e._v("Upload")]),n("a",{staticClass:"item",on:{click:e.logout}},[e._v("Logout")])],1):n("a",{staticClass:"ui item",attrs:{href:"#"},on:{click:e.login}},[e._v("Login")])])],1)},u=[],l=n("2f62"),f={name:"AppHeader",methods:Object(i["a"])({},Object(l["b"])(["login","logout"])),computed:Object(i["a"])({},Object(l["c"])(["isLoggedIn"]))},p=f,m=(n("2d91"),n("2877")),d=Object(m["a"])(p,s,u,!1,null,"2d827b47",null),g=d.exports,h={name:"App",components:{AppHeader:g},computed:Object(i["a"])({},Object(l["c"])(["isLoggedIn"]))},v=h,b=Object(m["a"])(v,o,c,!1,null,null,null),w=b.exports,_=(n("ac1f"),n("5319"),n("a630"),n("d81d"),n("d3b7"),n("3ca3"),n("ddb0"),n("4328")),O=n.n(_),j=n("bc3a"),k=n.n(j),I="f06db3447ad6100",y="https://api.imgur.com/",x={login:function(){var e={client_id:I,response_type:"token"};window.location="".concat(y,"oauth2/authorize?").concat(O.a.stringify(e))},fetchImages:function(e){return k.a.get("".concat(y,"3/account/me/images"),{headers:{Authorization:"Bearer ".concat(e)}})},uploadImages:function(e,t){var n=Array.from(e).map((function(e){var n=new FormData;return n.append("image",e),k.a.post("".concat(y,"/3/image"),n,{headers:{Authorization:"Bearer ".concat(t)}})}));return Promise.all(n)}},L="imgur_token",S={token:window.localStorage.getItem(L)},C={isLoggedIn:function(e){return null!==e.token}},P={logout:function(e){var t=e.commit;window.localStorage.removeItem(L),t("setToken",null)},login:function(){x.login()},finalizeLogin:function(e,t){var n=e.commit,a=O.a.parse(t.replace("#",""));n("setToken",a.access_token),window.localStorage.setItem(L,a.access_token),re.push("/")}},A={setToken:function(e,t){e.token=t}},$={state:S,getters:C,actions:P,mutations:A},z=(n("96cf"),n("1da1")),E={images:[]},T={allImages:function(e){return e.images}},H={fetchImages:function(e){return Object(z["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.rootState,a=e.commit,r=n.auth.token,t.next=4,x.fetchImages(r);case 4:o=t.sent,a("setImages",o.data.data);case 6:case"end":return t.stop()}}),t)})))()},uploadImages:function(e,t){return Object(z["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.rootState,r=a.auth.token,n.next=4,x.uploadImages(t,r);case 4:re.push("/");case 5:case"end":return n.stop()}}),n)})))()}},M={setImages:function(e,t){e.images=t}},R={getters:T,actions:H,mutations:M,state:E};a["a"].use(l["a"]);var B=new l["a"].Store({modules:{auth:$,image:R}}),D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(" Please wait...")])])}],J={name:"AuthHandler",methods:Object(i["a"])({},Object(l["b"])(["finalizeLogin"])),created:function(){this.finalizeLogin(window.location.hash)}},U=J,G=Object(m["a"])(U,D,F,!1,null,null,null),q=G.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isLoggedIn?n("div",{staticClass:"image-container"},e._l(e.allImages,(function(e){return n("img",{key:e.link,attrs:{src:e.link}})})),0):e._e()},N=[],Q={name:"ImageList",methods:Object(i["a"])({},Object(l["b"])(["fetchImages"])),computed:Object(i["a"])({},Object(l["c"])(["isLoggedIn","allImages"])),created:function(){this.fetchImages()}},V=Q,W=(n("17d8"),Object(m["a"])(V,K,N,!1,null,"23a2c20c",null)),X=W.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropper"},[n("input",{attrs:{type:"file",multiple:"",accept:"image/*"},on:{change:function(t){return e.uploadImages(t.target.files)}}}),n("span",[e._v("Drag files here!")])])},Z=[],ee={name:"UploadForm",methods:Object(i["a"])({},Object(l["b"])(["uploadImages"]))},te=ee,ne=(n("cd92"),Object(m["a"])(te,Y,Z,!1,null,"81518c44",null)),ae=ne.exports;a["a"].use(r["a"]);var re=new r["a"]({mode:"history",routes:[{path:"/oauth2/callback",component:q},{path:"/",component:X},{path:"/upload",component:ae}]});new a["a"]({router:re,store:B,render:function(e){return e(w)}}).$mount("#app")},"762e":function(e,t,n){},"822f":function(e,t,n){},cd92:function(e,t,n){"use strict";var a=n("5072"),r=n.n(a);r.a}});
//# sourceMappingURL=app.9cf3cd8b.js.map