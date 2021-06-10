(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{267:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return a})),r.d(e,"metadata",(function(){return l})),r.d(e,"toc",(function(){return c})),r.d(e,"Highlight",(function(){return s})),r.d(e,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(341)),a={title:"MVC with multiple models",author:"Oscar Miras",author_title:"FOAP 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["mvc","software patterns","database","json"]},l={permalink:"/singusaurus/blog/2021/06/09/testing-class-intro-mongodb",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-06-09-testing-class-intro-mongodb.mdx",source:"@site/blog\\2021-06-09-testing-class-intro-mongodb.mdx",description:"borderRadius: '2px',",date:"2021-06-09T00:00:00.000Z",tags:[{label:"mvc",permalink:"/singusaurus/blog/tags/mvc"},{label:"software patterns",permalink:"/singusaurus/blog/tags/software-patterns"},{label:"database",permalink:"/singusaurus/blog/tags/database"},{label:"json",permalink:"/singusaurus/blog/tags/json"}],title:"MVC with multiple models",truncated:!1,prevItem:{title:"Accesing MongoDB from NodeJS",permalink:"/singusaurus/blog/2021/06/10/nodejs-native-driver"},nextItem:{title:"MVC with multiple models",permalink:"/singusaurus/blog/2021/06/08/mvc-two-entities"}},c=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],s=function(t){var e=t.children,r=t.color;return Object(i.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},e)},g={toc:c,Highlight:s};function u(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},g,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(s,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Review second iteration of Viking Class"),Object(i.b)("li",{parentName:"ul"},"Introduction to MongoDB"),Object(i.b)("li",{parentName:"ul"},"Discuss unit project practice ")),Object(i.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(s,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"MongoDB - Query tutorial ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.mongodb.com/manual/tutorial/query-documents/"}),"Link"))),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(s,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Algorithm of the day - ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/"}),"Single Number")),Object(i.b)("li",{parentName:"ul"},"Finish query practice from terminal"),Object(i.b)("li",{parentName:"ul"},"Using MongoDB from a NodeJS app"),Object(i.b)("li",{parentName:"ul"},"Start unit project")))}u.isMDXComponent=!0},341:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return p}));var n=r(0),o=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=o.a.createContext({}),g=function(t){var e=o.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=g(t.components);return o.a.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,a=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),u=g(r),b=n,p=u["".concat(a,".").concat(b)]||u[b]||h[b]||i;return r?o.a.createElement(p,l(l({ref:e},s),{},{components:r})):o.a.createElement(p,l({ref:e},s))}));function p(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);