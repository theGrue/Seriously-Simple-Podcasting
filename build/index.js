!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=19)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(15);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,r){var n=r(16),a=r(17);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.React}()},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t,r){"use strict";(function(e){var n=r(8),a=r.n(n),o=r(14),i=r.n(o);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function u(e){var t=e.attributes,r=void 0===t?{}:t,n=e.children,o=void 0===n?null:n,i=e.selfClose,c=void 0!==i&&i,s=e.tagName;return c?a.a.createElement(s,r):a.a.createElement(s,r,o)}var p=function(){function e(){}var t=e.prototype;return t.attribute=function(e,t){return t},t.node=function(e,t){return t},e}(),d=/(url|image|image-set)\(/i,f=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.attribute=function(e,t){return"style"===e&&Object.keys(t).forEach((function(e){String(t[e]).match(d)&&delete t[e]})),t},n}(p),m={a:{content:9,self:!1,type:105},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:9,void:!0},body:{content:127},button:{content:8,type:105},caption:{content:1,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:97},dd:{content:1,parent:["dl"]},dl:{children:["dt","dd"],type:1},dt:{content:1,invalid:["footer","header"],parent:["dl"]},figcaption:{content:1,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:1,void:!0},img:{void:!0},li:{content:1,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:1},picture:{children:["source","img"],type:25},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:8,parent:["ruby","rtc"]},rtc:{content:8,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:8,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:1},tbody:{parent:["table"],children:["tr"]},td:{content:1,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:1,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:1},video:{children:["track","source"]},wbr:{type:9,void:!0}};function h(e){return function(t){m[t]=s({},e,{},m[t])}}["address","main","div","figure","p","pre"].forEach(h({content:1,type:65})),["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(h({content:8,type:73})),["p","pre"].forEach(h({content:8,type:65})),["s","small","span","del","ins"].forEach(h({content:8,type:9})),["article","aside","footer","header","nav","section","blockquote"].forEach(h({content:1,type:67})),["h1","h2","h3","h4","h5","h6"].forEach(h({content:8,type:69})),["audio","canvas","iframe","img","video"].forEach(h({type:89}));var y=Object.freeze(m),b=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],v=Object.keys(y).filter((function(e){return"canvas"!==e&&"iframe"!==e})),g=Object.freeze({alt:1,cite:1,class:1,colspan:3,controls:4,datetime:1,default:4,disabled:4,dir:1,height:1,href:1,id:1,kind:1,label:1,lang:1,loading:1,loop:4,media:1,muted:4,poster:1,role:1,rowspan:3,scope:1,sizes:1,span:3,start:3,style:5,src:1,srclang:1,srcset:1,target:1,title:1,type:1,width:1}),O=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet"}),j=/^<(!doctype|(html|head|body)(\s|>))/i,E=/^(aria\x2D|data\x2D|[0-9A-Z_a-z\u017F\u212A]+:)/i,w=/{{{(\w+)\/?}}}/;function N(){if("undefined"!=typeof window&&"undefined"!=typeof document)return document.implementation.createHTMLDocument("Interweave")}var k=function(){function t(e,t,r,n){void 0===t&&(t={}),void 0===r&&(r=[]),void 0===n&&(n=[]),c(this,"allowed",void 0),c(this,"banned",void 0),c(this,"blocked",void 0),c(this,"container",void 0),c(this,"content",[]),c(this,"props",void 0),c(this,"matchers",void 0),c(this,"filters",void 0),c(this,"keyIndex",void 0),this.props=t,this.matchers=r,this.filters=[].concat(n,[new f]),this.keyIndex=-1,this.container=this.createContainer(e||""),this.allowed=new Set(t.allowList||v),this.banned=new Set(b),this.blocked=new Set(t.blockList)}var r=t.prototype;return r.applyAttributeFilters=function(e,t){return this.filters.reduce((function(t,r){return null!==t&&"function"==typeof r.attribute?r.attribute(e,t):t}),t)},r.applyNodeFilters=function(e,t){return this.filters.reduce((function(t,r){return null!==t&&"function"==typeof r.node?r.node(e,t):t}),t)},r.applyMatchers=function(e,t){var r=this,n={},a=this.props,o=e,i=0,c=null;return this.matchers.forEach((function(e){var u=e.asTag().toLowerCase(),p=r.getTagConfig(u);if(!a[e.inverseName]&&r.isTagAllowed(u)&&r.canRenderChild(t,p)){for(var d="";o&&(c=e.match(o));){var f=c,m=f.index,h=f.length,y=f.match,b=f.valid,v=f.void,g=l(f,["index","length","match","valid","void"]),O=e.propName+i;m>0&&(d+=o.slice(0,m)),b?(d+=v?"{{{"+O+"/}}}":"{{{"+O+"}}}"+y+"{{{/"+O+"}}}",r.keyIndex+=1,i+=1,n[O]={children:y,matcher:e,props:s({},a,{},g,{key:r.keyIndex})}):d+=y,e.greedy?(o=d+o.slice(m+h),d=""):o=o.slice(m+(h||y.length))}e.greedy||(o=d+o)}})),0===i?e:this.replaceTokens(o,n)},r.canRenderChild=function(e,t){return!(!e.tagName||!t.tagName)&&(!e.void&&(e.children.length>0?e.children.includes(t.tagName):!(e.invalid.length>0&&e.invalid.includes(t.tagName))&&(t.parent.length>0?t.parent.includes(e.tagName):!(!e.self&&e.tagName===t.tagName)&&Boolean(e&&e.content&t.type))))},r.convertLineBreaks=function(e){var t=this.props,r=t.noHtml,n=t.disableLineBreaks;if(r||n||e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))return e;var a=e.replace(/\r\n/g,"\n");return a=(a=a.replace(/\n{3,}/g,"\n\n\n")).replace(/\n/g,"<br/>")},r.createContainer=function(t){var r=(e.INTERWEAVE_SSR_POLYFILL||N)();if(r){var n=this.props.containerTagName||"body",a="body"===n||"fragment"===n?r.body:r.createElement(n);return t.match(j)||(a.innerHTML=this.convertLineBreaks(this.props.escapeHtml?i()(t):t)),a}},r.extractAttributes=function(e){var t=this,r=this.props.allowAttributes,n={},a=0;return 1===e.nodeType&&e.attributes?(Array.from(e.attributes).forEach((function(o){var i=o.name,c=o.value,s=i.toLowerCase(),l=g[s]||g[i];if(t.isSafe(e)&&(s.match(E)||(r||l&&2!==l)&&!s.match(/^on/)&&!c.replace(/(\s|\0|&#x0([9AD]);)/,"").match(/(javascript|vbscript|livescript|xss):/i))){var u="style"===s?t.extractStyleAttribute(e):c;4===l?u=!0:3===l?u=parseFloat(String(u)):5!==l&&(u=String(u)),n[O[s]||s]=t.applyAttributeFilters(s,u),a+=1}})),0===a?null:n):null},r.extractStyleAttribute=function(e){var t={};return Array.from(e.style).forEach((function(r){var n=e.style[r];t[r.replace(/-([a-z])/g,(function(e,t){return t.toUpperCase()}))]=n})),t},r.getTagConfig=function(e){var t={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return y[e]?s({},t,{},y[e],{tagName:e}):t},r.isSafe=function(e){if("undefined"!=typeof HTMLAnchorElement&&e instanceof HTMLAnchorElement){var t=e.getAttribute("href");if(t&&"#"===t.charAt(0))return!0;var r=e.protocol.toLowerCase();return":"===r||"http:"===r||"https:"===r||"mailto:"===r||"tel:"===r}return!0},r.isTagAllowed=function(e){return!this.banned.has(e)&&!this.blocked.has(e)&&(this.props.allowElements||this.allowed.has(e))},r.parse=function(){return this.container?this.parseNode(this.container,this.getTagConfig(this.container.nodeName.toLowerCase())):[]},r.parseNode=function(e,t){var r=this,n=this.props,o=n.noHtml,i=n.noHtmlExceptMatchers,c=n.allowElements,l=n.transform,p=[],d="";return Array.from(e.childNodes).forEach((function(e){if(1===e.nodeType){var n=e.nodeName.toLowerCase(),f=r.getTagConfig(n);d&&(p.push(d),d="");var m,h=r.applyNodeFilters(n,e);if(!h)return;if(l){r.keyIndex+=1;var y=r.keyIndex;m=r.parseNode(h,f);var b=l(h,m,f);if(null===b)return;if(void 0!==b)return void p.push(a.a.cloneElement(b,{key:y}));r.keyIndex=y-1}if(r.banned.has(n))return;if(o||i&&"br"!==n||!r.isTagAllowed(n)||!c&&!r.canRenderChild(t,f))p=p.concat(r.parseNode(h,f.tagName?f:t));else{r.keyIndex+=1;var v=r.extractAttributes(h),g={tagName:n};v&&(g.attributes=v),f.void&&(g.selfClose=f.void),p.push(a.a.createElement(u,s({},g,{key:r.keyIndex}),m||r.parseNode(h,f)))}}else if(3===e.nodeType){var O=o&&!i?e.textContent:r.applyMatchers(e.textContent||"",t);Array.isArray(O)?p=p.concat(O):d+=O}})),d&&p.push(d),p},r.replaceTokens=function(e,t){if(!e.includes("{{{"))return e;for(var r=[],n=e,a=null;a=n.match(w);){var o=a,i=o[0],c=o[1],s=a.index,l=i.includes("/");0,s>0&&(r.push(n.slice(0,s)),n=n.slice(s));var u=t[c],p=u.children,d=u.matcher,f=u.props,m=void 0;if(l)m=i.length,r.push(d.createElement(p,f));else{var h=n.match(new RegExp("{{{/"+c+"}}}"));0,m=h.index+h[0].length,r.push(d.createElement(this.replaceTokens(n.slice(i.length,h.index),t),f))}n=n.slice(m)}return n.length>0&&r.push(n),0===r.length?"":1===r.length&&"string"==typeof r[0]?r[0]:r},t}();function _(e){var t,r=e.attributes,n=e.containerTagName,o=e.content,i=e.emptyContent,c=e.parsedContent,s=e.tagName,l=n||s||"div",p="fragment"===l||e.noWrap;if(c)t=c;else{var d=new k(o||"",e).parse();d.length>0&&(t=d)}return t||(t=i),p?a.a.createElement(a.a.Fragment,null,t):a.a.createElement(u,{attributes:r,tagName:l},t)}!function(){function e(e,t,r){c(this,"greedy",!1),c(this,"options",void 0),c(this,"propName",void 0),c(this,"inverseName",void 0),c(this,"factory",void 0),this.options=s({},t),this.propName=e,this.inverseName="no"+(e.charAt(0).toUpperCase()+e.slice(1)),this.factory=r||null}var t=e.prototype;t.createElement=function(e,t){return this.factory?a.a.createElement(this.factory,t,e):this.replaceWith(e,t)},t.doMatch=function(e,t,r,n){return void 0===n&&(n=!1),function(e,t,r,n){void 0===n&&(n=!1);var a=e.match(t instanceof RegExp?t:new RegExp(t,"i"));return a?s({match:a[0],void:n},r(a),{index:a.index,length:a[0].length,valid:!0}):null}(e,t,r,n)},t.onBeforeParse=function(e,t){return e},t.onAfterParse=function(e,t){return e}}();
/**
 * @copyright   2016-2019, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */t.a=function(e){var t=e.attributes,r=e.content,n=void 0===r?"":r,o=e.disableFilters,i=void 0!==o&&o,c=e.disableMatchers,s=void 0!==c&&c,u=e.emptyContent,p=void 0===u?null:u,d=e.filters,f=void 0===d?[]:d,m=e.matchers,h=void 0===m?[]:m,y=e.onAfterParse,b=void 0===y?null:y,v=e.onBeforeParse,g=void 0===v?null:v,O=e.tagName,j=void 0===O?"span":O,E=e.noWrap,w=void 0!==E&&E,N=l(e,["attributes","content","disableFilters","disableMatchers","emptyContent","filters","matchers","onAfterParse","onBeforeParse","tagName","noWrap"]),x=s?[]:h,R=i?[]:f,P=g?[g]:[],S=b?[b]:[];x.forEach((function(e){e.onBeforeParse&&P.push(e.onBeforeParse.bind(e)),e.onAfterParse&&S.push(e.onAfterParse.bind(e))}));var C=P.reduce((function(t,r){return r(t,e)}),n||""),D=new k(C,N,x,R),T=S.reduce((function(t,r){return r(t,e)}),D.parse());return a.a.createElement(_,{attributes:t,containerTagName:e.containerTagName,emptyContent:p,tagName:j,noWrap:w,parsedContent:0===T.length?void 0:T})}}).call(this,r(18))},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},function(e,t,r){"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var n=/["'&<>]/;e.exports=function(e){var t,r=""+e,a=n.exec(r);if(!a)return r;var o="",i=0,c=0;for(i=a.index;i<r.length;i++){switch(r.charCodeAt(i)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}c!==i&&(o+=r.substring(c,i)),c=i+1,o+=t}return c!==i?o+r.substring(c,i):o}},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(2),o=r(12),i=r(3),c=r.n(i),s=r(4),l=r.n(s),u=r(5),p=r.n(u),d=r(6),f=r.n(d),m=r(1),h=r.n(m),y=r(10),b=r(7),v=r(9),g=r.n(v);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var j=function(e){p()(r,e);var t=O(r);function r(){return c()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.episodeRef,a=e.episodes,o=e.activateEpisode;return Object(n.createElement)("div",{className:t},"Select podcast Episode",Object(n.createElement)("select",{ref:r},a.map((function(e,t){return Object(n.createElement)("option",{key:e.id,value:e.id},e.title)}))),Object(n.createElement)("button",{onClick:o},"Go"))}}]),r}(n.Component),E=r(11);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var N=function(e){p()(r,e);var t=w(r);function r(){return c()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){return Object(n.createElement)("p",{className:this.props.className},Object(n.createElement)(E.a,{content:this.props.audioPlayer}))}}]),r}(n.Component);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var _=function(e){p()(r,e);var t=k(r);function r(e){var n,a=e.attributes,o=e.setAttributes,i=e.className;c()(this,r),(n=t.apply(this,arguments)).episodeRef=React.createRef();var s=!0;a.audio_player&&(s=!1);var l={audioPlayer:a.audio_player||""};return n.state={className:i,editing:s,episode:l,episodes:[],setAttributes:o},n}return l()(r,[{key:"componentDidMount",value:function(){var e=this;g()({path:"ssp/v1/episodes"}).then((function(t){var r=[];Object.keys(t).map((function(e){var n={id:t[e].id,title:t[e].title.rendered};r.push(n)})),e.setState({episodes:r})}))}},{key:"render",value:function(){var e=this,t=this.state,r=t.editing,o=t.episodes,i=t.episode,c=t.className,s=t.setAttributes,l=Object(n.createElement)(y.BlockControls,{key:"controls"},Object(n.createElement)(b.Toolbar,null,Object(n.createElement)(b.Button,{className:"components-icon-button components-toolbar__control",label:Object(a.__)("Select Podcast","seriously-simple-podcasting"),onClick:function(){e.setState({editing:!0})},icon:"edit"})));return r?Object(n.createElement)(j,{className:c,episodeRef:this.episodeRef,episodes:o,activateEpisode:function(){var t=e.episodeRef.current.value,r="ssp/v1/audio_player?ssp_podcast_id="+t;g()({path:r}).then((function(r){var n={episodeId:t,audioPlayer:r.audio_player};e.setState({episode:n,editing:!1}),s({id:t,audio_player:n.audioPlayer})}))}}):[l,Object(n.createElement)(N,{className:c,audioPlayer:i.audioPlayer})]}}]),r}(n.Component);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var R=function(e){p()(r,e);var t=x(r);function r(){return c()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){var e={overflow:"hidden"},t={background:"url("+this.props.episodeImage+")",WebkitBackgroundSize:"cover",backgroundSize:"cover"};return Object(n.createElement)("div",{className:this.props.className},Object(n.createElement)("div",{className:"ssp-player ssp-player-large","data-player-instance-number":"1","data-player-waveform-colour":"#fff","data-player-waveform-progress-colour":"#00d4f7","data-source-file":this.props.episodeFileUrl,id:"ssp_player_id_1",style:{background:"#222222"}},Object(n.createElement)("div",{className:"ssp-album-art-container"},Object(n.createElement)("div",{className:"ssp-album-art",style:t})),Object(n.createElement)("div",{style:e},Object(n.createElement)("div",{className:"ssp-player-inner",style:e},Object(n.createElement)("div",{className:"ssp-player-info"},Object(n.createElement)("div",{style:{width:"80%",float:"left"}},Object(n.createElement)("h3",{className:"ssp-player-title episode-title"},this.props.episodeTitle)),Object(n.createElement)("div",{className:"ssp-download-episode",style:{overflow:"hidden",textAlign:"right"}}),Object(n.createElement)("div",null," "),Object(n.createElement)("div",{className:"ssp-media-player"},Object(n.createElement)("div",{className:"ssp-custom-player-controls"},Object(n.createElement)("div",{className:"ssp-play-pause",id:"ssp-play-pause"},Object(n.createElement)("span",{className:"ssp-icon ssp-icon-play_icon"}," ")),Object(n.createElement)("div",{className:"ssp-wave-form"},Object(n.createElement)("div",{className:"ssp-inner"},Object(n.createElement)("div",{"data-waveform-id":"waveform_1",id:"waveform1",className:"ssp-wave"}))),Object(n.createElement)("div",{className:"ssp-time-volume"},Object(n.createElement)("div",{className:"ssp-duration"},Object(n.createElement)("span",{id:"sspPlayedDuration"},"00:00")," / ",Object(n.createElement)("span",{id:"sspTotalDuration"},this.props.episodeDuration)),Object(n.createElement)("div",{className:"ssp-volume"},Object(n.createElement)("div",{className:"ssp-back-thirty-container"},Object(n.createElement)("div",{className:"ssp-back-thirty-control",id:"ssp-back-thirty"},Object(n.createElement)("i",{className:"ssp-icon icon-replay"}," "))),Object(n.createElement)("div",{className:"ssp-playback-speed-label-container"},Object(n.createElement)("div",{className:"ssp-playback-speed-label-wrapper"},Object(n.createElement)("span",{"data-playback-speed-id":"ssp_playback_speed_1",id:"ssp_playback_speed1","data-ssp-playback-rate":1},"1X"))),Object(n.createElement)("div",{className:"ssp-download-container"},Object(n.createElement)("div",{className:"ssp-download-control"},Object(n.createElement)("a",{className:"ssp-episode-download",href:this.props.episodeDownloadUrl,target:"_blank",rel:"noopener noreferrer"},Object(n.createElement)("i",{className:"ssp-icon icon-cloud-download"}," ")))))))))))))}}]),r}(n.Component);function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var S=function(e){p()(r,e);var t=P(r);function r(e){var n,a=e.attributes,o=e.setAttributes,i=e.className;c()(this,r),(n=t.apply(this,arguments)).episodeRef=React.createRef();var s={episodeImage:a.image||"",episodeFileUrl:a.file||"",episodeTitle:a.title||"",episodeDuration:a.duration||"",episodeDownloadUrl:a.download||""},l=!0;return a.title&&(l=!1),n.state={editing:l,className:i,episodes:[],episode:s,setAttributes:o},n}return l()(r,[{key:"componentDidMount",value:function(){var e=this;g()({path:"ssp/v1/episodes"}).then((function(t){var r=[];Object.keys(t).map((function(e){var n={id:t[e].id,title:t[e].title.rendered};r.push(n)})),e.setState({episodes:r})}))}},{key:"render",value:function(){var e=this,t=this.state,r=t.editing,o=t.episodes,i=t.episode,c=t.className,s=t.setAttributes,l=Object(n.createElement)(y.BlockControls,{key:"controls"},Object(n.createElement)(b.Toolbar,null,Object(n.createElement)(b.Button,{className:"components-icon-button components-toolbar__control",label:Object(a.__)("Select Podcast","seriously-simple-podcasting"),onClick:function(){e.setState({editing:!0})},icon:"edit"})));return r?Object(n.createElement)(j,{className:c,episodeRef:this.episodeRef,episodes:o,activateEpisode:function(){var t=e.episodeRef.current.value,r="ssp/v1/episodes?include="+t;g()({path:r}).then((function(r){var n={episodeId:t,episodeImage:r[0].episode_player_image,episodeFileUrl:r[0].meta.audio_file,episodeTitle:r[0].title.rendered,episodeDuration:r[0].meta.duration,episodeDownloadUrl:r[0].download_link};e.setState({episode:n,editing:!1}),s({id:t,image:n.episodeImage,file:n.episodeFileUrl,title:n.episodeTitle,duration:n.episodeDuration,download:n.episodeDownloadUrl})}))}}):[l,Object(n.createElement)(R,{className:this.state.className,episodeImage:i.episodeImage,episodeFileUrl:i.episodeFileUrl,episodeTitle:i.episodeTitle,episodeDuration:i.episodeDuration,episodeDownloadUrl:i.episodeDownloadUrl})]}}]),r}(n.Component),C=r(13),D=r.n(C);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var A=function(e){p()(r,e);var t=T(r);function r(){return c()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.post;return r.audio_player?Object(n.createElement)(N,{className:t,audioPlayer:r.audio_player}):Object(n.createElement)(R,{className:t,episodeImage:r.episode_player_image,episodeFileUrl:r.meta.audio_file,episodeTitle:r.title.rendered,episodeDuration:r.meta.duration,episodeDownloadUrl:r.download_link})}}]),r}(n.Component);function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var F=function(e){p()(r,e);var t=I(r);function r(){return c()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.title,o=e.download,i=e.duration,c=o+"?ref=download",s=o+"?ref=new_window";return Object(n.createElement)("p",{className:t},Object(n.createElement)("a",{href:c,title:r,className:"podcast-meta-download"},Object(a.__)("Download File","seriously-simple-podcasting"))," | ",Object(n.createElement)("a",{href:s,target:"_blank",title:r,className:"podcast-meta-new-window"},Object(a.__)("Play in new window","seriously-simple-podcasting"))," | ",Object(n.createElement)("span",{className:"podcast-meta-duration"},Object(a.__)("Duration","seriously-simple-podcasting"),": ",i))}}]),r}(n.Component);function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var L=function(e){p()(r,e);var t=B(r);function r(){return c()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.post,a=e.attributes,o=D()("podcast-image-link",{"hide-featured-image":!a.featuredImage}),i=D()("podcast-excerpt",{"hide-excerpt":!a.excerpt}),c=D()(t,"podcast-player",{"hide-player":!a.player});return Object(n.createElement)("article",{className:t},Object(n.createElement)("h2",null,Object(n.createElement)("a",{className:"entry-title-link",rel:"bookmark",href:r.link},r.title.rendered)),Object(n.createElement)("div",{className:"podcast-content"},Object(n.createElement)("a",{className:o,href:r.link,"aria-hidden":"true",tabIndex:"-1"},Object(n.createElement)("img",{src:r.episode_featured_image})),Object(n.createElement)(A,{className:c,post:r}),Object(n.createElement)(F,{className:c,title:r.title.rendered,download:r.download_link,duration:r.meta.duration}),Object(n.createElement)("p",{className:i},Object(n.createElement)(E.a,{content:r.excerpt.rendered}))))}}]),r}(n.Component);function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var a=h()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var M=function(e){p()(r,e);var t=U(r);function r(e){var n,a=e.className;return c()(this,r),(n=t.apply(this,arguments)).state={className:a,episodes:[]},n}return l()(r,[{key:"componentDidMount",value:function(){var e=this;g()({path:"ssp/v1/episodes"}).then((function(t){var r=[];Object.keys(t).map((function(e){var n=t[e];r.push(n)})),e.setState({episodes:r})}))}},{key:"render",value:function(){var e=this.state,t=e.className,r=e.episodes,o=this.props,i=o.attributes,c=o.setAttributes,s=i.featuredImage,l=i.excerpt,u=i.player,p=Object(n.createElement)(y.InspectorControls,null,Object(n.createElement)(b.PanelBody,{title:Object(a.__)("Featured Image","seriously-simple-podcasting")},Object(n.createElement)(b.PanelRow,null,Object(n.createElement)("label",{htmlFor:"featured-image-form-toggle"},Object(a.__)("Show Featured Image","seriously-simple-podcasting")),Object(n.createElement)(b.FormToggle,{id:"high-contrast-form-toggle",label:Object(a.__)("Show Featured Image","seriously-simple-podcasting"),checked:s,onChange:function(){c({featuredImage:!s})}}))),Object(n.createElement)(b.PanelBody,{title:Object(a.__)("Podcast Excerpt","seriously-simple-podcasting")},Object(n.createElement)(b.PanelRow,null,Object(n.createElement)("label",{htmlFor:"podcast-excerpt-form-toggle"},Object(a.__)("Show Podcast Excerpt","seriously-simple-podcasting")),Object(n.createElement)(b.FormToggle,{id:"podcast-excerpt-form-toggle",label:Object(a.__)("Show Podcast Excerpt","seriously-simple-podcasting"),checked:l,onChange:function(){c({excerpt:!l})}}))),Object(n.createElement)(b.PanelBody,{title:Object(a.__)("Podcast Player","seriously-simple-podcasting")},Object(n.createElement)(b.PanelRow,null,Object(n.createElement)("label",{htmlFor:"podcast-player-form-toggle"},Object(a.__)("Show Podcast Player","seriously-simple-podcasting")),Object(n.createElement)(b.FormToggle,{id:"podcast-player-form-toggle",label:Object(a.__)("Show Podcast Player","seriously-simple-podcasting"),checked:u,onChange:function(){c({player:!u})}})))),d=r.map((function(e){return Object(n.createElement)(L,{key:e.id,className:t,post:e,attributes:i})}));return[p,Object(n.createElement)("div",null,d)]}}]),r}(n.Component);Object(o.registerBlockType)("seriously-simple-podcasting/audio-player",{title:Object(a.__)("Audio Player","seriously-simple-podcasting"),icon:"controls-volumeon",category:"layout",supports:{multiple:!1},attributes:{id:{type:"string"},audio_player:{type:"string",source:"html",selector:"span"}},edit:_,save:function(e,t){var r=e.attributes,a=(r.id,r.audio_player);return Object(n.createElement)(N,{className:t,audioPlayer:a})}}),Object(o.registerBlockType)("seriously-simple-podcasting/castos-player",{title:Object(a.__)("Castos Player","seriously-simple-podcasting"),icon:"controls-volumeon",category:"layout",supports:{multiple:!1},attributes:{id:{type:"string"},image:{type:"string"},file:{type:"string"},title:{type:"string"},duration:{type:"string"},download:{type:"string"}},edit:S,save:function(e,t){var r=e.attributes,a=(r.id,r.image),o=r.file,i=r.title,c=r.duration,s=r.download;return Object(n.createElement)(R,{className:t,episodeImage:a,episodeFileUrl:o,episodeTitle:i,episodeDuration:c,episodeDownloadUrl:s})}}),Object(o.registerBlockType)("seriously-simple-podcasting/podcast-list",{title:Object(a.__)("Podcast List","seriously-simple-podcasting"),icon:"megaphone",category:"widgets",supports:{multiple:!1},attributes:{featuredImage:{type:"boolean",default:!1},excerpt:{type:"boolean",default:!1},player:{type:"boolean",default:!1}},edit:M})}]);