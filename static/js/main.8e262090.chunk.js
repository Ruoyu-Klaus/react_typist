/*! For license information please see main.8e262090.chunk.js.LICENSE.txt */
(this["webpackJsonpreact_typist-example"]=this["webpackJsonpreact_typist-example"]||[]).push([[0],[,,,,,function(e,t,r){e.exports=r(12)},function(e,t,r){},,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(6);var n=r(0),o=r.n(n),a=r(4),c=r.n(a),s=r(1),i=r(2);function u(e,t){return e(t={exports:{}},t.exports),t.exports}var f="function"===typeof Symbol&&Symbol.for,l=f?Symbol.for("react.element"):60103,p=f?Symbol.for("react.portal"):60106,y=f?Symbol.for("react.fragment"):60107,m=f?Symbol.for("react.strict_mode"):60108,d=f?Symbol.for("react.profiler"):60114,b=f?Symbol.for("react.provider"):60109,S=f?Symbol.for("react.context"):60110,h=f?Symbol.for("react.async_mode"):60111,O=f?Symbol.for("react.concurrent_mode"):60111,_=f?Symbol.for("react.forward_ref"):60112,j=f?Symbol.for("react.suspense"):60113,v=f?Symbol.for("react.suspense_list"):60120,g=f?Symbol.for("react.memo"):60115,C=f?Symbol.for("react.lazy"):60116,$=f?Symbol.for("react.block"):60121,w=f?Symbol.for("react.fundamental"):60117,E=f?Symbol.for("react.responder"):60118,P=f?Symbol.for("react.scope"):60119;function k(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case l:switch(e=e.type){case h:case O:case y:case d:case m:case j:return e;default:switch(e=e&&e.$$typeof){case S:case _:case C:case g:case b:return e;default:return t}}case p:return t}}}function x(e){return k(e)===O}var T={AsyncMode:h,ConcurrentMode:O,ContextConsumer:S,ContextProvider:b,Element:l,ForwardRef:_,Fragment:y,Lazy:C,Memo:g,Portal:p,Profiler:d,StrictMode:m,Suspense:j,isAsyncMode:function(e){return x(e)||k(e)===h},isConcurrentMode:x,isContextConsumer:function(e){return k(e)===S},isContextProvider:function(e){return k(e)===b},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===l},isForwardRef:function(e){return k(e)===_},isFragment:function(e){return k(e)===y},isLazy:function(e){return k(e)===C},isMemo:function(e){return k(e)===g},isPortal:function(e){return k(e)===p},isProfiler:function(e){return k(e)===d},isStrictMode:function(e){return k(e)===m},isSuspense:function(e){return k(e)===j},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===y||e===O||e===d||e===m||e===j||e===v||"object"===typeof e&&null!==e&&(e.$$typeof===C||e.$$typeof===g||e.$$typeof===b||e.$$typeof===S||e.$$typeof===_||e.$$typeof===w||e.$$typeof===E||e.$$typeof===P||e.$$typeof===$)},typeOf:k},z=(u((function(e,t){0})),u((function(e){e.exports=T})),Object.getOwnPropertySymbols),I=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;function M(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}})()&&Object.assign;var W="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function F(e,t,r,n,o){}F.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function N(){}function L(){}L.resetWarningCache=N;var q=u((function(e){e.exports=function(){function e(e,t,r,n,o,a){if(a!==W){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:L,resetWarningCache:N};return r.PropTypes=r,r}()})),A="_styles-module__container__1Lxpd",B="_styles-module__line__1W5X1",Y="_styles-module___underscore__Wf0GC";function D(e){var t=e.paragraph,r=e.speed,a=void 0===r?200:r,c=Object(n.useState)({}),u=Object(i.a)(c,2),f=u[0],l=u[1],p=Object(n.useRef)(0);Object(n.useEffect)((function(){l({}),p.current===t.length&&(p.current=0),p.current<t.length&&m(t)}),[t]);var y=function(){return o.a.createElement("div",{className:Y},"_")},m=Object(n.useCallback)((function(e){var t=1,r=p.current;if(p.current<e.length)var n=setInterval((function(){var o,a=e[r].data.substring(0,t);(l((function(t){return Object(s.a)(Object(s.a)({},t),{},{[r]:Object(s.a)({typeCharacters:a},e[r])})})),++t>e[r].data.length)&&(clearInterval(n),setTimeout((function(){p.current=r+1,p.current<e.length&&m(e)}),(null===(o=e[r])||void 0===o?void 0:o.delay)||0))}),a)}),[t,p]),d=Object(n.useCallback)((function(e){var t=y();return e===p.current+""?t:null}),[y]);return o.a.createElement("div",{className:A},Object.entries(f).map((function(e){var t=Object(i.a)(e,2),r=t[0],n=t[1];return o.a.createElement("div",{className:B+" "+r,style:{fontSize:"".concat(n.fontSize,"px"),color:"".concat(n.fontColor)},key:n.typeCharacters},n.typeCharacters,d(r))})))}D.propTypes={paragraph:q.array.isRequired,speed:q.number},D.defaultProps={paragraph:[{data:"Hello :)",fontSize:60,fontColor:"#eee",delay:1e3},{data:"I am a typist as a React Component.",fontSize:40,fontColor:"#eee",delay:1e3},{data:"What can I do for you?",fontSize:40,fontColor:"pink",delay:3e3},{data:"You waste 4s to see this junk words!",fontSize:40,fontColor:"green",delay:3e3},{data:"Oh, Sucks! You really like to waste you time man !",fontSize:40,fontColor:"red",delay:6e4},{data:"Bye ~~",fontSize:30,fontColor:"yellow",delay:0}],speed:200};var H=D,J=(r(11),function(){return o.a.createElement(H,null)});c.a.render(o.a.createElement(J,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.8e262090.chunk.js.map