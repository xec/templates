"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8309],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9158:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={title:"Upgrade to V1 pipeline",sidebar_position:5},p=void 0,c={unversionedId:"advanced/upgrade-pipeline",id:"advanced/upgrade-pipeline",isDocsHomePage:!1,title:"Upgrade to V1 pipeline",description:"If you created a project with an earlier version of this template, you can follow this guide to simply upgrade it.",source:"@site/cra/advanced/upgrade-pipeline.mdx",sourceDirName:"advanced",slug:"/advanced/upgrade-pipeline",permalink:"/cra/advanced/upgrade-pipeline",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/cra/advanced/upgrade-pipeline.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Upgrade to V1 pipeline",sidebar_position:5},sidebar:"cra",previous:{title:"Deploy with ArgoCD",permalink:"/cra/advanced/deploy-argocd"}},s=[{value:"Features",id:"features",children:[]},{value:"OpenShift",id:"openshift",children:[]},{value:"Create Deploy Token",id:"create-deploy-token",children:[]},{value:"Edit <code>index.ts</code>",id:"edit-indexts",children:[]},{value:"Copy files",id:"copy-files",children:[]}],u={toc:s};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you created a project with an earlier version of this template, you can follow this guide to simply upgrade it.\nThis guide assumes you haven't made any changes to the earlier pipeline."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Helm chart"),(0,a.kt)("li",{parentName:"ul"},"Docker image pushed to GCR"),(0,a.kt)("li",{parentName:"ul"},"Production jobs"),(0,a.kt)("li",{parentName:"ul"},"Parallelized jobs (pipeline usually takes ~2m)")),(0,a.kt)("h2",{id:"openshift"},"OpenShift"),(0,a.kt)("p",null,"When switching to the new pipeline, it will automatically create new resources.\nAt a minimum, you should delete the existing route, as the old one will crash with the new one.\nHowever, it's recommended to start blank, by either clearing out or re-creating the existing project, or by creating a new project."),(0,a.kt)("h2",{id:"create-deploy-token"},"Create Deploy Token"),(0,a.kt)("p",null,"The new pipeline publishes a docker image to GitLab Container Registry, and uses Helm to create resources in OpenShift.\nAs a result, OpenShift needs access to pull images from GCR."),(0,a.kt)("p",null,"In your GitLab repository, go to Settings -> Repository -> Deploy tokens.\nCreate a new token named ",(0,a.kt)("inlineCode",{parentName:"p"},"gitlab-deploy-token"),", and give it the ",(0,a.kt)("inlineCode",{parentName:"p"},"read_registry")," scope."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitLab Deploy Token",src:n(8157).Z})),(0,a.kt)("p",null,"That's all you have to do in the repository.\nThe token is exposed as a variable in the pipeline, and helm applies it as a pull secret in OpenShift.\nRead more about GitLab deploy tokens ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/project/deploy_tokens/#gitlab-deploy-token"},"here"),"."),(0,a.kt)("h2",{id:"edit-indexts"},"Edit ",(0,a.kt)("inlineCode",{parentName:"h2"},"index.ts")),(0,a.kt)("p",null,"The new pipeline doesn't use a ",(0,a.kt)("inlineCode",{parentName:"p"},"REACT_APP_REDIRECT_URI")," environment variable in the pipeline,\nso we need to change ",(0,a.kt)("inlineCode",{parentName:"p"},"auth.redirectUri")," in our MSAL Config."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=index.ts",title:"index.ts"},"const msal = {\n  auth: {\n    // This is the new value of redirectUri\n    redirectUri: window.location.origin\n  }\n};\n")),(0,a.kt)("h2",{id:"copy-files"},"Copy files"),(0,a.kt)("p",null,"Download the contents of ",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.intility.com/herman/cra-pipeline-upgrade"},"this repository")," (",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.intility.com/herman/cra-pipeline-upgrade/-/archive/main/cra-pipeline-upgrade-main.zip"},"direct zip download"),").\nCopy all files except ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md")," to your project, and push the changes."),(0,a.kt)("p",null,"The new pipeline should now take effect. Should any problems occur, ask a question in ",(0,a.kt)("inlineCode",{parentName:"p"},"#programming")," on Slack."))}d.isMDXComponent=!0},8157:function(e,t,n){t.Z=n.p+"assets/images/gitlab-deploy-token-ccd4c08110149ac9716ae0ce55634d2d.png"}}]);