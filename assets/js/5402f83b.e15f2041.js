"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2987],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=c(n),m=i,d=l["".concat(p,".").concat(m)]||l[m]||f[m]||s;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[l]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9126:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=n(7462),i=n(3366),s=(n(7294),n(3905)),o=["components"],a={title:"Testing with Jest",sidebar_label:"Testing with Jest",slug:"/Topics/Jest",sidebar_position:1},p=void 0,c={unversionedId:"topics/JestConfig",id:"topics/JestConfig",title:"Testing with Jest",description:"This template is configured and setup with Jest for easy test-functionality.",source:"@site/express/topics/JestConfig.mdx",sourceDirName:"topics",slug:"/Topics/Jest",permalink:"/express/Topics/Jest",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/express/topics/JestConfig.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Testing with Jest",sidebar_label:"Testing with Jest",slug:"/Topics/Jest",sidebar_position:1},sidebar:"express",previous:{title:"Express",permalink:"/express/Topics/Express"},next:{title:"Application Insights",permalink:"/express/Topics/Application-Insights"}},u={},l=[],f={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This template is configured and setup with ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," for easy test-functionality."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"By running the ",(0,s.kt)("inlineCode",{parentName:"p"},"test:cov")," script Jest will generate coverage result in an format that can be shown in ",(0,s.kt)("strong",{parentName:"p"},"GitLab")," and ",(0,s.kt)("strong",{parentName:"p"},"SonarQube"))),(0,s.kt)("p",null,"This config uses multiple external packages to work, please add the following dependencies to your project:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@types/jest"},"@types/jest")," - Typings for Jest"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/jest"},"jest")," - Main Jest dependency"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-jest"},"ts-jest")," - A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/jest-junit"},"jest-junit")," - A Jest reporter that creates compatible JUnit XML files.")))}m.isMDXComponent=!0}}]);