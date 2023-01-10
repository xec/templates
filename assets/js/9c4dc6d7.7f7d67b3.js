"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8005],{3905:function(e,A,t){t.d(A,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function r(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function a(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?a(Object(t),!0).forEach((function(A){r(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function l(e,A){if(null==e)return{};var t,n,r=function(e,A){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],A.indexOf(t)>=0||(r[t]=e[t]);return r}(e,A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),i=function(e){var A=n.useContext(u),t=A;return e&&(t="function"==typeof e?e(A):o(o({},A),e)),t},p=function(e){var A=i(e.components);return n.createElement(u.Provider,{value:A},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var A=e.children;return n.createElement(n.Fragment,{},A)}},d=n.forwardRef((function(e,A){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=i(t),d=r,m=c["".concat(u,".").concat(d)]||c[d]||s[d]||a;return t?n.createElement(m,o(o({ref:A},p),{},{components:t})):n.createElement(m,o({ref:A},p))}));function m(e,A){var t=arguments,r=A&&A.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var u in A)hasOwnProperty.call(A,u)&&(l[u]=A[u]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<a;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8504:function(e,A,t){t.r(A),t.d(A,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=t(7462),r=t(3366),a=(t(7294),t(3905)),o=t(5488),l=t(5162),u=["components"],i={title:"Installation",sidebar_position:2},p=void 0,c={unversionedId:"installation",id:"installation",title:"Installation",description:"First and foremost make sure you have installed the official dotnet SDK version 5 or above.",source:"@site/dotnet/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/dotnet/installation",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/dotnet/installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installation",sidebar_position:2},sidebar:"dotnet",previous:{title:"Introduction",permalink:"/dotnet/"},next:{title:"Features",permalink:"/dotnet/features"}},s={},d=[{value:"Bootstrap new project using the template",id:"bootstrap-new-project-using-the-template",level:2},{value:"Updating the template",id:"updating-the-template",level:2}],m={toc:d};function f(e){var A=e.components,i=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:A,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"First and foremost make sure you have installed the ",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download"},"official dotnet SDK")," version 5 or above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"#install intility templates\ndotnet new --install Intility.Templates\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It's recommended to run this command every time you want to use the template,\nto ensure you're using the newest version.")),(0,a.kt)("p",null,"New templates should now be available to bootstrap new projects from. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet new --list")," to see available templates"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  Templates                                                   Short Name           Language    Tags\n  -------------------------------------------------  -------------------  ----------  ----------------------\n  Console Application                                console              [C#],F#,VB  Common/Console\n  Class library                                      classlib             [C#],F#,VB  Common/Library\n  Worker Service                                     worker               [C#],F#     Common/Worker/Web\n> Intility Api                                       iwebapi              [C#]        Intility/Web/WebAPI\n  xUnit Test Project                                 xunit                [C#],F#,VB  Test/xUnit\n  Razor Component                                    razorcomponent       [C#]        Web/ASP.NET\n  Razor Page                                         page                 [C#]        Web/ASP.NET\n  #...\n")),(0,a.kt)("h2",{id:"bootstrap-new-project-using-the-template"},"Bootstrap new project using the template"),(0,a.kt)("p",null,"You can either use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet new")," command or Visual Studio -> New Project wizard to create a new project based on the templates."),(0,a.kt)(o.Z,{groupId:"host",defaultValue:"cli",values:[{label:"dotnet CLI",value:"cli"},{label:"Visual Studio",value:"vs"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"cli",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you only want to create a project, and skip creating a solution, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--project")," argument.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# create project with solution\ndotnet new iwebapi -o MyService\n\n# create project only\ndotnet new iwebapi -o MyService --project\n\n# run project\ncd MyService\ndotnet run --project MyService/MyService.csproj\n"))),(0,a.kt)(l.Z,{value:"vs",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You need to be on Visual Studio 16.10.0 or higher for the solution template to work properly.")),(0,a.kt)("p",null,"Find the template named ",(0,a.kt)("inlineCode",{parentName:"p"},"Intility Api"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Visual Studio new",src:t(1606).Z,width:"696",height:"255"})),(0,a.kt)("p",null,"Name your project, and ensure ",(0,a.kt)("inlineCode",{parentName:"p"},"Place solution and project in the same directory")," is checked."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Visual Studio new solution",src:t(459).Z,width:"640",height:"433"})))),(0,a.kt)("h2",{id:"updating-the-template"},"Updating the template"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Earlier versions of the CLI had troubles updating packages due to long-lived caches.\nYou need to be on version 5.0.301 or higher for updating to work properly.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This will not update already bootstrapped projects.")),(0,a.kt)("p",null,"Check for updates by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet new --update-check\n")),(0,a.kt)("p",null,"If there are any updates available, update with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet new --update-apply\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet new --install Intility.Templates\n")))}f.isMDXComponent=!0},5162:function(e,A,t){t.d(A,{Z:function(){return o}});var n=t(7294),r=t(6010),a="tabItem_Ymn6";function o(e){var A=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,o),hidden:t},A)}},5488:function(e,A,t){t.d(A,{Z:function(){return d}});var n=t(7462),r=t(7294),a=t(6010),o=t(2389),l=t(7392),u=t(7094),i=t(2466),p="tabList__CuJ",c="tabItem_LNqP";function s(e){var A,t,o=e.lazy,s=e.block,d=e.defaultValue,m=e.values,f=e.groupId,v=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),B=null!=m?m:b.map((function(e){var A=e.props;return{value:A.value,label:A.label,attributes:A.attributes}})),X=(0,l.l)(B,(function(e,A){return e.value===A.value}));if(X.length>0)throw new Error('Docusaurus error: Duplicate values "'+X.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(A=null!=d?d:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?A:b[0].props.value;if(null!==w&&!B.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+B.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,u.U)(),g=h.tabGroupChoices,y=h.setTabGroupChoices,N=(0,r.useState)(w),C=N[0],k=N[1],P=[],Q=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var U=g[f];null!=U&&U!==C&&B.some((function(e){return e.value===U}))&&k(U)}var T=function(e){var A=e.currentTarget,t=P.indexOf(A),n=B[t].value;n!==C&&(Q(A),k(n),null!=f&&y(f,String(n)))},j=function(e){var A,t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":var n,r=P.indexOf(e.currentTarget)+1;t=null!=(n=P[r])?n:P[0];break;case"ArrowLeft":var a,o=P.indexOf(e.currentTarget)-1;t=null!=(a=P[o])?a:P[P.length-1]}null==(A=t)||A.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},v)},B.map((function(e){var A=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===A?0:-1,"aria-selected":C===A,key:A,ref:function(e){return P.push(e)},onKeyDown:j,onClick:T},o,{className:(0,a.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":C===A})}),null!=t?t:A)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,A){return(0,r.cloneElement)(e,{key:A,hidden:e.props.value!==C})}))))}function d(e){var A=(0,o.Z)();return r.createElement(s,(0,n.Z)({key:String(A)},e))}},459:function(e,A,t){A.Z=t.p+"assets/images/visual-studio-new-solution-80b4cbc4004241ec6c614bcae0fdf8a1.png"},1606:function(e,A){A.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArgAAAD/CAYAAAAaAqXSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAACWZSURBVHhe7d0NjF1lve/xf6EvgLQWKYJAmXaYy5FoBoJvPaKUxsm5RbDFAzL0gl5KozENTawxnaSm1tLcJkOMNZYQRctoDt5SxAPTA7TXU1Pbc9H6gsFJDMhNp53yYpHyWirSIr37t/bzzKxZs99f13729zNZ2ettr7dZz17//Tz/tfakrq6uEwYAAAAE4iT3CgAAAASBABcAAABBIcAFAABAUAhwAQAAEBQCXAAAAASFABcAAABBIcAFAABAUAhwAQAAEBQCXAAAAASFABcAAABBIcAFAABAUAhwAQAAEBQCXAAAAASFABcAAABBIcAFAABAUCZ1dXWdcP3jrF692vUBABC+DRs2uD4Ara5ggLtu3To3BABAuq1du7bi65beS4ALhIMUBQAAAASFABcAAABBIcAFAABAUAhwAQAAEBQCXAAAAASFABcAAABBIcAFAABAUAhwAQAAEBQCXAAAAASFABcAAABBIcAFAABAUAhwAQAAEBQCXAAAAASFABcAAABBqVuA2ztwwA4M9LqhykTLODBgfika3r2m2w1NnA4AaG0f+chH7Fvf+pZNnjzZjRmjcZqmeQCgkPTU4PYO2IHda2wsfDXbunSOzZmz1La64aQJ03MsAwDQOm677Ta7/vrr7bvf/e64IFf9GqdpmgcACiFFAQCQGsuXL7ff/e539ulPf3o0yPXBrcZpmuYBgEIaFOB225rdB2ygN/t64IC63eazDaJUg/4FZh3LbJumudSGZEpCUnx6rmVE4xJpEt1rdlPLCwApdfToUbvlllvGBbnx4FbTNE8pvvKVr7jrzfjuvvvus3nz5rm5AISooTW4C/o3ma1QWsEc69vVYcs2ZQPNKNWgb5fZyGZblJk2Z2m+pIT8ci1j647McOdFsWC22xb3dNiuu9bbkBsDAEgXBbArV660Bx54IAps1alf40oNbuU73/lO1MXt3bs3GqdXAOFqaIA7snmFrXeR5daNm22ko9Muzg7Wx9Ydtqujxxb7CLd7sfV07LId5cfPAIAWpGD2nnvuifpffPFF+/rXv05wC7SBhga4w08n60077aK65gpstR27OqzH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"}}]);