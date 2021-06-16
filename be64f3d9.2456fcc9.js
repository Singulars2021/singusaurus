(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{273:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"Highlight",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(347)),o={title:"MVC with multiple models",author:"Oscar Miras",author_title:"FOAP 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["mvc","software patterns","database","json"]},l={permalink:"/singusaurus/blog/2021/06/08/mvc-two-entities",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-06-08-mvc-two-entities.mdx",source:"@site/blog\\2021-06-08-mvc-two-entities.mdx",description:"borderRadius: '2px',",date:"2021-06-08T00:00:00.000Z",tags:[{label:"mvc",permalink:"/singusaurus/blog/tags/mvc"},{label:"software patterns",permalink:"/singusaurus/blog/tags/software-patterns"},{label:"database",permalink:"/singusaurus/blog/tags/database"},{label:"json",permalink:"/singusaurus/blog/tags/json"}],title:"MVC with multiple models",truncated:!1,prevItem:{title:"MVC with multiple models",permalink:"/singusaurus/blog/2021/06/09/testing-class-intro-mongodb"},nextItem:{title:"JavaScript Static Classes & MVC",permalink:"/singusaurus/blog/2021/06/07/mvc-static-classes"}},c=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],s=function(e){var t=e.children,r=e.color;return Object(i.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},g={toc:c,Highlight:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},g,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(s,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Algorithm of the day by Vanessa Collazos ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/"}),"First Unique Character in a String")),Object(i.b)("li",{parentName:"ul"},"Class practice with automated testing"),Object(i.b)("li",{parentName:"ul"},"Review MVC photo gallery, requirement 1"),Object(i.b)("li",{parentName:"ul"},"MVC Exercise with different entities")),Object(i.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(s,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Class inheritance ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://es.javascript.info/class-inheritance"}),"Link")," "),Object(i.b)("li",{parentName:"ul"},"Example of class inheritance ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://pastebin.com/raw/1LqP94Ut"}),"Link"))),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(s,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Algorithm of the day - ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/"}),"Single Number")),Object(i.b)("li",{parentName:"ul"},"Review second iteration of Viking Class"),Object(i.b)("li",{parentName:"ul"},"Introduction to MongoDB"),Object(i.b)("li",{parentName:"ul"},"Discuss unit project practice ")))}u.isMDXComponent=!0},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),g=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=g(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=g(r),b=n,p=u["".concat(o,".").concat(b)]||u[b]||h[b]||i;return r?a.a.createElement(p,l(l({ref:t},s),{},{components:r})):a.a.createElement(p,l({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);