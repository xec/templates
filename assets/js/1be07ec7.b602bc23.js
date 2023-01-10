"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2354],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4121:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Installation",sidebar_position:1},p=void 0,s={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Prerequisites",source:"@site/react/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/react/getting-started/installation",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/react/getting-started/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1},sidebar:"react",previous:{title:"Introduction",permalink:"/react/"},next:{title:"Project Overview",permalink:"/react/getting-started/project-overview"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Intility NPM Registry (optional)",id:"intility-npm-registry-optional",level:3},{value:"Create App",id:"create-app",level:2},{value:"Available Scripts",id:"available-scripts",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Some experience with React"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"node.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code")," with the following plugins",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=swellaby.node-pack"},"Node Extension Pack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"Prettier")))),(0,i.kt)("li",{parentName:"ul"},"Set up the Intility NPM registry (optional)")),(0,i.kt)("h3",{id:"intility-npm-registry-optional"},"Intility NPM Registry (optional)"),(0,i.kt)("p",null,"The Intility NPM registry (includes access to ",(0,i.kt)("inlineCode",{parentName:"p"},"@intility/*")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@fortawesome/*")," packages) can be configured by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm config set registry https://artifactory.int.intility.no/artifactory/api/npm/npm/\n")),(0,i.kt)("p",null,"For other alternatives, see the ",(0,i.kt)("a",{parentName:"p",href:"https://developers.intility.no/guides/tutorials/npm"},"guide on developers.intility.no")," (login required)."),(0,i.kt)("h2",{id:"create-app"},"Create App"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx degit intility/templates/react my-app\ncd my-app\n\nnpm install\n")),(0,i.kt)("p",null,"Run it in your terminal, and then open the Visual Studio Code Workspace with the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"code app.code-workspace\n")),(0,i.kt)("p",null,"You can now start coding by running the start script."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,i.kt)("h2",{id:"available-scripts"},"Available Scripts"),(0,i.kt)("p",null,"There are 5 scripts included by default, click on each one for more information."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vitejs.dev/guide/cli.html#dev-server"},(0,i.kt)("inlineCode",{parentName:"a"},"npm start"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vitest.dev/guide/cli.html#vitest"},(0,i.kt)("inlineCode",{parentName:"a"},"npm test"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vitejs.dev/guide/cli.html#build"},(0,i.kt)("inlineCode",{parentName:"a"},"npm run build"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vitejs.dev/guide/cli.html#vite-preview"},(0,i.kt)("inlineCode",{parentName:"a"},"npm run preview"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/danvk/source-map-explorer/blob/master/README.md"},(0,i.kt)("inlineCode",{parentName:"a"},"npm run analyze")))))}d.isMDXComponent=!0}}]);