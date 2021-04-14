(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{231:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(r),h=n,p=g["".concat(i,".").concat(h)]||g[h]||b[h]||o;return r?a.a.createElement(p,l(l({ref:t},c),{},{components:r})):a.a.createElement(p,l({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"Highlight",(function(){return c})),r.d(t,"default",(function(){return g}));var n=r(3),a=r(7),o=(r(0),r(231)),i={title:"Review file system exercise & intro to custom modules",author:"Oscar Miras",author_title:"Singulars 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["nodejs","server","terminal","filesystem","modules"]},l={permalink:"/singusaurus/blog/2021/04/09/nodejs-modules",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-04-09-nodejs-modules.mdx",source:"@site/blog\\2021-04-09-nodejs-modules.mdx",description:"borderRadius: '2px',",date:"2021-04-09T00:00:00.000Z",tags:[{label:"nodejs",permalink:"/singusaurus/blog/tags/nodejs"},{label:"server",permalink:"/singusaurus/blog/tags/server"},{label:"terminal",permalink:"/singusaurus/blog/tags/terminal"},{label:"filesystem",permalink:"/singusaurus/blog/tags/filesystem"},{label:"modules",permalink:"/singusaurus/blog/tags/modules"}],title:"Review file system exercise & intro to custom modules",truncated:!1,prevItem:{title:"Modules exercise & introduction to Express framework",permalink:"/singusaurus/blog/2021/04/12/exercise-modules-express"},nextItem:{title:"Deeper in NodeJS (filesystem and server)",permalink:"/singusaurus/blog/2021/04/08/nodejs-filesystem-server"}},s=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],c=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},u={toc:s,Highlight:c};function g(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Review file system exercises"),Object(o.b)("li",{parentName:"ul"},"Custom modules and thrid-party modules",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Exercises"))),Object(o.b)("li",{parentName:"ul"},"More brainstorm about out future project"),Object(o.b)("li",{parentName:"ul"},"Introduction to Express framwork")),Object(o.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(c,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"What is NPM? - ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=ZNbFagCBlwo"}),"Link")),Object(o.b)("li",{parentName:"ul"},"JavaScript 30 Challange Front End - ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://javascript30.com/"}),"Link"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Array Cardio Day 1 y 2"),Object(o.b)("li",{parentName:"ul"},"Object and arrays- Reference VS Copy"),Object(o.b)("li",{parentName:"ul"},"Event capture, propagation, bubbling and once"),Object(o.b)("li",{parentName:"ul"},"Localstorage and event delegation"),Object(o.b)("li",{parentName:"ul"},"Ajax Type ahead"))),Object(o.b)("li",{parentName:"ul"},"More practice with array methods and javascript algorithms - ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://edabit.com/challenges"}),"Link")),Object(o.b)("li",{parentName:"ul"},"How to retrieve the parameters from the querystring with the querystring module in NodeJS - ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/a/18769731"}),"Link"))),Object(o.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Custom modules and thrid-party modules",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Exercises"))),Object(o.b)("li",{parentName:"ul"},"Introduction to Express")))}g.isMDXComponent=!0}}]);