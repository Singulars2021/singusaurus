(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"Highlight",(function(){return s})),r.d(t,"default",(function(){return g}));var n=r(3),o=r(7),a=(r(0),r(215)),i={title:"Introduction to NodeJS",author:"Oscar Miras",author_title:"Singulars 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["nodejs","server","terminal","http"]},l={permalink:"/singusaurus/blog/2021/04/07/intro-nodejs",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-04-07-intro-nodejs.mdx",source:"@site/blog\\2021-04-07-intro-nodejs.mdx",description:"borderRadius: '2px',",date:"2021-04-07T00:00:00.000Z",tags:[{label:"nodejs",permalink:"/singusaurus/blog/tags/nodejs"},{label:"server",permalink:"/singusaurus/blog/tags/server"},{label:"terminal",permalink:"/singusaurus/blog/tags/terminal"},{label:"http",permalink:"/singusaurus/blog/tags/http"}],title:"Introduction to NodeJS",truncated:!1,nextItem:{title:"CRUD Project - Pair programming",permalink:"/singusaurus/blog/2021/04/01/client-crud-project"}},c=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],s=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},u={toc:c,Highlight:s};function g(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(s,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Review of Bob's project"),Object(a.b)("li",{parentName:"ul"},"Introduction to NodeJS",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"What is NodeJS"),Object(a.b)("li",{parentName:"ul"},"What it is used for"),Object(a.b)("li",{parentName:"ul"},"How to execute NodeJS"),Object(a.b)("li",{parentName:"ul"},"How to debug NodeJS programs"),Object(a.b)("li",{parentName:"ul"},"Creating a server with NodeJS")))),Object(a.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(s,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"W3school NodeJS main concepts - ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.w3schools.com/nodejs/"}),"Link")),Object(a.b)("li",{parentName:"ul"},"NodeJS Official page - ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Link")),Object(a.b)("li",{parentName:"ul"},"DNS lookup practice - ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://kevincurran.org/com320/labs/dns.htm"}),"Link"))),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(s,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"NodeJS basic exercises"),Object(a.b)("li",{parentName:"ul"},"New modules",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Filesystem modules"))),Object(a.b)("li",{parentName:"ul"},"Types of modules (thrid-party modules and custom modules)")))}g.isMDXComponent=!0},215:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=u(r),b=n,p=g["".concat(i,".").concat(b)]||g[b]||h[b]||a;return r?o.a.createElement(p,l(l({ref:t},s),{},{components:r})):o.a.createElement(p,l({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);