(function(e){function t(t){for(var o,s,a=t[0],u=t[1],c=t[2],l=0,d=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},s={app:0},r={app:0},i=[];function a(e){return u.p+"js/"+({create:"create",login:"login",results:"results",update:"update"}[e]||e)+"."+{create:"c57c0864",login:"4c3abc22",results:"8e4533f1",update:"e49dcc0e"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={create:1,login:1,results:1,update:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var o="css/"+({create:"create",login:"login",results:"results",update:"update"}[e]||e)+"."+{create:"7ad78323",login:"fd077395",results:"b3d0527f",update:"464be995"}[e]+".css",r=u.p+o,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var c=i[a],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===r))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){c=d[a],l=c.getAttribute("data-href");if(l===o||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete s[e],f.parentNode.removeChild(f),n(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){s[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",d.name="ChunkLoadError",d.type=o,d.request=s,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var o=n("2dad"),s=n.n(o);s.a},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("96cf"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Preloader"),e.showNav?n("Nav"):e._e(),n("div",{staticClass:"container",class:{login:!e.showNav}},[n("router-view")],1),n("notifications",{attrs:{group:"msg"}})],1)},r=[],i=(n("a4d3"),n("4de4"),n("4160"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav"},[e._m(0),n("div",{staticClass:"body"},[n("ul",[n("router-link",{staticClass:"new",attrs:{to:"/create",tag:"li"}},[n("i",{staticClass:"fa fa-plus"}),e._v(" Create new")]),n("li",{staticClass:"refresh",on:{click:e.refresh}},[n("i",{staticClass:"fa fa-refresh"}),e._v(" Reload polls")]),e._l(e.getPolls,(function(t){return n("router-link",{key:t.uuid,staticClass:"item",attrs:{to:{name:"results",params:{id:t.id}},tag:"li"}},[n("span",{staticClass:"title"},[e._v(e._s((t.isDraft?"Draft: ":"")+t.name))]),n("span",{staticClass:"date"},[e._v(e._s(e.formatDate(t.created_at)))])])}))],2)])])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("h1",{staticClass:"title"},[e._v("My Polls")])])}],c=(n("99af"),n("0d03"),n("2f62"));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={methods:{formatDate:function(e){var t=new Date(e),n=function(e){var t=e.getHours(),n=e.getMinutes(),o=t>=12?"pm":"am";t%=12,t=t||12,n=n<10?"0"+n:n;var s=t+":"+n+" "+o;return s};return"Created: ".concat(t.getFullYear(),"/").concat(t.getMonth(),"/").concat(t.getDay()," at ").concat(n(t))},refresh:function(){this.$store.dispatch("poll/getPolls")}},computed:d({},Object(c["c"])({getPolls:"poll/getPolls"})),created:function(){this.$store.dispatch("poll/getPolls")}},p=f,h=(n("d79f"),n("2877")),m=Object(h["a"])(p,a,u,!1,null,null,null),g=m.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.preloader?n("transition",{attrs:{name:"preloader"}},[n("div",{attrs:{id:"preloader"}},[e._v(" "+e._s(e.loading)+" ")])]):e._e()},v=[];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={data:function(){return{dots:1}},computed:y({},Object(c["e"])({preloader:"preloader"}),{loading:function(){for(var e="",t=0;t<this.dots;t++)e+=".";return"Loading"+e}}),methods:{update:function(){3===this.dots?this.dots=1:this.dots++}},created:function(){var e=this;setInterval((function(){e.update()}),500)}},_=P,q=(n("bc2b"),Object(h["a"])(_,w,v,!1,null,null,null)),O=q.exports;function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={name:"app",components:{Nav:g,Preloader:O},computed:{showNav:function(){return"login"!==this.$route.name}},methods:k({},Object(c["d"])({setPreloader:"setPreloader"})),mounted:function(){var e=this;setTimeout((function(){e.setPreloader(!1)}),1e3)}},A=E,x=(n("5c0b"),Object(h["a"])(A,s,r,!1,null,null,null)),Q=x.exports,S=n("8c4f"),I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{src:"/images/poll.png",alt:""}}),e._v(" No polls selected ")])}],C=(n("21bb"),{}),D=Object(h["a"])(C,I,T,!1,null,null,null),N=D.exports;o["default"].use(S["a"]);var B=[{path:"/",name:"home",component:N},{path:"/login",name:"login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/update/:id",name:"update",component:function(){return n.e("update").then(n.bind(null,"4ae4"))},props:!0},{path:"/results/:id",name:"results",component:function(){return n.e("results").then(n.bind(null,"d65b"))},props:!0},{path:"/create",name:"create",component:function(){return n.e("create").then(n.bind(null,"a23d"))}},{path:"*",redirect:"/"}],$=new S["a"]({mode:"history",base:"/",routes:B}),R=$,L=(n("7db0"),n("c740"),n("d81d"),n("4e82"),n("284c")),M=n("bc3a"),J=n.n(M),W=n("2ef0"),F=n.n(W),z={polls:[],newPolls:[]};function H(e,t){function n(e,t){return F.a.transform(e,(function(e,o,s){F.a.isEqual(o,t[s])||(e[s]=F.a.isObject(o)&&F.a.isObject(t[s])?n(o,t[s]):o)}))}return n(e,t)}o["default"].prototype.$_=F.a;var U={getPolls:function(e){return[].concat(Object(L["a"])(e.polls),Object(L["a"])(e.newPolls)).sort((function(e,t){return new Date(t.created_at)-new Date(e.created_at)}))},getPollById:function(e){return function(t){return[].concat(Object(L["a"])(e.polls),Object(L["a"])(e.newPolls)).find((function(e){return e.id===t}))}},getNewPoll:function(e){return e.newPolluuid}},K={savePolls:function(e,t){e.polls=t.polls,e.polls.forEach((function(e){e.questions=[]}))},savePoll:function(e,t){e.polls.push(t.poll)},saveQuestions:function(e,t){t.questions.forEach((function(t){t.answers=t.answers?t.answers:[];var n=e.polls.find((function(e){return e.id===t.poll_uuid}));n&&n.questions.push(t)}))},saveAnswers:function(e,t){t.answers.forEach((function(t){e.polls.forEach((function(e){var n=e.questions.find((function(e){return e.id===t.question_uuid}));n&&n.answers.push(t)}))}))},updatePoll:function(e,t){var n=e.polls.findIndex((function(e){return e.id===t.poll.id}));o["default"].set(e.polls,n,Object.assign(e.polls[n],{name:t.poll.name,message:t.poll.message}))},updateQuestions:function(e,t){t.questions.forEach((function(t){var n=e.polls.findIndex((function(e){return e.id===t.poll_uuid})),s=e.polls[n].questions.findIndex((function(e){return e.id===t.id}));o["default"].set(e.polls[n].questions,s,Object.assign(e.polls[n].questions[s],{question:t.question,order:t.order,skipped:!!t.skipped}))}))},updateAnswers:function(e,t){t.answers.forEach((function(t){var n=e.polls.findIndex((function(e){return e.id===t.poll_uuid})),s=e.polls[n].questions.findIndex((function(e){return e.id===t.question_uuid})),r=e.polls[n].questions[s].answers.findIndex((function(e){return e.id===t.id}));o["default"].set(e.polls[n].questions[s].answers,r,Object.assign(e.polls[n].questions[s].answers[r],{answer:t.answer,result:t.result}))}))},deletePoll:function(e,t){var n=e.polls.findIndex((function(e){return e.id===t.poll.id}));o["default"].delete(e.polls,n),R.push("/")},deleteQuestions:function(e,t){t.questions.forEach((function(t){var n=e.polls.findIndex((function(e){return e.id===t.poll_uuid})),s=e.polls[n].questions.findIndex((function(e){return e.id===t.id}));o["default"].delete(e.polls[n].questions,s)}))},deleteAnswers:function(e,t){t.answers.forEach((function(t){var n=e.polls.findIndex((function(e){return e.id===t.poll_uuid})),s=e.polls[n].questions.findIndex((function(e){return e.id===t.question_uuid})),r=e.polls[n].questions[s].findIndex((function(e){return e.id===t.id}));o["default"].delete(e.polls[n].questions[s].answers,r)}))}},Y={getPolls:function(e){e.commit("setBusy",!0,{root:!0}),J.a.all([e.dispatch("apicalls/getPolls",null,{root:!0}),e.dispatch("apicalls/getQuestions",null,{root:!0}),e.dispatch("apicalls/getAnswers",null,{root:!0})]).then(J.a.spread((function(t,n,s){e.commit("savePolls",{polls:t.data}),e.commit("saveQuestions",{questions:n.data}),e.commit("saveAnswers",{answers:s.data}),o["default"].notify({group:"msg",type:"success",title:"Polls are loaded"})}))).finally((function(){e.commit("setBusy",!1,{root:!0})}))},getAnswersByPollId:function(e,t){return new Promise((function(n,o){e.dispatch("apicalls/getAnswersByPollId",{poll_uuid:t.poll_uuid},{root:!0}).then((function(t){e.commit("updateAnswers",{answers:t.data}),n(t.data)})).catch((function(e){o(e)}))}))},createPoll:function(e,t){return new Promise((function(n,o){e.dispatch("apicalls/createPoll",{poll:{name:t.poll.name,message:t.poll.message}},{root:!0}).then((function(s){var r=s.data[0],i=t.poll.questions.map((function(e){return{poll_uuid:r.id,question:e.question,order:e.order,skipped:e.skipped,answers:e.answers}}));e.dispatch("createQuestions",{questions:i}).then((function(t){r.questions=t,e.commit("savePoll",{poll:r}),n(r)})).catch((function(e){o(e)}))})).catch((function(e){o(e)}))}))},createQuestions:function(e,t){return new Promise((function(n,o){var s=[],r=[];t.questions.forEach((function(e){s.push({poll_uuid:e.poll_uuid,question:e.question,order:e.order,skipped:!!e.skipped}),r.push(e.answers)})),e.dispatch("apicalls/createQuestions",{questions:s},{root:!0}).then((function(t){var s=t.data,i=[];r.forEach((function(e,t){e.forEach((function(e){i.push({question_uuid:s[t].id,poll_uuid:s[t].poll_uuid,answer:e.answer,result:0})}))})),e.dispatch("createAnswers",{answers:i}).then((function(t){s.forEach((function(e){e.answers=[]})),t.forEach((function(e){s.find((function(t){return t.id===e.question_uuid})).answers.push(e)})),e.commit("saveQuestions",{questions:s}),n(s)})).catch((function(e){o(e)}))})).catch((function(e){o(e)}))}))},createAnswers:function(e,t){return new Promise((function(n,o){e.dispatch("apicalls/createAnswers",{answers:t.answers},{root:!0}).then((function(t){e.commit("saveAnswers",{answers:t.data}),n(t.data)})).catch((function(e){o(e)}))}))},updatePoll:function(e,t){return new Promise((function(n,o){e.dispatch("apicalls/updatePoll",{poll:{id:t.poll.id,name:t.poll.name,message:t.poll.message}},{root:!0}).then((function(t){var o=t.data[0];o.questions=t,e.commit("updatePoll",{poll:o}),n(o)})).catch((function(e){o(e)})),e.dispatch("updateQuestions",{questions:t.poll.questions,originQuestions:t.originPoll.questions,poll:t.poll}).catch((function(e){o(e)}))}))},updateQuestions:function(e,t){return new Promise((function(n,o){var s=[],r=[];t.questions.forEach((function(e){var n=t.originQuestions.find((function(t){return t.id===e.id}));F.a.isEmpty(n)||(s.push(n),r.push(e))}));var i=[];F.a.differenceWith(r,s,F.a.isEqual).forEach((function(e){var t=s.find((function(t){return t.id===e.id})),n=H({question:e.question,order:e.order,skipped:e.skipped},{question:t.question,order:t.order,skipped:t.skipped});F.a.isEmpty(n)||(n.id=e.id,i.push(n))})),F.a.isEmpty(i)||(console.log("Q1. ",i),e.dispatch("apicalls/updateQuestions",{questions:i},{root:!0}).then((function(t){var n=t.map((function(e){return e.data[0]}));e.commit("updateQuestions",{questions:n})})).catch((function(e){o(e)})));var a=[],u=[];r.forEach((function(e){e.answers.forEach((function(e){a.push(e)}))})),s.forEach((function(e){e.answers.forEach((function(e){u.push(e)}))})),e.dispatch("updateAnswers",{answers:a,originAnswers:u,poll_uuid:t.poll.id}).catch((function(e){o(e)}));var c=F.a.filter(t.questions,(function(e){return e.isAdded})).map((function(e){return e.poll_uuid=t.poll.id,e}));F.a.isEmpty(c)||(console.log("Q2. ",c),e.dispatch("createQuestions",{questions:c}).catch((function(e){o(e)})));var l=F.a.differenceWith(t.originQuestions,t.questions,(function(e,t){return e.id===t.id}));F.a.isEmpty(l)||(console.log("Q3. ",l),e.dispatch("deleteQuestions",{questions:l}).catch((function(e){o(e)})))}))},updateAnswers:function(e,t){return new Promise((function(n,o){var s=[],r=[];t.answers.forEach((function(e){var n=t.originAnswers.find((function(t){return t.id===e.id}));F.a.isEmpty(n)||(r.push(n),s.push(e))}));var i=F.a.filter(t.answers,(function(e){return e.isAdded})).map((function(e){return{poll_uuid:t.poll_uuid,question_uuid:e.question_uuid,answer:e.answer,result:0}})),a=F.a.differenceWith(t.originAnswers,t.answers,(function(e,t){return e.id===t.id})),u=[];F.a.differenceWith(t.answers,t.originAnswers,F.a.isEqual).forEach((function(e){if(!e.isAdded){var n=t.originAnswers.find((function(t){return t.id===e.id})),o=H({answer:e.answer},{answer:n.answer});F.a.isEmpty(o)||(o.id=e.id,u.push(o))}})),F.a.isEmpty(a)||(console.log("A1. ",a),e.dispatch("deleteAnswers",{answers:a}).catch((function(e){o(e)}))),F.a.isEmpty(i)||(console.log("A2. ",i),e.dispatch("createAnswers",{answers:i}).catch((function(e){o(e)}))),F.a.isEmpty(u)||(console.log("A3. ",u),e.dispatch("apicalls/updateAnswers",{answers:u},{root:!0}).then((function(t){var o=t.map((function(e){return e.data[0]}));e.commit("updateAnswers",{answers:o}),n(t.data)})).catch((function(e){o(e)}))),n()}))},deletePoll:function(e,t){return new Promise((function(n,o){e.dispatch("apicalls/deletePoll",{poll:t.poll},{root:!0}).then((function(o){e.commit("deletePoll",{poll:t.poll}),n(o)})).catch((function(e){o(e)}))}))},deleteQuestions:function(e,t){return new Promise((function(n,o){e.dispatch("apicalls/deleteQuestions",{questions:t.questions},{root:!0}).then((function(o){e.commit("deleteQuestions",{questions:t.questions}),n(o)})).catch((function(e){o(e)}))}))},deleteAnswers:function(e,t){return new Promise((function(n,o){e.dispatch("apicalls/deleteAnswers",{answers:t.answers},{root:!0}).then((function(o){e.commit("deleteAnswers",{answers:t.answers}),n(o)})).catch((function(e){o(e)}))}))}},G={namespaced:!0,state:z,getters:U,mutations:K,actions:Y},V={getAccessToken:function(){return localStorage.getItem("access_token")},getRefreshToken:function(){return localStorage.getItem("refresh_token")},getTokens:function(){return{access_token:this.getAccessToken(),refresh_token:this.getRefreshToken()}},setAccessToken:function(e){localStorage.setItem("access_token",e)},setRefreshToken:function(e){localStorage.setItem("refresh_token",e)},setTokens:function(e){localStorage.setItem("access_token",e.access_token),localStorage.setItem("refresh_token",e.refresh_token)},clearTokens:function(){localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}},X=n("ec02"),Z=n.n(X),ee="https://6600e36b-4ecc-473b-ac50-d7795256b092.app.jexia.com",te=J.a.create({baseURL:ee,timeout:5e3}),ne=function(e){return J.a.post(ee+"/auth/refresh",{refresh_token:V.getRefreshToken()}).then((function(t){return V.setTokens(t.data),e.response.config.headers["Authorization"]="Bearer "+V.getAccessToken(),Promise.resolve()})).catch((function(e){R.push("/login"),Promise.reject(e)}))};Z()(te,ne),te.interceptors.request.use((function(e){var t=V.getAccessToken();return t&&(e.headers["Authorization"]="Bearer "+t),e}),(function(e){Promise.reject(e)}));var oe=te,se="https://6600e36b-4ecc-473b-ac50-d7795256b092.app.jexia.com",re={tokens:{}},ie={validatePoll:function(){return function(e){var t=e.poll,n=!1;return null!==t.name&&t.name&&0!==t.name.length||(n=!0),null!==t.message&&t.message&&0!==t.message.length||(n=!0),t.questions.forEach((function(e){null!==e.question&&e.question&&0!==e.question.length||(n=!0),e.answers.forEach((function(e){null!==e.answer&&e.answer&&0!==e.answer.length||(n=!0)}))})),n&&o["default"].notify({group:"msg",type:"error",title:"Fill all data"}),!n}}},ae={},ue={signIn:function(e,t){e.commit("setBusy",!0,{root:!0}),J()({method:"post",url:se+"/auth",data:t.credentials}).then((function(e){o["default"].notify({group:"msg",type:"success",title:"Successfully logged in"}),V.setTokens(e.data),R.push({path:"/"})})).catch((function(e){var t=JSON.parse(e.request.response);o["default"].notify({group:"msg",type:"error",title:e,text:t[0].message}),"login"!==R.currentRoute.name&&R.push({path:"/login"})})).finally((function(){e.commit("setBusy",!1,{root:!0})}))},getPolls:function(){return oe({method:"get",url:"/ds/polls"})},getQuestions:function(){return oe({method:"get",url:"/ds/questions"})},getAnswers:function(){return oe({method:"get",url:"/ds/answers"})},getAnswersByPollId:function(e,t){return oe({method:"get",url:'/ds/answers?cond=[{"field":"poll_uuid"}, "=", "'.concat(t.poll_uuid,'"]')})},createPoll:function(e,t){return oe({method:"post",url:"/ds/polls",data:t.poll})},createQuestions:function(e,t){return oe({method:"post",url:"/ds/questions",data:t.questions})},createAnswers:function(e,t){return oe({method:"post",url:se+"/ds/answers",data:t.answers})},updatePoll:function(e,t){return oe({method:"patch",url:'/ds/polls?cond=[{"field":"id"}, "=", "'.concat(t.poll.id,'"]'),data:{name:t.poll.name,message:t.poll.message}})},updateQuestions:function(e,t){return J.a.all(t.questions.map((function(e){return oe({method:"patch",url:'/ds/questions?cond=[{"field":"id"}, "=", "'.concat(e.id,'"]'),data:{question:e.question,order:e.order,skipped:!!e.skipped}})})))},updateAnswers:function(e,t){return J.a.all(t.answers.map((function(e){return oe({method:"patch",url:'/ds/answers?cond=[{"field":"id"}, "=", "'.concat(e.id,'"]'),data:{answer:e.answer}})})))},deletePoll:function(e,t){return J.a.all([oe({method:"delete",url:'/ds/polls?cond=[{"field":"id"}, "=", "'.concat(t.poll.id,'"]')}),oe({method:"delete",url:'/ds/questions?cond=[{"field":"poll_uuid"}, "=", "'.concat(t.poll.id,'"]')}),oe({method:"delete",url:'/ds/answers?cond=[{"field":"poll_uuid"}, "=", "'.concat(t.poll.id,'"]')})]).then((function(){e.commit("poll/deletePoll",{poll:t.poll},{root:!0}),o["default"].notify({group:"msg",type:"success",title:"Poll deleted"})}))},deleteQuestions:function(e,t){var n=t.questions.map((function(e){return e.id}));return J.a.all([oe({method:"delete",url:'/ds/questions?cond=[{"field":"id"}, "in", '.concat(JSON.stringify(n),"]")}),oe({method:"delete",url:'/ds/answers?cond=[{"field":"question_uuid"}, "in", '.concat(JSON.stringify(n),"]")})]).then((function(){e.commit("poll/deleteQuestions",{questions:t.questions},{root:!0})}))},deleteAnswers:function(e,t){var n=t.answers.map((function(e){return e.id}));return oe({method:"delete",url:'/ds/answers?cond=[{"field":"id"}, "in", '.concat(JSON.stringify(n),"]")}).then((function(){e.commit("poll/deleteAnswers",{answers:t.answers},{root:!0})}))}},ce={namespaced:!0,state:re,getters:ie,mutations:ae,actions:ue};o["default"].use(c["a"]);var le=new c["a"].Store({namespaced:!0,modules:{poll:G,apicalls:ce},state:{busy:!1,preloader:!0},getters:{isBusy:function(e){return e.busy}},mutations:{setBusy:function(e,t){e.busy=t},setPreloader:function(e,t){e.preloader=t}}}),de=n("ee98"),fe=n.n(de);o["default"].config.productionTip=!1,o["default"].use(fe.a),new o["default"]({router:R,store:le,render:function(e){return e(Q)},beforeCreate:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(J()({method:"post",url:"https://6600e36b-4ecc-473b-ac50-d7795256b092.app.jexia.com/auth/refresh",data:{refresh_token:V.getRefreshToken()}}));case 2:e=t.sent,V.setTokens(e.data);case 4:case"end":return t.stop()}}))}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),s=n.n(o);s.a},"9c0c":function(e,t,n){},a3ee:function(e,t,n){},bc2b:function(e,t,n){"use strict";var o=n("fdbe"),s=n.n(o);s.a},d79f:function(e,t,n){"use strict";var o=n("a3ee"),s=n.n(o);s.a},fdbe:function(e,t,n){}});
//# sourceMappingURL=app.0709fe38.js.map