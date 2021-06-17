(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{352:function(e,t,o){"use strict";o.d(t,"a",(function(){return h})),o.d(t,"b",(function(){return p}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=n.a.createContext({}),g=function(e){var t=n.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},h=function(e){var t=g(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=g(o),b=r,p=h["".concat(i,".").concat(b)]||h[b]||u[b]||a;return o?n.a.createElement(p,l(l({ref:t},c),{},{components:o})):n.a.createElement(p,l({ref:t},c))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},98:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return s})),o.d(t,"Highlight",(function(){return c})),o.d(t,"default",(function(){return h}));var r=o(3),n=o(7),a=(o(0),o(352)),i={title:"MVC & MongoDB",author:"Oscar Miras",author_title:"Singulars 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["nodejs","express","database","mongodb"]},l={permalink:"/singusaurus/blog/2021/04/27/MongoDB-Tools",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-04-27-MongoDB-Tools.mdx",source:"@site/blog\\2021-04-27-MongoDB-Tools.mdx",description:"borderRadius: '2px',",date:"2021-04-27T00:00:00.000Z",tags:[{label:"nodejs",permalink:"/singusaurus/blog/tags/nodejs"},{label:"express",permalink:"/singusaurus/blog/tags/express"},{label:"database",permalink:"/singusaurus/blog/tags/database"},{label:"mongodb",permalink:"/singusaurus/blog/tags/mongodb"}],title:"MVC & MongoDB",truncated:!1,prevItem:{title:"MongoDB & Mongoose / Blueprints day 1",permalink:"/singusaurus/blog/2021/04/28/MongoDB-ORM-Mongoose"},nextItem:{title:"MVC & MongoDB & Database tools",permalink:"/singusaurus/blog/2021/04/26/MongoDB-NodeJS"}},s=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],c=function(e){var t=e.children,o=e.color;return Object(a.b)("span",{style:{borderRadius:"2px",color:o,padding:"0.2rem"}},t)},g={toc:s,Highlight:c};function h(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},g,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Finish MVC project with MongoDB"),Object(a.b)("li",{parentName:"ul"},"More exercises with MongoDB library "),Object(a.b)("li",{parentName:"ul"},"Algorithm of the day - ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.codewars.com/kata/597ef546ee48603f7a000057"}),"Stock Profits")," - to be solved by Claudia Ballano")),Object(a.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(c,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"MongoDB cheatsheet - ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mongodb.com/quickstart/cheat-sheet/"}),"Link")),Object(a.b)("li",{parentName:"ul"},"MongoDB CRUD operations with NodeJS/Express - ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.mongodb.com/drivers/node/usage-examples/"}),"Link")),Object(a.b)("li",{parentName:"ul"},"Very well and detailed documentation how to use MongoDB driver in NodeJS - ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://guru99.es/node-js-mongodb/"}),"Link")),Object(a.b)("li",{parentName:"ul"},"Instance methods vs static methods - ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.samanthaming.com/tidbits/39-es6-classes/"}),"Link"))),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))))}h.isMDXComponent=!0}}]);