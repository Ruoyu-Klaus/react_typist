/*! For license information please see main.d8f30d15.chunk.js.LICENSE.txt */
(this["webpackJsonpreact_typist-example"]=this["webpackJsonpreact_typist-example"]||[]).push([[0],[,,,function(e,t,r){e.exports=r(10)},function(e,t,r){},,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(4);var n=r(0),o=r.n(n),a=r(2),c=r.n(a);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){return e(t={exports:{}},t.exports),t.exports}var u="function"===typeof Symbol&&Symbol.for,s=u?Symbol.for("react.element"):60103,l=u?Symbol.for("react.portal"):60106,p=u?Symbol.for("react.fragment"):60107,y=u?Symbol.for("react.strict_mode"):60108,m=u?Symbol.for("react.profiler"):60114,d=u?Symbol.for("react.provider"):60109,b=u?Symbol.for("react.context"):60110,h=u?Symbol.for("react.async_mode"):60111,S=u?Symbol.for("react.concurrent_mode"):60111,v=u?Symbol.for("react.forward_ref"):60112,O=u?Symbol.for("react.suspense"):60113,g=u?Symbol.for("react.suspense_list"):60120,C=u?Symbol.for("react.memo"):60115,j=u?Symbol.for("react.lazy"):60116,$=u?Symbol.for("react.block"):60121,w=u?Symbol.for("react.fundamental"):60117,_=u?Symbol.for("react.responder"):60118,P=u?Symbol.for("react.scope"):60119;function E(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case s:switch(e=e.type){case h:case S:case p:case m:case y:case O:return e;default:switch(e=e&&e.$$typeof){case b:case v:case j:case C:case d:return e;default:return t}}case l:return t}}}function k(e){return E(e)===S}var x={AsyncMode:h,ConcurrentMode:S,ContextConsumer:b,ContextProvider:d,Element:s,ForwardRef:v,Fragment:p,Lazy:j,Memo:C,Portal:l,Profiler:m,StrictMode:y,Suspense:O,isAsyncMode:function(e){return k(e)||E(e)===h},isConcurrentMode:k,isContextConsumer:function(e){return E(e)===b},isContextProvider:function(e){return E(e)===d},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===s},isForwardRef:function(e){return E(e)===v},isFragment:function(e){return E(e)===p},isLazy:function(e){return E(e)===j},isMemo:function(e){return E(e)===C},isPortal:function(e){return E(e)===l},isProfiler:function(e){return E(e)===m},isStrictMode:function(e){return E(e)===y},isSuspense:function(e){return E(e)===O},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===p||e===S||e===m||e===y||e===O||e===g||"object"===typeof e&&null!==e&&(e.$$typeof===j||e.$$typeof===C||e.$$typeof===d||e.$$typeof===b||e.$$typeof===v||e.$$typeof===w||e.$$typeof===_||e.$$typeof===P||e.$$typeof===$)},typeOf:E},T=(f((function(e,t){0})),f((function(e){e.exports=x})),Object.getOwnPropertySymbols),z=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;function R(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}})()&&Object.assign;var M="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function W(e,t,r,n,o){}W.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function F(){}function N(){}N.resetWarningCache=F;var L=f((function(e){e.exports=function(){function e(e,t,r,n,o,a){if(a!==M){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:N,resetWarningCache:F};return r.PropTypes=r,r}()})),q="_1Lxpd",A="_1W5X1",B="_Wf0GC";function D(e){var t=e.paragraph,r=e.speed,a=void 0===r?200:r,c=Object(n.useState)({}),f=c[0],u=c[1],s=Object(n.useRef)(0);Object(n.useEffect)((function(){u({}),s.current===t.length&&(s.current=0),s.current<t.length&&p(t)}),[t]);var l=function(){return o.a.createElement("div",{className:B},"_")},p=Object(n.useCallback)((function(e){var t=1,r=s.current;if(s.current<e.length)var n=setInterval((function(){var o,a=e[r].data.substring(0,t);(u((function(t){var n;return i({},t,((n={})[r]=i({typeCharacters:a},e[r]),n))})),++t>e[r].data.length)&&(clearInterval(n),setTimeout((function(){s.current=r+1,s.current<e.length&&p(e)}),(null===(o=e[r])||void 0===o?void 0:o.delay)||0))}),a)}),[t,s]),y=Object(n.useCallback)((function(e){var t=l();return e===s.current+""?t:null}),[l]);return o.a.createElement("div",{className:q},Object.entries(f).map((function(e){var t=e[0],r=e[1];return o.a.createElement("div",{className:A+" "+t,style:{fontSize:r.fontSize+"px",color:""+r.fontColor},key:r.typeCharacters},r.typeCharacters,y(t))})))}D.propTypes={paragraph:L.array.isRequired,speed:L.number},D.defaultProps={paragraph:[{data:"Hello :)",fontSize:60,fontColor:"#eee",delay:1e3},{data:"I am a simple typist as a React Component.",fontSize:40,fontColor:"#eee",delay:1e3},{data:"What can I do for you? ",fontSize:40,fontColor:"pink",delay:3e3},{data:"Come on, try and play around with it.",fontSize:40,fontColor:"green",delay:5e3},{data:"Sick! You really like to waste you time man !",fontSize:40,fontColor:"red",delay:6e4},{data:"Bye ~~",fontSize:30,fontColor:"yellow",delay:0}],speed:150};var H=D,J=(r(9),function(){return o.a.createElement(H,null)});c.a.render(o.a.createElement(J,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.d8f30d15.chunk.js.map