(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{55:function(e,t,a){e.exports=a(83)},64:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(20),o=a.n(c),s=a(98),u=a(52),E=a(99),T=a(51);var i,p=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("b",null,"TEST"))},d=(a(64),a(50)),S=a(28),_=Object(d.a)({typography:{fontFamily:["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"]},palette:{primary:{main:"rgb(29, 161, 242)",dark:"rgb(26, 145, 218)",contrastText:"#fff"},secondary:{main:"rgb(26, 145, 218)"},error:{main:S.a.A400},background:{default:"#fff"},text:{primary:"#14171a"}},shadows:[],overrides:{MuiButton:{root:{borderRadius:30,textTransform:"none",fontSize:16,height:40,fontWeight:700},textPrimary:{paddingLeft:20,paddingRight:20},MuiFilledInput:{underline:{"&:after":{borderBottomWidth:"2px"},"&:before":{borderColor:"#000",borderBottomWidth:"2px"}},input:{background:"rgb(245, 248, 250)"},MuiDialog:{paper:{borderRaduis:15}},MuiDialogActions:{root:{mardinBottom:8}},MuiDialogTitle:{root:{borderBottom:"1px solid rgb(204, 230, 240)",marginBottom:10,padding:"10px 15px","& h2":{display:"flex",alignItems:"center",fontWeight:800},"& button":{padding:8,marginRight:20}}}}}}}),A=a(11);!function(e){e.LOADING="LOADING",e.ERROR="ERROR",e.NEVER="NEVER"}(i||(i={}));var f,l,O=a(13);!function(e){e.SET_TWEETS="tweets/SET_TWEETS",e.ADD_TWEET="tweets/ADD_TWEET",e.FETCH_ADD_TWEET="tweets/FETCH_ADD_TWEET",e.FETCH_TWEETS="tweets/FETCH_TWEETS",e.SET_LOADING_STATE="tweets/SET_LOADING_STATE",e.SET_ADD_FORM_STATE="tweets/SET_ADD_FORM_STATE"}(f||(f={})),function(e){e.LOADED="LOADED",e.LOADING="LOADING",e.ERROR="ERROR",e.NEVER="NEVER",e.SUCCESS="SUCCESS"}(l||(l={}));var b,D={items:[],addFormState:i.NEVER,loadingState:l.NEVER},m=Object(O.a)((function(e,t){switch(t.type){case f.SET_TWEETS:e.items=t.payload,e.loadingState=l.LOADED;break;case f.ADD_TWEET:e.items.splice(0,0,t.payload),e.addFormState=i.NEVER;break;case f.FETCH_ADD_TWEET:e.addFormState=i.LOADING;break;case f.FETCH_TWEETS:e.items=[],e.loadingState=l.LOADING;break;case f.SET_LOADING_STATE:e.loadingState=t.payload;break;case f.SET_ADD_FORM_STATE:e.addFormState=t.payload}}),D);!function(e){e.SET_TAGS="tags/SET_TAGS",e.FETCH_TAGS="tags/FETCH_TAGS",e.SET_LOADING_STATE="tags/SET_LOADING_STATE"}(b||(b={}));var w,x=function(e){return{type:b.SET_LOADING_STATE,payload:e}},v={items:[],loadingState:l.NEVER},y=Object(O.a)((function(e,t){switch(t.type){case b.SET_TAGS:e.items=t.payload,e.loadingState=l.LOADED;break;case b.FETCH_TAGS:e.items=[],e.loadingState=l.LOADING;break;case b.SET_LOADING_STATE:e.loadingState=t.payload}}),v);!function(e){e.SET_TWEET_DATA="tweet/SET_DATA",e.FETCH_TWEET_DATA="tweet/FETCH_DATA",e.SET_LOADING_STATE="tweet/SET_LOADING_STATE"}(w||(w={}));var R,g={data:void 0,loadingState:l.NEVER},N=Object(O.a)((function(e,t){switch(t.type){case w.SET_TWEET_DATA:e.data=t.payload,e.loadingState=l.LOADED;break;case w.FETCH_TWEET_DATA:e.data=void 0,e.loadingState=l.LOADING;break;case w.SET_LOADING_STATE:e.loadingState=t.payload}}),g);!function(e){e.SET_USER_DATA="user/SET_USER_DATA",e.SET_LOADING_STATE="user/SET_LOADING_STATE",e.FETCH_SIGN_IN="user/FETCH_SIGN_IN"}(R||(R={}));var h={data:void 0,status:l.NEVER},k=Object(O.a)((function(e,t){switch(t.type){case R.SET_USER_DATA:e.data=t.payload,e.status=l.SUCCESS;break;case R.SET_LOADING_STATE:e.status=t.payload}}),h),I=Object(A.c)({tweets:m,tags:y,tweet:N,user:k}),G=a(53),j=a(4),F=a.n(j),L=a(6),C=a(15),W=a(18),H=a.n(W);H.a.interceptors.request.use((function(e){return e.headers.token=window.localStorage.getItem("token"),e}));var M=function(){return Object(C.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("/tweets");case 2:return t=e.sent,a=t.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))()},V=function(e){return Object(C.a)(F.a.mark((function t(){var a,r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.a.get("/tweets/"+e);case 2:return a=t.sent,r=a.data,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))()},U=function(e){return Object(C.a)(F.a.mark((function t(){var a,r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.a.post("/tweets",{text:e});case 2:return a=t.sent,r=a.data,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))()},B=function(e){return{type:f.SET_LOADING_STATE,payload:e}},J=function(e){return{type:f.SET_ADD_FORM_STATE,payload:e}},P=F.a.mark(z),X=F.a.mark(K),q=F.a.mark(Q);function z(){var e;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(L.b)(M);case 3:return e=t.sent,t.next=6,Object(L.c)((a=e,{type:f.SET_TWEETS,payload:a}));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(L.c)(B(l.ERROR));case 12:case"end":return t.stop()}var a}),P,null,[[0,8]])}function K(e){var t,a;return F.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(L.b)(U,t);case 4:return a=r.sent,r.next=7,Object(L.c)((n=a,{type:f.ADD_TWEET,payload:n}));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(L.c)(J(i.ERROR));case 13:case"end":return r.stop()}var n}),X,null,[[1,9]])}function Q(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(f.FETCH_TWEETS,z);case 2:return e.next=4,Object(L.d)(f.FETCH_ADD_TWEET,K);case 4:case"end":return e.stop()}}),q)}var Y=function(){return H.a.get("/tags").then((function(e){return e.data}))},Z=F.a.mark(ee),$=F.a.mark(te);function ee(){var e;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(L.b)(Y);case 3:return e=t.sent,t.next=6,Object(L.c)((a=e,{type:b.SET_TAGS,payload:a}));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(L.c)(x(l.ERROR));case 12:case"end":return t.stop()}var a}),Z,null,[[0,8]])}function te(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(b.FETCH_TAGS,ee);case 2:case"end":return e.stop()}}),$)}var ae=function(e){return{type:w.SET_LOADING_STATE,payload:e}},re=F.a.mark(ce),ne=F.a.mark(oe);function ce(e){var t,a;return F.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(L.b)(V,t);case 4:return a=r.sent,r.next=7,Object(L.c)((n=a,{type:w.SET_TWEET_DATA,payload:n}));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(L.c)(ae(l.ERROR));case 13:case"end":return r.stop()}var n}),re,null,[[1,9]])}function oe(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(w.FETCH_TWEET_DATA,ce);case 2:case"end":return e.stop()}}),ne)}var se=function(e){return Object(C.a)(F.a.mark((function t(){var a,r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.a.post("/auth/login",{username:e.email,password:e.password});case 2:return a=t.sent,r=a.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()},ue=function(e){return{type:R.SET_USER_DATA,payload:e}},Ee=function(e){return{type:R.SET_LOADING_STATE,payload:e}},Te=F.a.mark(pe),ie=F.a.mark(de);function pe(e){var t,a,r;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(L.b)(se,t);case 4:return a=n.sent,r=a.data,window.localStorage.setItem("token",r.token),n.next=9,Object(L.c)(ue(r));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(1),n.next=15,Object(L.c)(Ee(l.ERROR));case 15:case"end":return n.stop()}}),Te,null,[[1,11]])}function de(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(R.FETCH_SIGN_IN,pe);case 2:case"end":return e.stop()}}),ie)}var Se=F.a.mark(_e);function _e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Q(),te(),oe(),de()]);case 2:case"end":return e.stop()}}),Se)}var Ae="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.d,fe=Object(G.a)(),le=Object(A.e)(I,Ae(Object(A.a)(fe)));fe.run(_e),o.a.render(n.a.createElement(u.a,null,n.a.createElement(T.a,{store:le},n.a.createElement(s.a,{theme:_},n.a.createElement(E.a,null),n.a.createElement(p,null)))),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.9429088c.chunk.js.map