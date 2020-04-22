(this["webpackJsonpblog-front"]=this["webpackJsonpblog-front"]||[]).push([[0],{19:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setArticleListResponse",(function(){return v})),a.d(n,"setLoading",(function(){return b}));var c={};a.r(c),a.d(c,"setTopicList",(function(){return O})),a.d(c,"setLoading",(function(){return N})),a.d(c,"setActiveTag",(function(){return L}));var r,i=a(0),o=a.n(i),s=a(16),l=a.n(s),u=(a(24),a(8)),d=a(6),p=a(10),m={articleList:{apiResponse:{result:[],total:0},loading:!1},topicList:{apiResponse:[],loading:!1,activeTag:null}},f={store:m,dispatch:function(){}},g=Object(i.createContext)(f),h=a(5),E="__component__article__list",v=E+"set_article_list_response",b=E+"set_loading",j=function(e){var t=Object.keys(e),a=[];return t.forEach((function(t){a.push(e[t])})),a},_={actions:j(n),reducer:function(e,t){switch(t.type){case v:return Object(h.a)({},e,{apiResponse:t.data});case b:return Object(h.a)({},e,{loading:t.data});default:return e}}},y="__component__topic__list__",O=y+"set__topic__list",N=y+"set__loading",L=y+"setActive__tag",k={actions:j(c),reducer:function(e,t){switch(t.type){case O:return Object(h.a)({},e,{apiResponse:t.data});case N:return Object(h.a)({},e,{loading:t.data});case L:return Object(h.a)({},e,{activeTag:t.data});default:return e}}},w=(r={articleList:_,topicList:k},function(e,t){for(var a=Object(h.a)({},e),n=0,c=Object.keys(r);n<c.length;n++){var i=c[n],o=r[i],s=o.actions,l=o.reducer;if(s.includes(t.type)){a[i]=l(e[i],t);break}}return a}),T=function(e){var t=Object(i.useReducer)(w,m),a=Object(p.a)(t,2),n={store:a[0],dispatch:a[1]},c=g.Provider;return o.a.createElement(c,{value:n},e.children)},I=function(e,t,a){return new Promise((function(n,c){var r;"get"===t.toLowerCase()?(r={method:"GET"},a&&(e="".concat(e,"?").concat(function(e){var t=Object.keys(e),a=[];return t.forEach((function(t){a.push("".concat(t,"=").concat(e[t]))})),a.join("&")}(a)))):r={method:"POST",body:JSON.stringify(a),headers:{"content-type":"application/json"}},fetch(e,r).then((function(e){return e.json()})).then((function(e){1===e.status?n(e.data):alert("\u51fa\u9519\u4e86")})).catch((function(e){alert("\u51fa\u9519\u4e86"),c(e)}))}))},x=(a(25),function(e){return o.a.createElement(o.a.Fragment,null,e.loading?o.a.createElement("div",{className:"loadingWrapper",style:{height:e.height}},o.a.createElement("img",{className:"img",style:{maxHeight:e.height},src:"http://img2.imgtn.bdimg.com/it/u=3381596572,1571513985&fm=214&gp=0.jpg"})):e.children)}),R=(a(26),function(){var e=Object(i.useContext)(g),t=e.store.articleList,a=e.store.topicList,n=e.dispatch,c=t.apiResponse,r=t.loading,s=a.activeTag,l=c&&c.result;return Object(i.useEffect)((function(){n({type:b,data:!0}),function(){var e={};return s&&(e.tagId=s),I("/api/article/query","post",e)}().then((function(e){n({type:v,data:e}),n({type:b,data:!1})}))}),[s]),o.a.createElement(x,{loading:r,height:"500px"},o.a.createElement("div",{className:"articleListWrapper"},l.map((function(e){return o.a.createElement("div",{className:"articleItem",key:e.id},o.a.createElement(u.b,{to:"/articleDetail/".concat(e.id),className:"title"},e.title),o.a.createElement("span",{className:"flexg"}),o.a.createElement("span",{className:"date"},e.date))}))))}),C=(a(32),function(){var e=Object(i.useContext)(g),t=e.store.topicList,a=e.dispatch,n=t.apiResponse,c=t.loading,r=t.activeTag;Object(i.useEffect)((function(){a({type:N,data:!0}),I("/api/tag/all","get").then((function(e){a({type:O,data:e}),a({type:N,data:!1})}))}),[]);return o.a.createElement(x,{height:60,loading:c},o.a.createElement("div",{className:"tagWrapperComponent"},n.map((function(e){return o.a.createElement("span",{key:e.id,className:(t=e.id,t===r?"tagItem activeTagItem":"tagItem"),onClick:function(){return function(e){a({type:L,data:e})}(e.id)}},o.a.createElement("span",{className:"tag"},"#"),e.name);var t}))))}),S=(a(33),function(){return o.a.createElement("div",{className:"pageContainer"},o.a.createElement("h3",{className:"title"},"Topics"),o.a.createElement(C,null),o.a.createElement("h3",{className:"title"},"Most recent"),o.a.createElement(R,null))}),W=function(e){var t=Object(d.f)().articleId,a=Object(i.useState)(!0),n=Object(p.a)(a,2),c=n[0],r=n[1],s=Object(i.useState)({}),l=Object(p.a)(s,2),u=l[0],m=l[1];return Object(i.useEffect)((function(){r(!0),I("/api/article/".concat(t),"GET").then((function(e){m(e)})),r(!1)}),[t]),Object(i.useEffect)((function(){u.content&&document.querySelectorAll("figure").forEach((function(e){hljs.highlightBlock(e)}))}),[u]),o.a.createElement(x,{height:"100vh",loading:c},o.a.createElement("div",{className:"pageWrapper"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.content}})))},A=function(){return o.a.createElement(T,null,o.a.createElement(u.a,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/"},o.a.createElement(S,null)),o.a.createElement(d.a,{path:"/articleDetail/:articleId"},o.a.createElement(W,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.57fbb8a1.chunk.js.map