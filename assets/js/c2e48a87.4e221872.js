"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4434],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1564:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(5443),a=n(3010),i=(n(9496),n(9613)),o=["components"],l={title:"Getting Started",sidebar_position:1},s=void 0,p={unversionedId:"ox_lib/index",id:"ox_lib/index",title:"Getting Started",description:"ox_lib is a collection of Lua and UI functions to utilise in other resources.",source:"@site/docs/ox_lib/index.md",sourceDirName:"ox_lib",slug:"/ox_lib/",permalink:"/docs/ox_lib/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/index.md",tags:[],version:"current",lastUpdatedAt:1662576782,formattedLastUpdatedAt:"9/7/2022",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1},sidebar:"ox_lib",previous:{title:"Library",permalink:"/docs/category/library"},next:{title:"Server",permalink:"/docs/ox_lib/ACL/Server"}},d={},u=[],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ox_lib is a collection of Lua and UI functions to utilise in other resources."),(0,i.kt)("p",null,"The UI is built in React so the code needs to be compiled into standard JS.",(0,i.kt)("br",{parentName:"p"}),"\n","If you don't know how to do this then please download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_lib/releases/latest"},"release")," (ox_lib.zip) which is ",(0,i.kt)("em",{parentName:"p"},"already")," compiled into a working resource."),(0,i.kt)("p",null,"To enable the library inside of your resource just add ",(0,i.kt)("inlineCode",{parentName:"p"},"@ox_lib/init.lua")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"shared_scripts")," or\na ",(0,i.kt)("inlineCode",{parentName:"p"},"shared_script")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"fxmanifest.lua")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"shared_scripts {\n    '@ox_lib/init.lua'\n}\n")),(0,i.kt)("p",null,"Or if the library is the only shared script you use you can do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"shared_script '@ox_lib/init.lua'\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ACE Permissions:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"add_ace resource.ox_lib command.add_ace allow\nadd_ace resource.ox_lib command.remove_ace allow\nadd_ace resource.ox_lib command.add_principal allow\nadd_ace resource.ox_lib command.remove_principal allow\n")),(0,i.kt)("p",null,"That's it!",(0,i.kt)("br",{parentName:"p"}),"\n","You can now use the library functions inside of your resource, check the rest of the\ndocumentation to see how to utilise them."),(0,i.kt)("h1",{id:"building-the-ui"},"Building the UI"),(0,i.kt)("p",null,"If you wish to edit any of the UI elements you will need to download the ",(0,i.kt)("em",{parentName:"p"},"source")," code, edit what you need and then\ncompile it."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"DO NOT")," debundle and unminify the release CSS and JS files to edit them."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requirements:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js (LTS)")),(0,i.kt)("li",{parentName:"ul"},"pnpm")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Installing Node.js:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download the LTS version of Node.js."),(0,i.kt)("li",{parentName:"ul"},"Go through the install and make sure you install all of the features."),(0,i.kt)("li",{parentName:"ul"},"Run node --version in cmd and make sure that it gives you the version number. If it doesn't then you didn't install it correctly.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Installing pnpm:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After installing NodeJS you can install pnpm by running ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install -g pnpm"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Building the UI:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cd into the web directory."),(0,i.kt)("li",{parentName:"ul"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm i")," to install the dependencies."),(0,i.kt)("li",{parentName:"ul"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm build")," to build the source files.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Hot reloads")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When working in the browser you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm start"),", which supports hot reloads meaning that\nyou will see your changes after saving your file."),(0,i.kt)("p",{parentName:"div"},"If you want to work in game you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm start:game")," which writes changes to disk, so\nthe only thing you have to do is restart the resource for it take affect."))))}m.isMDXComponent=!0}}]);