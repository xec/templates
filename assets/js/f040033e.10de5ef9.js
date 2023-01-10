"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4563],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},800:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:"Sentry",sidebar_position:6},p=void 0,u={unversionedId:"configuration/sentry",id:"configuration/sentry",title:"Sentry",description:"The project comes included with error reporting to Sentry, and a pipeline job to upload sourcemaps and create releases.",source:"@site/react/configuration/sentry.mdx",sourceDirName:"configuration",slug:"/configuration/sentry",permalink:"/react/configuration/sentry",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/react/configuration/sentry.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Sentry",sidebar_position:6},sidebar:"react",previous:{title:"SonarQube",permalink:"/react/configuration/sonarqube"},next:{title:"Deploy",permalink:"/react/configuration/deploy"}},l={},s=[{value:"Create Project",id:"create-project",level:3},{value:"Acquire Token",id:"acquire-token",level:3}],d={toc:s};function f(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The project comes included with error reporting to Sentry, and a pipeline job to upload sourcemaps and create releases.\nTo set this up, we'll need to create a project in Sentry, the project DSN and an auth token."),(0,o.kt)("h3",{id:"create-project"},"Create Project"),(0,o.kt)("p",null,"Head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://sentry.intility.no/organizations/intility/projects/new/"},"Create a new Project page in Sentry"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sentry Platform Select",src:n(4088).Z,width:"742",height:"385"}),(0,o.kt)("br",{parentName:"p"}),"\n","Under platform, select React."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sentry New Project Name",src:n(3409).Z,width:"747",height:"153"}),(0,o.kt)("br",{parentName:"p"}),"\n","For the project name, use the project slug from GitLab.\nSelect a fitting team, or create a new one, and hit Create."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you use something other than the GitLab project slug\nyou'll need to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"SENTRY_PROJECT")," variable in the top of the .gitlab-ci.yml file.  ")),(0,o.kt)("p",null,"You'll be taken to a Configure React page.\nIn the code example under Connecting the SDK to Sentry, copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"dsn")," value, and ",(0,o.kt)("a",{parentName:"p",href:"/react/configuration/gitlab#adding-cicd-variables"},"add it to GitLab CI/CD variables")," with the key ",(0,o.kt)("inlineCode",{parentName:"p"},"SENTRY_DSN"),"."),(0,o.kt)("h3",{id:"acquire-token"},"Acquire Token"),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://sentry.intility.no/settings/account/api/auth-tokens/"},"Auth Token section of your Account Settings"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Sentry Token",src:n(7811).Z,width:"1462",height:"414"}),"\nThe needed scopes are ",(0,o.kt)("inlineCode",{parentName:"p"},"project:read"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"project:releases")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"org:read"),"."),(0,o.kt)("p",null,"Create it, copy the token and ",(0,o.kt)("a",{parentName:"p",href:"/react/configuration/gitlab#adding-cicd-variables"},"add it to GitLab CI/CD variables")," with the key ",(0,o.kt)("inlineCode",{parentName:"p"},"SENTRY_AUTH_TOKEN"),"."))}f.isMDXComponent=!0},3409:function(e,t,n){t.Z=n.p+"assets/images/sentry-new-name-e4d56201bb4d182ffa0ac979abcd2e2c.png"},4088:function(e,t,n){t.Z=n.p+"assets/images/sentry-new-platform-a15be14f3343e8fe9618d581dde3f01f.png"},7811:function(e,t,n){t.Z=n.p+"assets/images/sentry-token-3104b9071fe4ba5d3189aef0eee173f5.png"}}]);