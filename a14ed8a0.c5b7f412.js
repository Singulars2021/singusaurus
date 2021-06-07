(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{235:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return o})),r.d(e,"metadata",(function(){return l})),r.d(e,"toc",(function(){return c})),r.d(e,"Highlight",(function(){return s})),r.d(e,"default",(function(){return h}));var a=r(3),n=r(7),i=(r(0),r(335)),o={title:"JavaScript Static Classes & MVC",author:"Oscar Miras",author_title:"FOAP 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["mvc","software patterns","static classes"]},l={permalink:"/singusaurus/blog/2021/06/07/mvc-static-classes",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-06-07-mvc-static-classes.mdx",source:"@site/blog\\2021-06-07-mvc-static-classes.mdx",description:"borderRadius: '2px',",date:"2021-06-07T00:00:00.000Z",tags:[{label:"mvc",permalink:"/singusaurus/blog/tags/mvc"},{label:"software patterns",permalink:"/singusaurus/blog/tags/software-patterns"},{label:"static classes",permalink:"/singusaurus/blog/tags/static-classes"}],title:"JavaScript Static Classes & MVC",truncated:!1,nextItem:{title:"JavaScript Static Classes & MVC",permalink:"/singusaurus/blog/2021/06/04/js-classes-static-examen-review"}},c=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],s=function(t){var e=t.children,r=t.color;return Object(i.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},e)},g={toc:c,Highlight:s};function h(t){var e=t.components,r=Object(n.a)(t,["components"]);return Object(i.b)("wrapper",Object(a.a)({},g,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(s,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Static classes with Pokemon exercise"),Object(i.b)("li",{parentName:"ul"},"MVC pattern"),Object(i.b)("li",{parentName:"ul"},"Introduction to persistent data")),Object(i.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(s,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Boilerplates for MVC Express Applications ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/basemkhirat/express-mvc"}),"Boilerplate")),Object(i.b)("li",{parentName:"ul"},"Converting a NodeJS/Express app to MVC pattern ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=zW_tZR0Ir3Q&"}),"The Net Ninja"))),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(s,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Algorithm of the day by Vanessa Collazos ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/"}),"First Unique Character in a String")),Object(i.b)("li",{parentName:"ul"},"Review MVC photo gallery, requirement 1"),Object(i.b)("li",{parentName:"ul"},"MVC exercise from scratch"),Object(i.b)("li",{parentName:"ul"},"MVC Exercise with different entities")))}h.isMDXComponent=!0},335:function(t,e,r){"use strict";r.d(e,"a",(function(){return h})),r.d(e,"b",(function(){return b}));var a=r(0),n=r.n(a);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=n.a.createContext({}),g=function(t){var e=n.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},h=function(t){var e=g(t.components);return n.a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},p=n.a.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),h=g(r),p=a,b=h["".concat(o,".").concat(p)]||h[p]||u[p]||i;return r?n.a.createElement(b,l(l({ref:e},s),{},{components:r})):n.a.createElement(b,l({ref:e},s))}));function b(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);