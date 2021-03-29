(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"Highlight",(function(){return c})),r.d(t,"default",(function(){return g}));var n=r(3),a=r(7),i=(r(0),r(194)),o={title:"JavaScript static methods and Vue events",author:"Oscar Miras",author_title:"Singulars 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["classes","objects","project","frameworks"]},s={permalink:"/singusaurus/blog/2021/01/18/static-clases-vue-events",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-01-18-static-clases-vue-events.mdx",source:"@site/blog\\2021-01-18-static-clases-vue-events.mdx",description:"borderRadius: '2px',",date:"2021-01-18T00:00:00.000Z",tags:[{label:"classes",permalink:"/singusaurus/blog/tags/classes"},{label:"objects",permalink:"/singusaurus/blog/tags/objects"},{label:"project",permalink:"/singusaurus/blog/tags/project"},{label:"frameworks",permalink:"/singusaurus/blog/tags/frameworks"}],title:"JavaScript static methods and Vue events",truncated:!1,prevItem:{title:"Subclasses in JavaScript and Vue",permalink:"/singusaurus/blog/2021/01/19/subclasses-vue-computed copy"},nextItem:{title:"Classes in JavaScript - II",permalink:"/singusaurus/blog/2021/01/15/clases-2"}},l=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Daily Highlights</Highlight></strong>',id:"highlight-colorff8000daily-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do the next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-the-next-classhighlight",children:[]}],c=function(e){var t=e.children,r=e.color;return Object(i.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},u={toc:l,Highlight:c};function g(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pokemon classes exercise with static methods "),Object(i.b)("li",{parentName:"ul"},"Events in Vue")),Object(i.b)("h2",{id:"highlight-colorff8000daily-highlightshighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(c,{color:"#ff8000",mdxType:"Highlight"},"Daily Highlights"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We learn how to use ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://v3.vuejs.org/guide/events.html#listening-to-events"}),"events")," in VUE"),Object(i.b)("li",{parentName:"ul"},"We learn about the differences between class methods and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.geeksforgeeks.org/static-methods-in-javascript/#:~:text=The%20JavaScript%20allows%20static%20methods,can%20be%20of%20any%20name."}),"static methods")),Object(i.b)("li",{parentName:"ul"},"There are shorthands for directives in Vue.",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://devhints.io/vue"}),"Cheatsheet"))),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-the-next-classhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do the next class?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Keep working on JavaScript Classes "),Object(i.b)("li",{parentName:"ul"},"Vue: conditional styling, double-bind directive and computer properties and watchers")))}g.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},g=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(r),b=n,p=g["".concat(o,".").concat(b)]||g[b]||h[b]||i;return r?a.a.createElement(p,s(s({ref:t},c),{},{components:r})):a.a.createElement(p,s({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);