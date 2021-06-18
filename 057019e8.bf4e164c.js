(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{355:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=a.a.createContext({}),g=function(t){var e=a.a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},u=function(t){var e=g(t.components);return a.a.createElement(c.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},p=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=g(r),p=n,b=u["".concat(o,".").concat(p)]||u[p]||h[p]||i;return r?a.a.createElement(b,s(s({ref:e},c),{},{components:r})):a.a.createElement(b,s({ref:e},c))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},78:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return o})),r.d(e,"metadata",(function(){return s})),r.d(e,"toc",(function(){return l})),r.d(e,"Highlight",(function(){return c})),r.d(e,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(355)),o={title:"JavaScript Static Classes & MVC",author:"Oscar Miras",author_title:"FOAP 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["mvc","software patterns","static classes"]},s={permalink:"/singusaurus/blog/2021/06/04/js-classes-static-examen-review",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-06-04-js-classes-static-examen-review.mdx",source:"@site/blog\\2021-06-04-js-classes-static-examen-review.mdx",description:"borderRadius: '2px',",date:"2021-06-04T00:00:00.000Z",tags:[{label:"mvc",permalink:"/singusaurus/blog/tags/mvc"},{label:"software patterns",permalink:"/singusaurus/blog/tags/software-patterns"},{label:"static classes",permalink:"/singusaurus/blog/tags/static-classes"}],title:"JavaScript Static Classes & MVC",truncated:!1,prevItem:{title:"JavaScript Static Classes & MVC",permalink:"/singusaurus/blog/2021/06/07/mvc-static-classes"},nextItem:{title:"JavaScript Classes & Express EJS",permalink:"/singusaurus/blog/2021/06/01/js-classes-project copy"}},l=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],c=function(t){var e=t.children,r=t.color;return Object(i.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},e)},g={toc:l,Highlight:c};function u(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},g,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Unit test review"),Object(i.b)("li",{parentName:"ul"},"Photogallery review")),Object(i.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(c,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Static classes"),Object(i.b)("li",{parentName:"ul"},"MVC pattern")))}u.isMDXComponent=!0}}]);