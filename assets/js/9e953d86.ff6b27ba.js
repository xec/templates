"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7592],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7554:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={title:"Included Dependencies",sidebar_position:3},l=void 0,s={unversionedId:"getting-started/included-dependencies",id:"getting-started/included-dependencies",title:"Included Dependencies",description:"The template includes some dependencies which are found to be common needs of most React apps by Intility.",source:"@site/react/getting-started/included-dependencies.mdx",sourceDirName:"getting-started",slug:"/getting-started/included-dependencies",permalink:"/react/getting-started/included-dependencies",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/react/getting-started/included-dependencies.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Included Dependencies",sidebar_position:3},sidebar:"react",previous:{title:"Project Overview",permalink:"/react/getting-started/project-overview"},next:{title:"Recommended Packages",permalink:"/react/getting-started/recommended-packages"}},u={},d=[{value:"@intility/bifrost-react",id:"intilitybifrost-react",level:2},{value:"@azure/msal-*",id:"azuremsal-",level:2},{value:"react-router",id:"react-router",level:2},{value:"@sentry/react and @sentry/tracing",id:"sentryreact-and-sentrytracing",level:2},{value:"prettier",id:"prettier",level:2}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The template includes some dependencies which are found to be common needs of most React apps by Intility."),(0,i.kt)("h2",{id:"intilitybifrost-react"},"@intility/bifrost-react"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bifrost.intility.no/"},"Docs"))),(0,i.kt)("p",null,"Intility's design system for React."),(0,i.kt)("h2",{id:"azuremsal-"},"@azure/msal-","*"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md"},(0,i.kt)("inlineCode",{parentName:"a"},"@azure/msal-react")," Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/initialization.md"},(0,i.kt)("inlineCode",{parentName:"a"},"@azure/msal-browser")," Docs"))),(0,i.kt)("p",null,"Authentication libraries."),(0,i.kt)("h2",{id:"react-router"},"react-router"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactrouter.com/en/main"},"Docs"))),(0,i.kt)("p",null,"Unless you're a dashboard, you need a router, and react-router is the de facto router for React."),(0,i.kt)("h2",{id:"sentryreact-and-sentrytracing"},"@sentry/react and @sentry/tracing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.sentry.io/platforms/javascript/guides/react/"},"Docs"))),(0,i.kt)("p",null,"Used for error reporting to Sentry."),(0,i.kt)("h2",{id:"prettier"},"prettier"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prettier.io/"},"Docs"))),(0,i.kt)("p",null,"Prettier is a code formatter and great tool for unifying formatting when collaborating on a project.\nThe Visual Studio Code Workspace is set up to auto-format on save."))}m.isMDXComponent=!0}}]);