(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[477],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=n(944),o=n(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,m=e.className,h=(0,a.Z)(),f=h.tabGroupChoices,y=h.setTabGroupChoices,g=(0,r.useState)(c),k=g[0],b=g[1],v=r.Children.toArray(e.children),w=[];if(null!=d){var N=f[d];null!=N&&N!==k&&p.some((function(e){return e.value===N}))&&b(N)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;b(r),null!=d&&(y(d,r),setTimeout((function(){var e,n,r,a,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case l:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8009:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(1395),s=n(8215),l={title:"AAD Authentication",sidebar_position:2},u={unversionedId:"configuration/authentication",id:"configuration/authentication",isDocsHomePage:!1,title:"AAD Authentication",description:"The example code is set up to use authentication. For this to work, an App Registration has to be set up in Azure AD.",source:"@site/cra/configuration/authentication.mdx",sourceDirName:"configuration",slug:"/configuration/authentication",permalink:"/cra/configuration/authentication",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/cra/configuration/authentication.mdx",version:"current",sidebarPosition:2,frontMatter:{title:"AAD Authentication",sidebar_position:2},sidebar:"cra",previous:{title:"GitLab Repository",permalink:"/cra/configuration/gitlab"},next:{title:"Environment Variables",permalink:"/cra/configuration/environment-variables"}},c=[{value:"UI",id:"ui",children:[]},{value:"Adding reply URLs",id:"adding-reply-urls",children:[]},{value:"CLI",id:"cli",children:[]},{value:"Enabling authentication in your app",id:"enabling-authentication-in-your-app",children:[{value:"Forcing auth",id:"forcing-auth",children:[]},{value:"Conditional auth",id:"conditional-auth",children:[]}]},{value:"Consuming an authenticated API",id:"consuming-an-authenticated-api",children:[{value:"SWR / React Query",id:"swr--react-query",children:[]}]}],p={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The example code is set up to use authentication. For this to work, an App Registration has to be set up in Azure AD."),(0,o.kt)("h3",{id:"ui"},"UI"),(0,o.kt)("p",null,"Head over to ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"Azure -> Azure Active Directory -> App registrations"),"\nwith your Intility Account, and create a new registration."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New Registration in Azure",src:n(8769).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","Select a fitting name for your project, this name will be presented to the user during consent."),(0,o.kt)("p",null,"Under ",(0,o.kt)("inlineCode",{parentName:"p"},"Supported account types"),", choose either ",(0,o.kt)("inlineCode",{parentName:"p"},"Intility AS only - Single tenant")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Any Azure AD directory - Multitenant"),".\nThis can be changed later, so if you're unsure what to choose, select single tenant."),(0,o.kt)("p",null,"Under ",(0,o.kt)("inlineCode",{parentName:"p"},"Redirect URI"),", select ",(0,o.kt)("inlineCode",{parentName:"p"},"Single-page application (SPA)")," from the dropdown, and enter ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,o.kt)("p",null,"Hit the register button, and you will be taken to an overview of your newly created registration."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Finding Client ID",src:n(1440).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application (Client) ID")," GUID, and paste it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"clientId")," field in your ",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'const msal = {\n  auth: {\n    clientId: "YOUR_CLIENT_ID",\n    ...\n  },\n  ...\n}\n')),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"#enabling-authentication-in-your-app"},"Enabling authentication in your app")," to enable authentication in your app."),(0,o.kt)("h3",{id:"adding-reply-urls"},"Adding reply URLs"),(0,o.kt)("p",null,"For each deployment of your app, you'll need to register it. You can do that by going to the Authentication page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Adding Reply URLs",src:n(7032).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","The first we need to add is the URL the deploy step makes in OpenShift:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://{your-project-slug}-dev.apps.int.intility.no\n")),(0,o.kt)("p",null,"You can also add more later if you create more environments."),(0,o.kt)("h2",{id:"cli"},"CLI"),(0,o.kt)("p",null,"Login with the Azure CLI and run the following command (rember to modify the displayName)"),(0,o.kt)(i.Z,{groupId:"shell",defaultValue:"bash",values:[{label:"bash",value:"bash"},{label:"PowerShell",value:"ps"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'az rest -u https://graph.microsoft.com/v1.0/applications -m post -b \'{"displayName":"MyApp","spa":{"redirectUris":["http://localhost:3000"]}}\'\n'))),(0,o.kt)(s.Z,{value:"ps",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ps"},'az rest -u https://graph.microsoft.com/v1.0/applications -m post -b \'{\\"displayName\\":\\"MyApp\\",\\"spa\\":{\\"redirectUris\\":[\\"http://localhost:3000\\"]}}\'\n')))),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"appId")," GUID, and paste it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"clientId")," field in your ",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'const msal = {\n  auth: {\n    clientId: "YOUR_CLIENT_ID",\n    ...\n  },\n  ...\n}\n')),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"#enabling-authentication-in-your-app"},"Enabling authentication in your app")," to enable authentication in your app."),(0,o.kt)("h2",{id:"enabling-authentication-in-your-app"},"Enabling authentication in your app"),(0,o.kt)("p",null,"Depending on what your applications scope is, there are different ways of enabling authentication."),(0,o.kt)("h3",{id:"forcing-auth"},"Forcing auth"),(0,o.kt)("p",null,"This is the simplest way, and can be enabled by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"forced")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"MsalBrowserProvider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'ReactDOM.render(\n  <Router>\n    <MsalBrowserProvider config={msal} forced>\n                                       ^^^^^^\n      <React.StrictMode>\n        <App />\n      </React.StrictMode>\n    </MsalBrowserProvider>\n  </Router>,\n  document.getElementById("root")\n)\n')),(0,o.kt)("p",null,"This will force user authentication, and your app won't render unless the user is authenticated."),(0,o.kt)("h3",{id:"conditional-auth"},"Conditional auth"),(0,o.kt)("p",null,"If you don't want forced auth, you can implement a simple log-in button by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAuth")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@intility/react-msal-browser"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Button } from "@intility/bifrost-react";\nimport { useAuth } from "@intility/react-msal-browser";\n\nconst LoginButton = () => {\n  const { login } = useAuth();\n  \n  return (\n    <Button onClick={login}>Login</Button>\n  )\n};\n')),(0,o.kt)("p",null,"And elsewhere in your app you can determin the login status by checking the existance of a user with ",(0,o.kt)("inlineCode",{parentName:"p"},"useUser"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useUser } from "@intility/react-msal-browser";\n\nconst MyComponent = () => {\n  const user = useUser();\n\n  return <span>{user !== null ? "Hello friend." : "Who are you?"}</span>;\n};\n')),(0,o.kt)("h2",{id:"consuming-an-authenticated-api"},"Consuming an authenticated API"),(0,o.kt)("p",null,"Consuming an authenticated API is relativly simple.\nFirst, you'll need to modify the endpoints section of your MSAL config.\nThe key needs to be the base URL of the API, and the value should be an array of scopes needed to authenticate to the API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'const msal = {\n  endpoints: {\n    "http://localhost:5000": ["API_SCOPE"],\n    ...\n  },\n  ...\n}\n')),(0,o.kt)("p",null,"The API base URL can also be dynamically applied from an ",(0,o.kt)("a",{parentName:"p",href:"/cra/configuration/environment-variables"},"Environment Variables"),"."),(0,o.kt)(i.Z,{groupId:"typed",defaultValue:"typed",values:[{label:"TypeScript",value:"typed"},{label:"JavaScript",value:"plain"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"typed",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'const msal = {\n  endpoints: {\n    [process.env.REACT_APP_API_URL as string]: ["API_SCOPE"],\n    ...\n  },\n  ...\n}\n'))),(0,o.kt)(s.Z,{value:"plain",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/index.js"',title:'"src/index.js"'},'const msal = {\n  endpoints: {\n    [process.env.REACT_APP_API_URL]: ["API_SCOPE"],\n    ...\n  },\n  ...\n}\n')))),(0,o.kt)("p",null,"You can now consume an API with ",(0,o.kt)("inlineCode",{parentName:"p"},"authorizedFetch"),", which uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoints")," config to detect which token to use in a request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useState, useEffect } from "react";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\n// This is a simplified example of data fetching in react\n// Please don\'t use in production\n\nconst DataComponent = () => {\n  const [data, setData] = useState();\n  const [error, setError] = useState();\n\n  useEffect(() => {\n    authorizedFetch("my-api/resource")\n      .then((response) => response.json())\n      .then((json) => setData(json))\n      .catch((error) => setError(error));\n  }, []);\n\n  return (\n    <>\n      {!data && !error && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {error && <p className="error">Oh No!!! {error.toString()}</p>}\n    </>\n  );\n};\n')),(0,o.kt)("h3",{id:"swr--react-query"},"SWR / React Query"),(0,o.kt)(i.Z,{groupId:"fetchinglib",defaultValue:"swr",values:[{label:"SWR",value:"swr"},{label:"React Query",value:"react-query"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"swr",mdxType:"TabItem"},(0,o.kt)("p",null,"Integrating ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticatedFetch")," with SWR is very simple. All you need to do is specify a fetcher for SWR."),(0,o.kt)(i.Z,{groupId:"typed",defaultValue:"typed",values:[{label:"TypeScript",value:"typed"},{label:"JavaScript",value:"plain"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"typed",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import useSWR from "swr";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\nconst authFetcher = (url: string) =>\n  authorizedFetch(url).then((result) => result.json());\n\nconst SwrComponent = () => {\n  const { data, error } = useSWR("my-api/resource", { fetcher: authFetcher });\n\n  return (\n    <>\n      {!data && !error && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {error && <p className="error">Oh No!!! {error.toString()}</p>}\n    </>\n  );\n};\n'))),(0,o.kt)(s.Z,{value:"plain",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import useSWR from "swr";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\nconst authFetcher = (url) =>\n  authorizedFetch(url).then((result) => result.json());\n\nconst SwrComponent = () => {\n  const { data, error } = useSWR("my-api/resource", { fetcher: authFetcher });\n\n  return (\n    <>\n      {!data && !error && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {error && <p className="error">Oh No!!! {error.toString()}</p>}\n    </>\n  );\n};\n')))),(0,o.kt)("p",null,"We could take this one step further, and assign the fetcher globally using ",(0,o.kt)("inlineCode",{parentName:"p"},"SWRConfig"),"."),(0,o.kt)(i.Z,{groupId:"typed",defaultValue:"typed",values:[{label:"TypeScript",value:"typed"},{label:"JavaScript",value:"plain"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"typed",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'import { SWRConfig } from "swr";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\n// Note that we apply a base url to every request\nconst swr = {\n  fetcher: (path: string) =>\n    authorizedFetch((process.env.REACT_APP_API_URL as string) + path)\n    .then(response => response.json())\n};\n\nReactDOM.render(\n  <Router>\n    <MsalBrowserProvider config={msal} forced>\n      <SWRConfig value={swr}>\n          <React.StrictMode>\n            <App />\n          </React.StrictMode>\n      </SWRConfig>\n    </MsalBrowserProvider>\n  </Router>,\n  document.getElementById("root")\n);\n'))),(0,o.kt)(s.Z,{value:"plain",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'import { SWRConfig } from "swr";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\n// Note that we apply a base url to every request\nconst swr = {\n  fetcher: (path) =>\n    authorizedFetch(process.env.REACT_APP_API_URL + path)\n    .then(response => response.json())\n};\n\nReactDOM.render(\n  <Router>\n    <MsalBrowserProvider config={msal} forced>\n      <SWRConfig value={swr}>\n          <React.StrictMode>\n            <App />\n          </React.StrictMode>\n      </SWRConfig>\n    </MsalBrowserProvider>\n  </Router>,\n  document.getElementById("root")\n);\n')))),(0,o.kt)("p",null,"We can now call ",(0,o.kt)("inlineCode",{parentName:"p"},"useSWR")," somewhere in our app, and it will by default use the authorized fetcher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import useSWR from "swr";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\nconst SwrComponent = () => {\n  // Note that only the resource is requested here\n  // that\'s because the API base URL is prepended in our fetcher\n  const { data, error } = useSWR("resource");\n\n  return (\n    <>\n      {!data && !error && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {error && <p className="error">Oh No!!! {error.toString()}</p>}\n    </>\n  );\n};\n')),(0,o.kt)("p",null,"One great thing about SWR is request deduping and caching.",(0,o.kt)("br",{parentName:"p"}),"\n","In the following example, there will be three instances of our ",(0,o.kt)("inlineCode",{parentName:"p"},"SwrComponent"),", but only one request will be made.\nThat would not be the case if we were to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataComponent")," from earlier, where we manually fetched the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const SomeExample = () => (\n  <>\n    <SwrComponent />\n    <SwrComponent />\n    <SwrComponent />\n  </>\n);\n")),(0,o.kt)("p",null,"To read more about SWR, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://swr.vercel.app/"},"SWR Docs"),".")),(0,o.kt)(s.Z,{value:"react-query",mdxType:"TabItem"},(0,o.kt)("p",null,"Integrating ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticatedFetch")," with React Query is very simple. All you need to do is specify a query function for React Query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useQuery } from \'react-query\';\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\nconst authFetcher = (url: string) =>\n  authorizedFetch(url).then((result) => result.json());\n\nconst QueryComponent = () => {\n  const { data, error, isLoading, isError } = useQuery("my-api/resource", async () => {\n    let response = await authorizedFetch("my-api/resource");\n    return await response.json();\n  });\n\n  return (\n    <>\n      {isLoading && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {isError && <p className="error">Oh No!!! {error.message}</p>}\n    </>\n  );\n};\n')),(0,o.kt)("p",null,"We could take this one step further, and assign a global default query function using ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryClient")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryClientProvider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'import { QueryClient, QueryClientProvider } from "react-query";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\n// Note that we apply a base url to every request\nconst defaultQueryFn = async ({ queryKey }) => {\n  let response = await authorizedFetch((process.env.REACT_APP_API_URL as string) + queryKey[0]);\n  return await response.json();\n};\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      queryFn: defaultQueryFn,\n    },\n  },\n});\n\nReactDOM.render(\n  <Router>\n    <MsalBrowserProvider config={msal} forced>\n      <QueryClientProvider value={queryClient}>\n          <React.StrictMode>\n            <App />\n          </React.StrictMode>\n      </QueryClientProvider>\n    </MsalBrowserProvider>\n  </Router>,\n  document.getElementById("root")\n);\n')),(0,o.kt)("p",null,"We can now call ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery")," somewhere in our app, and it will by default use the authorized fetcher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useQuery } from "react-query";\nimport { authorizedFetch } from "@intility/react-msal-browser";\n\nconst QueryComponent = () => {\n  // Note that only the resource is requested here\n  // that\'s because the API base URL is prepended in our fetcher\n  const { data, error, isLoading, isError } = useQuery("resource");\n\n  return (\n    <>\n      {isLoading && <p>Loading data...</p>}\n      {data && <div>Here is the data: {data}</div>}\n      {isError && <p className="error">Oh No!!! {error.message}</p>}\n    </>\n  );\n};\n')),(0,o.kt)("p",null,"One great thing about React Query is request deduping and caching.",(0,o.kt)("br",{parentName:"p"}),"\n","In the following example, there will be three instances of our ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryComponent"),", but only one request will be made.\nThat would not be the case if we were to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataComponent")," from earlier, where we manually fetched the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const SomeExample = () => (\n  <>\n    <QueryComponent />\n    <QueryComponent />\n    <QueryComponent />\n  </>\n);\n")),(0,o.kt)("p",null,"To read more about React Query, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"React Query Docs"),"."))))}d.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},1440:function(e,t,n){"use strict";t.Z=n.p+"assets/images/azure-clientid-7f51d95f1c63551cca6027589b49b102.png"},8769:function(e,t,n){"use strict";t.Z=n.p+"assets/images/azure-new-1cf4168261a05409f3362b59243e7d04.png"},7032:function(e,t,n){"use strict";t.Z=n.p+"assets/images/azure-replyurls-a673e5fdc87c6b2cf2e713bad508e587.png"}}]);