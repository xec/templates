"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4823],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(n),y=a,m=f["".concat(u,".").concat(y)]||f[y]||l[y]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1589:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],p={title:"API - Sentry",sidebar_label:"Sentry",slug:"/Setup/Sentry",sidebar_position:5},u=void 0,c={unversionedId:"setup/Sentry",id:"setup/Sentry",title:"API - Sentry",description:"Head over to the Create a new Project page in Sentry.",source:"@site/express/setup/Sentry.mdx",sourceDirName:"setup",slug:"/Setup/Sentry",permalink:"/express/Setup/Sentry",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/express/setup/Sentry.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"API - Sentry",sidebar_label:"Sentry",slug:"/Setup/Sentry",sidebar_position:5},sidebar:"express",previous:{title:"App Registrations",permalink:"/express/Setup/ApplicationRegistrations"},next:{title:"Authorization",permalink:"/express/Setup/Security/Authorization"}},s=[],l={toc:s};function f(e){var t=e.components,p=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://sentry.intility.no/organizations/intility/projects/new/"},"Create a new Project page in Sentry"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sentry Platform Select",src:n(7466).Z,width:"742",height:"385"}),(0,o.kt)("br",{parentName:"p"}),"\n","Under platform, select React."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sentry New Project Name",src:n(3314).Z,width:"747",height:"153"}),(0,o.kt)("br",{parentName:"p"}),"\n","For the project name, use the project slug from GitLab.\nSelect a fitting team, or create a new one, and hit Create."),(0,o.kt)("p",null,"You'll be taken to a Configure Express page.\nIn the code example under Connecting the SDK to Sentry, copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"dsn")," value and add this to a new secret in your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"SENTRY_DSN=XXXXX\n")))}f.isMDXComponent=!0},3314:function(e,t,n){t.Z=n.p+"assets/images/sentry-new-name-e4d56201bb4d182ffa0ac979abcd2e2c.png"},7466:function(e,t,n){t.Z=n.p+"assets/images/sentry-new-platform-a15be14f3343e8fe9618d581dde3f01f.png"}}]);