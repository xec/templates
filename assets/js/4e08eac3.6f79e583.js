"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2605],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,h=s["".concat(p,".").concat(m)]||s[m]||c[m]||a;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3991:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:".gitlab-ci.yml Overview",sidebar_position:3},p=void 0,u={unversionedId:"setup/gitlab-ci",id:"setup/gitlab-ci",title:".gitlab-ci.yml Overview",description:"The template comes packed with a pipeline, that builds, tests, analyzes and deploys your API.",source:"@site/dotnet/setup/gitlab-ci.mdx",sourceDirName:"setup",slug:"/setup/gitlab-ci",permalink:"/dotnet/setup/gitlab-ci",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/dotnet/setup/gitlab-ci.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:".gitlab-ci.yml Overview",sidebar_position:3},sidebar:"dotnet",previous:{title:"AAD Authorization",permalink:"/dotnet/setup/authorization"},next:{title:"SonarQube",permalink:"/dotnet/setup/sonarqube"}},d={},s=[{value:"Jobs",id:"jobs",level:2},{value:"<code>build</code>",id:"build",level:3},{value:"<code>test</code>",id:"test",level:3},{value:"<code>analyze</code>",id:"analyze",level:3},{value:"<code>image</code>",id:"image",level:3},{value:"<code>deploy</code>",id:"deploy",level:3},{value:"Debugging the pipeline",id:"debugging-the-pipeline",level:2},{value:"Paths",id:"paths",level:3}],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The template comes packed with a pipeline, that builds, tests, analyzes and deploys your API."),(0,a.kt)("h2",{id:"jobs"},"Jobs"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"image:dev")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"image:prod")," jobs is set to run on pushes to ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"image:prod")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy:prod")," jobs are set to run when tags are pushed to the repository.")),(0,a.kt)("h3",{id:"build"},(0,a.kt)("inlineCode",{parentName:"h3"},"build")),(0,a.kt)("p",null,"Builds the project, and creates a build artifact for later stages to use."),(0,a.kt)("h3",{id:"test"},(0,a.kt)("inlineCode",{parentName:"h3"},"test")),(0,a.kt)("p",null,"Runs the tests in the project.\nRuns parallel with ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,a.kt)("h3",{id:"analyze"},(0,a.kt)("inlineCode",{parentName:"h3"},"analyze")),(0,a.kt)("p",null,"Analyzes the project with sonar-scanner.\nRuns parallel with ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,a.kt)("h3",{id:"image"},(0,a.kt)("inlineCode",{parentName:"h3"},"image")),(0,a.kt)("p",null,"Uses the artifact from the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," step, and creates and publish a docker image with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile.CI")," file using kaniko.\nRuns once the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," job has finished."),(0,a.kt)("h3",{id:"deploy"},(0,a.kt)("inlineCode",{parentName:"h3"},"deploy")),(0,a.kt)("p",null,"Deploys the application to OpenShift using the Helm chart.\nRuns once the ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," jobs have succeeded."),(0,a.kt)("h2",{id:"debugging-the-pipeline"},"Debugging the pipeline"),(0,a.kt)("h3",{id:"paths"},"Paths"),(0,a.kt)("p",null,"Ensure the paths used are right.\nIn the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," step, we need to ensure that we are working from the right folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title='.gitlab-ci.yml'",title:"'.gitlab-ci.yml'"},"build:\n  script:\n    - dotnet restore\n    - cd YOUR_PROJECT_FOLDER # cd to the project folder\n    - dotnet publish -o build\n  artifacts:\n    paths:\n      - YOUR_PROJECT_FOLDER/build # the build in the project folder\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"image:dev"),", we need the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," parameter to be set to the project folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title='.gitlab-ci.yml'",title:"'.gitlab-ci.yml'"},"image:dev:\n  script:\n    - echo ...\n    - /kaniko/executor\n      --context $CI_PROJECT_DIR/YOUR_PROJECT_FOLDER # sets the context to your project folder\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy:dev"),", ensure the path to the chart is right."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title='.gitlab-ci.yml'",title:"'.gitlab-ci.yml'"},"deploy:dev:\n  script:\n    - oc login $OPENSHIFT_SERVER --token=$OPENSHIFT_TOKEN\n    - helm upgrade\n      --install $CI_ENVIRONMENT_SLUG ./YOUR_PROJECT_FOLDER/chart # path to chart\n")))}m.isMDXComponent=!0}}]);