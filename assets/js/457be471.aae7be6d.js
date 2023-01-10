"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[936],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3785:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Using PyCharm",sidebar_position:3},p=void 0,u={unversionedId:"setup/pycharm",id:"setup/pycharm",title:"Using PyCharm",description:"Virtual environment",source:"@site/fastapi/setup/pycharm.mdx",sourceDirName:"setup",slug:"/setup/pycharm",permalink:"/fastapi/setup/pycharm",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/fastapi/setup/pycharm.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Using PyCharm",sidebar_position:3},sidebar:"python",previous:{title:"Docker-compose",permalink:"/fastapi/setup/docker-compose"},next:{title:"Without PyCharm (poetry)",permalink:"/fastapi/setup/poetry"}},s={},d=[{value:"Virtual environment",id:"virtual-environment",level:2},{value:"Creating a virtual environment",id:"creating-a-virtual-environment",level:3},{value:"Migrations",id:"migrations",level:3},{value:"Configuring PyCharm to run the server",id:"configuring-pycharm-to-run-the-server",level:3}],c={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"virtual-environment"},"Virtual environment"),(0,i.kt)("p",null,"There are two options for creating your virtual environment, either manually through ",(0,i.kt)("inlineCode",{parentName:"p"},"poetry")," or PyCharm."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This section will cover how to use PyCharm. ",(0,i.kt)("a",{parentName:"p",href:"/fastapi/setup/poetry"},"Head over to the next page if you want to use ",(0,i.kt)("inlineCode",{parentName:"a"},"poetry")," instead."))),(0,i.kt)("h3",{id:"creating-a-virtual-environment"},"Creating a virtual environment"),(0,i.kt)("p",null,"Open PyCharm settings and search for ",(0,i.kt)("inlineCode",{parentName:"p"},"interpreter")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add interpreter",src:n(817).Z,width:"1040",height:"329"})),(0,i.kt)("p",null,"Create a new interpreter from your Python:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create interpreter",src:n(6204).Z,width:"916",height:"565"})),(0,i.kt)("p",null,"Open a new terminal in PyCharm (it will automatically be activated and install the dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"poetry update\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," command both updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"poetry.lock")," file and installs the dependencies."),(0,i.kt)("h3",{id:"migrations"},"Migrations"),(0,i.kt)("p",null,"You can skip this section if you didn't select ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlmodel")," and have a database."),(0,i.kt)("p",null,"In order to configure the database tables to reflect your models, you must run migrations.\nIn this project, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"alembic")," to manage our migrations. Running migrations is done through the terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"alembic upgrade head\n")),(0,i.kt)("h3",{id:"configuring-pycharm-to-run-the-server"},"Configuring PyCharm to run the server"),(0,i.kt)("p",null,"Configure PyCharm to use ",(0,i.kt)("inlineCode",{parentName:"p"},"uvicorn")," locally, pointing to your FastAPI application.\nIt's important to run this on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8000")," and not ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8000")," for OpenAPI authentication to work properly.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"--reload")," flag will ensure the server is restarted on every file change in the ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," folder."),(0,i.kt)("p",null,"First, click the drop down in the top right corner."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dropdown",src:n(3103).Z,width:"657",height:"149"})),(0,i.kt)("p",null,"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," sign and select ",(0,i.kt)("inlineCode",{parentName:"p"},"Python"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add new",src:n(2068).Z,width:"318",height:"117"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select Python",src:n(9401).Z,width:"297",height:"468"})),(0,i.kt)("p",null,"Then configure PyCharm:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Server")),(0,i.kt)("li",{parentName:"ul"},"Module name: ",(0,i.kt)("inlineCode",{parentName:"li"},"uvicorn")),(0,i.kt)("li",{parentName:"ul"},"Parameters: ",(0,i.kt)("inlineCode",{parentName:"li"},"app.main:app --host localhost --port 8000 --reload")),(0,i.kt)("li",{parentName:"ul"},"Python interpreter: The one you created earlier"),(0,i.kt)("li",{parentName:"ul"},"Working directory: Your current directory")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configuration",src:n(8718).Z,width:"1311",height:"713"})),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"OK")," to save and exit. Run the server."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Remember to run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," before attempting to run your server.")))}m.isMDXComponent=!0},817:function(e,t,n){t.Z=n.p+"assets/images/add_interpreter-82152c92b2169f4ecfb760635bc6d2f5.png"},2068:function(e,t){t.Z="data:image/png;base64,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"},9401:function(e,t,n){t.Z=n.p+"assets/images/add_python-4f28dd4e1b9734fbde6e10185148e981.png"},3103:function(e,t,n){t.Z=n.p+"assets/images/edit_configuration-0a1b2a2f8d94d3eb383011310afcf755.png"},6204:function(e,t,n){t.Z=n.p+"assets/images/interpreter-09c54f42350ad95b906ca65a933fbffb.png"},8718:function(e,t,n){t.Z=n.p+"assets/images/server_config-47116bce02d1dba96525e9f68d6176ed.png"}}]);