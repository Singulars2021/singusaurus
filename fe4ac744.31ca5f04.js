(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{339:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return s})),o.d(t,"Highlight",(function(){return g})),o.d(t,"default",(function(){return u}));var n=o(3),r=o(7),i=(o(0),o(347)),a={title:"Mongoose Introduction",author:"Oscar Miras",author_title:"FOAP 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["nodejs","mongodb","odm","orm","mongoose"]},l={permalink:"/singusaurus/blog/2021/06/14/nodejs-intro-mongoose",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-06-14-nodejs-intro-mongoose.mdx",source:"@site/blog\\2021-06-14-nodejs-intro-mongoose.mdx",description:"borderRadius: '2px',",date:"2021-06-14T00:00:00.000Z",tags:[{label:"nodejs",permalink:"/singusaurus/blog/tags/nodejs"},{label:"mongodb",permalink:"/singusaurus/blog/tags/mongodb"},{label:"odm",permalink:"/singusaurus/blog/tags/odm"},{label:"orm",permalink:"/singusaurus/blog/tags/orm"},{label:"mongoose",permalink:"/singusaurus/blog/tags/mongoose"}],title:"Mongoose Introduction",truncated:!1,prevItem:{title:"Mongoose Validation",permalink:"/singusaurus/blog/2021/06/15/mongoose-validation"},nextItem:{title:"Accesing MongoDB from NodeJS",permalink:"/singusaurus/blog/2021/06/11/nodejs-mongodb-express"}},s=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],g=function(e){var t=e.children,o=e.color;return Object(i.b)("span",{style:{borderRadius:"2px",color:o,padding:"0.2rem"}},t)},c={toc:s,Highlight:g};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(g,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"MongoDB native driver exercises"),Object(i.b)("li",{parentName:"ul"},"Introduction to Mongoose: The ODM/ORM software"),Object(i.b)("li",{parentName:"ul"},"MVC Apartments project")),Object(i.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(g,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"MongoDB and Mongoose slides ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://es.slideshare.net/YnonPerek/getting-started-with-mongodb-and-mongoose"}),"Link")),Object(i.b)("li",{parentName:"ul"},"Mongoose official documentation ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://mongoosejs.com/docs/index.html"}),"Link")),Object(i.b)("li",{parentName:"ul"},"Practical introduction to Mongoose 1h video ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=gfP3aqV38q4"}),"Link"))),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(g,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"NodeJS native driver exercises"),Object(i.b)("li",{parentName:"ul"},"Schema validation with Mongoose"),Object(i.b)("li",{parentName:"ul"},"Project: show list of apartments: for admins and users")))}u.isMDXComponent=!0},347:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return d}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var g=r.a.createContext({}),c=function(e){var t=r.a.useContext(g),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return r.a.createElement(g.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=c(o),b=n,d=u["".concat(a,".").concat(b)]||u[b]||h[b]||i;return o?r.a.createElement(d,l(l({ref:t},g),{},{components:o})):r.a.createElement(d,l({ref:t},g))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var g=2;g<i;g++)a[g]=o[g];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);