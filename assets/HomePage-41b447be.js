import{r as p,k as Qn,j as E,_ as C,a as et,c as gn,n as D,b,d as nt}from"./index-709695ff.js";const tt=(t,e)=>{const[i,r]=p.useState(()=>{try{const o=localStorage.getItem(t);return o?JSON.parse(o):(localStorage.setItem(t,JSON.stringify(e)),e)}catch{return e}});return[i,o=>{try{localStorage.setItem(t,JSON.stringify(o))}catch(u){console.log(u)}r(o)}]},U={metaLang:{ua:"uk",ru:"ru"},metaDescription:{ua:"Автомобілістам. Перетяжка потертого керма та дрібних деталей автомобілів в шкіру або замінник (ручки КПП, пильники, підлокітники, дверні картки та інше).",ru:"Автомобилистам. Перетяжка потёртого руля и мелких деталей автомобилей в кожу или заменитель (ручки КПП, пыльники, подлокотники, дверные карты и др.)."},pageTitle:{ua:"Перетяжка рулів",ru:"Перетяжка рулей"},title:{ua:"Перетяжка керма та дрібних деталей автомобілів",ru:"Перетяжка рулей и мелких деталей автомобилей"},subTitle:{ua:"(ручки КПП, пильники, підлокітники, дверні картки та інше)",ru:"(ручки КПП, пыльники, подлокотники, дверные карточки и прочее)"},address:{ua:"м. Дніпро",ru:"г. Днепр"},galleryTitle:{ua:"Галерея виконаних робіт",ru:"Галерея выполненных работ"},descriptionField:{ua:"photo_description_ua",ru:"photo_description_ru"}};function ne(t){"@babel/helpers - typeof";return ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(t)}function it(t,e){if(ne(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e||"default");if(ne(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function xn(t){var e=it(t,"string");return ne(e)=="symbol"?e:String(e)}function re(t,e,i){return e=xn(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function We(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i.push.apply(i,r)}return i}function w(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?We(Object(i),!0).forEach(function(r){re(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):We(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function rt(t){if(Array.isArray(t))return t}function at(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var r,n,o,u,l=[],a=!0,s=!1;try{if(o=(i=i.call(t)).next,e===0){if(Object(i)!==i)return;a=!1}else for(;!(a=(r=o.call(i)).done)&&(l.push(r.value),l.length!==e);a=!0);}catch(c){s=!0,n=c}finally{try{if(!a&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(s)throw n}}return l}}function Ve(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function bn(t,e){if(t){if(typeof t=="string")return Ve(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Ve(t,e)}}function ot(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(t,e){return rt(t)||at(t,e)||bn(t,e)||ot()}function ut(t,e){if(t==null)return{};var i={},r=Object.keys(t),n,o;for(o=0;o<r.length;o++)n=r[o],!(e.indexOf(n)>=0)&&(i[n]=t[n]);return i}function X(t,e){if(t==null)return{};var i=ut(t,e),r,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var st=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function lt(t){var e=t.defaultInputValue,i=e===void 0?"":e,r=t.defaultMenuIsOpen,n=r===void 0?!1:r,o=t.defaultValue,u=o===void 0?null:o,l=t.inputValue,a=t.menuIsOpen,s=t.onChange,c=t.onInputChange,d=t.onMenuClose,v=t.onMenuOpen,h=t.value,x=X(t,st),g=p.useState(l!==void 0?l:i),f=K(g,2),m=f[0],F=f[1],y=p.useState(a!==void 0?a:n),O=K(y,2),I=O[0],A=O[1],M=p.useState(h!==void 0?h:u),S=K(M,2),V=S[0],B=S[1],H=p.useCallback(function(_,Z){typeof s=="function"&&s(_,Z),B(_)},[s]),k=p.useCallback(function(_,Z){var J;typeof c=="function"&&(J=c(_,Z)),F(J!==void 0?J:_)},[c]),W=p.useCallback(function(){typeof v=="function"&&v(),A(!0)},[v]),G=p.useCallback(function(){typeof d=="function"&&d(),A(!1)},[d]),T=l!==void 0?l:m,L=a!==void 0?a:I,N=h!==void 0?h:V;return w(w({},x),{},{inputValue:T,menuIsOpen:L,onChange:H,onInputChange:k,onMenuClose:G,onMenuOpen:W,value:N})}function ct(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ge(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,xn(r.key),r)}}function dt(t,e,i){return e&&Ge(t.prototype,e),i&&Ge(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function Pe(t,e){return Pe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},Pe(t,e)}function pt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Pe(t,e)}function pe(t){return pe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},pe(t)}function ft(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function mt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ht(t,e){if(e&&(ne(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mt(t)}function vt(t){var e=ft();return function(){var r=pe(t),n;if(e){var o=pe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ht(this,n)}}function gt(t){if(Array.isArray(t))return Ve(t)}function xt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function bt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Be(t){return gt(t)||xt(t)||bn(t)||bt()}function Et(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const wt=Math.min,Ct=Math.max,fe=Math.round,ue=Math.floor,me=t=>({x:t,y:t});function St(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function En(t){return Cn(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function wn(t){var e;return(e=(Cn(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Cn(t){return t instanceof Node||t instanceof z(t).Node}function Le(t){return t instanceof Element||t instanceof z(t).Element}function ke(t){return t instanceof HTMLElement||t instanceof z(t).HTMLElement}function Ye(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}function Sn(t){const{overflow:e,overflowX:i,overflowY:r,display:n}=He(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+i)&&!["inline","contents"].includes(n)}function Ft(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function yt(t){return["html","body","#document"].includes(En(t))}function He(t){return z(t).getComputedStyle(t)}function Ot(t){if(En(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ye(t)&&t.host||wn(t);return Ye(e)?e.host:e}function Fn(t){const e=Ot(t);return yt(e)?t.ownerDocument?t.ownerDocument.body:t.body:ke(e)&&Sn(e)?e:Fn(e)}function he(t,e,i){var r;e===void 0&&(e=[]),i===void 0&&(i=!0);const n=Fn(t),o=n===((r=t.ownerDocument)==null?void 0:r.body),u=z(n);return o?e.concat(u,u.visualViewport||[],Sn(n)?n:[],u.frameElement&&i?he(u.frameElement):[]):e.concat(n,he(n,[],i))}function Dt(t){const e=He(t);let i=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const n=ke(t),o=n?t.offsetWidth:i,u=n?t.offsetHeight:r,l=fe(i)!==o||fe(r)!==u;return l&&(i=o,r=u),{width:i,height:r,$:l}}function je(t){return Le(t)?t:t.contextElement}function Ee(t){const e=je(t);if(!ke(e))return me(1);const i=e.getBoundingClientRect(),{width:r,height:n,$:o}=Dt(e);let u=(o?fe(i.width):i.width)/r,l=(o?fe(i.height):i.height)/n;return(!u||!Number.isFinite(u))&&(u=1),(!l||!Number.isFinite(l))&&(l=1),{x:u,y:l}}const It=me(0);function At(t){const e=z(t);return!Ft()||!e.visualViewport?It:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Mt(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==z(t)?!1:e}function qe(t,e,i,r){e===void 0&&(e=!1),i===void 0&&(i=!1);const n=t.getBoundingClientRect(),o=je(t);let u=me(1);e&&(r?Le(r)&&(u=Ee(r)):u=Ee(t));const l=Mt(o,i,r)?At(o):me(0);let a=(n.left+l.x)/u.x,s=(n.top+l.y)/u.y,c=n.width/u.x,d=n.height/u.y;if(o){const v=z(o),h=r&&Le(r)?z(r):r;let x=v.frameElement;for(;x&&r&&h!==v;){const g=Ee(x),f=x.getBoundingClientRect(),m=He(x),F=f.left+(x.clientLeft+parseFloat(m.paddingLeft))*g.x,y=f.top+(x.clientTop+parseFloat(m.paddingTop))*g.y;a*=g.x,s*=g.y,c*=g.x,d*=g.y,a+=F,s+=y,x=z(x).frameElement}}return St({width:c,height:d,x:a,y:s})}function Vt(t,e){let i=null,r;const n=wn(t);function o(){clearTimeout(r),i&&i.disconnect(),i=null}function u(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:s,top:c,width:d,height:v}=t.getBoundingClientRect();if(l||e(),!d||!v)return;const h=ue(c),x=ue(n.clientWidth-(s+d)),g=ue(n.clientHeight-(c+v)),f=ue(s),F={rootMargin:-h+"px "+-x+"px "+-g+"px "+-f+"px",threshold:Ct(0,wt(1,a))||1};let y=!0;function O(I){const A=I[0].intersectionRatio;if(A!==a){if(!y)return u();A?u(!1,A):r=setTimeout(()=>{u(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(O,{...F,root:n.ownerDocument})}catch{i=new IntersectionObserver(O,F)}i.observe(t)}return u(!0),o}function Pt(t,e,i,r){r===void 0&&(r={});const{ancestorScroll:n=!0,ancestorResize:o=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,s=je(t),c=n||o?[...s?he(s):[],...he(e)]:[];c.forEach(m=>{n&&m.addEventListener("scroll",i,{passive:!0}),o&&m.addEventListener("resize",i)});const d=s&&l?Vt(s,i):null;let v=-1,h=null;u&&(h=new ResizeObserver(m=>{let[F]=m;F&&F.target===s&&h&&(h.unobserve(e),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{h&&h.observe(e)})),i()}),s&&!a&&h.observe(s),h.observe(e));let x,g=a?qe(t):null;a&&f();function f(){const m=qe(t);g&&(m.x!==g.x||m.y!==g.y||m.width!==g.width||m.height!==g.height)&&i(),g=m,x=requestAnimationFrame(f)}return i(),()=>{c.forEach(m=>{n&&m.removeEventListener("scroll",i),o&&m.removeEventListener("resize",i)}),d&&d(),h&&h.disconnect(),h=null,a&&cancelAnimationFrame(x)}}var Re=p.useLayoutEffect,Lt=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ve=function(){};function Rt(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function Tt(t,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),n=2;n<i;n++)r[n-2]=arguments[n];var o=[].concat(r);if(e&&t)for(var u in e)e.hasOwnProperty(u)&&e[u]&&o.push("".concat(Rt(t,u)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Ke=function(e){return Ut(e)?e.filter(Boolean):ne(e)==="object"&&e!==null?[e]:[]},yn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=X(e,Lt);return w({},i)},P=function(e,i,r){var n=e.cx,o=e.getStyles,u=e.getClassNames,l=e.className;return{css:o(i,e),className:n(r??{},u(i,e),l)}};function be(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function Bt(t){return be(t)?window.innerHeight:t.clientHeight}function On(t){return be(t)?window.pageYOffset:t.scrollTop}function ge(t,e){if(be(t)){window.scrollTo(0,e);return}t.scrollTop=e}function kt(t){var e=getComputedStyle(t),i=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var n=t;n=n.parentElement;)if(e=getComputedStyle(n),!(i&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return n;return document.documentElement}function Ht(t,e,i,r){return i*((t=t/r-1)*t*t+1)+e}function se(t,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ve,n=On(t),o=e-n,u=10,l=0;function a(){l+=u;var s=Ht(l,n,o,i);ge(t,s),l<i?window.requestAnimationFrame(a):r(t)}a()}function Xe(t,e){var i=t.getBoundingClientRect(),r=e.getBoundingClientRect(),n=e.offsetHeight/3;r.bottom+n>i.bottom?ge(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+n,t.scrollHeight)):r.top-n<i.top&&ge(t,Math.max(e.offsetTop-n,0))}function jt(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Ze(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function _t(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Dn=!1,$t={get passive(){return Dn=!0}},le=typeof window<"u"?window:{};le.addEventListener&&le.removeEventListener&&(le.addEventListener("p",ve,$t),le.removeEventListener("p",ve,!1));var zt=Dn;function Nt(t){return t!=null}function Ut(t){return Array.isArray(t)}function ce(t,e,i){return t?e:i}var Wt=function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];var o=Object.entries(e).filter(function(u){var l=K(u,1),a=l[0];return!r.includes(a)});return o.reduce(function(u,l){var a=K(l,2),s=a[0],c=a[1];return u[s]=c,u},{})},Gt=["children","innerProps"],Yt=["children","innerProps"];function qt(t){var e=t.maxHeight,i=t.menuEl,r=t.minHeight,n=t.placement,o=t.shouldScroll,u=t.isFixedPosition,l=t.controlHeight,a=kt(i),s={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return s;var c=a.getBoundingClientRect(),d=c.height,v=i.getBoundingClientRect(),h=v.bottom,x=v.height,g=v.top,f=i.offsetParent.getBoundingClientRect(),m=f.top,F=u?window.innerHeight:Bt(a),y=On(a),O=parseInt(getComputedStyle(i).marginBottom,10),I=parseInt(getComputedStyle(i).marginTop,10),A=m-I,M=F-g,S=A+y,V=d-y-g,B=h-F+y+O,H=y+g-I,k=160;switch(n){case"auto":case"bottom":if(M>=x)return{placement:"bottom",maxHeight:e};if(V>=x&&!u)return o&&se(a,B,k),{placement:"bottom",maxHeight:e};if(!u&&V>=r||u&&M>=r){o&&se(a,B,k);var W=u?M-O:V-O;return{placement:"bottom",maxHeight:W}}if(n==="auto"||u){var G=e,T=u?A:S;return T>=r&&(G=Math.min(T-O-l,e)),{placement:"top",maxHeight:G}}if(n==="bottom")return o&&ge(a,B),{placement:"bottom",maxHeight:e};break;case"top":if(A>=x)return{placement:"top",maxHeight:e};if(S>=x&&!u)return o&&se(a,H,k),{placement:"top",maxHeight:e};if(!u&&S>=r||u&&A>=r){var L=e;return(!u&&S>=r||u&&A>=r)&&(L=u?A-I:S-I),o&&se(a,H,k),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return s}function Kt(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var In=function(e){return e==="auto"?"bottom":e},Xt=function(e,i){var r,n=e.placement,o=e.theme,u=o.borderRadius,l=o.spacing,a=o.colors;return w((r={label:"menu"},re(r,Kt(n),"100%"),re(r,"position","absolute"),re(r,"width","100%"),re(r,"zIndex",1),r),i?{}:{backgroundColor:a.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},An=p.createContext(null),Zt=function(e){var i=e.children,r=e.minMenuHeight,n=e.maxMenuHeight,o=e.menuPlacement,u=e.menuPosition,l=e.menuShouldScrollIntoView,a=e.theme,s=p.useContext(An)||{},c=s.setPortalPlacement,d=p.useRef(null),v=p.useState(n),h=K(v,2),x=h[0],g=h[1],f=p.useState(null),m=K(f,2),F=m[0],y=m[1],O=a.spacing.controlHeight;return Re(function(){var I=d.current;if(I){var A=u==="fixed",M=l&&!A,S=qt({maxHeight:n,menuEl:I,minHeight:r,placement:o,shouldScroll:M,isFixedPosition:A,controlHeight:O});g(S.maxHeight),y(S.placement),c==null||c(S.placement)}},[n,o,u,l,r,c,O]),i({ref:d,placerProps:w(w({},e),{},{placement:F||In(o),maxHeight:x})})},Jt=function(e){var i=e.children,r=e.innerRef,n=e.innerProps;return E("div",C({},P(e,"menu",{menu:!0}),{ref:r},n),i)},Qt=Jt,ei=function(e,i){var r=e.maxHeight,n=e.theme.spacing.baseUnit;return w({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:n,paddingTop:n})},ni=function(e){var i=e.children,r=e.innerProps,n=e.innerRef,o=e.isMulti;return E("div",C({},P(e,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:n},r),i)},Mn=function(e,i){var r=e.theme,n=r.spacing.baseUnit,o=r.colors;return w({textAlign:"center"},i?{}:{color:o.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},ti=Mn,ii=Mn,ri=function(e){var i=e.children,r=i===void 0?"No options":i,n=e.innerProps,o=X(e,Gt);return E("div",C({},P(w(w({},o),{},{children:r,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),r)},ai=function(e){var i=e.children,r=i===void 0?"Loading...":i,n=e.innerProps,o=X(e,Yt);return E("div",C({},P(w(w({},o),{},{children:r,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),r)},oi=function(e){var i=e.rect,r=e.offset,n=e.position;return{left:i.left,position:n,top:r,width:i.width,zIndex:1}},ui=function(e){var i=e.appendTo,r=e.children,n=e.controlElement,o=e.innerProps,u=e.menuPlacement,l=e.menuPosition,a=p.useRef(null),s=p.useRef(null),c=p.useState(In(u)),d=K(c,2),v=d[0],h=d[1],x=p.useMemo(function(){return{setPortalPlacement:h}},[]),g=p.useState(null),f=K(g,2),m=f[0],F=f[1],y=p.useCallback(function(){if(n){var M=jt(n),S=l==="fixed"?0:window.pageYOffset,V=M[v]+S;(V!==(m==null?void 0:m.offset)||M.left!==(m==null?void 0:m.rect.left)||M.width!==(m==null?void 0:m.rect.width))&&F({offset:V,rect:M})}},[n,l,v,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);Re(function(){y()},[y]);var O=p.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),n&&a.current&&(s.current=Pt(n,a.current,y,{elementResize:"ResizeObserver"in window}))},[n,y]);Re(function(){O()},[O]);var I=p.useCallback(function(M){a.current=M,O()},[O]);if(!i&&l!=="fixed"||!m)return null;var A=E("div",C({ref:I},P(w(w({},e),{},{offset:m.offset,position:l,rect:m.rect}),"menuPortal",{"menu-portal":!0}),o),r);return E(An.Provider,{value:x},i?et.createPortal(A,i):A)},si=function(e){var i=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},li=function(e){var i=e.children,r=e.innerProps,n=e.isDisabled,o=e.isRtl;return E("div",C({},P(e,"container",{"--is-disabled":n,"--is-rtl":o}),r),i)},ci=function(e,i){var r=e.theme.spacing,n=e.isMulti,o=e.hasValue,u=e.selectProps.controlShouldRenderValue;return w({alignItems:"center",display:n&&o&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},di=function(e){var i=e.children,r=e.innerProps,n=e.isMulti,o=e.hasValue;return E("div",C({},P(e,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":o}),r),i)},pi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},fi=function(e){var i=e.children,r=e.innerProps;return E("div",C({},P(e,"indicatorsContainer",{indicators:!0}),r),i)},Je,mi=["size"],hi=["innerProps","isRtl","size"],vi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Vn=function(e){var i=e.size,r=X(e,mi);return E("svg",C({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:vi},r))},_e=function(e){return E(Vn,C({size:20},e),E("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Pn=function(e){return E(Vn,C({size:20},e),E("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Ln=function(e,i){var r=e.isFocused,n=e.theme,o=n.spacing.baseUnit,u=n.colors;return w({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?u.neutral60:u.neutral20,padding:o*2,":hover":{color:r?u.neutral80:u.neutral40}})},gi=Ln,xi=function(e){var i=e.children,r=e.innerProps;return E("div",C({},P(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||E(Pn,null))},bi=Ln,Ei=function(e){var i=e.children,r=e.innerProps;return E("div",C({},P(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||E(_e,null))},wi=function(e,i){var r=e.isDisabled,n=e.theme,o=n.spacing.baseUnit,u=n.colors;return w({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?u.neutral10:u.neutral20,marginBottom:o*2,marginTop:o*2})},Ci=function(e){var i=e.innerProps;return E("span",C({},i,P(e,"indicatorSeparator",{"indicator-separator":!0})))},Si=Qn(Je||(Je=Et([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Fi=function(e,i){var r=e.isFocused,n=e.size,o=e.theme,u=o.colors,l=o.spacing.baseUnit;return w({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?u.neutral60:u.neutral20,padding:l*2})},we=function(e){var i=e.delay,r=e.offset;return E("span",{css:gn({animation:"".concat(Si," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},yi=function(e){var i=e.innerProps,r=e.isRtl,n=e.size,o=n===void 0?4:n,u=X(e,hi);return E("div",C({},P(w(w({},u),{},{innerProps:i,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),E(we,{delay:0,offset:r}),E(we,{delay:160,offset:!0}),E(we,{delay:320,offset:!r}))},Oi=function(e,i){var r=e.isDisabled,n=e.isFocused,o=e.theme,u=o.colors,l=o.borderRadius,a=o.spacing;return w({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?u.neutral5:u.neutral0,borderColor:r?u.neutral10:n?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:n?u.primary:u.neutral30}})},Di=function(e){var i=e.children,r=e.isDisabled,n=e.isFocused,o=e.innerRef,u=e.innerProps,l=e.menuIsOpen;return E("div",C({ref:o},P(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":n,"control--menu-is-open":l}),u,{"aria-disabled":r||void 0}),i)},Ii=Di,Ai=["data"],Mi=function(e,i){var r=e.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Vi=function(e){var i=e.children,r=e.cx,n=e.getStyles,o=e.getClassNames,u=e.Heading,l=e.headingProps,a=e.innerProps,s=e.label,c=e.theme,d=e.selectProps;return E("div",C({},P(e,"group",{group:!0}),a),E(u,C({},l,{selectProps:d,theme:c,getStyles:n,getClassNames:o,cx:r}),s),E("div",null,i))},Pi=function(e,i){var r=e.theme,n=r.colors,o=r.spacing;return w({label:"group",cursor:"default",display:"block"},i?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},Li=function(e){var i=yn(e);i.data;var r=X(i,Ai);return E("div",C({},P(e,"groupHeading",{"group-heading":!0}),r))},Ri=Vi,Ti=["innerRef","isDisabled","isHidden","inputClassName"],Bi=function(e,i){var r=e.isDisabled,n=e.value,o=e.theme,u=o.spacing,l=o.colors;return w(w({visibility:r?"hidden":"visible",transform:n?"translateZ(0)":""},ki),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},Rn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},ki={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":w({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Rn)},Hi=function(e){return w({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Rn)},ji=function(e){var i=e.cx,r=e.value,n=yn(e),o=n.innerRef,u=n.isDisabled,l=n.isHidden,a=n.inputClassName,s=X(n,Ti);return E("div",C({},P(e,"input",{"input-container":!0}),{"data-value":r||""}),E("input",C({className:i({input:!0},a),ref:o,style:Hi(l),disabled:u},s)))},_i=ji,$i=function(e,i){var r=e.theme,n=r.spacing,o=r.borderRadius,u=r.colors;return w({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:o/2,margin:n.baseUnit/2})},zi=function(e,i){var r=e.theme,n=r.borderRadius,o=r.colors,u=e.cropWithEllipsis;return w({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:n/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Ni=function(e,i){var r=e.theme,n=r.spacing,o=r.borderRadius,u=r.colors,l=e.isFocused;return w({alignItems:"center",display:"flex"},i?{}:{borderRadius:o/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Tn=function(e){var i=e.children,r=e.innerProps;return E("div",r,i)},Ui=Tn,Wi=Tn;function Gi(t){var e=t.children,i=t.innerProps;return E("div",C({role:"button"},i),e||E(_e,{size:14}))}var Yi=function(e){var i=e.children,r=e.components,n=e.data,o=e.innerProps,u=e.isDisabled,l=e.removeProps,a=e.selectProps,s=r.Container,c=r.Label,d=r.Remove;return E(s,{data:n,innerProps:w(w({},P(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),o),selectProps:a},E(c,{data:n,innerProps:w({},P(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},i),E(d,{data:n,innerProps:w(w({},P(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:a}))},qi=Yi,Ki=function(e,i){var r=e.isDisabled,n=e.isFocused,o=e.isSelected,u=e.theme,l=u.spacing,a=u.colors;return w({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:o?a.primary:n?a.primary25:"transparent",color:r?a.neutral20:o?a.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?a.primary:a.primary50}})},Xi=function(e){var i=e.children,r=e.isDisabled,n=e.isFocused,o=e.isSelected,u=e.innerRef,l=e.innerProps;return E("div",C({},P(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":n,"option--is-selected":o}),{ref:u,"aria-disabled":r},l),i)},Zi=Xi,Ji=function(e,i){var r=e.theme,n=r.spacing,o=r.colors;return w({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:o.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},Qi=function(e){var i=e.children,r=e.innerProps;return E("div",C({},P(e,"placeholder",{placeholder:!0}),r),i)},er=Qi,nr=function(e,i){var r=e.isDisabled,n=e.theme,o=n.spacing,u=n.colors;return w({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?u.neutral40:u.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},tr=function(e){var i=e.children,r=e.isDisabled,n=e.innerProps;return E("div",C({},P(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),n),i)},ir=tr,rr={ClearIndicator:Ei,Control:Ii,DropdownIndicator:xi,DownChevron:Pn,CrossIcon:_e,Group:Ri,GroupHeading:Li,IndicatorsContainer:fi,IndicatorSeparator:Ci,Input:_i,LoadingIndicator:yi,Menu:Qt,MenuList:ni,MenuPortal:ui,LoadingMessage:ai,NoOptionsMessage:ri,MultiValue:qi,MultiValueContainer:Ui,MultiValueLabel:Wi,MultiValueRemove:Gi,Option:Zi,Placeholder:er,SelectContainer:li,SingleValue:ir,ValueContainer:di},ar=function(e){return w(w({},rr),e.components)},Qe=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function or(t,e){return!!(t===e||Qe(t)&&Qe(e))}function ur(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(!or(t[i],e[i]))return!1;return!0}function sr(t,e){e===void 0&&(e=ur);var i=null;function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(i&&i.lastThis===this&&e(n,i.lastArgs))return i.lastResult;var u=t.apply(this,n);return i={lastResult:u,lastArgs:n,lastThis:this},u}return r.clear=function(){i=null},r}var lr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},cr=function(e){return E("span",C({css:lr},e))},en=cr,dr={guidance:function(e){var i=e.isSearchable,r=e.isMulti,n=e.tabSelectsValue,o=e.context,u=e.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,r=e.label,n=r===void 0?"":r,o=e.labels,u=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return u?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(e){var i=e.context,r=e.focused,n=e.options,o=e.label,u=o===void 0?"":o,l=e.selectValue,a=e.isDisabled,s=e.isSelected,c=e.isAppleDevice,d=function(g,f){return g&&g.length?"".concat(g.indexOf(f)+1," of ").concat(g.length):""};if(i==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,r),".");if(i==="menu"&&c){var v=a?" disabled":"",h="".concat(s?" selected":"").concat(v);return"".concat(u).concat(h,", ").concat(d(n,r),".")}return""},onFilter:function(e){var i=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},pr=function(e){var i=e.ariaSelection,r=e.focusedOption,n=e.focusedValue,o=e.focusableOptions,u=e.isFocused,l=e.selectValue,a=e.selectProps,s=e.id,c=e.isAppleDevice,d=a.ariaLiveMessages,v=a.getOptionLabel,h=a.inputValue,x=a.isMulti,g=a.isOptionDisabled,f=a.isSearchable,m=a.menuIsOpen,F=a.options,y=a.screenReaderStatus,O=a.tabSelectsValue,I=a.isLoading,A=a["aria-label"],M=a["aria-live"],S=p.useMemo(function(){return w(w({},dr),d||{})},[d]),V=p.useMemo(function(){var T="";if(i&&S.onChange){var L=i.option,N=i.options,_=i.removedValue,Z=i.removedValues,J=i.value,ae=function(q){return Array.isArray(q)?null:q},R=_||L||ae(J),j=R?v(R):"",Y=N||Z||void 0,Q=Y?Y.map(v):[],$=w({isDisabled:R&&g(R,l),label:j,labels:Q},i);T=S.onChange($)}return T},[i,S,g,l,v]),B=p.useMemo(function(){var T="",L=r||n,N=!!(r&&l&&l.includes(r));if(L&&S.onFocus){var _={focused:L,label:v(L),isDisabled:g(L,l),isSelected:N,options:o,context:L===r?"menu":"value",selectValue:l,isAppleDevice:c};T=S.onFocus(_)}return T},[r,n,v,g,S,o,l,c]),H=p.useMemo(function(){var T="";if(m&&F.length&&!I&&S.onFilter){var L=y({count:o.length});T=S.onFilter({inputValue:h,resultsMessage:L})}return T},[o,h,m,S,F,y,I]),k=(i==null?void 0:i.action)==="initial-input-focus",W=p.useMemo(function(){var T="";if(S.guidance){var L=n?"value":m?"menu":"input";T=S.guidance({"aria-label":A,context:L,isDisabled:r&&g(r,l),isMulti:x,isSearchable:f,tabSelectsValue:O,isInitialFocus:k})}return T},[A,r,n,x,g,f,m,S,l,O,k]),G=E(p.Fragment,null,E("span",{id:"aria-selection"},V),E("span",{id:"aria-focused"},B),E("span",{id:"aria-results"},H),E("span",{id:"aria-guidance"},W));return E(p.Fragment,null,E(en,{id:s},k&&G),E(en,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!k&&G))},fr=pr,Te=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],mr=new RegExp("["+Te.map(function(t){return t.letters}).join("")+"]","g"),Bn={};for(var Ce=0;Ce<Te.length;Ce++)for(var Se=Te[Ce],Fe=0;Fe<Se.letters.length;Fe++)Bn[Se.letters[Fe]]=Se.base;var kn=function(e){return e.replace(mr,function(i){return Bn[i]})},hr=sr(kn),nn=function(e){return e.replace(/^\s+|\s+$/g,"")},vr=function(e){return"".concat(e.label," ").concat(e.value)},gr=function(e){return function(i,r){if(i.data.__isNew__)return!0;var n=w({ignoreCase:!0,ignoreAccents:!0,stringify:vr,trim:!0,matchFrom:"any"},e),o=n.ignoreCase,u=n.ignoreAccents,l=n.stringify,a=n.trim,s=n.matchFrom,c=a?nn(r):r,d=a?nn(l(i)):l(i);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=hr(c),d=kn(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},xr=["innerRef"];function br(t){var e=t.innerRef,i=X(t,xr),r=Wt(i,"onExited","in","enter","exit","appear");return E("input",C({ref:e},r,{css:gn({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Er=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function wr(t){var e=t.isEnabled,i=t.onBottomArrive,r=t.onBottomLeave,n=t.onTopArrive,o=t.onTopLeave,u=p.useRef(!1),l=p.useRef(!1),a=p.useRef(0),s=p.useRef(null),c=p.useCallback(function(f,m){if(s.current!==null){var F=s.current,y=F.scrollTop,O=F.scrollHeight,I=F.clientHeight,A=s.current,M=m>0,S=O-I-y,V=!1;S>m&&u.current&&(r&&r(f),u.current=!1),M&&l.current&&(o&&o(f),l.current=!1),M&&m>S?(i&&!u.current&&i(f),A.scrollTop=O,V=!0,u.current=!0):!M&&-m>y&&(n&&!l.current&&n(f),A.scrollTop=0,V=!0,l.current=!0),V&&Er(f)}},[i,r,n,o]),d=p.useCallback(function(f){c(f,f.deltaY)},[c]),v=p.useCallback(function(f){a.current=f.changedTouches[0].clientY},[]),h=p.useCallback(function(f){var m=a.current-f.changedTouches[0].clientY;c(f,m)},[c]),x=p.useCallback(function(f){if(f){var m=zt?{passive:!1}:!1;f.addEventListener("wheel",d,m),f.addEventListener("touchstart",v,m),f.addEventListener("touchmove",h,m)}},[h,v,d]),g=p.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",v,!1),f.removeEventListener("touchmove",h,!1))},[h,v,d]);return p.useEffect(function(){if(e){var f=s.current;return x(f),function(){g(f)}}},[e,x,g]),function(f){s.current=f}}var tn=["boxSizing","height","overflow","paddingRight","position"],rn={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function an(t){t.preventDefault()}function on(t){t.stopPropagation()}function un(){var t=this.scrollTop,e=this.scrollHeight,i=t+this.offsetHeight;t===0?this.scrollTop=1:i===e&&(this.scrollTop=t-1)}function sn(){return"ontouchstart"in window||navigator.maxTouchPoints}var ln=!!(typeof window<"u"&&window.document&&window.document.createElement),ie=0,te={capture:!1,passive:!1};function Cr(t){var e=t.isEnabled,i=t.accountForScrollbars,r=i===void 0?!0:i,n=p.useRef({}),o=p.useRef(null),u=p.useCallback(function(a){if(ln){var s=document.body,c=s&&s.style;if(r&&tn.forEach(function(x){var g=c&&c[x];n.current[x]=g}),r&&ie<1){var d=parseInt(n.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,h=window.innerWidth-v+d||0;Object.keys(rn).forEach(function(x){var g=rn[x];c&&(c[x]=g)}),c&&(c.paddingRight="".concat(h,"px"))}s&&sn()&&(s.addEventListener("touchmove",an,te),a&&(a.addEventListener("touchstart",un,te),a.addEventListener("touchmove",on,te))),ie+=1}},[r]),l=p.useCallback(function(a){if(ln){var s=document.body,c=s&&s.style;ie=Math.max(ie-1,0),r&&ie<1&&tn.forEach(function(d){var v=n.current[d];c&&(c[d]=v)}),s&&sn()&&(s.removeEventListener("touchmove",an,te),a&&(a.removeEventListener("touchstart",un,te),a.removeEventListener("touchmove",on,te)))}},[r]);return p.useEffect(function(){if(e){var a=o.current;return u(a),function(){l(a)}}},[e,u,l]),function(a){o.current=a}}var Sr=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Fr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function yr(t){var e=t.children,i=t.lockEnabled,r=t.captureEnabled,n=r===void 0?!0:r,o=t.onBottomArrive,u=t.onBottomLeave,l=t.onTopArrive,a=t.onTopLeave,s=wr({isEnabled:n,onBottomArrive:o,onBottomLeave:u,onTopArrive:l,onTopLeave:a}),c=Cr({isEnabled:i}),d=function(h){s(h),c(h)};return E(p.Fragment,null,i&&E("div",{onClick:Sr,css:Fr}),e(d))}var Or={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Dr=function(e){var i=e.name,r=e.onFocus;return E("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Or,value:"",onChange:function(){}})},Ir=Dr;function $e(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Ar(){return $e(/^iPhone/i)}function Hn(){return $e(/^Mac/i)}function Mr(){return $e(/^iPad/i)||Hn()&&navigator.maxTouchPoints>1}function Vr(){return Ar()||Mr()}function Pr(){return Hn()||Vr()}var Lr=function(e){return e.label},Rr=function(e){return e.label},Tr=function(e){return e.value},Br=function(e){return!!e.isDisabled},kr={clearIndicator:bi,container:si,control:Oi,dropdownIndicator:gi,group:Mi,groupHeading:Pi,indicatorsContainer:pi,indicatorSeparator:wi,input:Bi,loadingIndicator:Fi,loadingMessage:ii,menu:Xt,menuList:ei,menuPortal:oi,multiValue:$i,multiValueLabel:zi,multiValueRemove:Ni,noOptionsMessage:ti,option:Ki,placeholder:Ji,singleValue:nr,valueContainer:ci},Hr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},jr=4,jn=4,_r=38,$r=jn*2,zr={baseUnit:jn,controlHeight:_r,menuGutter:$r},ye={borderRadius:jr,colors:Hr,spacing:zr},Nr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ze(),captureMenuScroll:!Ze(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:gr(),formatGroupLabel:Lr,getOptionLabel:Rr,getOptionValue:Tr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Br,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!_t(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function cn(t,e,i,r){var n=zn(t,e,i),o=Nn(t,e,i),u=$n(t,e),l=xe(t,e);return{type:"option",data:e,isDisabled:n,isSelected:o,label:u,value:l,index:r}}function de(t,e){return t.options.map(function(i,r){if("options"in i){var n=i.options.map(function(u,l){return cn(t,u,e,l)}).filter(function(u){return pn(t,u)});return n.length>0?{type:"group",data:i,options:n,index:r}:void 0}var o=cn(t,i,e,r);return pn(t,o)?o:void 0}).filter(Nt)}function _n(t){return t.reduce(function(e,i){return i.type==="group"?e.push.apply(e,Be(i.options.map(function(r){return r.data}))):e.push(i.data),e},[])}function dn(t,e){return t.reduce(function(i,r){return r.type==="group"?i.push.apply(i,Be(r.options.map(function(n){return{data:n.data,id:"".concat(e,"-").concat(r.index,"-").concat(n.index)}}))):i.push({data:r.data,id:"".concat(e,"-").concat(r.index)}),i},[])}function Ur(t,e){return _n(de(t,e))}function pn(t,e){var i=t.inputValue,r=i===void 0?"":i,n=e.data,o=e.isSelected,u=e.label,l=e.value;return(!Wn(t)||!o)&&Un(t,{label:u,value:l,data:n},r)}function Wr(t,e){var i=t.focusedValue,r=t.selectValue,n=r.indexOf(i);if(n>-1){var o=e.indexOf(i);if(o>-1)return i;if(n<e.length)return e[n]}return null}function Gr(t,e){var i=t.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var Oe=function(e,i){var r,n=(r=e.find(function(o){return o.data===i}))===null||r===void 0?void 0:r.id;return n||null},$n=function(e,i){return e.getOptionLabel(i)},xe=function(e,i){return e.getOptionValue(i)};function zn(t,e,i){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,i):!1}function Nn(t,e,i){if(i.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,i);var r=xe(t,e);return i.some(function(n){return xe(t,n)===r})}function Un(t,e,i){return t.filterOption?t.filterOption(e,i):!0}var Wn=function(e){var i=e.hideSelectedOptions,r=e.isMulti;return i===void 0?r:i},Yr=1,Gn=function(t){pt(i,t);var e=vt(i);function i(r){var n;if(ct(this,i),n=e.call(this,r),n.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.isAppleDevice=Pr(),n.controlRef=null,n.getControlRef=function(a){n.controlRef=a},n.focusedOptionRef=null,n.getFocusedOptionRef=function(a){n.focusedOptionRef=a},n.menuListRef=null,n.getMenuListRef=function(a){n.menuListRef=a},n.inputRef=null,n.getInputRef=function(a){n.inputRef=a},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(a,s){var c=n.props,d=c.onChange,v=c.name;s.name=v,n.ariaOnChange(a,s),d(a,s)},n.setValue=function(a,s,c){var d=n.props,v=d.closeMenuOnSelect,h=d.isMulti,x=d.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:x}),v&&(n.setState({inputIsHiddenAfterUpdate:!h}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(a,{action:s,option:c})},n.selectOption=function(a){var s=n.props,c=s.blurInputOnSelect,d=s.isMulti,v=s.name,h=n.state.selectValue,x=d&&n.isOptionSelected(a,h),g=n.isOptionDisabled(a,h);if(x){var f=n.getOptionValue(a);n.setValue(h.filter(function(m){return n.getOptionValue(m)!==f}),"deselect-option",a)}else if(!g)d?n.setValue([].concat(Be(h),[a]),"select-option",a):n.setValue(a,"select-option");else{n.ariaOnChange(a,{action:"select-option",option:a,name:v});return}c&&n.blurInput()},n.removeValue=function(a){var s=n.props.isMulti,c=n.state.selectValue,d=n.getOptionValue(a),v=c.filter(function(x){return n.getOptionValue(x)!==d}),h=ce(s,v,v[0]||null);n.onChange(h,{action:"remove-value",removedValue:a}),n.focusInput()},n.clearValue=function(){var a=n.state.selectValue;n.onChange(ce(n.props.isMulti,[],null),{action:"clear",removedValues:a})},n.popValue=function(){var a=n.props.isMulti,s=n.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),v=ce(a,d,d[0]||null);n.onChange(v,{action:"pop-value",removedValue:c})},n.getFocusedOptionId=function(a){return Oe(n.state.focusableOptionsWithIds,a)},n.getFocusableOptionsWithIds=function(){return dn(de(n.props,n.state.selectValue),n.getElementId("option"))},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return Tt.apply(void 0,[n.props.classNamePrefix].concat(s))},n.getOptionLabel=function(a){return $n(n.props,a)},n.getOptionValue=function(a){return xe(n.props,a)},n.getStyles=function(a,s){var c=n.props.unstyled,d=kr[a](s,c);d.boxSizing="border-box";var v=n.props.styles[a];return v?v(d,s):d},n.getClassNames=function(a,s){var c,d;return(c=(d=n.props.classNames)[a])===null||c===void 0?void 0:c.call(d,s)},n.getElementId=function(a){return"".concat(n.state.instancePrefix,"-").concat(a)},n.getComponents=function(){return ar(n.props)},n.buildCategorizedOptions=function(){return de(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return _n(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(a,s){n.setState({ariaSelection:w({value:a},s)})},n.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(a){n.blockOptionHover=!1},n.onControlMouseDown=function(a){if(!a.defaultPrevented){var s=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&n.onMenuClose():s&&n.openMenu("first"):(s&&(n.openAfterFocus=!0),n.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},n.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!n.props.isDisabled){var s=n.props,c=s.isMulti,d=s.menuIsOpen;n.focusInput(),d?(n.setState({inputIsHiddenAfterUpdate:!c}),n.onMenuClose()):n.openMenu("first"),a.preventDefault()}},n.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(n.clearValue(),a.preventDefault(),n.openAfterFocus=!1,a.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(a){typeof n.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&be(a.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(a)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(a){var s=a.touches,c=s&&s.item(0);c&&(n.initialTouchX=c.clientX,n.initialTouchY=c.clientY,n.userIsDragging=!1)},n.onTouchMove=function(a){var s=a.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-n.initialTouchX),v=Math.abs(c.clientY-n.initialTouchY),h=5;n.userIsDragging=d>h||v>h}},n.onTouchEnd=function(a){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(a.target)&&n.menuListRef&&!n.menuListRef.contains(a.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(a){n.userIsDragging||n.onControlMouseDown(a)},n.onClearIndicatorTouchEnd=function(a){n.userIsDragging||n.onClearIndicatorMouseDown(a)},n.onDropdownIndicatorTouchEnd=function(a){n.userIsDragging||n.onDropdownIndicatorMouseDown(a)},n.handleInputChange=function(a){var s=n.props.inputValue,c=a.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(c,{action:"input-change",prevInputValue:s}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(a){n.props.onFocus&&n.props.onFocus(a),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(a){var s=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(a),n.onInputChange("",{action:"input-blur",prevInputValue:s}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(a){if(!(n.blockOptionHover||n.state.focusedOption===a)){var s=n.getFocusableOptions(),c=s.indexOf(a);n.setState({focusedOption:a,focusedOptionId:c>-1?n.getFocusedOptionId(a):null})}},n.shouldHideSelectedOptions=function(){return Wn(n.props)},n.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),n.focus()},n.onKeyDown=function(a){var s=n.props,c=s.isMulti,d=s.backspaceRemovesValue,v=s.escapeClearsValue,h=s.inputValue,x=s.isClearable,g=s.isDisabled,f=s.menuIsOpen,m=s.onKeyDown,F=s.tabSelectsValue,y=s.openMenuOnFocus,O=n.state,I=O.focusedOption,A=O.focusedValue,M=O.selectValue;if(!g&&!(typeof m=="function"&&(m(a),a.defaultPrevented))){switch(n.blockOptionHover=!0,a.key){case"ArrowLeft":if(!c||h)return;n.focusValue("previous");break;case"ArrowRight":if(!c||h)return;n.focusValue("next");break;case"Delete":case"Backspace":if(h)return;if(A)n.removeValue(A);else{if(!d)return;c?n.popValue():x&&n.clearValue()}break;case"Tab":if(n.isComposing||a.shiftKey||!f||!F||!I||y&&n.isOptionSelected(I,M))return;n.selectOption(I);break;case"Enter":if(a.keyCode===229)break;if(f){if(!I||n.isComposing)return;n.selectOption(I);break}return;case"Escape":f?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:h}),n.onMenuClose()):x&&v&&n.clearValue();break;case" ":if(h)return;if(!f){n.openMenu("first");break}if(!I)return;n.selectOption(I);break;case"ArrowUp":f?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":f?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!f)return;n.focusOption("pageup");break;case"PageDown":if(!f)return;n.focusOption("pagedown");break;case"Home":if(!f)return;n.focusOption("first");break;case"End":if(!f)return;n.focusOption("last");break;default:return}a.preventDefault()}},n.state.instancePrefix="react-select-"+(n.props.instanceId||++Yr),n.state.selectValue=Ke(r.value),r.menuIsOpen&&n.state.selectValue.length){var o=n.getFocusableOptionsWithIds(),u=n.buildFocusableOptions(),l=u.indexOf(n.state.selectValue[0]);n.state.focusableOptionsWithIds=o,n.state.focusedOption=u[l],n.state.focusedOptionId=Oe(o,u[l])}return n}return dt(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Xe(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var o=this.props,u=o.isDisabled,l=o.menuIsOpen,a=this.state.isFocused;(a&&!u&&n.isDisabled||a&&l&&!n.menuIsOpen)&&this.focusInput(),a&&u&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!u&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Xe(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,o){this.props.onInputChange(n,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var o=this,u=this.state,l=u.selectValue,a=u.isFocused,s=this.buildFocusableOptions(),c=n==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(n){var o=this.state,u=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=u.indexOf(l);l||(a=-1);var s=u.length-1,c=-1;if(u.length){switch(n){case"previous":a===0?c=0:a===-1?c=s:c=a-1;break;case"next":a>-1&&a<s&&(c=a+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var a=0,s=l.indexOf(u);u||(s=-1),n==="up"?a=s>0?s-1:l.length-1:n==="down"?a=(s+1)%l.length:n==="pageup"?(a=s-o,a<0&&(a=0)):n==="pagedown"?(a=s+o,a>l.length-1&&(a=l.length-1)):n==="last"&&(a=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ye):w(w({},ye),this.props.theme):ye}},{key:"getCommonProps",value:function(){var n=this.clearValue,o=this.cx,u=this.getStyles,l=this.getClassNames,a=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,h=d.isRtl,x=d.options,g=this.hasValue();return{clearValue:n,cx:o,getStyles:u,getClassNames:l,getValue:a,hasValue:g,isMulti:v,isRtl:h,options:x,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,o=n.isClearable,u=n.isMulti;return o===void 0?u:o}},{key:"isOptionDisabled",value:function(n,o){return zn(this.props,n,o)}},{key:"isOptionSelected",value:function(n,o){return Nn(this.props,n,o)}},{key:"filterOption",value:function(n,o){return Un(this.props,n,o)}},{key:"formatOptionLabel",value:function(n,o){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(n,{context:o,inputValue:u,selectValue:l})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,o=n.isDisabled,u=n.isSearchable,l=n.inputId,a=n.inputValue,s=n.tabIndex,c=n.form,d=n.menuIsOpen,v=n.required,h=this.getComponents(),x=h.Input,g=this.state,f=g.inputIsHidden,m=g.ariaSelection,F=this.commonProps,y=l||this.getElementId("input"),O=w(w(w({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(x,C({},F,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:o,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:a},O)):p.createElement(br,C({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ve,onFocus:this.onInputFocus,disabled:o,tabIndex:s,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,o=this.getComponents(),u=o.MultiValue,l=o.MultiValueContainer,a=o.MultiValueLabel,s=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,v=this.commonProps,h=this.props,x=h.controlShouldRenderValue,g=h.isDisabled,f=h.isMulti,m=h.inputValue,F=h.placeholder,y=this.state,O=y.selectValue,I=y.focusedValue,A=y.isFocused;if(!this.hasValue()||!x)return m?null:p.createElement(d,C({},v,{key:"placeholder",isDisabled:g,isFocused:A,innerProps:{id:this.getElementId("placeholder")}}),F);if(f)return O.map(function(S,V){var B=S===I,H="".concat(n.getOptionLabel(S),"-").concat(n.getOptionValue(S));return p.createElement(u,C({},v,{components:{Container:l,Label:a,Remove:s},isFocused:B,isDisabled:g,key:H,index:V,removeProps:{onClick:function(){return n.removeValue(S)},onTouchEnd:function(){return n.removeValue(S)},onMouseDown:function(W){W.preventDefault()}},data:S}),n.formatOptionLabel(S,"value"))});if(m)return null;var M=O[0];return p.createElement(c,C({},v,{data:M,isDisabled:g}),this.formatOptionLabel(M,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),o=n.ClearIndicator,u=this.commonProps,l=this.props,a=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||a||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(o,C({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),o=n.LoadingIndicator,u=this.commonProps,l=this.props,a=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!o||!s)return null;var d={"aria-hidden":"true"};return p.createElement(o,C({},u,{innerProps:d,isDisabled:a,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),o=n.DropdownIndicator,u=n.IndicatorSeparator;if(!o||!u)return null;var l=this.commonProps,a=this.props.isDisabled,s=this.state.isFocused;return p.createElement(u,C({},l,{isDisabled:a,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),o=n.DropdownIndicator;if(!o)return null;var u=this.commonProps,l=this.props.isDisabled,a=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(o,C({},u,{innerProps:s,isDisabled:l,isFocused:a}))}},{key:"renderMenu",value:function(){var n=this,o=this.getComponents(),u=o.Group,l=o.GroupHeading,a=o.Menu,s=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,v=o.NoOptionsMessage,h=o.Option,x=this.commonProps,g=this.state.focusedOption,f=this.props,m=f.captureMenuScroll,F=f.inputValue,y=f.isLoading,O=f.loadingMessage,I=f.minMenuHeight,A=f.maxMenuHeight,M=f.menuIsOpen,S=f.menuPlacement,V=f.menuPosition,B=f.menuPortalTarget,H=f.menuShouldBlockScroll,k=f.menuShouldScrollIntoView,W=f.noOptionsMessage,G=f.onMenuScrollToTop,T=f.onMenuScrollToBottom;if(!M)return null;var L=function(j,Y){var Q=j.type,$=j.data,ee=j.isDisabled,q=j.isSelected,oe=j.label,Xn=j.value,ze=g===$,Ne=ee?void 0:function(){return n.onOptionHover($)},Zn=ee?void 0:function(){return n.selectOption($)},Ue="".concat(n.getElementId("option"),"-").concat(Y),Jn={id:Ue,onClick:Zn,onMouseMove:Ne,onMouseOver:Ne,tabIndex:-1,role:"option","aria-selected":n.isAppleDevice?void 0:q};return p.createElement(h,C({},x,{innerProps:Jn,data:$,isDisabled:ee,isSelected:q,key:Ue,label:oe,type:Q,value:Xn,isFocused:ze,innerRef:ze?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(j.data,"menu"))},N;if(this.hasOptions())N=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var j=R.data,Y=R.options,Q=R.index,$="".concat(n.getElementId("group"),"-").concat(Q),ee="".concat($,"-heading");return p.createElement(u,C({},x,{key:$,data:j,options:Y,Heading:l,headingProps:{id:ee,data:R.data},label:n.formatGroupLabel(R.data)}),R.options.map(function(q){return L(q,"".concat(Q,"-").concat(q.index))}))}else if(R.type==="option")return L(R,"".concat(R.index))});else if(y){var _=O({inputValue:F});if(_===null)return null;N=p.createElement(d,x,_)}else{var Z=W({inputValue:F});if(Z===null)return null;N=p.createElement(v,x,Z)}var J={minMenuHeight:I,maxMenuHeight:A,menuPlacement:S,menuPosition:V,menuShouldScrollIntoView:k},ae=p.createElement(Zt,C({},x,J),function(R){var j=R.ref,Y=R.placerProps,Q=Y.placement,$=Y.maxHeight;return p.createElement(a,C({},x,J,{innerRef:j,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove},isLoading:y,placement:Q}),p.createElement(yr,{captureEnabled:m,onTopArrive:G,onBottomArrive:T,lockEnabled:H},function(ee){return p.createElement(s,C({},x,{innerRef:function(oe){n.getMenuListRef(oe),ee(oe)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:n.getElementId("listbox")},isLoading:y,maxHeight:$,focusedOption:g}),N)}))});return B||V==="fixed"?p.createElement(c,C({},x,{appendTo:B,controlElement:this.controlRef,menuPlacement:S,menuPosition:V}),ae):ae}},{key:"renderFormField",value:function(){var n=this,o=this.props,u=o.delimiter,l=o.isDisabled,a=o.isMulti,s=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(Ir,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(a)if(u){var v=d.map(function(g){return n.getOptionValue(g)}).join(u);return p.createElement("input",{name:s,type:"hidden",value:v})}else{var h=d.length>0?d.map(function(g,f){return p.createElement("input",{key:"i-".concat(f),name:s,type:"hidden",value:n.getOptionValue(g)})}):p.createElement("input",{name:s,type:"hidden",value:""});return p.createElement("div",null,h)}else{var x=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:s,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,o=this.state,u=o.ariaSelection,l=o.focusedOption,a=o.focusedValue,s=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return p.createElement(fr,C({},n,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:a,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var n=this.getComponents(),o=n.Control,u=n.IndicatorsContainer,l=n.SelectContainer,a=n.ValueContainer,s=this.props,c=s.className,d=s.id,v=s.isDisabled,h=s.menuIsOpen,x=this.state.isFocused,g=this.commonProps=this.getCommonProps();return p.createElement(l,C({},g,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:x}),this.renderLiveRegion(),p.createElement(o,C({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:x,menuIsOpen:h}),p.createElement(a,C({},g,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,C({},g,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,o){var u=o.prevProps,l=o.clearFocusValueOnUpdate,a=o.inputIsHiddenAfterUpdate,s=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,v=o.instancePrefix,h=n.options,x=n.value,g=n.menuIsOpen,f=n.inputValue,m=n.isMulti,F=Ke(x),y={};if(u&&(x!==u.value||h!==u.options||g!==u.menuIsOpen||f!==u.inputValue)){var O=g?Ur(n,F):[],I=g?dn(de(n,F),"".concat(v,"-option")):[],A=l?Wr(o,F):null,M=Gr(o,O),S=Oe(I,M);y={selectValue:F,focusedOption:M,focusedOptionId:S,focusableOptionsWithIds:I,focusedValue:A,clearFocusValueOnUpdate:!1}}var V=a!=null&&n!==u?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},B=s,H=c&&d;return c&&!H&&(B={value:ce(m,F,F[0]||null),options:F,action:"initial-input-focus"},H=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(B=null),w(w(w({},y),V),{},{prevProps:n,ariaSelection:B,prevWasFocused:H})}}]),i}(p.Component);Gn.defaultProps=Nr;var qr=p.forwardRef(function(t,e){var i=lt(t);return p.createElement(Gn,C({ref:e},i))}),Kr=qr;const Yn=t=>p.createElement("svg",{width:28,height:28,viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg",...t},p.createElement("g",{opacity:.8},p.createElement("path",{d:"M25.1286 9.41152C25.115 8.47146 24.9408 7.53885 24.6074 6.65964C24.0241 5.15827 22.8361 3.97109 21.3323 3.38991C20.4628 3.06332 19.5436 2.88822 18.6131 2.86835C17.4165 2.81495 17.0371 2.80005 13.9995 2.80005C10.962 2.80005 10.5726 2.80005 9.3847 2.86835C8.45551 2.88822 7.53628 3.06332 6.6668 3.38991C5.16293 3.97109 3.97377 5.15827 3.39163 6.65964C3.06449 7.52767 2.88785 8.44538 2.87044 9.37302C2.81695 10.5689 2.80078 10.9477 2.80078 13.9802C2.80078 17.0127 2.80078 17.4002 2.87044 18.5873C2.8891 19.5162 3.06449 20.4327 3.39163 21.3032C3.97501 22.8033 5.16293 23.9905 6.66804 24.5717C7.53379 24.9095 8.45303 25.1007 9.38594 25.1305C10.5838 25.1839 10.9632 25.2001 14.0008 25.2001C17.0384 25.2001 17.4277 25.2001 18.6156 25.1305C19.5448 25.1119 20.464 24.9368 21.3348 24.6102C22.8386 24.0278 24.0266 22.8406 24.6099 21.3405C24.9371 20.4712 25.1125 19.5547 25.1311 18.6246C25.1846 17.43 25.2008 17.0512 25.2008 14.0174C25.1983 10.9849 25.1983 10.5999 25.1286 9.41152ZM13.9921 19.7149C10.8152 19.7149 8.24156 17.1456 8.24156 13.974C8.24156 10.8024 10.8152 8.23302 13.9921 8.23302C17.1665 8.23302 19.7426 10.8024 19.7426 13.974C19.7426 17.1456 17.1665 19.7149 13.9921 19.7149ZM19.9715 9.35936C19.2289 9.35936 18.6305 8.7608 18.6305 8.02067C18.6305 7.28055 19.2289 6.68199 19.9715 6.68199C20.7116 6.68199 21.3111 7.28055 21.3111 8.02067C21.3111 8.7608 20.7116 9.35936 19.9715 9.35936Z"}),p.createElement("path",{d:"M13.9937 17.4789C15.9287 17.4789 17.4972 15.9104 17.4972 13.9754C17.4972 12.0405 15.9287 10.4719 13.9937 10.4719C12.0588 10.4719 10.4902 12.0405 10.4902 13.9754C10.4902 15.9104 12.0588 17.4789 13.9937 17.4789Z"}))),qn=t=>p.createElement("svg",{width:24,height:24,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...t},p.createElement("g",{opacity:.8},p.createElement("path",{d:"M15.197 0.003c-2.567 0.035-8.089 0.456-11.179 3.287-2.293 2.28-3.095 5.641-3.188 9.804-0.080 4.147-0.173 11.933 7.333 14.055v3.227c0 0-0.051 1.293 0.803 1.56 1.053 0.333 1.653-0.665 2.653-1.732l1.867-2.107c5.133 0.427 9.067-0.559 9.52-0.705 1.040-0.333 6.908-1.081 7.868-8.869 0.987-8.041-0.48-13.108-3.12-15.401l-0.013-0.003c-0.8-0.733-4-3.067-11.16-3.093 0 0-0.528-0.033-1.384-0.021zM15.287 2.265c0.727-0.004 1.173 0.027 1.173 0.027 6.053 0.013 8.948 1.84 9.628 2.453 2.227 1.905 3.371 6.475 2.533 13.189-0.8 6.507-5.56 6.92-6.44 7.2-0.373 0.12-3.84 0.973-8.203 0.693 0 0-3.252 3.921-4.265 4.935-0.16 0.173-0.347 0.227-0.467 0.2-0.173-0.040-0.227-0.253-0.213-0.547l0.027-5.359c-6.361-1.76-5.988-8.403-5.921-11.869 0.080-3.467 0.733-6.309 2.667-8.229 2.609-2.36 7.3-2.68 9.481-2.693zM15.767 5.732c-0 0-0.001 0-0.001 0-0.22 0-0.399 0.178-0.399 0.399 0 0 0 0 0 0v0c0 0.221 0.179 0.4 0.4 0.4v0c0.043-0.001 0.093-0.001 0.143-0.001 2.034 0 3.88 0.809 5.232 2.123l-0.002-0.002c1.453 1.413 2.161 3.307 2.188 5.787 0 0.221 0.179 0.4 0.4 0.4v0-0.012c0.221 0 0.4-0.179 0.4-0.4v0c0.005-0.109 0.008-0.236 0.008-0.364 0-2.326-0.923-4.436-2.423-5.985l0.002 0.002c-1.587-1.547-3.589-2.347-5.948-2.347zM10.495 6.652c-0.054-0.008-0.116-0.013-0.18-0.013-0.236 0-0.457 0.064-0.646 0.176l0.006-0.003h-0.016c-0.547 0.32-1.051 0.72-1.531 1.253-0.36 0.427-0.561 0.852-0.615 1.265-0.009 0.064-0.014 0.137-0.014 0.212 0 0.182 0.029 0.357 0.084 0.521l-0.003-0.012 0.027 0.013c0.458 1.331 0.998 2.476 1.646 3.549l-0.046-0.082c0.895 1.608 1.922 2.996 3.101 4.237l-0.008-0.009 0.040 0.053 0.053 0.040 0.080 0.080c1.236 1.174 2.628 2.205 4.136 3.053l0.104 0.054c1.76 0.96 2.829 1.413 3.469 1.6v0.013c0.187 0.053 0.357 0.080 0.531 0.080 0.57-0.043 1.079-0.274 1.471-0.631l-0.002 0.002c0.52-0.467 0.933-0.984 1.24-1.531v-0.013c0.307-0.573 0.2-1.121-0.24-1.495-0.845-0.742-1.782-1.421-2.781-2.007l-0.085-0.046c-0.68-0.373-1.373-0.147-1.653 0.227l-0.6 0.759c-0.307 0.373-0.867 0.32-0.867 0.32l-0.016 0.013c-4.16-1.067-5.267-5.279-5.267-5.279s-0.053-0.573 0.333-0.867l0.747-0.6c0.36-0.293 0.613-0.987 0.227-1.667-0.631-1.084-1.31-2.022-2.071-2.887l0.017 0.020c-0.166-0.204-0.399-0.349-0.665-0.399l-0.007-0.001zM16.459 7.839c-0.22 0.001-0.399 0.18-0.399 0.4s0.179 0.4 0.4 0.4c0 0 0.001 0 0.001 0h-0c1.388 0.025 2.636 0.607 3.532 1.532l0.001 0.001c0.75 0.825 1.209 1.926 1.209 3.134 0 0.103-0.003 0.205-0.010 0.306l0.001-0.014c0.001 0.22 0.18 0.399 0.4 0.399 0 0 0 0 0 0v0l0.013 0.016c0 0 0 0 0 0 0.221 0 0.4-0.179 0.4-0.4 0-0 0-0.001 0-0.001v0c0.040-1.587-0.453-2.92-1.427-3.987s-2.333-1.667-4.067-1.787c-0.008-0.001-0.018-0.001-0.028-0.001s-0.020 0-0.029 0.001l0.001-0zM17.112 9.997c-0.004-0-0.008-0-0.012-0-0.225 0-0.407 0.182-0.407 0.408 0 0.221 0.176 0.401 0.395 0.407h0.001c1.32 0.067 1.96 0.733 2.040 2.107 0.007 0.215 0.184 0.387 0.4 0.387 0 0 0 0 0 0h0.013c0.215-0.007 0.388-0.183 0.388-0.4 0-0.009-0-0.019-0.001-0.028l0 0.001c-0.093-1.787-1.067-2.788-2.8-2.881-0.002-0-0.005-0-0.008-0s-0.006 0-0.008 0h0z"}))),Kn=t=>p.createElement("svg",{width:28,height:28,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...t},p.createElement("g",{opacity:.8},p.createElement("path",{opacity:.7,d:"M26.070 3.996c-0.321 0.023-0.636 0.099-0.933 0.223h-0.004c-0.285 0.113-1.64 0.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l0.062-0.024c0 0-0.359 0.118-0.734 0.375-0.232 0.147-0.431 0.34-0.586 0.567-0.184 0.27-0.332 0.683-0.277 1.11 0.090 0.722 0.558 1.155 0.894 1.394 0.34 0.242 0.664 0.355 0.664 0.355h0.008l4.883 1.645c0.219 0.703 1.488 4.875 1.793 5.836 0.18 0.574 0.355 0.933 0.574 1.207 0.106 0.14 0.23 0.257 0.379 0.351 0.077 0.045 0.16 0.081 0.246 0.106l-0.050-0.012c0.015 0.004 0.027 0.016 0.038 0.020 0.040 0.011 0.067 0.015 0.118 0.023 0.773 0.234 1.394-0.246 1.394-0.246l0.035-0.028 2.883-2.625 4.832 3.707 0.11 0.047c1.007 0.442 2.027 0.196 2.566-0.238 0.543-0.437 0.754-0.996 0.754-0.996l0.035-0.090 3.734-19.129c0.106-0.472 0.133-0.914 0.016-1.343-0.121-0.434-0.399-0.808-0.781-1.047-0.321-0.195-0.692-0.289-1.067-0.27zM25.969 6.046c-0.004 0.063 0.008 0.056-0.020 0.177v0.011l-3.699 18.93c-0.016 0.027-0.043 0.086-0.117 0.145-0.078 0.062-0.14 0.101-0.465-0.028l-5.91-4.531-3.57 3.254 0.75-4.79 9.656-9c0.398-0.37 0.265-0.448 0.265-0.448 0.028-0.454-0.601-0.133-0.601-0.133l-12.176 7.543-0.004-0.020-5.851-1.972c0.010-0.003 0.020-0.007 0.030-0.012l0.032-0.016 0.031-0.011c0 0 5.211-2.196 10.508-4.426 2.652-1.117 5.324-2.242 7.379-3.11 1.219-0.513 2.439-1.023 3.66-1.53 0.082-0.032 0.043-0.032 0.102-0.032v-0.001z"}))),Xr=D.header`
    padding-top: 30px;
    box-shadow: 0px 2px 0px 0px var(--shadow-color);
`,Zr=D.div`

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

`;const Jr=D.div`
`,Qr=D.label`
`,ea=()=>({container:t=>({...t}),control:t=>({display:"flex",padding:"0px 0px 0px 0px",fontWeight:"400",fontSize:"12px",color:"var(--text-color)",backgroundColor:"transparent"}),option:()=>({padding:"5px 10px 5px 10px",fontSize:"12px",backgroundColor:"transparent",color:"var(--text-color)",cursor:"default",transition:"color var(--transition)",":hover":{backgroundColor:"var(--back-color)"},":active":{backgroundColor:"var(--back-color)"}})}),na=D.div`
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

`,ta=D.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    row-gap: 25px;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
        align-items: center;
    }
`,ia=D.h1`
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
`,ra=D.h2`
    

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
`,aa=D.div`
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

`,oa=D.ul`
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
`,fn=D.li`
`,ua=D.p`
    font-weight: 600;
    text-wrap:nowrap;
    margin-bottom: 11px;
    text-align: center;

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 767.8px),
    screen and (min-resolution : 96dpi) and (min-width: 767.8px),
    screen and (min-resolution : 1dppx) and (min-width: 767.8px){
        text-align: left;
    }

`,mn=D.a`
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
`,sa=D.ul`
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: flex-start;
    
    @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
        justify-content: center;
    }
`,De=D.li`
    width: 36px;
    height: 36px;
`,Ie=D.a`
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
`,la=D(Yn)`
    height: 22px;
    width: 22px;
    fill: var(--text-color);
`,ca=D(qn)`
    height: 20px;
    width: 20px;
    fill: var(--text-color);
`,da=D(Kn)`
    height: 22px;
    width: 22px;
    fill: var(--text-color);
    
`,pa=({language:t,onLanguageChange:e})=>{const i=(r,n)=>{e(r.value)};return b.jsx(Xr,{children:b.jsxs(Zr,{children:[b.jsxs(na,{children:[b.jsx(ia,{children:U.title[t]}),b.jsx(ra,{children:U.subTitle[t]})]}),b.jsxs(ta,{children:[b.jsxs(aa,{children:[b.jsxs("address",{children:[b.jsx(ua,{children:U.address[t]}),b.jsxs(oa,{children:[b.jsx(fn,{children:b.jsx(mn,{href:"tel:+38(097)678-13-96","aria-label":"Telephone us at 38-097-678-13-96",children:"+38 (097) 678-13-96"})}),b.jsx(fn,{children:b.jsx(mn,{href:"tel:+38(050)531-92-76","aria-label":"Telephone us at 38-050-531-92-76",children:"+38 (050) 531-92-76"})})]})]}),b.jsxs(sa,{children:[b.jsx(De,{children:b.jsx(Ie,{href:"https://www.instagram.com/nataha9754","aria-label":"Write to us on Instagram",target:"_blank",rel:"noopener noreferrer",children:b.jsx(la,{})})}),b.jsx(De,{children:b.jsx(Ie,{href:"viber://chat?number=%2B380976781396","aria-label":"Write to us on Viber",target:"_blank",rel:"noopener noreferrer",children:b.jsx(ca,{})})}),b.jsx(De,{children:b.jsx(Ie,{href:"https://t.me/NatashaLatash","aria-label":"Write to us on Telegram",target:"_blank",rel:"noopener noreferrer",children:b.jsx(da,{})})})]})]}),b.jsxs(Jr,{children:[b.jsx(Qr,{htmlFor:"language-input",hidden:!0,children:"Language"}),b.jsx(Kr,{inputId:"language-input",name:"languages",isSearchable:!1,placeholder:t,options:[{value:"ua",label:"ua"},{value:"ru",label:"ru"}],onChange:i,styles:ea(),"aria-label":"Select site language"})]})]})]})})},fa=D.div`
  padding-left  : var(--container-padding);
  padding-right : var(--container-padding);
  padding-top   : 30px;
  padding-bottom: 30px;
`,ma=D.h2`
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`,ha=p.lazy(()=>nt(()=>import("./Gallery-c1d777da.js"),["assets/Gallery-c1d777da.js","assets/index-709695ff.js"])),va=({language:t})=>b.jsx("main",{children:b.jsx("section",{children:b.jsxs(fa,{children:[b.jsx(ma,{children:U.galleryTitle[t]}),b.jsx(ha,{language:t})]})})}),ga=D.footer`
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0px -2px 0px 0px  var(--shadow-color);
`,xa=D.div`
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
`,ba=D.div`
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
`,Ea=D.h3`
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
`,wa=D.h4`
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
`,Ca=D.div`
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
`,Sa=D.ul`
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
`,hn=D.li`
`,Fa=D.p`
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
`,vn=D.a`
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
`,ya=D.ul`
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: flex-start;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
        justify-content: center;
    }

`,Ae=D.li`
    width: 25px;
    height: 25px;
`,Me=D.a`
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
`,Oa=D(Yn)`
    height: 20px;
    width: 20px;
    fill: var(--text-color);
`,Da=D(qn)`
    height: 18px;
    width: 18px;
    fill: var(--text-color);
`,Ia=D(Kn)`
    height: 20px;
    width: 20px;
    fill: var(--text-color);
`,Aa=({language:t})=>b.jsx(ga,{children:b.jsxs(xa,{children:[b.jsxs(ba,{children:[b.jsx(Ea,{children:U.title[t]}),b.jsx(wa,{children:U.subTitle[t]})]}),b.jsxs(Ca,{children:[b.jsxs("address",{children:[b.jsx(Fa,{children:U.address[t]}),b.jsxs(Sa,{children:[b.jsx(hn,{children:b.jsx(vn,{href:"tel:+38(097)678-13-96","aria-label":"Telephone us at 38-097-678-13-96",children:"+38 (097) 678-13-96"})}),b.jsx(hn,{children:b.jsx(vn,{href:"tel:+38(050)531-92-76","aria-label":"Telephone us at 38-050-531-92-76",children:"+38 (050) 531-92-76"})})]})]}),b.jsxs(ya,{children:[b.jsx(Ae,{children:b.jsx(Me,{href:"https://www.instagram.com/direct/t/17849474219500467","aria-label":"Write to us on Instagram",target:"_blank",rel:"noopener noreferrer",children:b.jsx(Oa,{})})}),b.jsx(Ae,{children:b.jsx(Me,{href:"viber://chat?number=%2B380976781396","aria-label":"Write to us on Viber",target:"_blank",rel:"noopener noreferrer",children:b.jsx(Da,{})})}),b.jsx(Ae,{children:b.jsx(Me,{href:"https://t.me/NatashaLatash","aria-label":"Write to us on Telegram",target:"_blank",rel:"noopener noreferrer",children:b.jsx(Ia,{})})})]})]})]})}),Ma=()=>{const[t,e]=tt("language","ua");p.useEffect(()=>{t==="ua"||t==="ru"||e("ua"),document.querySelector("html").setAttribute("lang",U.metaLang[t]),document.querySelector('meta[name="description"]').setAttribute("content",U.metaDescription[t]),document.querySelector("title").textContent=U.pageTitle[t]},[t]);const i=r=>{e(r)};return b.jsxs(b.Fragment,{children:[b.jsx(pa,{language:t,onLanguageChange:i}),b.jsx(va,{language:t}),b.jsx(Aa,{language:t})]})},Pa=Object.freeze(Object.defineProperty({__proto__:null,default:Ma},Symbol.toStringTag,{value:"Module"}));export{Pa as H,U as c};
