parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BxvP":[function(require,module,exports) {
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
},{}],"X6va":[function(require,module,exports) {
var o=0,t=Math.random();module.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++o+t).toString(36))};
},{}],"yS17":[function(require,module,exports) {
var r={}.hasOwnProperty;module.exports=function(e,n){return r.call(e,n)};
},{}],"zotD":[function(require,module,exports) {
var r=require("./_is-object");module.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e};
},{"./_is-object":"BxvP"}],"wLcK":[function(require,module,exports) {
module.exports=function(r){try{return!!r()}catch(t){return!0}};
},{}],"MLNE":[function(require,module,exports) {
module.exports=!require("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});
},{"./_fails":"wLcK"}],"i1Q6":[function(require,module,exports) {

var e=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e);
},{}],"kxqa":[function(require,module,exports) {
var e=require("./_is-object"),r=require("./_global").document,t=e(r)&&e(r.createElement);module.exports=function(e){return t?r.createElement(e):{}};
},{"./_is-object":"BxvP","./_global":"i1Q6"}],"R6c1":[function(require,module,exports) {
module.exports=!require("./_descriptors")&&!require("./_fails")(function(){return 7!=Object.defineProperty(require("./_dom-create")("div"),"a",{get:function(){return 7}}).a});
},{"./_descriptors":"MLNE","./_fails":"wLcK","./_dom-create":"kxqa"}],"EKwp":[function(require,module,exports) {
var t=require("./_is-object");module.exports=function(r,e){if(!t(r))return r;var o,n;if(e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;if("function"==typeof(o=r.valueOf)&&!t(n=o.call(r)))return n;if(!e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;throw TypeError("Can't convert object to primitive value")};
},{"./_is-object":"BxvP"}],"Gfzd":[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_ie8-dom-define"),t=require("./_to-primitive"),i=Object.defineProperty;exports.f=require("./_descriptors")?Object.defineProperty:function(o,n,u){if(e(o),n=t(n,!0),e(u),r)try{return i(o,n,u)}catch(c){}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(o[n]=u.value),o};
},{"./_an-object":"zotD","./_ie8-dom-define":"R6c1","./_to-primitive":"EKwp","./_descriptors":"MLNE"}],"e8vu":[function(require,module,exports) {
var e=require("./_uid")("meta"),r=require("./_is-object"),t=require("./_has"),n=require("./_object-dp").f,i=0,u=Object.isExtensible||function(){return!0},f=!require("./_fails")(function(){return u(Object.preventExtensions({}))}),o=function(r){n(r,e,{value:{i:"O"+ ++i,w:{}}})},s=function(n,i){if(!r(n))return"symbol"==typeof n?n:("string"==typeof n?"S":"P")+n;if(!t(n,e)){if(!u(n))return"F";if(!i)return"E";o(n)}return n[e].i},c=function(r,n){if(!t(r,e)){if(!u(r))return!0;if(!n)return!1;o(r)}return r[e].w},E=function(r){return f&&a.NEED&&u(r)&&!t(r,e)&&o(r),r},a=module.exports={KEY:e,NEED:!1,fastKey:s,getWeak:c,onFreeze:E};
},{"./_uid":"X6va","./_is-object":"BxvP","./_has":"yS17","./_object-dp":"Gfzd","./_fails":"wLcK"}],"zKeE":[function(require,module,exports) {
var e=module.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e);
},{}],"g31e":[function(require,module,exports) {
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};
},{}],"zRh1":[function(require,module,exports) {
var r=require("./_a-function");module.exports=function(n,t,u){if(r(n),void 0===t)return n;switch(u){case 1:return function(r){return n.call(t,r)};case 2:return function(r,u){return n.call(t,r,u)};case 3:return function(r,u,e){return n.call(t,r,u,e)}}return function(){return n.apply(t,arguments)}};
},{"./_a-function":"g31e"}],"WCHM":[function(require,module,exports) {
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
},{}],"akPY":[function(require,module,exports) {
var r=require("./_object-dp"),e=require("./_property-desc");module.exports=require("./_descriptors")?function(t,u,o){return r.f(t,u,e(1,o))}:function(r,e,t){return r[e]=t,r};
},{"./_object-dp":"Gfzd","./_property-desc":"WCHM","./_descriptors":"MLNE"}],"vSO4":[function(require,module,exports) {

var e=require("./_global"),r=require("./_core"),n=require("./_ctx"),t=require("./_hide"),i=require("./_has"),u="prototype",o=function(c,a,f){var l,s,p,h=c&o.F,v=c&o.G,q=c&o.S,w=c&o.P,_=c&o.B,y=c&o.W,d=v?r:r[a]||(r[a]={}),F=d[u],g=v?e:q?e[a]:(e[a]||{})[u];for(l in v&&(f=a),f)(s=!h&&g&&void 0!==g[l])&&i(d,l)||(p=s?g[l]:f[l],d[l]=v&&"function"!=typeof g[l]?f[l]:_&&s?n(p,e):y&&g[l]==p?function(e){var r=function(r,n,t){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,t)}return e.apply(this,arguments)};return r[u]=e[u],r}(p):w&&"function"==typeof p?n(Function.call,p):p,w&&((d.virtual||(d.virtual={}))[l]=p,c&o.R&&F&&!F[l]&&t(F,l,p)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,module.exports=o;
},{"./_global":"i1Q6","./_core":"zKeE","./_ctx":"zRh1","./_hide":"akPY","./_has":"yS17"}],"cOHw":[function(require,module,exports) {
var e=require("./_export"),r=require("./_core"),t=require("./_fails");module.exports=function(c,i){var o=(r.Object||{})[c]||Object[c],u={};u[c]=i(o),e(e.S+e.F*t(function(){o(1)}),"Object",u)};
},{"./_export":"vSO4","./_core":"zKeE","./_fails":"wLcK"}],"Bdru":[function(require,module,exports) {
var e=require("./_is-object"),r=require("./_meta").onFreeze;require("./_object-sap")("freeze",function(n){return function(t){return n&&e(t)?n(r(t)):t}});
},{"./_is-object":"BxvP","./_meta":"e8vu","./_object-sap":"cOHw"}],"KnFz":[function(require,module,exports) {
require("../../modules/es6.object.freeze"),module.exports=require("../../modules/_core").Object.freeze;
},{"../../modules/es6.object.freeze":"Bdru","../../modules/_core":"zKeE"}],"LJ37":[function(require,module,exports) {
module.exports=require("core-js/library/fn/object/freeze");
},{"core-js/library/fn/object/freeze":"KnFz"}],"oJ6W":[function(require,module,exports) {
var define;
var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var t=r(require("@babel/runtime-corejs2/core-js/object/freeze"));function r(e){return e&&e.__esModule?e:{default:e}}function n(e){var r=this.getInstance("viewport");function n(){return document.querySelector(e)}var u={define:function(){var e=r.get().getConstraints(),t=n();t.width=e.width,t.height=e.height},getCtx:function(){return n().getContext("2d")}};return(0,t.default)(u)}
},{"@babel/runtime-corejs2/core-js/object/freeze":"LJ37"}],"JFRn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=t(require("@babel/runtime-corejs2/core-js/object/freeze"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){var r="window"===t?function(){var e=window,t=e.innerWidth,r=e.innerHeight;return{width:t,height:r}}:function(){var e=document.querySelector(t).getBoundingClientRect(),r=e.width,n=e.height;return{width:r,height:n}};var n={getConstraints:function(){var e=r();return{width:e.width,height:e.height}}};return(0,e.default)(n)}
},{"@babel/runtime-corejs2/core-js/object/freeze":"LJ37"}],"ID6i":[function(require,module,exports) {
module.exports=function(){};
},{}],"xwDU":[function(require,module,exports) {
module.exports=function(e,n){return{value:n,done:!!e}};
},{}],"dhak":[function(require,module,exports) {
module.exports={};
},{}],"ShN9":[function(require,module,exports) {
var r={}.toString;module.exports=function(t){return r.call(t).slice(8,-1)};
},{}],"E5Ce":[function(require,module,exports) {
var e=require("./_cof");module.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return"String"==e(r)?r.split(""):Object(r)};
},{"./_cof":"ShN9"}],"U72i":[function(require,module,exports) {
module.exports=function(o){if(null==o)throw TypeError("Can't call method on  "+o);return o};
},{}],"Wyka":[function(require,module,exports) {
var e=require("./_iobject"),r=require("./_defined");module.exports=function(i){return e(r(i))};
},{"./_iobject":"E5Ce","./_defined":"U72i"}],"kq3x":[function(require,module,exports) {
module.exports=!0;
},{}],"gojl":[function(require,module,exports) {
module.exports=require("./_hide");
},{"./_hide":"akPY"}],"MpYs":[function(require,module,exports) {
var o=Math.ceil,r=Math.floor;module.exports=function(t){return isNaN(t=+t)?0:(t>0?r:o)(t)};
},{}],"S7IM":[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.min;module.exports=function(t){return t>0?r(e(t),9007199254740991):0};
},{"./_to-integer":"MpYs"}],"Zwq5":[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.max,t=Math.min;module.exports=function(n,a){return(n=e(n))<0?r(n+a,0):t(n,a)};
},{"./_to-integer":"MpYs"}],"LNnS":[function(require,module,exports) {
var e=require("./_to-iobject"),r=require("./_to-length"),t=require("./_to-absolute-index");module.exports=function(n){return function(i,o,u){var f,l=e(i),a=r(l.length),c=t(u,a);if(n&&o!=o){for(;a>c;)if((f=l[c++])!=f)return!0}else for(;a>c;c++)if((n||c in l)&&l[c]===o)return n||c||0;return!n&&-1}};
},{"./_to-iobject":"Wyka","./_to-length":"S7IM","./_to-absolute-index":"Zwq5"}],"NB7d":[function(require,module,exports) {

var r=require("./_core"),e=require("./_global"),o="__core-js_shared__",i=e[o]||(e[o]={});(module.exports=function(r,e){return i[r]||(i[r]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:require("./_library")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"});
},{"./_core":"zKeE","./_global":"i1Q6","./_library":"kq3x"}],"wuYm":[function(require,module,exports) {
var e=require("./_shared")("keys"),r=require("./_uid");module.exports=function(u){return e[u]||(e[u]=r(u))};
},{"./_shared":"NB7d","./_uid":"X6va"}],"B9Lq":[function(require,module,exports) {
var r=require("./_has"),e=require("./_to-iobject"),u=require("./_array-includes")(!1),i=require("./_shared-key")("IE_PROTO");module.exports=function(o,a){var n,s=e(o),t=0,h=[];for(n in s)n!=i&&r(s,n)&&h.push(n);for(;a.length>t;)r(s,n=a[t++])&&(~u(h,n)||h.push(n));return h};
},{"./_has":"yS17","./_to-iobject":"Wyka","./_array-includes":"LNnS","./_shared-key":"wuYm"}],"KxjL":[function(require,module,exports) {
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
},{}],"knrM":[function(require,module,exports) {
var e=require("./_object-keys-internal"),r=require("./_enum-bug-keys");module.exports=Object.keys||function(u){return e(u,r)};
},{"./_object-keys-internal":"B9Lq","./_enum-bug-keys":"KxjL"}],"gjjs":[function(require,module,exports) {
var e=require("./_object-dp"),r=require("./_an-object"),t=require("./_object-keys");module.exports=require("./_descriptors")?Object.defineProperties:function(o,i){r(o);for(var u,c=t(i),n=c.length,s=0;n>s;)e.f(o,u=c[s++],i[u]);return o};
},{"./_object-dp":"Gfzd","./_an-object":"zotD","./_object-keys":"knrM","./_descriptors":"MLNE"}],"ebIA":[function(require,module,exports) {
var e=require("./_global").document;module.exports=e&&e.documentElement;
},{"./_global":"i1Q6"}],"TNJq":[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_object-dps"),t=require("./_enum-bug-keys"),n=require("./_shared-key")("IE_PROTO"),o=function(){},i="prototype",u=function(){var e,r=require("./_dom-create")("iframe"),n=t.length;for(r.style.display="none",require("./_html").appendChild(r),r.src="javascript:",(e=r.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;n--;)delete u[i][t[n]];return u()};module.exports=Object.create||function(t,c){var a;return null!==t?(o[i]=e(t),a=new o,o[i]=null,a[n]=t):a=u(),void 0===c?a:r(a,c)};
},{"./_an-object":"zotD","./_object-dps":"gjjs","./_enum-bug-keys":"KxjL","./_shared-key":"wuYm","./_dom-create":"kxqa","./_html":"ebIA"}],"Ug9I":[function(require,module,exports) {
var e=require("./_shared")("wks"),r=require("./_uid"),o=require("./_global").Symbol,u="function"==typeof o,i=module.exports=function(i){return e[i]||(e[i]=u&&o[i]||(u?o:r)("Symbol."+i))};i.store=e;
},{"./_shared":"NB7d","./_uid":"X6va","./_global":"i1Q6"}],"UtKM":[function(require,module,exports) {
var e=require("./_object-dp").f,r=require("./_has"),o=require("./_wks")("toStringTag");module.exports=function(t,u,i){t&&!r(t=i?t:t.prototype,o)&&e(t,o,{configurable:!0,value:u})};
},{"./_object-dp":"Gfzd","./_has":"yS17","./_wks":"Ug9I"}],"b7Q2":[function(require,module,exports) {
"use strict";var e=require("./_object-create"),r=require("./_property-desc"),t=require("./_set-to-string-tag"),i={};require("./_hide")(i,require("./_wks")("iterator"),function(){return this}),module.exports=function(o,u,s){o.prototype=e(i,{next:r(1,s)}),t(o,u+" Iterator")};
},{"./_object-create":"TNJq","./_property-desc":"WCHM","./_set-to-string-tag":"UtKM","./_hide":"akPY","./_wks":"Ug9I"}],"mbLO":[function(require,module,exports) {
var e=require("./_defined");module.exports=function(r){return Object(e(r))};
},{"./_defined":"U72i"}],"HHE0":[function(require,module,exports) {
var t=require("./_has"),e=require("./_to-object"),o=require("./_shared-key")("IE_PROTO"),r=Object.prototype;module.exports=Object.getPrototypeOf||function(c){return c=e(c),t(c,o)?c[o]:"function"==typeof c.constructor&&c instanceof c.constructor?c.constructor.prototype:c instanceof Object?r:null};
},{"./_has":"yS17","./_to-object":"mbLO","./_shared-key":"wuYm"}],"uRfg":[function(require,module,exports) {
"use strict";var e=require("./_library"),r=require("./_export"),t=require("./_redefine"),i=require("./_hide"),n=require("./_iterators"),u=require("./_iter-create"),o=require("./_set-to-string-tag"),s=require("./_object-gpo"),a=require("./_wks")("iterator"),c=!([].keys&&"next"in[].keys()),f="@@iterator",l="keys",q="values",y=function(){return this};module.exports=function(_,p,h,k,v,w,d){u(h,p,k);var x,b,g,j=function(e){if(!c&&e in I)return I[e];switch(e){case l:case q:return function(){return new h(this,e)}}return function(){return new h(this,e)}},m=p+" Iterator",A=v==q,F=!1,I=_.prototype,O=I[a]||I[f]||v&&I[v],P=O||j(v),z=v?A?j("entries"):P:void 0,B="Array"==p&&I.entries||O;if(B&&(g=s(B.call(new _)))!==Object.prototype&&g.next&&(o(g,m,!0),e||"function"==typeof g[a]||i(g,a,y)),A&&O&&O.name!==q&&(F=!0,P=function(){return O.call(this)}),e&&!d||!c&&!F&&I[a]||i(I,a,P),n[p]=P,n[m]=y,v)if(x={values:A?P:j(q),keys:w?P:j(l),entries:z},d)for(b in x)b in I||t(I,b,x[b]);else r(r.P+r.F*(c||F),p,x);return x};
},{"./_library":"kq3x","./_export":"vSO4","./_redefine":"gojl","./_hide":"akPY","./_iterators":"dhak","./_iter-create":"b7Q2","./_set-to-string-tag":"UtKM","./_object-gpo":"HHE0","./_wks":"Ug9I"}],"OYXR":[function(require,module,exports) {
"use strict";var e=require("./_add-to-unscopables"),r=require("./_iter-step"),t=require("./_iterators"),i=require("./_to-iobject");module.exports=require("./_iter-define")(Array,"Array",function(e,r){this._t=i(e),this._i=0,this._k=r},function(){var e=this._t,t=this._k,i=this._i++;return!e||i>=e.length?(this._t=void 0,r(1)):r(0,"keys"==t?i:"values"==t?e[i]:[i,e[i]])},"values"),t.Arguments=t.Array,e("keys"),e("values"),e("entries");
},{"./_add-to-unscopables":"ID6i","./_iter-step":"xwDU","./_iterators":"dhak","./_to-iobject":"Wyka","./_iter-define":"uRfg"}],"COf8":[function(require,module,exports) {

require("./es6.array.iterator");for(var t=require("./_global"),e=require("./_hide"),i=require("./_iterators"),r=require("./_wks")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),L=0;L<s.length;L++){var a=s[L],l=t[a],S=l&&l.prototype;S&&!S[r]&&e(S,r,a),i[a]=i.Array}
},{"./es6.array.iterator":"OYXR","./_global":"i1Q6","./_hide":"akPY","./_iterators":"dhak","./_wks":"Ug9I"}],"lytE":[function(require,module,exports) {
var e=require("./_to-integer"),r=require("./_defined");module.exports=function(t){return function(n,i){var o,u,c=String(r(n)),d=e(i),a=c.length;return d<0||d>=a?t?"":void 0:(o=c.charCodeAt(d))<55296||o>56319||d+1===a||(u=c.charCodeAt(d+1))<56320||u>57343?t?c.charAt(d):o:t?c.slice(d,d+2):u-56320+(o-55296<<10)+65536}};
},{"./_to-integer":"MpYs","./_defined":"U72i"}],"iUHQ":[function(require,module,exports) {
"use strict";var i=require("./_string-at")(!0);require("./_iter-define")(String,"String",function(i){this._t=String(i),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})});
},{"./_string-at":"lytE","./_iter-define":"uRfg"}],"ZHvQ":[function(require,module,exports) {
var e=require("./_cof"),t=require("./_wks")("toStringTag"),n="Arguments"==e(function(){return arguments}()),r=function(e,t){try{return e[t]}catch(n){}};module.exports=function(u){var o,c,i;return void 0===u?"Undefined":null===u?"Null":"string"==typeof(c=r(o=Object(u),t))?c:n?e(o):"Object"==(i=e(o))&&"function"==typeof o.callee?"Arguments":i};
},{"./_cof":"ShN9","./_wks":"Ug9I"}],"AqTK":[function(require,module,exports) {
var r=require("./_classof"),e=require("./_wks")("iterator"),t=require("./_iterators");module.exports=require("./_core").getIteratorMethod=function(o){if(null!=o)return o[e]||o["@@iterator"]||t[r(o)]};
},{"./_classof":"ZHvQ","./_wks":"Ug9I","./_iterators":"dhak","./_core":"zKeE"}],"ugM7":[function(require,module,exports) {
var r=require("./_an-object"),e=require("./core.get-iterator-method");module.exports=require("./_core").getIterator=function(t){var o=e(t);if("function"!=typeof o)throw TypeError(t+" is not iterable!");return r(o.call(t))};
},{"./_an-object":"zotD","./core.get-iterator-method":"AqTK","./_core":"zKeE"}],"Lvd3":[function(require,module,exports) {
require("../modules/web.dom.iterable"),require("../modules/es6.string.iterator"),module.exports=require("../modules/core.get-iterator");
},{"../modules/web.dom.iterable":"COf8","../modules/es6.string.iterator":"iUHQ","../modules/core.get-iterator":"ugM7"}],"vX4H":[function(require,module,exports) {
module.exports=require("core-js/library/fn/get-iterator");
},{"core-js/library/fn/get-iterator":"Lvd3"}],"ayXv":[function(require,module,exports) {
var r=require("./_cof");module.exports=Array.isArray||function(e){return"Array"==r(e)};
},{"./_cof":"ShN9"}],"K3Lz":[function(require,module,exports) {
var r=require("./_export");r(r.S,"Array",{isArray:require("./_is-array")});
},{"./_export":"vSO4","./_is-array":"ayXv"}],"bW7s":[function(require,module,exports) {
require("../../modules/es6.array.is-array"),module.exports=require("../../modules/_core").Array.isArray;
},{"../../modules/es6.array.is-array":"K3Lz","../../modules/_core":"zKeE"}],"BpbX":[function(require,module,exports) {
module.exports=require("core-js/library/fn/array/is-array");
},{"core-js/library/fn/array/is-array":"bW7s"}],"ZxII":[function(require,module,exports) {
exports.f=require("./_wks");
},{"./_wks":"Ug9I"}],"nFDa":[function(require,module,exports) {
require("../../modules/es6.string.iterator"),require("../../modules/web.dom.iterable"),module.exports=require("../../modules/_wks-ext").f("iterator");
},{"../../modules/es6.string.iterator":"iUHQ","../../modules/web.dom.iterable":"COf8","../../modules/_wks-ext":"ZxII"}],"uGl8":[function(require,module,exports) {
module.exports=require("core-js/library/fn/symbol/iterator");
},{"core-js/library/fn/symbol/iterator":"nFDa"}],"c2zY":[function(require,module,exports) {

var r=require("./_global"),e=require("./_core"),o=require("./_library"),i=require("./_wks-ext"),l=require("./_object-dp").f;module.exports=function(u){var a=e.Symbol||(e.Symbol=o?{}:r.Symbol||{});"_"==u.charAt(0)||u in a||l(a,u,{value:i.f(u)})};
},{"./_global":"i1Q6","./_core":"zKeE","./_library":"kq3x","./_wks-ext":"ZxII","./_object-dp":"Gfzd"}],"Ocr3":[function(require,module,exports) {
exports.f=Object.getOwnPropertySymbols;
},{}],"z7R8":[function(require,module,exports) {
exports.f={}.propertyIsEnumerable;
},{}],"ycyv":[function(require,module,exports) {
var e=require("./_object-keys"),r=require("./_object-gops"),o=require("./_object-pie");module.exports=function(t){var u=e(t),i=r.f;if(i)for(var c,f=i(t),a=o.f,l=0;f.length>l;)a.call(t,c=f[l++])&&u.push(c);return u};
},{"./_object-keys":"knrM","./_object-gops":"Ocr3","./_object-pie":"z7R8"}],"Ni5N":[function(require,module,exports) {
var e=require("./_object-keys-internal"),r=require("./_enum-bug-keys").concat("length","prototype");exports.f=Object.getOwnPropertyNames||function(t){return e(t,r)};
},{"./_object-keys-internal":"B9Lq","./_enum-bug-keys":"KxjL"}],"rMkZ":[function(require,module,exports) {
var e=require("./_to-iobject"),t=require("./_object-gopn").f,o={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],n=function(e){try{return t(e)}catch(o){return r.slice()}};module.exports.f=function(c){return r&&"[object Window]"==o.call(c)?n(c):t(e(c))};
},{"./_to-iobject":"Wyka","./_object-gopn":"Ni5N"}],"sxPs":[function(require,module,exports) {
var e=require("./_object-pie"),r=require("./_property-desc"),i=require("./_to-iobject"),t=require("./_to-primitive"),o=require("./_has"),c=require("./_ie8-dom-define"),u=Object.getOwnPropertyDescriptor;exports.f=require("./_descriptors")?u:function(p,q){if(p=i(p),q=t(q,!0),c)try{return u(p,q)}catch(_){}if(o(p,q))return r(!e.f.call(p,q),p[q])};
},{"./_object-pie":"z7R8","./_property-desc":"WCHM","./_to-iobject":"Wyka","./_to-primitive":"EKwp","./_has":"yS17","./_ie8-dom-define":"R6c1","./_descriptors":"MLNE"}],"Aa2f":[function(require,module,exports) {

"use strict";var e=require("./_global"),r=require("./_has"),t=require("./_descriptors"),i=require("./_export"),n=require("./_redefine"),o=require("./_meta").KEY,u=require("./_fails"),s=require("./_shared"),f=require("./_set-to-string-tag"),c=require("./_uid"),a=require("./_wks"),l=require("./_wks-ext"),p=require("./_wks-define"),b=require("./_enum-keys"),y=require("./_is-array"),h=require("./_an-object"),_=require("./_is-object"),q=require("./_to-object"),g=require("./_to-iobject"),m=require("./_to-primitive"),v=require("./_property-desc"),d=require("./_object-create"),S=require("./_object-gopn-ext"),j=require("./_object-gopd"),O=require("./_object-gops"),w=require("./_object-dp"),k=require("./_object-keys"),P=j.f,F=w.f,E=S.f,N=e.Symbol,J=e.JSON,x=J&&J.stringify,I="prototype",T=a("_hidden"),C=a("toPrimitive"),M={}.propertyIsEnumerable,D=s("symbol-registry"),G=s("symbols"),K=s("op-symbols"),Q=Object[I],W="function"==typeof N&&!!O.f,Y=e.QObject,z=!Y||!Y[I]||!Y[I].findChild,A=t&&u(function(){return 7!=d(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a})?function(e,r,t){var i=P(Q,r);i&&delete Q[r],F(e,r,t),i&&e!==Q&&F(Q,r,i)}:F,B=function(e){var r=G[e]=d(N[I]);return r._k=e,r},H=W&&"symbol"==typeof N.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof N},L=function(e,t,i){return e===Q&&L(K,t,i),h(e),t=m(t,!0),h(i),r(G,t)?(i.enumerable?(r(e,T)&&e[T][t]&&(e[T][t]=!1),i=d(i,{enumerable:v(0,!1)})):(r(e,T)||F(e,T,v(1,{})),e[T][t]=!0),A(e,t,i)):F(e,t,i)},R=function(e,r){h(e);for(var t,i=b(r=g(r)),n=0,o=i.length;o>n;)L(e,t=i[n++],r[t]);return e},U=function(e,r){return void 0===r?d(e):R(d(e),r)},V=function(e){var t=M.call(this,e=m(e,!0));return!(this===Q&&r(G,e)&&!r(K,e))&&(!(t||!r(this,e)||!r(G,e)||r(this,T)&&this[T][e])||t)},X=function(e,t){if(e=g(e),t=m(t,!0),e!==Q||!r(G,t)||r(K,t)){var i=P(e,t);return!i||!r(G,t)||r(e,T)&&e[T][t]||(i.enumerable=!0),i}},Z=function(e){for(var t,i=E(g(e)),n=[],u=0;i.length>u;)r(G,t=i[u++])||t==T||t==o||n.push(t);return n},$=function(e){for(var t,i=e===Q,n=E(i?K:g(e)),o=[],u=0;n.length>u;)!r(G,t=n[u++])||i&&!r(Q,t)||o.push(G[t]);return o};W||(n((N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var e=c(arguments.length>0?arguments[0]:void 0),i=function(t){this===Q&&i.call(K,t),r(this,T)&&r(this[T],e)&&(this[T][e]=!1),A(this,e,v(1,t))};return t&&z&&A(Q,e,{configurable:!0,set:i}),B(e)})[I],"toString",function(){return this._k}),j.f=X,w.f=L,require("./_object-gopn").f=S.f=Z,require("./_object-pie").f=V,O.f=$,t&&!require("./_library")&&n(Q,"propertyIsEnumerable",V,!0),l.f=function(e){return B(a(e))}),i(i.G+i.W+i.F*!W,{Symbol:N});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;ee.length>re;)a(ee[re++]);for(var te=k(a.store),ie=0;te.length>ie;)p(te[ie++]);i(i.S+i.F*!W,"Symbol",{for:function(e){return r(D,e+="")?D[e]:D[e]=N(e)},keyFor:function(e){if(!H(e))throw TypeError(e+" is not a symbol!");for(var r in D)if(D[r]===e)return r},useSetter:function(){z=!0},useSimple:function(){z=!1}}),i(i.S+i.F*!W,"Object",{create:U,defineProperty:L,defineProperties:R,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:$});var ne=u(function(){O.f(1)});i(i.S+i.F*ne,"Object",{getOwnPropertySymbols:function(e){return O.f(q(e))}}),J&&i(i.S+i.F*(!W||u(function(){var e=N();return"[null]"!=x([e])||"{}"!=x({a:e})||"{}"!=x(Object(e))})),"JSON",{stringify:function(e){for(var r,t,i=[e],n=1;arguments.length>n;)i.push(arguments[n++]);if(t=r=i[1],(_(r)||void 0!==e)&&!H(e))return y(r)||(r=function(e,r){if("function"==typeof t&&(r=t.call(this,e,r)),!H(r))return r}),i[1]=r,x.apply(J,i)}}),N[I][C]||require("./_hide")(N[I],C,N[I].valueOf),f(N,"Symbol"),f(Math,"Math",!0),f(e.JSON,"JSON",!0);
},{"./_global":"i1Q6","./_has":"yS17","./_descriptors":"MLNE","./_export":"vSO4","./_redefine":"gojl","./_meta":"e8vu","./_fails":"wLcK","./_shared":"NB7d","./_set-to-string-tag":"UtKM","./_uid":"X6va","./_wks":"Ug9I","./_wks-ext":"ZxII","./_wks-define":"c2zY","./_enum-keys":"ycyv","./_is-array":"ayXv","./_an-object":"zotD","./_is-object":"BxvP","./_to-object":"mbLO","./_to-iobject":"Wyka","./_to-primitive":"EKwp","./_property-desc":"WCHM","./_object-create":"TNJq","./_object-gopn-ext":"rMkZ","./_object-gopd":"sxPs","./_object-gops":"Ocr3","./_object-dp":"Gfzd","./_object-keys":"knrM","./_object-gopn":"Ni5N","./_object-pie":"z7R8","./_library":"kq3x","./_hide":"akPY"}],"tuDi":[function(require,module,exports) {

},{}],"c6mp":[function(require,module,exports) {
require("./_wks-define")("asyncIterator");
},{"./_wks-define":"c2zY"}],"mwfR":[function(require,module,exports) {
require("./_wks-define")("observable");
},{"./_wks-define":"c2zY"}],"Ky5l":[function(require,module,exports) {
require("../../modules/es6.symbol"),require("../../modules/es6.object.to-string"),require("../../modules/es7.symbol.async-iterator"),require("../../modules/es7.symbol.observable"),module.exports=require("../../modules/_core").Symbol;
},{"../../modules/es6.symbol":"Aa2f","../../modules/es6.object.to-string":"tuDi","../../modules/es7.symbol.async-iterator":"c6mp","../../modules/es7.symbol.observable":"mwfR","../../modules/_core":"zKeE"}],"mr6k":[function(require,module,exports) {
module.exports=require("core-js/library/fn/symbol");
},{"core-js/library/fn/symbol":"Ky5l"}],"hEIm":[function(require,module,exports) {
var r=require("./_an-object");module.exports=function(t,e,o,a){try{return a?e(r(o)[0],o[1]):e(o)}catch(n){var c=t.return;throw void 0!==c&&r(c.call(t)),n}};
},{"./_an-object":"zotD"}],"af0K":[function(require,module,exports) {
var r=require("./_iterators"),e=require("./_wks")("iterator"),t=Array.prototype;module.exports=function(o){return void 0!==o&&(r.Array===o||t[e]===o)};
},{"./_iterators":"dhak","./_wks":"Ug9I"}],"vUQk":[function(require,module,exports) {
"use strict";var e=require("./_object-dp"),r=require("./_property-desc");module.exports=function(t,i,o){i in t?e.f(t,i,r(0,o)):t[i]=o};
},{"./_object-dp":"Gfzd","./_property-desc":"WCHM"}],"Lli7":[function(require,module,exports) {
var r=require("./_wks")("iterator"),t=!1;try{var n=[7][r]();n.return=function(){t=!0},Array.from(n,function(){throw 2})}catch(e){}module.exports=function(n,u){if(!u&&!t)return!1;var o=!1;try{var c=[7],a=c[r]();a.next=function(){return{done:o=!0}},c[r]=function(){return a},n(c)}catch(e){}return o};
},{"./_wks":"Ug9I"}],"N484":[function(require,module,exports) {
"use strict";var e=require("./_ctx"),r=require("./_export"),t=require("./_to-object"),i=require("./_iter-call"),o=require("./_is-array-iter"),u=require("./_to-length"),n=require("./_create-property"),a=require("./core.get-iterator-method");r(r.S+r.F*!require("./_iter-detect")(function(e){Array.from(e)}),"Array",{from:function(r){var l,c,f,q,_=t(r),h="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,d=void 0!==y,s=0,g=a(_);if(d&&(y=e(y,v>2?arguments[2]:void 0,2)),null==g||h==Array&&o(g))for(c=new h(l=u(_.length));l>s;s++)n(c,s,d?y(_[s],s):_[s]);else for(q=g.call(_),c=new h;!(f=q.next()).done;s++)n(c,s,d?i(q,y,[f.value,s],!0):f.value);return c.length=s,c}});
},{"./_ctx":"zRh1","./_export":"vSO4","./_to-object":"mbLO","./_iter-call":"hEIm","./_is-array-iter":"af0K","./_to-length":"S7IM","./_create-property":"vUQk","./core.get-iterator-method":"AqTK","./_iter-detect":"Lli7"}],"O35A":[function(require,module,exports) {
require("../../modules/es6.string.iterator"),require("../../modules/es6.array.from"),module.exports=require("../../modules/_core").Array.from;
},{"../../modules/es6.string.iterator":"iUHQ","../../modules/es6.array.from":"N484","../../modules/_core":"zKeE"}],"ybNn":[function(require,module,exports) {
module.exports=require("core-js/library/fn/array/from");
},{"core-js/library/fn/array/from":"O35A"}],"tKBt":[function(require,module,exports) {
"use strict";function e(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function t(e,t){return e.hasOwnProperty(t)?e[t]:{}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.randomInt=e,exports.getObjectKey=t;
},{}],"GwJL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=g;var e=s(require("@babel/runtime-corejs2/core-js/get-iterator")),t=s(require("@babel/runtime-corejs2/core-js/array/is-array")),r=s(require("@babel/runtime-corejs2/core-js/symbol/iterator")),n=s(require("@babel/runtime-corejs2/core-js/symbol")),o=s(require("@babel/runtime-corejs2/core-js/array/from")),a=s(require("@babel/runtime-corejs2/core-js/object/freeze")),i=require("./utils");function s(e){return e&&e.__esModule?e:{default:e}}function u(o,a){var i;if(void 0===n.default||null==o[r.default]){if((0,t.default)(o)||(i=c(o))||a&&o&&"number"==typeof o.length){i&&(o=i);var s=0,u=function(){};return{s:u,n:function(){return s>=o.length?{done:!0}:{done:!1,value:o[s++]}},e:function(e){throw e},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,g=!0,f=!1;return{s:function(){i=(0,e.default)(o)},n:function(){var e=i.next();return g=e.done,e},e:function(e){f=!0,l=e},f:function(){try{g||null==i.return||i.return()}finally{if(f)throw l}}}}function c(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?(0,o.default)(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(){var e=this,t=e.getInstance("constants");function r(){var t,r=e.getInstance("stars"),n=e.getInstance("canvas").get().getCtx(),o=u(r.get().get());try{for(o.s();!(t=o.n()).done;){var a=t.value;a&&(n.beginPath(),n.fillStyle="rgba(208, 72, 12, ".concat(a.brightness/100,")"),n.rect(a.position.x,a.position.y,a.size,a.size),n.fill())}}catch(i){o.e(i)}finally{o.f()}}function n(){for(var r=e.getInstance("viewport"),n=e.getInstance("stars"),o=r.get().getConstraints(),a=0;a<n.get().get().length;a++){var s=n.get().get()[a];if(void 0===s){if(n.get().get().length>t.get().get().maxCount)return void n.get().clear();var u=(0,i.randomInt)(0,10)<=9,c=(0,i.randomInt)(1,8);u?n.get().set(a,n.get().create((0,i.randomInt)(80,100),(0,i.randomInt)(0,o.width),o.height,c)):n.get().set(a,n.get().create((0,i.randomInt)(80,100),o.width,(0,i.randomInt)(0,o.height),c))}else{var l=s.position,g=l.x,f=l.y,d=s.brightness-(0,i.randomInt)(100,1e3)/1e3,v=s.size-(0,i.randomInt)(5,10)/100;g+s.size<0||f+s.size<0||v<=0?n.get().set(a,void 0):n.get().set(a,n.get().create(d,g+-s.velocity/3,f+-s.velocity,s.velocity,v))}}}var o={init:function(){n(),r()},update:function(){var t;t=e.getInstance("viewport").get().getConstraints(),e.getInstance("canvas").get().getCtx().clearRect(0,0,t.width,t.height),r(),n()}};return(0,a.default)(o)}
},{"@babel/runtime-corejs2/core-js/get-iterator":"vX4H","@babel/runtime-corejs2/core-js/array/is-array":"BpbX","@babel/runtime-corejs2/core-js/symbol/iterator":"uGl8","@babel/runtime-corejs2/core-js/symbol":"mr6k","@babel/runtime-corejs2/core-js/array/from":"ybNn","@babel/runtime-corejs2/core-js/object/freeze":"LJ37","./utils":"tKBt"}],"vMwj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=t(require("@babel/runtime-corejs2/core-js/object/freeze"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){var r={start:function e(){window.requestAnimationFrame(function(){t(),e()})}};return(0,e.default)(r)}
},{"@babel/runtime-corejs2/core-js/object/freeze":"LJ37"}],"xhLg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=r(require("@babel/runtime-corejs2/core-js/object/freeze")),t=r(require("./requestFrameRate"));function r(e){return e&&e.__esModule?e:{default:e}}function u(r){var u=(0,t.default)(function(){r.update()});var a={start:function(){r.init(),u.start()}};return(0,e.default)(a)}
},{"@babel/runtime-corejs2/core-js/object/freeze":"LJ37","./requestFrameRate":"vMwj"}],"RZmY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=i(require("@babel/runtime-corejs2/core-js/object/freeze")),t=i(require("./logic")),r=i(require("./engine")),n=require("./utils");function i(e){return e&&e.__esModule?e:{default:e}}function a(){var i=this;var a={start:function(){var e=i.getInstance("canvas");e.get().define();var a=i.getInstance("stars"),u=t.default.call(i);(0,r.default)(u).start(),window.addEventListener("resize",function(){return e.get().define()}),window.onpointerdown=function(e){a.get().add(a.get().create(100,e.clientX,e.clientY,(0,n.randomInt)(1,8)))}}};return(0,e.default)(a)}
},{"@babel/runtime-corejs2/core-js/object/freeze":"LJ37","./logic":"GwJL","./engine":"xhLg","./utils":"tKBt"}],"qArD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=r(require("@babel/runtime-corejs2/core-js/object/freeze"));function r(e){return e&&e.__esModule?e:{default:e}}function t(r,t){var u={get:function(){return{size:r,maxCount:t}}};return(0,e.default)(u)}
},{"@babel/runtime-corejs2/core-js/object/freeze":"LJ37"}],"WB1M":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=r(require("@babel/runtime-corejs2/core-js/object/freeze")),t=require("./utils");function r(e){return e&&e.__esModule?e:{default:e}}function u(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var u={get:function(){return r},set:function(e){r="function"==typeof e?e(r):e},getKey:function(e){return(0,t.getObjectKey)(r,e)}};return(0,e.default)(u)}
},{"@babel/runtime-corejs2/core-js/object/freeze":"LJ37","./utils":"tKBt"}],"mWYi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var e=r(require("@babel/runtime-corejs2/core-js/object/freeze")),t=r(require("./state"));function r(e){return e&&e.__esModule?e:{default:e}}function n(){var r={};var n={createInstance:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=(0,t.default)(n);r[e]=u},getInstance:function(e){return r[e]}};return(0,e.default)(n)}
},{"@babel/runtime-corejs2/core-js/object/freeze":"LJ37","./state":"WB1M"}],"pMrq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=n(require("@babel/runtime-corejs2/core-js/object/freeze")),t=n(require("@babel/runtime-corejs2/core-js/array/from")),r=require("./utils");function n(e){return e&&e.__esModule?e:{default:e}}function u(){var n=this.getInstance("constants"),u=(0,t.default)({length:n.get().get().maxCount});var i={create:function(e,t,u,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.get().get().size,s={x:t,y:u};if(!o){var a=n.get().get().size;o=(0,r.randomInt)(a-a/3,a+a/3)}return{brightness:e,position:s,velocity:i,size:o}},get:function(){return u},set:function(e,t){u[e]=t},add:function(e){u.push(e)},clear:function(){u=u.filter(function(e){return!!e})}};return(0,e.default)(i)}
},{"@babel/runtime-corejs2/core-js/object/freeze":"LJ37","@babel/runtime-corejs2/core-js/array/from":"ybNn","./utils":"tKBt"}],"uBxZ":[function(require,module,exports) {
"use strict";var e=o(require("./components/canvas")),t=o(require("./components/viewport")),n=o(require("./components/animation")),a=o(require("./components/constants")),r=o(require("./components/stateManager")),s=o(require("./components/stars"));function o(e){return e&&e.__esModule?e:{default:e}}function c(o,c,i){var u,d=(0,r.default)();d.createInstance("viewport",(0,t.default)(o)),d.createInstance("constants",(0,a.default)(c,i)),u=d,d.createInstance("canvas",e.default.apply(u,[o])),d.createInstance("stars",s.default.apply(u)),u=d,n.default.apply(u).start()}window.addEventListener("DOMContentLoaded",function(){var e=window.innerWidth;c("#a",12,e/50),c("#b",26,2),c("#c",4,e/20)});
},{"./components/canvas":"oJ6W","./components/viewport":"JFRn","./components/animation":"RZmY","./components/constants":"qArD","./components/stateManager":"mWYi","./components/stars":"pMrq"}]},{},["uBxZ"], null)
//# sourceMappingURL=src.9d1bedd9.js.map