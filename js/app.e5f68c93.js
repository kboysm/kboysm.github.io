(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],u=0,v=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"44aff3d9"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,r[1](c)}n[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("8a23"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e623"),r("e379"),r("5dc8"),r("37e1");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{attrs:{fluid:"","pa-1":""}},["xl"===t.$vuetify.breakpoint.name||"lg"===t.$vuetify.breakpoint.name||"md"===t.$vuetify.breakpoint.name?a("v-app-bar",{class:"d-flex justify-center mb-6",attrs:{fixed:"","elevate-on-scroll":"",elevation:0,id:"lsm"}},t._l(t.itemz,(function(e){return a("v-btn",{key:e.name,staticClass:"pa-2",attrs:{text:""},on:{click:function(r){return t.$vuetify.goTo(e.target)}}},[t._v(t._s(e.name))])})),1):a("v-card",[a("div",{staticClass:"text-center"},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({staticClass:"ma-6",attrs:{id:"lsm",fixed:"",dark:"",fab:"",top:"",right:"","x-small":"",color:"gray"}},r),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",{attrs:{id:"lsm"}},t._l(t.itemz,(function(e,r){return a("v-list-item",{key:r},[a("v-list-item-title",[a("v-btn",{attrs:{text:""},on:{click:function(r){return t.$vuetify.goTo(e.target)}}},[t._v(t._s(e.name))])],1)],1)})),1)],1)],1)]),a("v-parallax",{attrs:{src:r("62f4"),id:"BackImg",height:t.imageHeight,width:"auto"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center pb-12",attrs:{cols:"12"}},[a("h1",{attrs:{id:"tc"}},[t._v("Developer")]),a("h4",{attrs:{id:"tb"}},[t._v(" 임상민의 "),a("typewriter",{attrs:{speed:200,"full-erase":!0,"start-delay":300,words:["포트폴리오입니다"],id:"tb"}})],1)])],1)],1),a("v-container",{attrs:{fluid:"",id:"AboutMe"}},[a("br"),a("br"),a("br"),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",xl:"4",lg:"4",xs:"12",sm:"12",md:"4"}},[a("v-row",{staticStyle:{height:"300px"},attrs:{align:"center",justify:"center"}},[a("h2",[t._v("About Me")])])],1),a("v-col",{attrs:{cols:"12",xl:"8",lg:"8",xs:"12",sm:"12",md:"8"}},[a("v-row",{staticStyle:{height:"300px"},attrs:{align:"center",justify:"center",width:"auto"}},[a("v-col",[a("br"),t._v("1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 "),a("br"),t._v("2. 남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 "),a("br"),t._v("3. 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 "),a("br"),t._v("4. 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세 ")])],1)],1)],1)],1)],1),a("v-row",{attrs:{id:"secondBack"}},[a("v-col",{attrs:{cols:"12"}},[a("br"),a("br"),a("br"),a("h1",[t._v("Skills")])]),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"6",xs:"6",sm:"6","offset-sm":"3"}},[a("v-card",[a("v-container",{attrs:{fluid:""}},[a("v-row",t._l(9,(function(e){return a("v-col",{key:e,staticClass:"d-flex child-flex",attrs:{cols:"4"}},[a("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""}},[a("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+(5*e+10),"lazy-src":"https://picsum.photos/10/6?image="+(5*e+10),"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)})),1)],1)],1)],1)],1)],1),a("h1",{staticStyle:{"text-align":"center"},attrs:{id:"Project"}},[a("br"),a("br"),a("br"),t._v("Projects ")]),a("br"),a("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.items,(function(e,r){return a("v-timeline-item",{key:r,attrs:{color:e.color,icon:e.icon,"fill-dot":""}},[a("v-card",{attrs:{color:e.color,dark:""}},[a("v-card-title",{staticClass:"title"},[t._v(t._s(e.title))]),a("v-card-text",{staticClass:"white text--primary"},[a("p",[t._v(t._s(e.content))]),a("v-btn",{attrs:{color:"black",text:""}},[a("v-icon",[t._v("mdi-github-circle")])],1)],1)],1)],1)})),1),a("v-footer",{attrs:{id:"Contact",dark:"",padless:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",{staticClass:"teal justify-center"},[a("strong",{staticClass:"text-center"},[t._v("CONTACT!")])]),a("v-card-text",{staticClass:"py-2 white--text text-center"},[a("strong",[t._v("Email : lishal12@naver.com")]),a("br"),a("strong",[t._v("phone : 010-7598-0630")])])],1)],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-xs":""}},[r("v-toolbar",{attrs:{dense:"",fixed:"",app:""}},[r("v-toolbar-side-icon"),r("v-toolbar-title",[t._v("Title")]),r("v-spacer"),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[r("v-btn",{attrs:{flat:""}},[t._v("Link One")]),r("v-btn",{attrs:{flat:""}},[t._v("Link Two")]),r("v-btn",{attrs:{flat:""}},[t._v("Link Three")])],1)],1)],1)},s=[],l=r("2877"),c=r("6544"),u=r.n(c),d=r("8336"),v=r("a523"),f=r("2fa4"),p=r("71d9"),m=r("2a7f"),b={},h=Object(l["a"])(b,i,s,!1,null,null,null),g=h.exports;u()(h,{VBtn:d["a"],VContainer:v["a"],VSpacer:f["a"],VToolbar:p["a"],VToolbarItems:m["a"],VToolbarTitle:m["b"]});var y={components:{HMheader:g},data:function(){return{items:[{title:"Admin-Web-App 개발",content:"memi님의 유튜브를 보며 만들어본 Admin 웹 에플리케이션, 구버전의 강의를 신버전으로 코딩",address:"https://github.com/kboysm/vue.js_study/tree/master/Project-ModernWeb/nemv3",color:"red lighten-2",icon:"mdi-star"},{title:"EveryMung",content:"가정 펫시터와 방문 펫시터들과 견주들을 매칭시켜 주는 웹사이트",address:"https://github.com/kboysm/Project_EveryMung",color:"purple darken-1",icon:"mdi-book-variant"},{title:"Spring Boot,thymeleaf로 게시판 만들어 보기",content:"5명의 조원들이 각자 다른 게시판을 만들어 게시판을 하나로 합쳐놓은 프로젝트",address:"https://github.com/kboysm/5jo_team-project/tree/master/Real_Final_Mini_Project/src/main",color:"green lighten-1",icon:"mdi-airballoon"},{title:"jsp로 만든 게시판 aws에 배포",content:"jsp 서블렛으로 만든 웹프로젝트로 처음 만들어본 프로젝트 동빈나님의 유튜브를 보며 처음으로 도전한 게시판, 또 처음으로 aws EC2 서버에 배포해본 게시판",address:"https://github.com/kboysm/Spring_Jsp_Board",color:"indigo",icon:"mdi-buffer"}],itemz:[{name:"Home",target:0},{name:"About",target:"#AboutMe"},{name:"Skills",target:"#secondBack"},{name:"Project",target:"#Project"},{name:"Contact",target:"#Contact"}]}},computed:{imageHeight:function(){return this.$vuetify.breakpoint.height},imageWidth:function(){return this.$vuetify.breakpoint.width}}},_=y,x=(r("034f"),r("7496")),w=r("40dc"),k=r("b0af"),j=r("99d9"),C=r("62ad"),V=r("553a"),T=r("132d"),P=r("adda"),O=r("a722"),S=r("8860"),A=r("da13"),M=r("5d23"),$=r("e449"),E=r("8b9c"),L=r("490a"),B=r("0fd9b"),I=r("8414"),H=r("1e06"),z=Object(l["a"])(_,n,o,!1,null,null,null),J=z.exports;u()(z,{VApp:x["a"],VAppBar:w["a"],VBtn:d["a"],VCard:k["a"],VCardText:j["a"],VCardTitle:j["b"],VCol:C["a"],VContainer:v["a"],VFooter:V["a"],VIcon:T["a"],VImg:P["a"],VLayout:O["a"],VList:S["a"],VListItem:A["a"],VListItemTitle:M["a"],VMenu:$["a"],VParallax:E["a"],VProgressCircular:L["a"],VRow:B["a"],VTimeline:I["a"],VTimelineItem:H["a"]});r("d3b7");var W=r("8c4f"),D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"})},F=[],R={name:"Home"},q=R,N=Object(l["a"])(q,D,F,!1,null,null,null),G=N.exports;a["a"].use(W["a"]);var K=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],Q=new W["a"]({mode:"history",base:"/",routes:K}),U=Q,X=r("2f62");a["a"].use(X["a"]);var Y=new X["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Z=r("f309"),tt=r("fcf4");a["a"].use(Z["a"]);var et=new Z["a"]({theme:{themes:{light:{primary:tt["a"].red.darken1,secondary:tt["a"].red.lighten4,accent:tt["a"].indigo.base}}}}),rt=r("7d8c"),at=r.n(rt);a["a"].use(at.a),a["a"].config.productionTip=!1,new a["a"]({router:U,store:Y,vuetify:et,render:function(t){return t(J)}}).$mount("#app")},"62f4":function(t,e,r){t.exports=r.p+"img/Pimg.c216431a.jpg"},"8a23":function(t,e,r){}});
//# sourceMappingURL=app.e5f68c93.js.map