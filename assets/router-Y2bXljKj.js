import{r as c,R as oe}from"./react-vendor-DbAb9B2p.js";/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}var w;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(w||(w={}));const z="popstate";function se(e){e===void 0&&(e={});function t(r,a){let{pathname:l,search:i,hash:s}=r.location;return F("",{pathname:l,search:i,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:N(a)}return ce(t,n,null,e)}function g(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function H(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ue(){return Math.random().toString(36).substr(2,8)}function D(e,t){return{usr:e.state,key:e.key,idx:t}}function F(e,t,n,r){return n===void 0&&(n=null),B({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?L(t):t,{state:n,key:t&&t.key||r||ue()})}function N(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function L(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ce(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,i=a.history,s=w.Pop,o=null,f=h();f==null&&(f=0,i.replaceState(B({},i.state,{idx:f}),""));function h(){return(i.state||{idx:null}).idx}function u(){s=w.Pop;let d=h(),x=d==null?null:d-f;f=d,o&&o({action:s,location:m.location,delta:x})}function p(d,x){s=w.Push;let E=F(m.location,d,x);f=h()+1;let C=D(E,f),R=m.createHref(E);try{i.pushState(C,"",R)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;a.location.assign(R)}l&&o&&o({action:s,location:m.location,delta:1})}function y(d,x){s=w.Replace;let E=F(m.location,d,x);f=h();let C=D(E,f),R=m.createHref(E);i.replaceState(C,"",R),l&&o&&o({action:s,location:m.location,delta:0})}function v(d){let x=a.location.origin!=="null"?a.location.origin:a.location.href,E=typeof d=="string"?d:N(d);return E=E.replace(/ $/,"%20"),g(x,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,x)}let m={get action(){return s},get location(){return e(a,i)},listen(d){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(z,u),o=d,()=>{a.removeEventListener(z,u),o=null}},createHref(d){return t(a,d)},createURL:v,encodeLocation(d){let x=v(d);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:y,go(d){return i.go(d)}};return m}var J;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(J||(J={}));function fe(e,t,n){return n===void 0&&(n="/"),he(e,t,n,!1)}function he(e,t,n,r){let a=typeof t=="string"?L(t):t,l=M(a.pathname||"/",n);if(l==null)return null;let i=Q(e);de(i);let s=null;for(let o=0;s==null&&o<i.length;++o){let f=Pe(l);s=Re(i[o],f,r)}return s}function Q(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(l,i,s)=>{let o={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};o.relativePath.startsWith("/")&&(g(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let f=P([r,o.relativePath]),h=n.concat(o);l.children&&l.children.length>0&&(g(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Q(l.children,t,h,f)),!(l.path==null&&!l.index)&&t.push({path:f,score:Ce(f,l.index),routesMeta:h})};return e.forEach((l,i)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))a(l,i);else for(let o of Y(l.path))a(l,i,o)}),t}function Y(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let i=Y(r.join("/")),s=[];return s.push(...i.map(o=>o===""?l:[l,o].join("/"))),a&&s.push(...i),s.map(o=>e.startsWith("/")&&o===""?"/":o)}function de(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ee(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pe=/^:[\w-]+$/,me=3,ve=2,ge=1,ye=10,xe=-2,A=e=>e==="*";function Ce(e,t){let n=e.split("/"),r=n.length;return n.some(A)&&(r+=xe),t&&(r+=ve),n.filter(a=>!A(a)).reduce((a,l)=>a+(pe.test(l)?me:l===""?ge:ye),r)}function Ee(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Re(e,t,n){let{routesMeta:r}=e,a={},l="/",i=[];for(let s=0;s<r.length;++s){let o=r[s],f=s===r.length-1,h=l==="/"?t:t.slice(l.length)||"/",u=K({path:o.relativePath,caseSensitive:o.caseSensitive,end:f},h),p=o.route;if(!u&&f&&n&&!r[r.length-1].route.index&&(u=K({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},h)),!u)return null;Object.assign(a,u.params),i.push({params:a,pathname:P([l,u.pathname]),pathnameBase:Le(P([l,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(l=P([l,u.pathnameBase]))}return i}function K(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=we(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],i=l.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((f,h,u)=>{let{paramName:p,isOptional:y}=h;if(p==="*"){let m=s[u]||"";i=l.slice(0,l.length-m.length).replace(/(.)\/+$/,"$1")}const v=s[u];return y&&!v?f[p]=void 0:f[p]=(v||"").replace(/%2F/g,"/"),f},{}),pathname:l,pathnameBase:i,pattern:e}}function we(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),H(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,o)=>(r.push({paramName:s,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Pe(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return H(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function M(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function be(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?L(e):e;return{pathname:n?n.startsWith("/")?n:Se(n,t):t,search:Be(r),hash:Oe(a)}}function Se(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function $(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ue(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Z(e,t){let n=Ue(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ee(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=L(e):(a=B({},e),g(!a.pathname||!a.pathname.includes("?"),$("?","pathname","search",a)),g(!a.pathname||!a.pathname.includes("#"),$("#","pathname","hash",a)),g(!a.search||!a.search.includes("#"),$("#","search","hash",a)));let l=e===""||a.pathname==="",i=l?"/":a.pathname,s;if(i==null)s=n;else{let u=t.length-1;if(!r&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),u-=1;a.pathname=p.join("/")}s=u>=0?t[u]:"/"}let o=be(a,s),f=i&&i!=="/"&&i.endsWith("/"),h=(l||i===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(f||h)&&(o.pathname+="/"),o}const P=e=>e.join("/").replace(/\/\/+/g,"/"),Le=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Be=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Oe=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ie(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const te=["post","put","patch","delete"];new Set(te);const Ne=["get",...te];new Set(Ne);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}const V=c.createContext(null),Te=c.createContext(null),b=c.createContext(null),j=c.createContext(null),S=c.createContext({outlet:null,matches:[],isDataRoute:!1}),ne=c.createContext(null);function je(e,t){let{relative:n}=t===void 0?{}:t;I()||g(!1);let{basename:r,navigator:a}=c.useContext(b),{hash:l,pathname:i,search:s}=ae(e,{relative:n}),o=i;return r!=="/"&&(o=i==="/"?r:P([r,i])),a.createHref({pathname:o,search:s,hash:l})}function I(){return c.useContext(j)!=null}function k(){return I()||g(!1),c.useContext(j).location}function re(e){c.useContext(b).static||c.useLayoutEffect(e)}function ke(){let{isDataRoute:e}=c.useContext(S);return e?Ge():$e()}function $e(){I()||g(!1);let e=c.useContext(V),{basename:t,future:n,navigator:r}=c.useContext(b),{matches:a}=c.useContext(S),{pathname:l}=k(),i=JSON.stringify(Z(a,n.v7_relativeSplatPath)),s=c.useRef(!1);return re(()=>{s.current=!0}),c.useCallback(function(f,h){if(h===void 0&&(h={}),!s.current)return;if(typeof f=="number"){r.go(f);return}let u=ee(f,JSON.parse(i),l,h.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:P([t,u.pathname])),(h.replace?r.replace:r.push)(u,h.state,h)},[t,r,i,l,e])}function ae(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=c.useContext(b),{matches:a}=c.useContext(S),{pathname:l}=k(),i=JSON.stringify(Z(a,r.v7_relativeSplatPath));return c.useMemo(()=>ee(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function Fe(e,t){return We(e,t)}function We(e,t,n,r){I()||g(!1);let{navigator:a}=c.useContext(b),{matches:l}=c.useContext(S),i=l[l.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let f=k(),h;if(t){var u;let d=typeof t=="string"?L(t):t;o==="/"||(u=d.pathname)!=null&&u.startsWith(o)||g(!1),h=d}else h=f;let p=h.pathname||"/",y=p;if(o!=="/"){let d=o.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(d.length).join("/")}let v=fe(e,{pathname:y}),m=De(v&&v.map(d=>Object.assign({},d,{params:Object.assign({},s,d.params),pathname:P([o,a.encodeLocation?a.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?o:P([o,a.encodeLocation?a.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),l,n,r);return t&&m?c.createElement(j.Provider,{value:{location:O({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:w.Pop}},m):m}function _e(){let e=qe(),t=Ie(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},t),n?c.createElement("pre",{style:a},n):null,null)}const Me=c.createElement(_e,null);class Ve extends c.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?c.createElement(S.Provider,{value:this.props.routeContext},c.createElement(ne.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ze(e){let{routeContext:t,match:n,children:r}=e,a=c.useContext(V);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),c.createElement(S.Provider,{value:t},r)}function De(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,s=(a=n)==null?void 0:a.errors;if(s!=null){let h=i.findIndex(u=>u.route.id&&(s==null?void 0:s[u.route.id])!==void 0);h>=0||g(!1),i=i.slice(0,Math.min(i.length,h+1))}let o=!1,f=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<i.length;h++){let u=i[h];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(f=h),u.route.id){let{loaderData:p,errors:y}=n,v=u.route.loader&&p[u.route.id]===void 0&&(!y||y[u.route.id]===void 0);if(u.route.lazy||v){o=!0,f>=0?i=i.slice(0,f+1):i=[i[0]];break}}}return i.reduceRight((h,u,p)=>{let y,v=!1,m=null,d=null;n&&(y=s&&u.route.id?s[u.route.id]:void 0,m=u.route.errorElement||Me,o&&(f<0&&p===0?(v=!0,d=null):f===p&&(v=!0,d=u.route.hydrateFallbackElement||null)));let x=t.concat(i.slice(0,p+1)),E=()=>{let C;return y?C=m:v?C=d:u.route.Component?C=c.createElement(u.route.Component,null):u.route.element?C=u.route.element:C=h,c.createElement(ze,{match:u,routeContext:{outlet:h,matches:x,isDataRoute:n!=null},children:C})};return n&&(u.route.ErrorBoundary||u.route.errorElement||p===0)?c.createElement(Ve,{location:n.location,revalidation:n.revalidation,component:m,error:y,children:E(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):E()},null)}var le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(le||{}),T=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(T||{});function Je(e){let t=c.useContext(V);return t||g(!1),t}function Ae(e){let t=c.useContext(Te);return t||g(!1),t}function Ke(e){let t=c.useContext(S);return t||g(!1),t}function ie(e){let t=Ke(),n=t.matches[t.matches.length-1];return n.route.id||g(!1),n.route.id}function qe(){var e;let t=c.useContext(ne),n=Ae(T.UseRouteError),r=ie(T.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ge(){let{router:e}=Je(le.UseNavigateStable),t=ie(T.UseNavigateStable),n=c.useRef(!1);return re(()=>{n.current=!0}),c.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,O({fromRouteId:t},l)))},[e,t])}function Xe(e){g(!1)}function He(e){let{basename:t="/",children:n=null,location:r,navigationType:a=w.Pop,navigator:l,static:i=!1,future:s}=e;I()&&g(!1);let o=t.replace(/^\/*/,"/"),f=c.useMemo(()=>({basename:o,navigator:l,static:i,future:O({v7_relativeSplatPath:!1},s)}),[o,s,l,i]);typeof r=="string"&&(r=L(r));let{pathname:h="/",search:u="",hash:p="",state:y=null,key:v="default"}=r,m=c.useMemo(()=>{let d=M(h,o);return d==null?null:{location:{pathname:d,search:u,hash:p,state:y,key:v},navigationType:a}},[o,h,u,p,y,v,a]);return m==null?null:c.createElement(b.Provider,{value:f},c.createElement(j.Provider,{children:n,value:m}))}function ot(e){let{children:t,location:n}=e;return Fe(W(t),n)}new Promise(()=>{});function W(e,t){t===void 0&&(t=[]);let n=[];return c.Children.forEach(e,(r,a)=>{if(!c.isValidElement(r))return;let l=[...t,a];if(r.type===c.Fragment){n.push.apply(n,W(r.props.children,l));return}r.type!==Xe&&g(!1),!r.props.index||!r.props.children||g(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=W(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function Qe(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ye(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ze(e,t){return e.button===0&&(!t||t==="_self")&&!Ye(e)}const et=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],tt="6";try{window.__reactRouterVersion=tt}catch{}const nt="startTransition",q=oe[nt];function st(e){let{basename:t,children:n,future:r,window:a}=e,l=c.useRef();l.current==null&&(l.current=se({window:a,v5Compat:!0}));let i=l.current,[s,o]=c.useState({action:i.action,location:i.location}),{v7_startTransition:f}=r||{},h=c.useCallback(u=>{f&&q?q(()=>o(u)):o(u)},[o,f]);return c.useLayoutEffect(()=>i.listen(h),[i,h]),c.createElement(He,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:i,future:r})}const rt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",at=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ut=c.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:l,replace:i,state:s,target:o,to:f,preventScrollReset:h,viewTransition:u}=t,p=Qe(t,et),{basename:y}=c.useContext(b),v,m=!1;if(typeof f=="string"&&at.test(f)&&(v=f,rt))try{let C=new URL(window.location.href),R=f.startsWith("//")?new URL(C.protocol+f):new URL(f),U=M(R.pathname,y);R.origin===C.origin&&U!=null?f=U+R.search+R.hash:m=!0}catch{}let d=je(f,{relative:a}),x=lt(f,{replace:i,state:s,target:o,preventScrollReset:h,relative:a,viewTransition:u});function E(C){r&&r(C),C.defaultPrevented||x(C)}return c.createElement("a",_({},p,{href:v||d,onClick:m||l?r:E,ref:n,target:o}))});var G;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(G||(G={}));var X;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(X||(X={}));function lt(e,t){let{target:n,replace:r,state:a,preventScrollReset:l,relative:i,viewTransition:s}=t===void 0?{}:t,o=ke(),f=k(),h=ae(e,{relative:i});return c.useCallback(u=>{if(Ze(u,n)){u.preventDefault();let p=r!==void 0?r:N(f)===N(h);o(e,{replace:p,state:a,preventScrollReset:l,relative:i,viewTransition:s})}},[f,o,h,r,a,n,e,l,i,s])}export{st as B,ut as L,ot as R,k as a,Xe as b,ke as u};
//# sourceMappingURL=router-Y2bXljKj.js.map