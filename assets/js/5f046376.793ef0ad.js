"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3640],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4577:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],p={title:"TypeScript - Starting a new project",sidebar_label:"Starting a new project",slug:"/TypeScript/Starting-a-new-project",sidebar_position:1},l=void 0,c={unversionedId:"TypeScript/gettingStarted",id:"TypeScript/gettingStarted",isDocsHomePage:!1,title:"TypeScript - Starting a new project",description:"If you want to setup your own environment from scratch, you can follow this TypeScript tutorial.",source:"@site/express/TypeScript/gettingStarted.mdx",sourceDirName:"TypeScript",slug:"/TypeScript/Starting-a-new-project",permalink:"/express/TypeScript/Starting-a-new-project",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/express/TypeScript/gettingStarted.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"TypeScript - Starting a new project",sidebar_label:"Starting a new project",slug:"/TypeScript/Starting-a-new-project",sidebar_position:1},sidebar:"express",previous:{title:"HTTP",permalink:"/express/API/Security/HTTP"},next:{title:"Development Environment",permalink:"/express/TypeScript/development-environment"}},s=[{value:"Configuring TypeScript",id:"configuring-typescript",children:[]},{value:"Build tools",id:"build-tools",children:[]},{value:"Compiling and running the project",id:"compiling-and-running-the-project",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you want to setup your own environment from scratch, you can follow this TypeScript tutorial."),(0,o.kt)("p",null,"Open a new terminal."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"mkdir <project_name>")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"cd <project_name>")," - create project folder and navigate to it."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"git init")," - initialize a new git project."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm init -y")," - initialize a new node project by creating a ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," file."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npx tsc --init")," - initialize a new typescript project by creating a ",(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," file."),(0,o.kt)("li",{parentName:"ol"},"Depending on your terminal download a default node.js and VS Code ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," file:")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bash:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"wget -O .gitignore https://www.toptal.com/developers/gitignore/api/node,vscode")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cmd:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"curl --output .gitignore --url https://www.toptal.com/developers/gitignore/api/node,vscode")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PowerShell:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Invoke-WebRequest -OutFile .gitignore -Uri https://www.toptal.com/developers/gitignore/api/node,vscode")),(0,o.kt)("h2",{id:"configuring-typescript"},"Configuring TypeScript"),(0,o.kt)("p",null,"By creating the project with ",(0,o.kt)("inlineCode",{parentName:"p"},"npx tsc --init")," you get a default set of compile rules. This tool documents many of the most used configuration options in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file."),(0,o.kt)("p",null,"These are in general great, but we do need to do some minor customizations."),(0,o.kt)("p",null,"First of all you need to apply these changes to the properties in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions" : {\n        // Rest of config\n        "outDir": "build",\n        "sourceMap": true,\n        "moduleResolution": "node"\n    },\n    "exclude": [\n        "node_modules"\n    ]\n}\n')),(0,o.kt)("h2",{id:"build-tools"},"Build tools"),(0,o.kt)("p",null,"To get started you need these packages in your production environment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/rimraf"},"rimraf"),": Cross OS CLI-tool to delete files/directories.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm i rimraf")),(0,o.kt)("p",null,"Also install these dependencies needed for development purposes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@types/typescript"},"typescript")," - Install TypeScript compilers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@types/node"},"@types/node")," - Type definitions for Node.js projects."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/nodemon"},"nodemon")," - Development tool for automatically restarting Node.js projects on file save."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/npm-run-all"},"npm-run-all")," -  CLI tool to run multiple npm-scripts in parallel or sequential."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-node"},"ts-node")," - Running TypeScript without transpiring")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm i -D typescript @types/node nodemon npm-run-all ts-node")),(0,o.kt)("h2",{id:"compiling-and-running-the-project"},"Compiling and running the project"),(0,o.kt)("p",null,"To get started you can create a new directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," at the project root level (where the package.json file is). Then create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," inside here."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src/"),": This is the main code directory of your project. All code that should be compiled should be inside here."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src/index.ts"),": This is the root file of your project. This is file that is executed when you start the project.")),(0,o.kt)("p",null,"To run your project you need to add these following scripts to the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        "clean": "rimraf build",\n        "compile": "tsc",\n        "start": "node build/index.js",\n        "start:dev": "nodemon",\n        "start:prod": "run-s clean compile start",\n        "test": "echo \\"Error: no test specified\\" && exit 1"\n    }\n}\n')),(0,o.kt)("p",null,"To run these scripts you can run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run <script_name>")," in the terminal."),(0,o.kt)("p",null,"At this point you can start the project with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run start:prod"),"."))}d.isMDXComponent=!0}}]);