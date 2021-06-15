(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"Highlight",(function(){return g})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(346)),i={title:"Mongoose Schema Validation / Blueprints day 2",author:"Oscar Miras",author_title:"Singulars 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["nodejs","mongoose","database","mongodb","odm","orm","validation"]},l={permalink:"/singusaurus/blog/2021/04/29/Mongoose-Validation-Blueprints",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-04-29-Mongoose-Validation-Blueprints.mdx",source:"@site/blog\\2021-04-29-Mongoose-Validation-Blueprints.mdx",description:"borderRadius: '2px',",date:"2021-04-29T00:00:00.000Z",tags:[{label:"nodejs",permalink:"/singusaurus/blog/tags/nodejs"},{label:"mongoose",permalink:"/singusaurus/blog/tags/mongoose"},{label:"database",permalink:"/singusaurus/blog/tags/database"},{label:"mongodb",permalink:"/singusaurus/blog/tags/mongodb"},{label:"odm",permalink:"/singusaurus/blog/tags/odm"},{label:"orm",permalink:"/singusaurus/blog/tags/orm"},{label:"validation",permalink:"/singusaurus/blog/tags/validation"}],title:"Mongoose Schema Validation / Blueprints day 2",truncated:!1,prevItem:{title:"More on Mongoose / Blueprints day 3",permalink:"/singusaurus/blog/2021/04/30/Mongoose-blueprints-iii copy"},nextItem:{title:"MongoDB & Mongoose / Blueprints day 1",permalink:"/singusaurus/blog/2021/04/28/MongoDB-ORM-Mongoose"}},s=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],g=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},c={toc:s,Highlight:g};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(g,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Algorithm of the day - ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://leetcode.com/problems/valid-parentheses/"}),"Valid Parenthesis")),Object(a.b)("li",{parentName:"ul"},"Validating data with Mongoose "),Object(a.b)("li",{parentName:"ul"},"Working on personal blueprints II")),Object(a.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(g,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Data structures and JavaScript - ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=t2CEgPsws3U"}),"Freecodecamp")),Object(a.b)("li",{parentName:"ul"},"JavaScript data strctures - ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://pro.academind.com/p/javascript-datastructures-the-fundamentals"}),"Academaind - paid"))),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(g,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"More Mongoose practice"),Object(a.b)("li",{parentName:"ul"},"Last day of blue prints"),Object(a.b)("li",{parentName:"ul"},"Interview test"),Object(a.b)("li",{parentName:"ul"},"Algorithm of the day")))}u.isMDXComponent=!0},346:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var g=o.a.createContext({}),c=function(e){var t=o.a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return o.a.createElement(g.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=c(r),b=n,p=u["".concat(i,".").concat(b)]||u[b]||h[b]||a;return r?o.a.createElement(p,l(l({ref:t},g),{},{components:r})):o.a.createElement(p,l({ref:t},g))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var g=2;g<a;g++)i[g]=r[g];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);