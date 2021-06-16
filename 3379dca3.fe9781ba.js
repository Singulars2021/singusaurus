(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{132:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"Highlight",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(347)),i={title:"Mongoose Validation",author:"Oscar Miras",author_title:"FOAP 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["nodejs","mongodb","odm","orm","mongoose"]},l={permalink:"/singusaurus/blog/2021/06/15/mongoose-validation",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-06-15-mongoose-validation.mdx",source:"@site/blog\\2021-06-15-mongoose-validation.mdx",description:"borderRadius: '2px',",date:"2021-06-15T00:00:00.000Z",tags:[{label:"nodejs",permalink:"/singusaurus/blog/tags/nodejs"},{label:"mongodb",permalink:"/singusaurus/blog/tags/mongodb"},{label:"odm",permalink:"/singusaurus/blog/tags/odm"},{label:"orm",permalink:"/singusaurus/blog/tags/orm"},{label:"mongoose",permalink:"/singusaurus/blog/tags/mongoose"}],title:"Mongoose Validation",truncated:!1,nextItem:{title:"Mongoose Introduction",permalink:"/singusaurus/blog/2021/06/14/nodejs-intro-mongoose"}},s=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],c=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},g={toc:s,Highlight:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},g,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"NodeJS native driver exercises"),Object(a.b)("li",{parentName:"ul"},"Schema validation with Mongoose"),Object(a.b)("li",{parentName:"ul"},"Project: show list of apartments: for admins and users")),Object(a.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(c,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"What is the difference between require and import? Which one should I use? ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/46677752/the-difference-between-requirex-and-import-x/46677972"}),"Link")),Object(a.b)("li",{parentName:"ul"},"Front end app modularization ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/omiras/hangman-ajax-app"}),"Link")),Object(a.b)("li",{parentName:"ul"},"How to adapt to MVC a Front End app ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://gist.github.com/kamikaze-lab/718b708b9b4ba76e6b7a"}),"Link")),Object(a.b)("li",{parentName:"ul"},"MVC TodoApp in several languages ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://todomvc.com/"}),"Link")),Object(a.b)("li",{parentName:"ul"},"Why do we need to use 'super' in subclasses with a custom constructor? ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://css-tricks.com/what-is-super-in-javascript/#:~:text=Calling%20super()%20essentially%20lets,is%20just%20the%20JavaScript%20Object."}),"Link")),Object(a.b)("li",{parentName:"ul"},"What is an inverse proxy server? ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://es.wikipedia.org/wiki/Proxy_inverso"}),"Link")),Object(a.b)("li",{parentName:"ul"},"Design principles in MongoDB databases ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mongodb.com/article/mongodb-schema-design-best-practices/"}),"Link"))),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"More queries with the restaurant form using native MongoDB driver"),Object(a.b)("li",{parentName:"ul"},"Introduction to relations between collections with MongoDB"),Object(a.b)("li",{parentName:"ul"},"We'll talk about all the fields that we need to implement in our Project"),Object(a.b)("li",{parentName:"ul"},"We'll talk about how to edit or delete an apartment")))}u.isMDXComponent=!0},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),g=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=g(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=g(r),h=n,p=u["".concat(i,".").concat(h)]||u[h]||b[h]||a;return r?o.a.createElement(p,l(l({ref:t},c),{},{components:r})):o.a.createElement(p,l({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);