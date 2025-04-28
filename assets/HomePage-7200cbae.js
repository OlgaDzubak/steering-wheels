import{g as yn,s as Fn,h as On,r as p,E as Dn,c as In,_ as C,a as An,n as D,j as b,b as Mn}from"./index-18dd2f54.js";var $t={exports:{}},P={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=typeof Symbol=="function"&&Symbol.for,Ke=j?Symbol.for("react.element"):60103,Xe=j?Symbol.for("react.portal"):60106,Ce=j?Symbol.for("react.fragment"):60107,Se=j?Symbol.for("react.strict_mode"):60108,ye=j?Symbol.for("react.profiler"):60114,Fe=j?Symbol.for("react.provider"):60109,Oe=j?Symbol.for("react.context"):60110,Ze=j?Symbol.for("react.async_mode"):60111,De=j?Symbol.for("react.concurrent_mode"):60111,Ie=j?Symbol.for("react.forward_ref"):60112,Ae=j?Symbol.for("react.suspense"):60113,Pn=j?Symbol.for("react.suspense_list"):60120,Me=j?Symbol.for("react.memo"):60115,Pe=j?Symbol.for("react.lazy"):60116,Vn=j?Symbol.for("react.block"):60121,Ln=j?Symbol.for("react.fundamental"):60117,Rn=j?Symbol.for("react.responder"):60118,Tn=j?Symbol.for("react.scope"):60119;function z(n){if(typeof n=="object"&&n!==null){var e=n.$$typeof;switch(e){case Ke:switch(n=n.type,n){case Ze:case De:case Ce:case ye:case Se:case Ae:return n;default:switch(n=n&&n.$$typeof,n){case Oe:case Ie:case Pe:case Me:case Fe:return n;default:return e}}case Xe:return e}}}function _t(n){return z(n)===De}P.AsyncMode=Ze;P.ConcurrentMode=De;P.ContextConsumer=Oe;P.ContextProvider=Fe;P.Element=Ke;P.ForwardRef=Ie;P.Fragment=Ce;P.Lazy=Pe;P.Memo=Me;P.Portal=Xe;P.Profiler=ye;P.StrictMode=Se;P.Suspense=Ae;P.isAsyncMode=function(n){return _t(n)||z(n)===Ze};P.isConcurrentMode=_t;P.isContextConsumer=function(n){return z(n)===Oe};P.isContextProvider=function(n){return z(n)===Fe};P.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ke};P.isForwardRef=function(n){return z(n)===Ie};P.isFragment=function(n){return z(n)===Ce};P.isLazy=function(n){return z(n)===Pe};P.isMemo=function(n){return z(n)===Me};P.isPortal=function(n){return z(n)===Xe};P.isProfiler=function(n){return z(n)===ye};P.isStrictMode=function(n){return z(n)===Se};P.isSuspense=function(n){return z(n)===Ae};P.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===Ce||n===De||n===ye||n===Se||n===Ae||n===Pn||typeof n=="object"&&n!==null&&(n.$$typeof===Pe||n.$$typeof===Me||n.$$typeof===Fe||n.$$typeof===Oe||n.$$typeof===Ie||n.$$typeof===Ln||n.$$typeof===Rn||n.$$typeof===Tn||n.$$typeof===Vn)};P.typeOf=z;$t.exports=P;var Bn=$t.exports,Je=Bn,jn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qe={};Qe[Je.ForwardRef]=_n;Qe[Je.Memo]=kt;function ct(n){return Je.isMemo(n)?kt:Qe[n.$$typeof]||jn}var kn=Object.defineProperty,Hn=Object.getOwnPropertyNames,dt=Object.getOwnPropertySymbols,zn=Object.getOwnPropertyDescriptor,Nn=Object.getPrototypeOf,pt=Object.prototype;function Ht(n,e,i){if(typeof e!="string"){if(pt){var r=Nn(e);r&&r!==pt&&Ht(n,r,i)}var t=Hn(e);dt&&(t=t.concat(dt(e)));for(var o=ct(n),u=ct(e),l=0;l<t.length;++l){var a=t[l];if(!$n[a]&&!(i&&i[a])&&!(u&&u[a])&&!(o&&o[a])){var s=zn(e,a);try{kn(n,a,s)}catch{}}}}return n}var Un=Ht;const wo=yn(Un);var E=function(e,i){var r=arguments;if(i==null||!On.call(i,"css"))return p.createElement.apply(void 0,r);var t=r.length,o=new Array(t);o[0]=Dn,o[1]=In(e,i);for(var u=2;u<t;u++)o[u]=r[u];return p.createElement.apply(null,o)};function et(){for(var n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return Fn(e)}var Wn=function(){var e=et.apply(void 0,arguments),i="animation-"+e.name;return{name:i,styles:"@keyframes "+i+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const Gn=(n,e)=>{const[i,r]=p.useState(()=>{try{const o=localStorage.getItem(n);return o?JSON.parse(o):(localStorage.setItem(n,JSON.stringify(e)),e)}catch{return e}});return[i,o=>{try{localStorage.setItem(n,JSON.stringify(o))}catch(u){console.log(u)}r(o)}]},Z={metaDescription:{ua:"Автомобілістам. Перетяжка потертого керма та дрібних деталей автомобілів в шкіру або замінник (ручки КПП, пильники, підлокітники, дверні картки та інше).",ru:"Автомобилистам. Перетяжка потёртого руля и мелких деталей автомобилей в кожу или заменитель (ручки КПП, пыльники, подлокотники, дверные карты и др.)."},pageTitle:{ua:"Перетяжка рулів",ru:"Перетяжка рулей"},title:{ua:"Перетяжка керма та дрібних деталей автомобілів",ru:"Перетяжка рулей и мелких деталей автомобилей"},subTitle:{ua:"(ручки КПП, пильники, підлокітники, дверні картки та інше)",ru:"(ручки КПП, пыльники, подлокотники, дверные карточки и прочее)"},address:{ua:"м. Дніпро",ru:"г. Днепр"},galleryTitle:{ua:"Галерея виконаних робіт",ru:"Галерея выполненных работ"},descriptionField:{ua:"photo_description_ua",ru:"photo_description_ru"}};function re(n){"@babel/helpers - typeof";return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re(n)}function Yn(n,e){if(re(n)!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var r=i.call(n,e||"default");if(re(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function zt(n){var e=Yn(n,"string");return re(e)=="symbol"?e:String(e)}function ue(n,e,i){return e=zt(e),e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function ft(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,r)}return i}function w(n){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?ft(Object(i),!0).forEach(function(r){ue(n,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):ft(Object(i)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(i,r))})}return n}function qn(n){if(Array.isArray(n))return n}function Kn(n,e){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,t,o,u,l=[],a=!0,s=!1;try{if(o=(i=i.call(n)).next,e===0){if(Object(i)!==i)return;a=!1}else for(;!(a=(r=o.call(i)).done)&&(l.push(r.value),l.length!==e);a=!0);}catch(c){s=!0,t=c}finally{try{if(!a&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(s)throw t}}return l}}function Ue(n,e){(e==null||e>n.length)&&(e=n.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=n[i];return r}function Nt(n,e){if(n){if(typeof n=="string")return Ue(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Ue(n,e)}}function Xn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(n,e){return qn(n)||Kn(n,e)||Nt(n,e)||Xn()}function Zn(n,e){if(n==null)return{};var i={},r=Object.keys(n),t,o;for(o=0;o<r.length;o++)t=r[o],!(e.indexOf(t)>=0)&&(i[t]=n[t]);return i}function Q(n,e){if(n==null)return{};var i=Zn(n,e),r,t;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var Jn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Qn(n){var e=n.defaultInputValue,i=e===void 0?"":e,r=n.defaultMenuIsOpen,t=r===void 0?!1:r,o=n.defaultValue,u=o===void 0?null:o,l=n.inputValue,a=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,v=n.onMenuOpen,h=n.value,x=Q(n,Jn),g=p.useState(l!==void 0?l:i),f=J(g,2),m=f[0],y=f[1],F=p.useState(a!==void 0?a:t),O=J(F,2),I=O[0],A=O[1],M=p.useState(h!==void 0?h:u),S=J(M,2),V=S[0],$=S[1],k=p.useCallback(function(N,ee){typeof s=="function"&&s(N,ee),$(N)},[s]),_=p.useCallback(function(N,ee){var te;typeof c=="function"&&(te=c(N,ee)),y(te!==void 0?te:N)},[c]),Y=p.useCallback(function(){typeof v=="function"&&v(),A(!0)},[v]),q=p.useCallback(function(){typeof d=="function"&&d(),A(!1)},[d]),B=l!==void 0?l:m,R=a!==void 0?a:I,G=h!==void 0?h:V;return w(w({},x),{},{inputValue:B,menuIsOpen:R,onChange:k,onInputChange:_,onMenuClose:q,onMenuOpen:Y,value:G})}function ei(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function mt(n,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,zt(r.key),r)}}function ti(n,e,i){return e&&mt(n.prototype,e),i&&mt(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function We(n,e){return We=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},We(n,e)}function ni(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&We(n,e)}function he(n){return he=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},he(n)}function ii(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ri(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ai(n,e){if(e&&(re(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ri(n)}function oi(n){var e=ii();return function(){var r=he(n),t;if(e){var o=he(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return ai(this,t)}}function ui(n){if(Array.isArray(n))return Ue(n)}function si(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function li(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tt(n){return ui(n)||si(n)||Nt(n)||li()}function ci(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const di=Math.min,pi=Math.max,ve=Math.round,ce=Math.floor,ge=n=>({x:n,y:n});function fi(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function Ut(n){return Gt(n)?(n.nodeName||"").toLowerCase():"#document"}function W(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Wt(n){var e;return(e=(Gt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function Gt(n){return n instanceof Node||n instanceof W(n).Node}function Ge(n){return n instanceof Element||n instanceof W(n).Element}function nt(n){return n instanceof HTMLElement||n instanceof W(n).HTMLElement}function ht(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof W(n).ShadowRoot}function Yt(n){const{overflow:e,overflowX:i,overflowY:r,display:t}=it(n);return/auto|scroll|overlay|hidden|clip/.test(e+r+i)&&!["inline","contents"].includes(t)}function mi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function hi(n){return["html","body","#document"].includes(Ut(n))}function it(n){return W(n).getComputedStyle(n)}function vi(n){if(Ut(n)==="html")return n;const e=n.assignedSlot||n.parentNode||ht(n)&&n.host||Wt(n);return ht(e)?e.host:e}function qt(n){const e=vi(n);return hi(e)?n.ownerDocument?n.ownerDocument.body:n.body:nt(e)&&Yt(e)?e:qt(e)}function xe(n,e,i){var r;e===void 0&&(e=[]),i===void 0&&(i=!0);const t=qt(n),o=t===((r=n.ownerDocument)==null?void 0:r.body),u=W(t);return o?e.concat(u,u.visualViewport||[],Yt(t)?t:[],u.frameElement&&i?xe(u.frameElement):[]):e.concat(t,xe(t,[],i))}function gi(n){const e=it(n);let i=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const t=nt(n),o=t?n.offsetWidth:i,u=t?n.offsetHeight:r,l=ve(i)!==o||ve(r)!==u;return l&&(i=o,r=u),{width:i,height:r,$:l}}function rt(n){return Ge(n)?n:n.contextElement}function Le(n){const e=rt(n);if(!nt(e))return ge(1);const i=e.getBoundingClientRect(),{width:r,height:t,$:o}=gi(e);let u=(o?ve(i.width):i.width)/r,l=(o?ve(i.height):i.height)/t;return(!u||!Number.isFinite(u))&&(u=1),(!l||!Number.isFinite(l))&&(l=1),{x:u,y:l}}const xi=ge(0);function bi(n){const e=W(n);return!mi()||!e.visualViewport?xi:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ei(n,e,i){return e===void 0&&(e=!1),!i||e&&i!==W(n)?!1:e}function vt(n,e,i,r){e===void 0&&(e=!1),i===void 0&&(i=!1);const t=n.getBoundingClientRect(),o=rt(n);let u=ge(1);e&&(r?Ge(r)&&(u=Le(r)):u=Le(n));const l=Ei(o,i,r)?bi(o):ge(0);let a=(t.left+l.x)/u.x,s=(t.top+l.y)/u.y,c=t.width/u.x,d=t.height/u.y;if(o){const v=W(o),h=r&&Ge(r)?W(r):r;let x=v.frameElement;for(;x&&r&&h!==v;){const g=Le(x),f=x.getBoundingClientRect(),m=it(x),y=f.left+(x.clientLeft+parseFloat(m.paddingLeft))*g.x,F=f.top+(x.clientTop+parseFloat(m.paddingTop))*g.y;a*=g.x,s*=g.y,c*=g.x,d*=g.y,a+=y,s+=F,x=W(x).frameElement}}return fi({width:c,height:d,x:a,y:s})}function wi(n,e){let i=null,r;const t=Wt(n);function o(){clearTimeout(r),i&&i.disconnect(),i=null}function u(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:s,top:c,width:d,height:v}=n.getBoundingClientRect();if(l||e(),!d||!v)return;const h=ce(c),x=ce(t.clientWidth-(s+d)),g=ce(t.clientHeight-(c+v)),f=ce(s),y={rootMargin:-h+"px "+-x+"px "+-g+"px "+-f+"px",threshold:pi(0,di(1,a))||1};let F=!0;function O(I){const A=I[0].intersectionRatio;if(A!==a){if(!F)return u();A?u(!1,A):r=setTimeout(()=>{u(!1,1e-7)},100)}F=!1}try{i=new IntersectionObserver(O,{...y,root:t.ownerDocument})}catch{i=new IntersectionObserver(O,y)}i.observe(n)}return u(!0),o}function Ci(n,e,i,r){r===void 0&&(r={});const{ancestorScroll:t=!0,ancestorResize:o=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,s=rt(n),c=t||o?[...s?xe(s):[],...xe(e)]:[];c.forEach(m=>{t&&m.addEventListener("scroll",i,{passive:!0}),o&&m.addEventListener("resize",i)});const d=s&&l?wi(s,i):null;let v=-1,h=null;u&&(h=new ResizeObserver(m=>{let[y]=m;y&&y.target===s&&h&&(h.unobserve(e),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{h&&h.observe(e)})),i()}),s&&!a&&h.observe(s),h.observe(e));let x,g=a?vt(n):null;a&&f();function f(){const m=vt(n);g&&(m.x!==g.x||m.y!==g.y||m.width!==g.width||m.height!==g.height)&&i(),g=m,x=requestAnimationFrame(f)}return i(),()=>{c.forEach(m=>{t&&m.removeEventListener("scroll",i),o&&m.removeEventListener("resize",i)}),d&&d(),h&&h.disconnect(),h=null,a&&cancelAnimationFrame(x)}}var Ye=p.useLayoutEffect,Si=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],be=function(){};function yi(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Fi(n,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),t=2;t<i;t++)r[t-2]=arguments[t];var o=[].concat(r);if(e&&n)for(var u in e)e.hasOwnProperty(u)&&e[u]&&o.push("".concat(yi(n,u)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var gt=function(e){return Ri(e)?e.filter(Boolean):re(e)==="object"&&e!==null?[e]:[]},Kt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=Q(e,Si);return w({},i)},L=function(e,i,r){var t=e.cx,o=e.getStyles,u=e.getClassNames,l=e.className;return{css:o(i,e),className:t(r??{},u(i,e),l)}};function Ve(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Oi(n){return Ve(n)?window.innerHeight:n.clientHeight}function Xt(n){return Ve(n)?window.pageYOffset:n.scrollTop}function Ee(n,e){if(Ve(n)){window.scrollTo(0,e);return}n.scrollTop=e}function Di(n){var e=getComputedStyle(n),i=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(i&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function Ii(n,e,i,r){return i*((n=n/r-1)*n*n+1)+e}function de(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:be,t=Xt(n),o=e-t,u=10,l=0;function a(){l+=u;var s=Ii(l,t,o,i);Ee(n,s),l<i?window.requestAnimationFrame(a):r(n)}a()}function xt(n,e){var i=n.getBoundingClientRect(),r=e.getBoundingClientRect(),t=e.offsetHeight/3;r.bottom+t>i.bottom?Ee(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):r.top-t<i.top&&Ee(n,Math.max(e.offsetTop-t,0))}function Ai(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function bt(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Mi(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Zt=!1,Pi={get passive(){return Zt=!0}},pe=typeof window<"u"?window:{};pe.addEventListener&&pe.removeEventListener&&(pe.addEventListener("p",be,Pi),pe.removeEventListener("p",be,!1));var Vi=Zt;function Li(n){return n!=null}function Ri(n){return Array.isArray(n)}function fe(n,e,i){return n?e:i}var Ti=function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),t=1;t<i;t++)r[t-1]=arguments[t];var o=Object.entries(e).filter(function(u){var l=J(u,1),a=l[0];return!r.includes(a)});return o.reduce(function(u,l){var a=J(l,2),s=a[0],c=a[1];return u[s]=c,u},{})},Bi=["children","innerProps"],ji=["children","innerProps"];function $i(n){var e=n.maxHeight,i=n.menuEl,r=n.minHeight,t=n.placement,o=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,a=Di(i),s={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return s;var c=a.getBoundingClientRect(),d=c.height,v=i.getBoundingClientRect(),h=v.bottom,x=v.height,g=v.top,f=i.offsetParent.getBoundingClientRect(),m=f.top,y=u?window.innerHeight:Oi(a),F=Xt(a),O=parseInt(getComputedStyle(i).marginBottom,10),I=parseInt(getComputedStyle(i).marginTop,10),A=m-I,M=y-g,S=A+F,V=d-F-g,$=h-y+F+O,k=F+g-I,_=160;switch(t){case"auto":case"bottom":if(M>=x)return{placement:"bottom",maxHeight:e};if(V>=x&&!u)return o&&de(a,$,_),{placement:"bottom",maxHeight:e};if(!u&&V>=r||u&&M>=r){o&&de(a,$,_);var Y=u?M-O:V-O;return{placement:"bottom",maxHeight:Y}}if(t==="auto"||u){var q=e,B=u?A:S;return B>=r&&(q=Math.min(B-O-l,e)),{placement:"top",maxHeight:q}}if(t==="bottom")return o&&Ee(a,$),{placement:"bottom",maxHeight:e};break;case"top":if(A>=x)return{placement:"top",maxHeight:e};if(S>=x&&!u)return o&&de(a,k,_),{placement:"top",maxHeight:e};if(!u&&S>=r||u&&A>=r){var R=e;return(!u&&S>=r||u&&A>=r)&&(R=u?A-I:S-I),o&&de(a,k,_),{placement:"top",maxHeight:R}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return s}function _i(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var Jt=function(e){return e==="auto"?"bottom":e},ki=function(e,i){var r,t=e.placement,o=e.theme,u=o.borderRadius,l=o.spacing,a=o.colors;return w((r={label:"menu"},ue(r,_i(t),"100%"),ue(r,"position","absolute"),ue(r,"width","100%"),ue(r,"zIndex",1),r),i?{}:{backgroundColor:a.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Qt=p.createContext(null),Hi=function(e){var i=e.children,r=e.minMenuHeight,t=e.maxMenuHeight,o=e.menuPlacement,u=e.menuPosition,l=e.menuShouldScrollIntoView,a=e.theme,s=p.useContext(Qt)||{},c=s.setPortalPlacement,d=p.useRef(null),v=p.useState(t),h=J(v,2),x=h[0],g=h[1],f=p.useState(null),m=J(f,2),y=m[0],F=m[1],O=a.spacing.controlHeight;return Ye(function(){var I=d.current;if(I){var A=u==="fixed",M=l&&!A,S=$i({maxHeight:t,menuEl:I,minHeight:r,placement:o,shouldScroll:M,isFixedPosition:A,controlHeight:O});g(S.maxHeight),F(S.placement),c==null||c(S.placement)}},[t,o,u,l,r,c,O]),i({ref:d,placerProps:w(w({},e),{},{placement:y||Jt(o),maxHeight:x})})},zi=function(e){var i=e.children,r=e.innerRef,t=e.innerProps;return E("div",C({},L(e,"menu",{menu:!0}),{ref:r},t),i)},Ni=zi,Ui=function(e,i){var r=e.maxHeight,t=e.theme.spacing.baseUnit;return w({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:t,paddingTop:t})},Wi=function(e){var i=e.children,r=e.innerProps,t=e.innerRef,o=e.isMulti;return E("div",C({},L(e,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:t},r),i)},en=function(e,i){var r=e.theme,t=r.spacing.baseUnit,o=r.colors;return w({textAlign:"center"},i?{}:{color:o.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},Gi=en,Yi=en,qi=function(e){var i=e.children,r=i===void 0?"No options":i,t=e.innerProps,o=Q(e,Bi);return E("div",C({},L(w(w({},o),{},{children:r,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),r)},Ki=function(e){var i=e.children,r=i===void 0?"Loading...":i,t=e.innerProps,o=Q(e,ji);return E("div",C({},L(w(w({},o),{},{children:r,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),r)},Xi=function(e){var i=e.rect,r=e.offset,t=e.position;return{left:i.left,position:t,top:r,width:i.width,zIndex:1}},Zi=function(e){var i=e.appendTo,r=e.children,t=e.controlElement,o=e.innerProps,u=e.menuPlacement,l=e.menuPosition,a=p.useRef(null),s=p.useRef(null),c=p.useState(Jt(u)),d=J(c,2),v=d[0],h=d[1],x=p.useMemo(function(){return{setPortalPlacement:h}},[]),g=p.useState(null),f=J(g,2),m=f[0],y=f[1],F=p.useCallback(function(){if(t){var M=Ai(t),S=l==="fixed"?0:window.pageYOffset,V=M[v]+S;(V!==(m==null?void 0:m.offset)||M.left!==(m==null?void 0:m.rect.left)||M.width!==(m==null?void 0:m.rect.width))&&y({offset:V,rect:M})}},[t,l,v,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);Ye(function(){F()},[F]);var O=p.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),t&&a.current&&(s.current=Ci(t,a.current,F,{elementResize:"ResizeObserver"in window}))},[t,F]);Ye(function(){O()},[O]);var I=p.useCallback(function(M){a.current=M,O()},[O]);if(!i&&l!=="fixed"||!m)return null;var A=E("div",C({ref:I},L(w(w({},e),{},{offset:m.offset,position:l,rect:m.rect}),"menuPortal",{"menu-portal":!0}),o),r);return E(Qt.Provider,{value:x},i?An.createPortal(A,i):A)},Ji=function(e){var i=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},Qi=function(e){var i=e.children,r=e.innerProps,t=e.isDisabled,o=e.isRtl;return E("div",C({},L(e,"container",{"--is-disabled":t,"--is-rtl":o}),r),i)},er=function(e,i){var r=e.theme.spacing,t=e.isMulti,o=e.hasValue,u=e.selectProps.controlShouldRenderValue;return w({alignItems:"center",display:t&&o&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},tr=function(e){var i=e.children,r=e.innerProps,t=e.isMulti,o=e.hasValue;return E("div",C({},L(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":o}),r),i)},nr=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},ir=function(e){var i=e.children,r=e.innerProps;return E("div",C({},L(e,"indicatorsContainer",{indicators:!0}),r),i)},Et,rr=["size"],ar=["innerProps","isRtl","size"],or={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},tn=function(e){var i=e.size,r=Q(e,rr);return E("svg",C({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:or},r))},at=function(e){return E(tn,C({size:20},e),E("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},nn=function(e){return E(tn,C({size:20},e),E("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},rn=function(e,i){var r=e.isFocused,t=e.theme,o=t.spacing.baseUnit,u=t.colors;return w({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?u.neutral60:u.neutral20,padding:o*2,":hover":{color:r?u.neutral80:u.neutral40}})},ur=rn,sr=function(e){var i=e.children,r=e.innerProps;return E("div",C({},L(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||E(nn,null))},lr=rn,cr=function(e){var i=e.children,r=e.innerProps;return E("div",C({},L(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||E(at,null))},dr=function(e,i){var r=e.isDisabled,t=e.theme,o=t.spacing.baseUnit,u=t.colors;return w({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?u.neutral10:u.neutral20,marginBottom:o*2,marginTop:o*2})},pr=function(e){var i=e.innerProps;return E("span",C({},i,L(e,"indicatorSeparator",{"indicator-separator":!0})))},fr=Wn(Et||(Et=ci([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),mr=function(e,i){var r=e.isFocused,t=e.size,o=e.theme,u=o.colors,l=o.spacing.baseUnit;return w({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?u.neutral60:u.neutral20,padding:l*2})},Re=function(e){var i=e.delay,r=e.offset;return E("span",{css:et({animation:"".concat(fr," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},hr=function(e){var i=e.innerProps,r=e.isRtl,t=e.size,o=t===void 0?4:t,u=Q(e,ar);return E("div",C({},L(w(w({},u),{},{innerProps:i,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),E(Re,{delay:0,offset:r}),E(Re,{delay:160,offset:!0}),E(Re,{delay:320,offset:!r}))},vr=function(e,i){var r=e.isDisabled,t=e.isFocused,o=e.theme,u=o.colors,l=o.borderRadius,a=o.spacing;return w({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?u.neutral5:u.neutral0,borderColor:r?u.neutral10:t?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:t?u.primary:u.neutral30}})},gr=function(e){var i=e.children,r=e.isDisabled,t=e.isFocused,o=e.innerRef,u=e.innerProps,l=e.menuIsOpen;return E("div",C({ref:o},L(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":t,"control--menu-is-open":l}),u,{"aria-disabled":r||void 0}),i)},xr=gr,br=["data"],Er=function(e,i){var r=e.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},wr=function(e){var i=e.children,r=e.cx,t=e.getStyles,o=e.getClassNames,u=e.Heading,l=e.headingProps,a=e.innerProps,s=e.label,c=e.theme,d=e.selectProps;return E("div",C({},L(e,"group",{group:!0}),a),E(u,C({},l,{selectProps:d,theme:c,getStyles:t,getClassNames:o,cx:r}),s),E("div",null,i))},Cr=function(e,i){var r=e.theme,t=r.colors,o=r.spacing;return w({label:"group",cursor:"default",display:"block"},i?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},Sr=function(e){var i=Kt(e);i.data;var r=Q(i,br);return E("div",C({},L(e,"groupHeading",{"group-heading":!0}),r))},yr=wr,Fr=["innerRef","isDisabled","isHidden","inputClassName"],Or=function(e,i){var r=e.isDisabled,t=e.value,o=e.theme,u=o.spacing,l=o.colors;return w(w({visibility:r?"hidden":"visible",transform:t?"translateZ(0)":""},Dr),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},an={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Dr={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":w({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},an)},Ir=function(e){return w({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},an)},Ar=function(e){var i=e.cx,r=e.value,t=Kt(e),o=t.innerRef,u=t.isDisabled,l=t.isHidden,a=t.inputClassName,s=Q(t,Fr);return E("div",C({},L(e,"input",{"input-container":!0}),{"data-value":r||""}),E("input",C({className:i({input:!0},a),ref:o,style:Ir(l),disabled:u},s)))},Mr=Ar,Pr=function(e,i){var r=e.theme,t=r.spacing,o=r.borderRadius,u=r.colors;return w({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:o/2,margin:t.baseUnit/2})},Vr=function(e,i){var r=e.theme,t=r.borderRadius,o=r.colors,u=e.cropWithEllipsis;return w({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:t/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Lr=function(e,i){var r=e.theme,t=r.spacing,o=r.borderRadius,u=r.colors,l=e.isFocused;return w({alignItems:"center",display:"flex"},i?{}:{borderRadius:o/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},on=function(e){var i=e.children,r=e.innerProps;return E("div",r,i)},Rr=on,Tr=on;function Br(n){var e=n.children,i=n.innerProps;return E("div",C({role:"button"},i),e||E(at,{size:14}))}var jr=function(e){var i=e.children,r=e.components,t=e.data,o=e.innerProps,u=e.isDisabled,l=e.removeProps,a=e.selectProps,s=r.Container,c=r.Label,d=r.Remove;return E(s,{data:t,innerProps:w(w({},L(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),o),selectProps:a},E(c,{data:t,innerProps:w({},L(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},i),E(d,{data:t,innerProps:w(w({},L(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:a}))},$r=jr,_r=function(e,i){var r=e.isDisabled,t=e.isFocused,o=e.isSelected,u=e.theme,l=u.spacing,a=u.colors;return w({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:o?a.primary:t?a.primary25:"transparent",color:r?a.neutral20:o?a.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?a.primary:a.primary50}})},kr=function(e){var i=e.children,r=e.isDisabled,t=e.isFocused,o=e.isSelected,u=e.innerRef,l=e.innerProps;return E("div",C({},L(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":t,"option--is-selected":o}),{ref:u,"aria-disabled":r},l),i)},Hr=kr,zr=function(e,i){var r=e.theme,t=r.spacing,o=r.colors;return w({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:o.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},Nr=function(e){var i=e.children,r=e.innerProps;return E("div",C({},L(e,"placeholder",{placeholder:!0}),r),i)},Ur=Nr,Wr=function(e,i){var r=e.isDisabled,t=e.theme,o=t.spacing,u=t.colors;return w({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?u.neutral40:u.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},Gr=function(e){var i=e.children,r=e.isDisabled,t=e.innerProps;return E("div",C({},L(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),t),i)},Yr=Gr,qr={ClearIndicator:cr,Control:xr,DropdownIndicator:sr,DownChevron:nn,CrossIcon:at,Group:yr,GroupHeading:Sr,IndicatorsContainer:ir,IndicatorSeparator:pr,Input:Mr,LoadingIndicator:hr,Menu:Ni,MenuList:Wi,MenuPortal:Zi,LoadingMessage:Ki,NoOptionsMessage:qi,MultiValue:$r,MultiValueContainer:Rr,MultiValueLabel:Tr,MultiValueRemove:Br,Option:Hr,Placeholder:Ur,SelectContainer:Qi,SingleValue:Yr,ValueContainer:tr},Kr=function(e){return w(w({},qr),e.components)},wt=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Xr(n,e){return!!(n===e||wt(n)&&wt(e))}function Zr(n,e){if(n.length!==e.length)return!1;for(var i=0;i<n.length;i++)if(!Xr(n[i],e[i]))return!1;return!0}function Jr(n,e){e===void 0&&(e=Zr);var i=null;function r(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];if(i&&i.lastThis===this&&e(t,i.lastArgs))return i.lastResult;var u=n.apply(this,t);return i={lastResult:u,lastArgs:t,lastThis:this},u}return r.clear=function(){i=null},r}var Qr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},ea=function(e){return E("span",C({css:Qr},e))},Ct=ea,ta={guidance:function(e){var i=e.isSearchable,r=e.isMulti,t=e.tabSelectsValue,o=e.context,u=e.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,r=e.label,t=r===void 0?"":r,o=e.labels,u=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return u?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var i=e.context,r=e.focused,t=e.options,o=e.label,u=o===void 0?"":o,l=e.selectValue,a=e.isDisabled,s=e.isSelected,c=e.isAppleDevice,d=function(g,f){return g&&g.length?"".concat(g.indexOf(f)+1," of ").concat(g.length):""};if(i==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,r),".");if(i==="menu"&&c){var v=a?" disabled":"",h="".concat(s?" selected":"").concat(v);return"".concat(u).concat(h,", ").concat(d(t,r),".")}return""},onFilter:function(e){var i=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},na=function(e){var i=e.ariaSelection,r=e.focusedOption,t=e.focusedValue,o=e.focusableOptions,u=e.isFocused,l=e.selectValue,a=e.selectProps,s=e.id,c=e.isAppleDevice,d=a.ariaLiveMessages,v=a.getOptionLabel,h=a.inputValue,x=a.isMulti,g=a.isOptionDisabled,f=a.isSearchable,m=a.menuIsOpen,y=a.options,F=a.screenReaderStatus,O=a.tabSelectsValue,I=a.isLoading,A=a["aria-label"],M=a["aria-live"],S=p.useMemo(function(){return w(w({},ta),d||{})},[d]),V=p.useMemo(function(){var B="";if(i&&S.onChange){var R=i.option,G=i.options,N=i.removedValue,ee=i.removedValues,te=i.value,se=function(X){return Array.isArray(X)?null:X},T=N||R||se(te),H=T?v(T):"",K=G||ee||void 0,ne=K?K.map(v):[],U=w({isDisabled:T&&g(T,l),label:H,labels:ne},i);B=S.onChange(U)}return B},[i,S,g,l,v]),$=p.useMemo(function(){var B="",R=r||t,G=!!(r&&l&&l.includes(r));if(R&&S.onFocus){var N={focused:R,label:v(R),isDisabled:g(R,l),isSelected:G,options:o,context:R===r?"menu":"value",selectValue:l,isAppleDevice:c};B=S.onFocus(N)}return B},[r,t,v,g,S,o,l,c]),k=p.useMemo(function(){var B="";if(m&&y.length&&!I&&S.onFilter){var R=F({count:o.length});B=S.onFilter({inputValue:h,resultsMessage:R})}return B},[o,h,m,S,y,F,I]),_=(i==null?void 0:i.action)==="initial-input-focus",Y=p.useMemo(function(){var B="";if(S.guidance){var R=t?"value":m?"menu":"input";B=S.guidance({"aria-label":A,context:R,isDisabled:r&&g(r,l),isMulti:x,isSearchable:f,tabSelectsValue:O,isInitialFocus:_})}return B},[A,r,t,x,g,f,m,S,l,O,_]),q=E(p.Fragment,null,E("span",{id:"aria-selection"},V),E("span",{id:"aria-focused"},$),E("span",{id:"aria-results"},k),E("span",{id:"aria-guidance"},Y));return E(p.Fragment,null,E(Ct,{id:s},_&&q),E(Ct,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!_&&q))},ia=na,qe=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],ra=new RegExp("["+qe.map(function(n){return n.letters}).join("")+"]","g"),un={};for(var Te=0;Te<qe.length;Te++)for(var Be=qe[Te],je=0;je<Be.letters.length;je++)un[Be.letters[je]]=Be.base;var sn=function(e){return e.replace(ra,function(i){return un[i]})},aa=Jr(sn),St=function(e){return e.replace(/^\s+|\s+$/g,"")},oa=function(e){return"".concat(e.label," ").concat(e.value)},ua=function(e){return function(i,r){if(i.data.__isNew__)return!0;var t=w({ignoreCase:!0,ignoreAccents:!0,stringify:oa,trim:!0,matchFrom:"any"},e),o=t.ignoreCase,u=t.ignoreAccents,l=t.stringify,a=t.trim,s=t.matchFrom,c=a?St(r):r,d=a?St(l(i)):l(i);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=aa(c),d=sn(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},sa=["innerRef"];function la(n){var e=n.innerRef,i=Q(n,sa),r=Ti(i,"onExited","in","enter","exit","appear");return E("input",C({ref:e},r,{css:et({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var ca=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function da(n){var e=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,t=n.onTopArrive,o=n.onTopLeave,u=p.useRef(!1),l=p.useRef(!1),a=p.useRef(0),s=p.useRef(null),c=p.useCallback(function(f,m){if(s.current!==null){var y=s.current,F=y.scrollTop,O=y.scrollHeight,I=y.clientHeight,A=s.current,M=m>0,S=O-I-F,V=!1;S>m&&u.current&&(r&&r(f),u.current=!1),M&&l.current&&(o&&o(f),l.current=!1),M&&m>S?(i&&!u.current&&i(f),A.scrollTop=O,V=!0,u.current=!0):!M&&-m>F&&(t&&!l.current&&t(f),A.scrollTop=0,V=!0,l.current=!0),V&&ca(f)}},[i,r,t,o]),d=p.useCallback(function(f){c(f,f.deltaY)},[c]),v=p.useCallback(function(f){a.current=f.changedTouches[0].clientY},[]),h=p.useCallback(function(f){var m=a.current-f.changedTouches[0].clientY;c(f,m)},[c]),x=p.useCallback(function(f){if(f){var m=Vi?{passive:!1}:!1;f.addEventListener("wheel",d,m),f.addEventListener("touchstart",v,m),f.addEventListener("touchmove",h,m)}},[h,v,d]),g=p.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",v,!1),f.removeEventListener("touchmove",h,!1))},[h,v,d]);return p.useEffect(function(){if(e){var f=s.current;return x(f),function(){g(f)}}},[e,x,g]),function(f){s.current=f}}var yt=["boxSizing","height","overflow","paddingRight","position"],Ft={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Ot(n){n.preventDefault()}function Dt(n){n.stopPropagation()}function It(){var n=this.scrollTop,e=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===e&&(this.scrollTop=n-1)}function At(){return"ontouchstart"in window||navigator.maxTouchPoints}var Mt=!!(typeof window<"u"&&window.document&&window.document.createElement),oe=0,ae={capture:!1,passive:!1};function pa(n){var e=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,t=p.useRef({}),o=p.useRef(null),u=p.useCallback(function(a){if(Mt){var s=document.body,c=s&&s.style;if(r&&yt.forEach(function(x){var g=c&&c[x];t.current[x]=g}),r&&oe<1){var d=parseInt(t.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,h=window.innerWidth-v+d||0;Object.keys(Ft).forEach(function(x){var g=Ft[x];c&&(c[x]=g)}),c&&(c.paddingRight="".concat(h,"px"))}s&&At()&&(s.addEventListener("touchmove",Ot,ae),a&&(a.addEventListener("touchstart",It,ae),a.addEventListener("touchmove",Dt,ae))),oe+=1}},[r]),l=p.useCallback(function(a){if(Mt){var s=document.body,c=s&&s.style;oe=Math.max(oe-1,0),r&&oe<1&&yt.forEach(function(d){var v=t.current[d];c&&(c[d]=v)}),s&&At()&&(s.removeEventListener("touchmove",Ot,ae),a&&(a.removeEventListener("touchstart",It,ae),a.removeEventListener("touchmove",Dt,ae)))}},[r]);return p.useEffect(function(){if(e){var a=o.current;return u(a),function(){l(a)}}},[e,u,l]),function(a){o.current=a}}var fa=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},ma={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function ha(n){var e=n.children,i=n.lockEnabled,r=n.captureEnabled,t=r===void 0?!0:r,o=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,a=n.onTopLeave,s=da({isEnabled:t,onBottomArrive:o,onBottomLeave:u,onTopArrive:l,onTopLeave:a}),c=pa({isEnabled:i}),d=function(h){s(h),c(h)};return E(p.Fragment,null,i&&E("div",{onClick:fa,css:ma}),e(d))}var va={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},ga=function(e){var i=e.name,r=e.onFocus;return E("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:va,value:"",onChange:function(){}})},xa=ga;function ot(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function ba(){return ot(/^iPhone/i)}function ln(){return ot(/^Mac/i)}function Ea(){return ot(/^iPad/i)||ln()&&navigator.maxTouchPoints>1}function wa(){return ba()||Ea()}function Ca(){return ln()||wa()}var Sa=function(e){return e.label},ya=function(e){return e.label},Fa=function(e){return e.value},Oa=function(e){return!!e.isDisabled},Da={clearIndicator:lr,container:Ji,control:vr,dropdownIndicator:ur,group:Er,groupHeading:Cr,indicatorsContainer:nr,indicatorSeparator:dr,input:Or,loadingIndicator:mr,loadingMessage:Yi,menu:ki,menuList:Ui,menuPortal:Xi,multiValue:Pr,multiValueLabel:Vr,multiValueRemove:Lr,noOptionsMessage:Gi,option:_r,placeholder:zr,singleValue:Wr,valueContainer:er},Ia={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Aa=4,cn=4,Ma=38,Pa=cn*2,Va={baseUnit:cn,controlHeight:Ma,menuGutter:Pa},$e={borderRadius:Aa,colors:Ia,spacing:Va},La={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:bt(),captureMenuScroll:!bt(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:ua(),formatGroupLabel:Sa,getOptionLabel:ya,getOptionValue:Fa,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Oa,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Mi(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Pt(n,e,i,r){var t=fn(n,e,i),o=mn(n,e,i),u=pn(n,e),l=we(n,e);return{type:"option",data:e,isDisabled:t,isSelected:o,label:u,value:l,index:r}}function me(n,e){return n.options.map(function(i,r){if("options"in i){var t=i.options.map(function(u,l){return Pt(n,u,e,l)}).filter(function(u){return Lt(n,u)});return t.length>0?{type:"group",data:i,options:t,index:r}:void 0}var o=Pt(n,i,e,r);return Lt(n,o)?o:void 0}).filter(Li)}function dn(n){return n.reduce(function(e,i){return i.type==="group"?e.push.apply(e,tt(i.options.map(function(r){return r.data}))):e.push(i.data),e},[])}function Vt(n,e){return n.reduce(function(i,r){return r.type==="group"?i.push.apply(i,tt(r.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(r.index,"-").concat(t.index)}}))):i.push({data:r.data,id:"".concat(e,"-").concat(r.index)}),i},[])}function Ra(n,e){return dn(me(n,e))}function Lt(n,e){var i=n.inputValue,r=i===void 0?"":i,t=e.data,o=e.isSelected,u=e.label,l=e.value;return(!vn(n)||!o)&&hn(n,{label:u,value:l,data:t},r)}function Ta(n,e){var i=n.focusedValue,r=n.selectValue,t=r.indexOf(i);if(t>-1){var o=e.indexOf(i);if(o>-1)return i;if(t<e.length)return e[t]}return null}function Ba(n,e){var i=n.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var _e=function(e,i){var r,t=(r=e.find(function(o){return o.data===i}))===null||r===void 0?void 0:r.id;return t||null},pn=function(e,i){return e.getOptionLabel(i)},we=function(e,i){return e.getOptionValue(i)};function fn(n,e,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,i):!1}function mn(n,e,i){if(i.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,i);var r=we(n,e);return i.some(function(t){return we(n,t)===r})}function hn(n,e,i){return n.filterOption?n.filterOption(e,i):!0}var vn=function(e){var i=e.hideSelectedOptions,r=e.isMulti;return i===void 0?r:i},ja=1,gn=function(n){ni(i,n);var e=oi(i);function i(r){var t;if(ei(this,i),t=e.call(this,r),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=Ca(),t.controlRef=null,t.getControlRef=function(a){t.controlRef=a},t.focusedOptionRef=null,t.getFocusedOptionRef=function(a){t.focusedOptionRef=a},t.menuListRef=null,t.getMenuListRef=function(a){t.menuListRef=a},t.inputRef=null,t.getInputRef=function(a){t.inputRef=a},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(a,s){var c=t.props,d=c.onChange,v=c.name;s.name=v,t.ariaOnChange(a,s),d(a,s)},t.setValue=function(a,s,c){var d=t.props,v=d.closeMenuOnSelect,h=d.isMulti,x=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:x}),v&&(t.setState({inputIsHiddenAfterUpdate:!h}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(a,{action:s,option:c})},t.selectOption=function(a){var s=t.props,c=s.blurInputOnSelect,d=s.isMulti,v=s.name,h=t.state.selectValue,x=d&&t.isOptionSelected(a,h),g=t.isOptionDisabled(a,h);if(x){var f=t.getOptionValue(a);t.setValue(h.filter(function(m){return t.getOptionValue(m)!==f}),"deselect-option",a)}else if(!g)d?t.setValue([].concat(tt(h),[a]),"select-option",a):t.setValue(a,"select-option");else{t.ariaOnChange(a,{action:"select-option",option:a,name:v});return}c&&t.blurInput()},t.removeValue=function(a){var s=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(a),v=c.filter(function(x){return t.getOptionValue(x)!==d}),h=fe(s,v,v[0]||null);t.onChange(h,{action:"remove-value",removedValue:a}),t.focusInput()},t.clearValue=function(){var a=t.state.selectValue;t.onChange(fe(t.props.isMulti,[],null),{action:"clear",removedValues:a})},t.popValue=function(){var a=t.props.isMulti,s=t.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),v=fe(a,d,d[0]||null);t.onChange(v,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(a){return _e(t.state.focusableOptionsWithIds,a)},t.getFocusableOptionsWithIds=function(){return Vt(me(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return Fi.apply(void 0,[t.props.classNamePrefix].concat(s))},t.getOptionLabel=function(a){return pn(t.props,a)},t.getOptionValue=function(a){return we(t.props,a)},t.getStyles=function(a,s){var c=t.props.unstyled,d=Da[a](s,c);d.boxSizing="border-box";var v=t.props.styles[a];return v?v(d,s):d},t.getClassNames=function(a,s){var c,d;return(c=(d=t.props.classNames)[a])===null||c===void 0?void 0:c.call(d,s)},t.getElementId=function(a){return"".concat(t.state.instancePrefix,"-").concat(a)},t.getComponents=function(){return Kr(t.props)},t.buildCategorizedOptions=function(){return me(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return dn(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(a,s){t.setState({ariaSelection:w({value:a},s)})},t.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(a){t.blockOptionHover=!1},t.onControlMouseDown=function(a){if(!a.defaultPrevented){var s=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&t.onMenuClose():s&&t.openMenu("first"):(s&&(t.openAfterFocus=!0),t.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},t.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!t.props.isDisabled){var s=t.props,c=s.isMulti,d=s.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),a.preventDefault()}},t.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(t.clearValue(),a.preventDefault(),t.openAfterFocus=!1,a.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(a){typeof t.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&Ve(a.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(a)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(a){var s=a.touches,c=s&&s.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(a){var s=a.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),v=Math.abs(c.clientY-t.initialTouchY),h=5;t.userIsDragging=d>h||v>h}},t.onTouchEnd=function(a){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(a.target)&&t.menuListRef&&!t.menuListRef.contains(a.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(a){t.userIsDragging||t.onControlMouseDown(a)},t.onClearIndicatorTouchEnd=function(a){t.userIsDragging||t.onClearIndicatorMouseDown(a)},t.onDropdownIndicatorTouchEnd=function(a){t.userIsDragging||t.onDropdownIndicatorMouseDown(a)},t.handleInputChange=function(a){var s=t.props.inputValue,c=a.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:s}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(a){t.props.onFocus&&t.props.onFocus(a),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(a){var s=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(a),t.onInputChange("",{action:"input-blur",prevInputValue:s}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(a){if(!(t.blockOptionHover||t.state.focusedOption===a)){var s=t.getFocusableOptions(),c=s.indexOf(a);t.setState({focusedOption:a,focusedOptionId:c>-1?t.getFocusedOptionId(a):null})}},t.shouldHideSelectedOptions=function(){return vn(t.props)},t.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),t.focus()},t.onKeyDown=function(a){var s=t.props,c=s.isMulti,d=s.backspaceRemovesValue,v=s.escapeClearsValue,h=s.inputValue,x=s.isClearable,g=s.isDisabled,f=s.menuIsOpen,m=s.onKeyDown,y=s.tabSelectsValue,F=s.openMenuOnFocus,O=t.state,I=O.focusedOption,A=O.focusedValue,M=O.selectValue;if(!g&&!(typeof m=="function"&&(m(a),a.defaultPrevented))){switch(t.blockOptionHover=!0,a.key){case"ArrowLeft":if(!c||h)return;t.focusValue("previous");break;case"ArrowRight":if(!c||h)return;t.focusValue("next");break;case"Delete":case"Backspace":if(h)return;if(A)t.removeValue(A);else{if(!d)return;c?t.popValue():x&&t.clearValue()}break;case"Tab":if(t.isComposing||a.shiftKey||!f||!y||!I||F&&t.isOptionSelected(I,M))return;t.selectOption(I);break;case"Enter":if(a.keyCode===229)break;if(f){if(!I||t.isComposing)return;t.selectOption(I);break}return;case"Escape":f?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:h}),t.onMenuClose()):x&&v&&t.clearValue();break;case" ":if(h)return;if(!f){t.openMenu("first");break}if(!I)return;t.selectOption(I);break;case"ArrowUp":f?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":f?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!f)return;t.focusOption("pageup");break;case"PageDown":if(!f)return;t.focusOption("pagedown");break;case"Home":if(!f)return;t.focusOption("first");break;case"End":if(!f)return;t.focusOption("last");break;default:return}a.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++ja),t.state.selectValue=gt(r.value),r.menuIsOpen&&t.state.selectValue.length){var o=t.getFocusableOptionsWithIds(),u=t.buildFocusableOptions(),l=u.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=o,t.state.focusedOption=u[l],t.state.focusedOptionId=_e(o,u[l])}return t}return ti(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&xt(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var o=this.props,u=o.isDisabled,l=o.menuIsOpen,a=this.state.isFocused;(a&&!u&&t.isDisabled||a&&l&&!t.menuIsOpen)&&this.focusInput(),a&&u&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!u&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(xt(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,o){this.props.onInputChange(t,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var o=this,u=this.state,l=u.selectValue,a=u.isFocused,s=this.buildFocusableOptions(),c=t==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(t){var o=this.state,u=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=u.indexOf(l);l||(a=-1);var s=u.length-1,c=-1;if(u.length){switch(t){case"previous":a===0?c=0:a===-1?c=s:c=a-1;break;case"next":a>-1&&a<s&&(c=a+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var a=0,s=l.indexOf(u);u||(s=-1),t==="up"?a=s>0?s-1:l.length-1:t==="down"?a=(s+1)%l.length:t==="pageup"?(a=s-o,a<0&&(a=0)):t==="pagedown"?(a=s+o,a>l.length-1&&(a=l.length-1)):t==="last"&&(a=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme($e):w(w({},$e),this.props.theme):$e}},{key:"getCommonProps",value:function(){var t=this.clearValue,o=this.cx,u=this.getStyles,l=this.getClassNames,a=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,h=d.isRtl,x=d.options,g=this.hasValue();return{clearValue:t,cx:o,getStyles:u,getClassNames:l,getValue:a,hasValue:g,isMulti:v,isRtl:h,options:x,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,o=t.isClearable,u=t.isMulti;return o===void 0?u:o}},{key:"isOptionDisabled",value:function(t,o){return fn(this.props,t,o)}},{key:"isOptionSelected",value:function(t,o){return mn(this.props,t,o)}},{key:"filterOption",value:function(t,o){return hn(this.props,t,o)}},{key:"formatOptionLabel",value:function(t,o){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(t,{context:o,inputValue:u,selectValue:l})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,o=t.isDisabled,u=t.isSearchable,l=t.inputId,a=t.inputValue,s=t.tabIndex,c=t.form,d=t.menuIsOpen,v=t.required,h=this.getComponents(),x=h.Input,g=this.state,f=g.inputIsHidden,m=g.ariaSelection,y=this.commonProps,F=l||this.getElementId("input"),O=w(w(w({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(x,C({},y,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:F,innerRef:this.getInputRef,isDisabled:o,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:a},O)):p.createElement(la,C({id:F,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:be,onFocus:this.onInputFocus,disabled:o,tabIndex:s,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,o=this.getComponents(),u=o.MultiValue,l=o.MultiValueContainer,a=o.MultiValueLabel,s=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,v=this.commonProps,h=this.props,x=h.controlShouldRenderValue,g=h.isDisabled,f=h.isMulti,m=h.inputValue,y=h.placeholder,F=this.state,O=F.selectValue,I=F.focusedValue,A=F.isFocused;if(!this.hasValue()||!x)return m?null:p.createElement(d,C({},v,{key:"placeholder",isDisabled:g,isFocused:A,innerProps:{id:this.getElementId("placeholder")}}),y);if(f)return O.map(function(S,V){var $=S===I,k="".concat(t.getOptionLabel(S),"-").concat(t.getOptionValue(S));return p.createElement(u,C({},v,{components:{Container:l,Label:a,Remove:s},isFocused:$,isDisabled:g,key:k,index:V,removeProps:{onClick:function(){return t.removeValue(S)},onTouchEnd:function(){return t.removeValue(S)},onMouseDown:function(Y){Y.preventDefault()}},data:S}),t.formatOptionLabel(S,"value"))});if(m)return null;var M=O[0];return p.createElement(c,C({},v,{data:M,isDisabled:g}),this.formatOptionLabel(M,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),o=t.ClearIndicator,u=this.commonProps,l=this.props,a=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||a||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(o,C({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),o=t.LoadingIndicator,u=this.commonProps,l=this.props,a=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!o||!s)return null;var d={"aria-hidden":"true"};return p.createElement(o,C({},u,{innerProps:d,isDisabled:a,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),o=t.DropdownIndicator,u=t.IndicatorSeparator;if(!o||!u)return null;var l=this.commonProps,a=this.props.isDisabled,s=this.state.isFocused;return p.createElement(u,C({},l,{isDisabled:a,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),o=t.DropdownIndicator;if(!o)return null;var u=this.commonProps,l=this.props.isDisabled,a=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(o,C({},u,{innerProps:s,isDisabled:l,isFocused:a}))}},{key:"renderMenu",value:function(){var t=this,o=this.getComponents(),u=o.Group,l=o.GroupHeading,a=o.Menu,s=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,v=o.NoOptionsMessage,h=o.Option,x=this.commonProps,g=this.state.focusedOption,f=this.props,m=f.captureMenuScroll,y=f.inputValue,F=f.isLoading,O=f.loadingMessage,I=f.minMenuHeight,A=f.maxMenuHeight,M=f.menuIsOpen,S=f.menuPlacement,V=f.menuPosition,$=f.menuPortalTarget,k=f.menuShouldBlockScroll,_=f.menuShouldScrollIntoView,Y=f.noOptionsMessage,q=f.onMenuScrollToTop,B=f.onMenuScrollToBottom;if(!M)return null;var R=function(H,K){var ne=H.type,U=H.data,ie=H.isDisabled,X=H.isSelected,le=H.label,wn=H.value,ut=g===U,st=ie?void 0:function(){return t.onOptionHover(U)},Cn=ie?void 0:function(){return t.selectOption(U)},lt="".concat(t.getElementId("option"),"-").concat(K),Sn={id:lt,onClick:Cn,onMouseMove:st,onMouseOver:st,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:X};return p.createElement(h,C({},x,{innerProps:Sn,data:U,isDisabled:ie,isSelected:X,key:lt,label:le,type:ne,value:wn,isFocused:ut,innerRef:ut?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(H.data,"menu"))},G;if(this.hasOptions())G=this.getCategorizedOptions().map(function(T){if(T.type==="group"){var H=T.data,K=T.options,ne=T.index,U="".concat(t.getElementId("group"),"-").concat(ne),ie="".concat(U,"-heading");return p.createElement(u,C({},x,{key:U,data:H,options:K,Heading:l,headingProps:{id:ie,data:T.data},label:t.formatGroupLabel(T.data)}),T.options.map(function(X){return R(X,"".concat(ne,"-").concat(X.index))}))}else if(T.type==="option")return R(T,"".concat(T.index))});else if(F){var N=O({inputValue:y});if(N===null)return null;G=p.createElement(d,x,N)}else{var ee=Y({inputValue:y});if(ee===null)return null;G=p.createElement(v,x,ee)}var te={minMenuHeight:I,maxMenuHeight:A,menuPlacement:S,menuPosition:V,menuShouldScrollIntoView:_},se=p.createElement(Hi,C({},x,te),function(T){var H=T.ref,K=T.placerProps,ne=K.placement,U=K.maxHeight;return p.createElement(a,C({},x,te,{innerRef:H,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:F,placement:ne}),p.createElement(ha,{captureEnabled:m,onTopArrive:q,onBottomArrive:B,lockEnabled:k},function(ie){return p.createElement(s,C({},x,{innerRef:function(le){t.getMenuListRef(le),ie(le)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:t.getElementId("listbox")},isLoading:F,maxHeight:U,focusedOption:g}),G)}))});return $||V==="fixed"?p.createElement(c,C({},x,{appendTo:$,controlElement:this.controlRef,menuPlacement:S,menuPosition:V}),se):se}},{key:"renderFormField",value:function(){var t=this,o=this.props,u=o.delimiter,l=o.isDisabled,a=o.isMulti,s=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(xa,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(a)if(u){var v=d.map(function(g){return t.getOptionValue(g)}).join(u);return p.createElement("input",{name:s,type:"hidden",value:v})}else{var h=d.length>0?d.map(function(g,f){return p.createElement("input",{key:"i-".concat(f),name:s,type:"hidden",value:t.getOptionValue(g)})}):p.createElement("input",{name:s,type:"hidden",value:""});return p.createElement("div",null,h)}else{var x=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:s,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,o=this.state,u=o.ariaSelection,l=o.focusedOption,a=o.focusedValue,s=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return p.createElement(ia,C({},t,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:a,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),o=t.Control,u=t.IndicatorsContainer,l=t.SelectContainer,a=t.ValueContainer,s=this.props,c=s.className,d=s.id,v=s.isDisabled,h=s.menuIsOpen,x=this.state.isFocused,g=this.commonProps=this.getCommonProps();return p.createElement(l,C({},g,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:x}),this.renderLiveRegion(),p.createElement(o,C({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:x,menuIsOpen:h}),p.createElement(a,C({},g,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,C({},g,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,o){var u=o.prevProps,l=o.clearFocusValueOnUpdate,a=o.inputIsHiddenAfterUpdate,s=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,v=o.instancePrefix,h=t.options,x=t.value,g=t.menuIsOpen,f=t.inputValue,m=t.isMulti,y=gt(x),F={};if(u&&(x!==u.value||h!==u.options||g!==u.menuIsOpen||f!==u.inputValue)){var O=g?Ra(t,y):[],I=g?Vt(me(t,y),"".concat(v,"-option")):[],A=l?Ta(o,y):null,M=Ba(o,O),S=_e(I,M);F={selectValue:y,focusedOption:M,focusedOptionId:S,focusableOptionsWithIds:I,focusedValue:A,clearFocusValueOnUpdate:!1}}var V=a!=null&&t!==u?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},$=s,k=c&&d;return c&&!k&&($={value:fe(m,y,y[0]||null),options:y,action:"initial-input-focus"},k=!d),(s==null?void 0:s.action)==="initial-input-focus"&&($=null),w(w(w({},F),V),{},{prevProps:t,ariaSelection:$,prevWasFocused:k})}}]),i}(p.Component);gn.defaultProps=La;var $a=p.forwardRef(function(n,e){var i=Qn(n);return p.createElement(gn,C({ref:e},i))}),_a=$a;const xn=n=>p.createElement("svg",{width:28,height:28,viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("g",{opacity:.8},p.createElement("path",{d:"M25.1286 9.41152C25.115 8.47146 24.9408 7.53885 24.6074 6.65964C24.0241 5.15827 22.8361 3.97109 21.3323 3.38991C20.4628 3.06332 19.5436 2.88822 18.6131 2.86835C17.4165 2.81495 17.0371 2.80005 13.9995 2.80005C10.962 2.80005 10.5726 2.80005 9.3847 2.86835C8.45551 2.88822 7.53628 3.06332 6.6668 3.38991C5.16293 3.97109 3.97377 5.15827 3.39163 6.65964C3.06449 7.52767 2.88785 8.44538 2.87044 9.37302C2.81695 10.5689 2.80078 10.9477 2.80078 13.9802C2.80078 17.0127 2.80078 17.4002 2.87044 18.5873C2.8891 19.5162 3.06449 20.4327 3.39163 21.3032C3.97501 22.8033 5.16293 23.9905 6.66804 24.5717C7.53379 24.9095 8.45303 25.1007 9.38594 25.1305C10.5838 25.1839 10.9632 25.2001 14.0008 25.2001C17.0384 25.2001 17.4277 25.2001 18.6156 25.1305C19.5448 25.1119 20.464 24.9368 21.3348 24.6102C22.8386 24.0278 24.0266 22.8406 24.6099 21.3405C24.9371 20.4712 25.1125 19.5547 25.1311 18.6246C25.1846 17.43 25.2008 17.0512 25.2008 14.0174C25.1983 10.9849 25.1983 10.5999 25.1286 9.41152ZM13.9921 19.7149C10.8152 19.7149 8.24156 17.1456 8.24156 13.974C8.24156 10.8024 10.8152 8.23302 13.9921 8.23302C17.1665 8.23302 19.7426 10.8024 19.7426 13.974C19.7426 17.1456 17.1665 19.7149 13.9921 19.7149ZM19.9715 9.35936C19.2289 9.35936 18.6305 8.7608 18.6305 8.02067C18.6305 7.28055 19.2289 6.68199 19.9715 6.68199C20.7116 6.68199 21.3111 7.28055 21.3111 8.02067C21.3111 8.7608 20.7116 9.35936 19.9715 9.35936Z"}),p.createElement("path",{d:"M13.9937 17.4789C15.9287 17.4789 17.4972 15.9104 17.4972 13.9754C17.4972 12.0405 15.9287 10.4719 13.9937 10.4719C12.0588 10.4719 10.4902 12.0405 10.4902 13.9754C10.4902 15.9104 12.0588 17.4789 13.9937 17.4789Z"}))),bn=n=>p.createElement("svg",{width:24,height:24,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("g",{opacity:.8},p.createElement("path",{d:"M15.197 0.003c-2.567 0.035-8.089 0.456-11.179 3.287-2.293 2.28-3.095 5.641-3.188 9.804-0.080 4.147-0.173 11.933 7.333 14.055v3.227c0 0-0.051 1.293 0.803 1.56 1.053 0.333 1.653-0.665 2.653-1.732l1.867-2.107c5.133 0.427 9.067-0.559 9.52-0.705 1.040-0.333 6.908-1.081 7.868-8.869 0.987-8.041-0.48-13.108-3.12-15.401l-0.013-0.003c-0.8-0.733-4-3.067-11.16-3.093 0 0-0.528-0.033-1.384-0.021zM15.287 2.265c0.727-0.004 1.173 0.027 1.173 0.027 6.053 0.013 8.948 1.84 9.628 2.453 2.227 1.905 3.371 6.475 2.533 13.189-0.8 6.507-5.56 6.92-6.44 7.2-0.373 0.12-3.84 0.973-8.203 0.693 0 0-3.252 3.921-4.265 4.935-0.16 0.173-0.347 0.227-0.467 0.2-0.173-0.040-0.227-0.253-0.213-0.547l0.027-5.359c-6.361-1.76-5.988-8.403-5.921-11.869 0.080-3.467 0.733-6.309 2.667-8.229 2.609-2.36 7.3-2.68 9.481-2.693zM15.767 5.732c-0 0-0.001 0-0.001 0-0.22 0-0.399 0.178-0.399 0.399 0 0 0 0 0 0v0c0 0.221 0.179 0.4 0.4 0.4v0c0.043-0.001 0.093-0.001 0.143-0.001 2.034 0 3.88 0.809 5.232 2.123l-0.002-0.002c1.453 1.413 2.161 3.307 2.188 5.787 0 0.221 0.179 0.4 0.4 0.4v0-0.012c0.221 0 0.4-0.179 0.4-0.4v0c0.005-0.109 0.008-0.236 0.008-0.364 0-2.326-0.923-4.436-2.423-5.985l0.002 0.002c-1.587-1.547-3.589-2.347-5.948-2.347zM10.495 6.652c-0.054-0.008-0.116-0.013-0.18-0.013-0.236 0-0.457 0.064-0.646 0.176l0.006-0.003h-0.016c-0.547 0.32-1.051 0.72-1.531 1.253-0.36 0.427-0.561 0.852-0.615 1.265-0.009 0.064-0.014 0.137-0.014 0.212 0 0.182 0.029 0.357 0.084 0.521l-0.003-0.012 0.027 0.013c0.458 1.331 0.998 2.476 1.646 3.549l-0.046-0.082c0.895 1.608 1.922 2.996 3.101 4.237l-0.008-0.009 0.040 0.053 0.053 0.040 0.080 0.080c1.236 1.174 2.628 2.205 4.136 3.053l0.104 0.054c1.76 0.96 2.829 1.413 3.469 1.6v0.013c0.187 0.053 0.357 0.080 0.531 0.080 0.57-0.043 1.079-0.274 1.471-0.631l-0.002 0.002c0.52-0.467 0.933-0.984 1.24-1.531v-0.013c0.307-0.573 0.2-1.121-0.24-1.495-0.845-0.742-1.782-1.421-2.781-2.007l-0.085-0.046c-0.68-0.373-1.373-0.147-1.653 0.227l-0.6 0.759c-0.307 0.373-0.867 0.32-0.867 0.32l-0.016 0.013c-4.16-1.067-5.267-5.279-5.267-5.279s-0.053-0.573 0.333-0.867l0.747-0.6c0.36-0.293 0.613-0.987 0.227-1.667-0.631-1.084-1.31-2.022-2.071-2.887l0.017 0.020c-0.166-0.204-0.399-0.349-0.665-0.399l-0.007-0.001zM16.459 7.839c-0.22 0.001-0.399 0.18-0.399 0.4s0.179 0.4 0.4 0.4c0 0 0.001 0 0.001 0h-0c1.388 0.025 2.636 0.607 3.532 1.532l0.001 0.001c0.75 0.825 1.209 1.926 1.209 3.134 0 0.103-0.003 0.205-0.010 0.306l0.001-0.014c0.001 0.22 0.18 0.399 0.4 0.399 0 0 0 0 0 0v0l0.013 0.016c0 0 0 0 0 0 0.221 0 0.4-0.179 0.4-0.4 0-0 0-0.001 0-0.001v0c0.040-1.587-0.453-2.92-1.427-3.987s-2.333-1.667-4.067-1.787c-0.008-0.001-0.018-0.001-0.028-0.001s-0.020 0-0.029 0.001l0.001-0zM17.112 9.997c-0.004-0-0.008-0-0.012-0-0.225 0-0.407 0.182-0.407 0.408 0 0.221 0.176 0.401 0.395 0.407h0.001c1.32 0.067 1.96 0.733 2.040 2.107 0.007 0.215 0.184 0.387 0.4 0.387 0 0 0 0 0 0h0.013c0.215-0.007 0.388-0.183 0.388-0.4 0-0.009-0-0.019-0.001-0.028l0 0.001c-0.093-1.787-1.067-2.788-2.8-2.881-0.002-0-0.005-0-0.008-0s-0.006 0-0.008 0h0z"}))),En=n=>p.createElement("svg",{width:28,height:28,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("g",{opacity:.8},p.createElement("path",{opacity:.7,d:"M26.070 3.996c-0.321 0.023-0.636 0.099-0.933 0.223h-0.004c-0.285 0.113-1.64 0.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l0.062-0.024c0 0-0.359 0.118-0.734 0.375-0.232 0.147-0.431 0.34-0.586 0.567-0.184 0.27-0.332 0.683-0.277 1.11 0.090 0.722 0.558 1.155 0.894 1.394 0.34 0.242 0.664 0.355 0.664 0.355h0.008l4.883 1.645c0.219 0.703 1.488 4.875 1.793 5.836 0.18 0.574 0.355 0.933 0.574 1.207 0.106 0.14 0.23 0.257 0.379 0.351 0.077 0.045 0.16 0.081 0.246 0.106l-0.050-0.012c0.015 0.004 0.027 0.016 0.038 0.020 0.040 0.011 0.067 0.015 0.118 0.023 0.773 0.234 1.394-0.246 1.394-0.246l0.035-0.028 2.883-2.625 4.832 3.707 0.11 0.047c1.007 0.442 2.027 0.196 2.566-0.238 0.543-0.437 0.754-0.996 0.754-0.996l0.035-0.090 3.734-19.129c0.106-0.472 0.133-0.914 0.016-1.343-0.121-0.434-0.399-0.808-0.781-1.047-0.321-0.195-0.692-0.289-1.067-0.27zM25.969 6.046c-0.004 0.063 0.008 0.056-0.020 0.177v0.011l-3.699 18.93c-0.016 0.027-0.043 0.086-0.117 0.145-0.078 0.062-0.14 0.101-0.465-0.028l-5.91-4.531-3.57 3.254 0.75-4.79 9.656-9c0.398-0.37 0.265-0.448 0.265-0.448 0.028-0.454-0.601-0.133-0.601-0.133l-12.176 7.543-0.004-0.020-5.851-1.972c0.010-0.003 0.020-0.007 0.030-0.012l0.032-0.016 0.031-0.011c0 0 5.211-2.196 10.508-4.426 2.652-1.117 5.324-2.242 7.379-3.11 1.219-0.513 2.439-1.023 3.66-1.53 0.082-0.032 0.043-0.032 0.102-0.032v-0.001z"}))),ka=D.header`
    padding-top: 30px;
    box-shadow: 0px 2px 0px 0px var(--shadow-color);
`,Ha=D.div`

    padding-left : var(--container-padding);
    padding-right : var(--container-padding);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
        flex-direction: column;
        row-gap: 15px;
        align-items: center;
    }
`;D.div`

    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    width: 100%;

   @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
    flex-direction: column;
    row-gap: 15px;
    align-items: center;
    }

`;const za=()=>({container:n=>({...n}),control:n=>({display:"flex",padding:"0px 0px 0px 0px",fontWeight:"400",fontSize:"12px",color:"var(--text-color)",backgroundColor:"transparent"}),option:()=>({padding:"5px 10px 5px 10px",fontSize:"12px",backgroundColor:"transparent",color:"var(--text-color)",cursor:"default",transition:"color var(--transition)",":hover":{backgroundColor:"var(--back-color)"},":active":{backgroundColor:"var(--back-color)"}})}),Na=D.div`
    display: flex;
    flex-direction: column;
    //margin-bottom: 10px;
    align-items : center;

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 768px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 768px) and (max-width: 1399.8px){
        width: 650px;
        align-items: flex-start;
    }  
    
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width:1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        width: 800px;
        align-items: flex-start;
    } 

`,Ua=D.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    row-gap: 25px;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
        align-items: center;
    }
`,Wa=D.h1`
    margin-top:-10px;
    margin-bottom: 15px;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 299.8px),
    screen and (min-resolution : 96dpi) and (max-width: 299.8px),
    screen and (min-resolution : 1dppx) and (max-width: 299.8px){
        font-size: 22px;
        text-align: center;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 300px) and (max-width: 419.8px),
    screen and (min-resolution : 96dpi) and (min-width: 300px) and (max-width: 419.8px),
    screen and (min-resolution : 1dppx) and (min-width: 300px) and  (max-width: 419.8px){
        font-size: 32px;
        text-align: center;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 420px) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (min-width: 420px) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and(min-width: 420px) and (max-width: 767.8px){
        font-size: 38px;
        text-align: center;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px) and (max-width: 908.8px),
    screen and (min-resolution : 96dpi) and  (min-width: 420px) and (max-width: 908.8px),
    screen and (min-resolution : 1dppx) and  (min-width: 420px) and (max-width: 908.8px){
        font-size: 40px;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 9098px) and (max-width: 1399.8px){
        font-size: 44px;
    }  
    
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width:1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        font-size: 52px;
    }     
`,Ga=D.h2`
    

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 299.8px),
    screen and (min-resolution : 96dpi) and (max-width: 299.8px),
    screen and (min-resolution : 1dppx) and (max-width: 299.8px){
        font-size: 12px;
        text-align: center;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 300px) and (max-width: 419.8px),
    screen and (min-resolution : 96dpi)and (min-width: 300px) and (max-width: 419.8px),
    screen and (min-resolution : 1dppx) and (min-width: 300px) and (max-width: 419.8px){
        font-size: 15px;
        margin-bottom: 15px;
        text-align: center;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 420px) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (min-width: 420px) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and(min-width: 420px) and (max-width: 767.8px){
        font-size: 16px;
        text-align: center;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px) and (max-width: 908.8px),
    screen and (min-resolution : 96dpi) and  (min-width: 768px) and (max-width: 908.8px),
    screen and (min-resolution : 1dppx) and  (min-width:  768px) and (max-width: 908.8px){
        font-size: 16px;
    }


    @media screen and (min-device-pixel-ratio: 1) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 909px) and (max-width: 1399.8px){
        font-size: 16px;

    }  
    
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width: 1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        font-size: 20px;
    }  
`,Ya=D.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 25px;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
        align-items: center;
        width: 100%;
    }
      
      @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px),
      screen and (min-resolution : 96dpi) and (min-width: 768px),
      screen and (min-resolution : 1dppx) and (min-width: 768px){
          row-gap: 15px;
          align-items: flex-start;
      }

`,qa=D.ul`
    display: flex;
    max-width: 180px;
    flex-direction: column;
    gap: 7px;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 419.8px),
    screen and (min-resolution : 96dpi) and (max-width: 419.8px),
    screen and (min-resolution : 1dppx) and (max-width: 419.8px){
      align-items: center;
      justify-content: center;
    }
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 420px) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (min-width: 420px) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (min-width: 420px) and (max-width: 767.8px){
        flex-direction: row;
        column-gap: 15px;
        align-items: center;
        justify-content: center;
    }
`,Rt=D.li`
`,Ka=D.p`
    font-weight: 600;
    text-wrap:nowrap;
    margin-bottom: 11px;
    text-align: center;

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 767.8px),
    screen and (min-resolution : 96dpi) and (min-width: 767.8px),
    screen and (min-resolution : 1dppx) and (min-width: 767.8px){
        text-align: left;
    }

`,Tt=D.a`
    padding-top: 3px;
    padding-bottom: 3px;
    font-weight: 500;
    font-size: 14px;
    text-wrap:nowrap;
    transition: var(--transition);
    &:hover,
    &:focus {
        color: darkred;
    };

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 419.8px) and (max-width: 908.8px),
    screen and (min-resolution : 96dpi) and (min-width: 419.8px) and(max-width: 908.8px),
    screen and (min-resolution : 1dppx) and (min-width: 419.8px) and (max-width: 908.8px){
        font-size: 16px;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width:909px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 909px) and (max-width: 1399.8px){
        font-size: 17px;
        
    }  
    
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width:1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        font-size: 18px;
    } 
`,Xa=D.ul`
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: flex-start;
    
    @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
        justify-content: center;
    }
`,ke=D.li`
    width: 36px;
    height: 36px;
`,He=D.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: transform var(--transition);
    border: 1px solid var(--text-color);
    border-radius: 25%;
    &:hover,
    &:focus {
        transform: scale(1.1);  
    };
`,Za=D(xn)`
    height: 22px;
    width: 22px;
    fill: var(--text-color);
`,Ja=D(bn)`
    height: 20px;
    width: 20px;
    fill: var(--text-color);
`,Qa=D(En)`
    height: 22px;
    width: 22px;
    fill: var(--text-color);
    
`,eo=({language:n,onLanguageChange:e})=>{const i=(r,t)=>{e(r.value)};return b.jsx(ka,{children:b.jsxs(Ha,{children:[b.jsxs(Na,{children:[b.jsx(Wa,{children:Z.title[n]}),b.jsx(Ga,{children:Z.subTitle[n]})]}),b.jsxs(Ua,{children:[b.jsxs(Ya,{children:[b.jsxs("address",{children:[b.jsx(Ka,{children:Z.address[n]}),b.jsxs(qa,{children:[b.jsx(Rt,{children:b.jsx(Tt,{href:"tel:+38(097)678-13-96",children:"+38 (097) 678-13-96"})}),b.jsx(Rt,{children:b.jsx(Tt,{href:"tel:+38(050)531-92-76",children:"+38 (050) 531-92-76"})})]})]}),b.jsxs(Xa,{children:[b.jsx(ke,{children:b.jsx(He,{href:"https://www.instagram.com/nataha9754",target:"_blank",rel:"noopener noreferrer",children:b.jsx(Za,{})})}),b.jsx(ke,{children:b.jsx(He,{href:"viber://chat?number=%2B380976781396",target:"_blank",rel:"noopener noreferrer",children:b.jsx(Ja,{})})}),b.jsx(ke,{children:b.jsx(He,{href:"https://t.me/NatashaLatash",target:"_blank",rel:"noopener noreferrer",children:b.jsx(Qa,{})})})]})]}),b.jsx("label",{for:"languages",hidden:!0,children:"Language"}),b.jsx(_a,{name:"languages",inputId:"language-select",isSearchable:!1,placeholder:n,options:[{value:"ua",label:"ua"},{value:"ru",label:"ru"}],onChange:i,styles:za()})]})]})})},to=D.div`
  padding-left  : var(--container-padding);
  padding-right : var(--container-padding);
  padding-top   : 30px;
  padding-bottom: 30px;
`,no=D.h2`
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`,io=p.lazy(()=>Mn(()=>import("./Gallery-a16ffab6.js"),["assets/Gallery-a16ffab6.js","assets/index-18dd2f54.js"])),ro=({language:n})=>b.jsx("main",{children:b.jsx("section",{children:b.jsxs(to,{children:[b.jsx(no,{children:Z.galleryTitle[n]}),b.jsx(io,{language:n})]})})}),ao=D.footer`
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0px -2px 0px 0px  var(--shadow-color);
`,oo=D.div`
  padding-left : var(--container-padding);
  padding-right : var(--container-padding);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;

  @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
  screen and (min-resolution : 96dpi) and (max-width: 767.8px),
  screen and (min-resolution : 1dppx) and (max-width: 767.8px){
    flex-direction: column;
    row-gap: 15px;
    align-items: center;
  }
`,uo=D.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: center;
 
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 768px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 768px) and (max-width: 1399.8px){
        width: 650px;
        align-items: flex-start;
    }  
    
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width:1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        width: 800px;
        align-items: flex-start;
    } 
`,so=D.h3`
    margin-top:-5px;
    margin-bottom: 15px;
    text-align: center;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 419.8px),
    screen and (min-resolution : 96dpi) and (max-width: 419.8px),
    screen and (min-resolution : 1dppx) and (max-width: 419.8px){
        font-size: 15px;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 420px) and (max-width: 908.8px),
    screen and (min-resolution : 96dpi) and  (min-width: 420px) and (max-width: 908.8px),
    screen and (min-resolution : 1dppx) and  (min-width: 420px) and (max-width: 908.8px){
        font-size: 18px;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 9098px) and (max-width: 1399.8px){
        font-size: 24px;
    }  
    
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width:1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        font-size: 32px;
    }     
`,lo=D.h4`
    text-align: center;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 299.8px),
    screen and (min-resolution : 96dpi) and (max-width: 299.8px),
    screen and (min-resolution : 1dppx) and (max-width: 299.8px){
        font-size: 10px;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 300px) and (max-width: 419.8px),
    screen and (min-resolution : 96dpi)and (min-width: 300px) and (max-width: 419.8px),
    screen and (min-resolution : 1dppx) and (min-width: 300px) and (max-width: 419.8px){
        font-size: 12px;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 420px) and (max-width: 908.8px),
    screen and (min-resolution : 96dpi) and  (min-width: 420px) and (max-width: 908.8px),
    screen and (min-resolution : 1dppx) and  (min-width: 420px) and (max-width: 908.8px){
        font-size: 14px;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 909px) and (max-width: 1399.8px){
        font-size: 15px;

    }  
    
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width: 1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        font-size: 16px;
    }  
`,co=D.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
        align-items: center;
    }
      
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 768px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 768px) and (max-width: 1399.8px){
        row-gap: 15px;
    }
`,po=D.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 359.8px),
    screen and (min-resolution : 96dpi) and (max-width: 359.8px),
    screen and (min-resolution : 1dppx) and (max-width: 359.8px){
      align-items: center;
      justify-content: center;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 360px) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (min-width: 360px) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (min-width: 360px) and (max-width: 767.8px){
        flex-direction: row;
        column-gap: 15px;
        align-items: center;
    }
`,Bt=D.li`
`,fo=D.p`
    font-weight: 600;
    font-size: 12px;
    margin-bottom: 5px;
    text-align: center;

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 419.8px) and (max-width: 908.8px),
    screen and (min-resolution : 96dpi) and (min-width: 419.8px) and(max-width: 908.8px),
    screen and (min-resolution : 1dppx) and (min-width: 419.8px) and (max-width: 908.8px){
        font-size: 13px;
    }
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px),
    screen and (min-resolution : 96dpi) and (min-width: 768px),
    screen and (min-resolution : 1dppx) and (min-width: 768px){
        text-align: left;
    }  
    @media screen and (min-device-pixel-ratio: 1) and (min-width:909px),
    screen and (min-resolution : 96dpi) and (min-width: 909px),
    screen and (min-resolution : 1dppx) and (min-width: 909px){
        font-size: 15px;
    }  
`,jt=D.a`
    font-weight: 500;
    font-size: 12px;
    text-wrap:nowrap;
    transition: var(--transition);
    &:hover,
    &:focus {
        color: darkred;
    };

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width:1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        font-size: 13px;
    } 
`,mo=D.ul`
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: flex-start;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
        justify-content: center;
    }

`,ze=D.li`
    width: 25px;
    height: 25px;
`,Ne=D.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    border: 1px solid var(--text-color);
    border-radius: 25%;
    &:hover,
    &:focus {
        transform: scale(1.1);
    }
`,ho=D(xn)`
    height: 20px;
    width: 20px;
    fill: var(--text-color);
`,vo=D(bn)`
    height: 18px;
    width: 18px;
    fill: var(--text-color);
`,go=D(En)`
    height: 20px;
    width: 20px;
    fill: var(--text-color);
`,xo=({language:n})=>b.jsx(ao,{children:b.jsxs(oo,{children:[b.jsxs(uo,{children:[b.jsx(so,{children:Z.title[n]}),b.jsx(lo,{children:Z.subTitle[n]})]}),b.jsxs(co,{children:[b.jsxs("address",{children:[b.jsx(fo,{children:Z.address[n]}),b.jsxs(po,{children:[b.jsx(Bt,{children:b.jsx(jt,{href:"tel:+38(097)678-13-96",children:"+38 (097) 678-13-96"})}),b.jsx(Bt,{children:b.jsx(jt,{href:"tel:+38(050)531-92-76",children:"+38 (050) 531-92-76"})})]})]}),b.jsxs(mo,{children:[b.jsx(ze,{children:b.jsx(Ne,{href:"https://www.instagram.com/direct/t/17849474219500467",target:"_blank",rel:"noopener noreferrer",children:b.jsx(ho,{})})}),b.jsx(ze,{children:b.jsx(Ne,{href:"viber://chat?number=%2B380976781396",target:"_blank",rel:"noopener noreferrer",children:b.jsx(vo,{})})}),b.jsx(ze,{children:b.jsx(Ne,{href:"https://t.me/NatashaLatash",target:"_blank",rel:"noopener noreferrer",children:b.jsx(go,{})})})]})]})]})}),bo=()=>{const[n,e]=Gn("language","ua");p.useEffect(()=>{n==="ua"||n==="ru"||e("ua"),document.querySelector("html").setAttribute("lang",n),document.querySelector('meta[name="description"]').setAttribute("content",Z.metaDescription[n]),document.querySelector("title").textContent=Z.pageTitle[n]},[n]);const i=r=>{e(r)};return b.jsxs(b.Fragment,{children:[b.jsx(eo,{language:n,onLanguageChange:i}),b.jsx(ro,{language:n}),b.jsx(xo,{language:n})]})},Co=Object.freeze(Object.defineProperty({__proto__:null,default:bo},Symbol.toStringTag,{value:"Module"}));export{Co as H,Z as c,Wn as k,wo as m};
