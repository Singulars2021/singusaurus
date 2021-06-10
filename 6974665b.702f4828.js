(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{182:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"Highlight",(function(){return c})),r.d(t,"default",(function(){return g}));var n=r(3),a=r(7),o=(r(0),r(341)),i={title:"JavaScript Classes & Express framework",author:"Oscar Miras",author_title:"FOAP 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["modules","framework","express","classes"]},s={permalink:"/singusaurus/blog/2021/05/27/js-classes-express-intro",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-05-27-js-classes-express-intro.mdx",source:"@site/blog\\2021-05-27-js-classes-express-intro.mdx",description:"borderRadius: '2px',",date:"2021-05-27T00:00:00.000Z",tags:[{label:"modules",permalink:"/singusaurus/blog/tags/modules"},{label:"framework",permalink:"/singusaurus/blog/tags/framework"},{label:"express",permalink:"/singusaurus/blog/tags/express"},{label:"classes",permalink:"/singusaurus/blog/tags/classes"}],title:"JavaScript Classes & Express framework",truncated:!1,prevItem:{title:"JavaScript Classes & Express framework",permalink:"/singusaurus/blog/2021/05/28/js-classes-express-ejs"},nextItem:{title:"NPM exercise & JavaScript Classes",permalink:"/singusaurus/blog/2021/05/26/npm-exercises-js-oop"}},l=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],c=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},u={toc:l,Highlight:c};function g(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Algorithm of the day by Ariel - ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/"}),"Two Sum")),Object(o.b)("li",{parentName:"ul"},"More class exercises"),Object(o.b)("li",{parentName:"ul"},"Express: rendering with template engines"),Object(o.b)("li",{parentName:"ul"},"Project brainstorm")),Object(o.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(c,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"How to use EJS in your Express project, step by step ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-es"}),"Link")),Object(o.b)("li",{parentName:"ul"},"List of express template engines ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://expressjs.com/en/resources/template-engines.html"}),"Link"))),Object(o.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Algortihm of the day by ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://leetcode.com/explore/interview/card/top-interview-questions-medium/114/others/824/"}),"Cristian")),Object(o.b)("li",{parentName:"ul"},"More class exercises"),Object(o.b)("li",{parentName:"ul"},"Express/EJS exercises"),Object(o.b)("li",{parentName:"ul"},"Project")))}g.isMDXComponent=!0},341:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},g=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(r),h=n,b=g["".concat(i,".").concat(h)]||g[h]||p[h]||o;return r?a.a.createElement(b,s(s({ref:t},c),{},{components:r})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);