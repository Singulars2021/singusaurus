(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{322:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return s})),o.d(t,"Highlight",(function(){return g})),o.d(t,"default",(function(){return c}));var n=o(3),r=o(7),a=(o(0),o(355)),i={title:"Mongoose Relations - 2",author:"Oscar Miras",author_title:"FOAP 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["nodejs","mongodb","odm","orm","mongoose","relations","populate"]},l={permalink:"/singusaurus/blog/2021/06/17/mongoose-populate",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-06-17-mongoose-populate.mdx",source:"@site/blog\\2021-06-17-mongoose-populate.mdx",description:"borderRadius: '2px',",date:"2021-06-17T00:00:00.000Z",tags:[{label:"nodejs",permalink:"/singusaurus/blog/tags/nodejs"},{label:"mongodb",permalink:"/singusaurus/blog/tags/mongodb"},{label:"odm",permalink:"/singusaurus/blog/tags/odm"},{label:"orm",permalink:"/singusaurus/blog/tags/orm"},{label:"mongoose",permalink:"/singusaurus/blog/tags/mongoose"},{label:"relations",permalink:"/singusaurus/blog/tags/relations"},{label:"populate",permalink:"/singusaurus/blog/tags/populate"}],title:"Mongoose Relations - 2",truncated:!1,prevItem:{title:"Mongoose Populate & SQL Introduction",permalink:"/singusaurus/blog/2021/06/18/mongoose-populate-sql"},nextItem:{title:"Mongoose Relations",permalink:"/singusaurus/blog/2021/06/16/mongoose-relations copy"}},s=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],g=function(e){var t=e.children,o=e.color;return Object(a.b)("span",{style:{borderRadius:"2px",color:o,padding:"0.2rem"}},t)},u={toc:s,Highlight:g};function c(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(g,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Review Bonus 3 restaurant form"),Object(a.b)("li",{parentName:"ul"},"Relations in different collection with MongoDB"),Object(a.b)("li",{parentName:"ul"},'How to implement "delete" requirement in unit Project')),Object(a.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(g,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"How to update a document in Mongoose ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://masteringjs.io/tutorials/mongoose/update"}),"Link"))),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(g,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Many to many relations with Mongoose"),Object(a.b)("li",{parentName:"ul"},"Introduction to SQL"),Object(a.b)("li",{parentName:"ul"},'Gather "Avisa.me" requirements'),Object(a.b)("li",{parentName:"ul"},"Basic filter in unit project")))}c.isMDXComponent=!0},355:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"b",(function(){return b}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var g=r.a.createContext({}),u=function(e){var t=r.a.useContext(g),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return r.a.createElement(g.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=u(o),p=n,b=c["".concat(i,".").concat(p)]||c[p]||h[p]||a;return o?r.a.createElement(b,l(l({ref:t},g),{},{components:o})):r.a.createElement(b,l({ref:t},g))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var g=2;g<a;g++)i[g]=o[g];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);