(function(e){function t(t){for(var n,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},o={app:0},r={app:0},i=[];function s(e){return c.p+"static/js/"+({}[e]||e)+"."+{"chunk-43a546e2":"a8f7e8dd","chunk-6003f434":"6e4d2bb0"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-43a546e2":1,"chunk-6003f434":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="static/css/"+({}[e]||e)+"."+{"chunk-43a546e2":"f48df466","chunk-6003f434":"0471b5f4"}[e]+".css",r=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],f.parentNode.removeChild(f),a(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);a("da02");var n=a("6b41"),o=(a("bca0"),a("543e")),r=(a("8a4e"),a("6e47")),i=(a("9f2d"),a("7278")),s=(a("b342"),a("ad06")),c=(a("2a53"),a("34e9")),u=(a("3ec1"),a("7744")),l=(a("93b0"),a("2bdd")),d=(a("4391"),a("58e6")),f=(a("01bb"),a("e27c")),p=(a("608d"),a("9f14")),h=(a("433b"),a("d399")),m=(a("87d0"),a("e41f")),v=a("2b0e"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"outter",class:{hideLeft:e.$route.path.split("/").length>2}},[a("section",{staticClass:"app-content"},[a("keep-alive",[a("router-view",{attrs:{name:"default"}})],1)],1)]),a("transition",{attrs:{name:"custom-classes-transition","enter-active-class":e.enterAnimate,"leave-active-class":e.leaveAnimate}},[a("router-view",{staticClass:"sub-page",attrs:{name:"subPage"}})],1),a("van-overlay",{attrs:{"class-name":"customer-overlay",show:e.showLoading}},[a("van-loading",{attrs:{size:"24px",color:"#fff",vertical:""}},[e._v("加载中...")])],1)],1)},b=[];const w={mounted(){this.$store.commit("setPageName",this.pageName)},activated(){this.$store.commit("setPageName",this.pageName)}};var y=w;window.mixin=y;var N={name:"app",components:{},computed:{showLoading(){return this.$store.state.axiosLoading}},data(){return{pageName:"",routerAnimate:!1,enterAnimate:"",leaveAnimate:""}},watch:{$route(e,t){const a=e.path.split("/").length,n=t.path.split("/").length;a!==n&&(this.enterAnimate=a>n?"animated fadeInRight":"animated fadeInLeft",this.leaveAnimate=a>n?"animated fadeOutLeft":"animated fadeOutRight",3===a&&(this.leaveAnimate="animated fadeOutRight"))}},created(){console.log(this.showLoading)},methods:{}},_=N,E=(a("034f"),a("2877")),O=Object(E["a"])(_,g,b,!1,null,null,null),T=O.exports,A=a("8c4f");v["a"].use(A["a"]);const L=[{path:"/",name:"笔记",component:e=>a.e("chunk-6003f434").then(function(){var t=[a("4024")];e.apply(null,t)}.bind(this)).catch(a.oe)},{path:"/note/noteDetail",name:"笔记详情",components:{subPage:e=>a.e("chunk-43a546e2").then(function(){var t=[a("a404")];e.apply(null,t)}.bind(this)).catch(a.oe)}}];var k=new A["a"]({routes:L}),C=(a("1157"),a("2f62")),P={filteredNote:e=>"all"===e.show?e.notes:e.notes.filter(e=>{if(!0===e.fav)return e})};const S="ADD_NOTE",D="SELECT_NOTE",j="DEL_NOTE",x="FAV_NOTE",$="SWITCH_NOTE";var M={[S](e,t={id:+new Date,title:"新建笔记"+(new Date).getMilliseconds(),content:"笔记内容",fav:!1}){e.notes.push(t),e.activeNote=t},[D](e,t){e.activeNote=t},[j](e){for(let t=0;t<e.notes.length;t++)if(e.notes[t].id===e.activeNote.id)return e.notes.splice(t,1),void(e.activeNote=e.notes[t]||e.notes[t-1]||{})},[x](e){e.activeNote.fav=!e.activeNote.fav},[$](e,t){e.show=t}},I={add_note({commit:e}){e("ADD_NOTE")},select_note({commit:e},t){e("SELECT_NOTE",t)},del_note({commit:e}){e("DEL_NOTE")},fav_note({commit:e}){e("FAV_NOTE")},switch_note({commit:e},t){e("SWITCH_NOTE",t)}};v["a"].use(C["a"]);const B={id:+new Date,title:"新建笔记"+(new Date).getMilliseconds(),content:"笔记内容",fav:!1},F={axiosLoading:!1,isLogin:!1,notes:[B],activeNote:B,show:"all"};var H=new C["a"].Store({state:F,getters:P,mutations:M,actions:I}),R=(a("5cfb"),a("363c")),q=a.n(R);v["a"].use(m["a"]),v["a"].use(h["a"]),v["a"].use(p["a"]),v["a"].use(f["a"]),v["a"].use(d["a"]),v["a"].use(l["a"]),v["a"].use(u["a"]),v["a"].use(c["a"]),v["a"].use(s["a"]),v["a"].use(i["a"]),v["a"].use(r["a"]),v["a"].use(o["a"]),v["a"].use(n["a"]),v["a"].config.productionTip=!1,v["a"].use(q.a),new v["a"]({store:H,router:k,render:e=>e(T)}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.5e032ae7.js.map