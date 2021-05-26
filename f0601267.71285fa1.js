(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{304:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"Highlight",(function(){return s})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(323)),i={title:"NPM exercise & JavaScript Classes",author:"Oscar Miras",author_title:"FOAP 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["modules","package managers","npm","classes"]},l={permalink:"/singusaurus/blog/2021/05/26/npm-exercises-js-oop",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-05-26-npm-exercises-js-oop.mdx",source:"@site/blog\\2021-05-26-npm-exercises-js-oop.mdx",description:"borderRadius: '2px',",date:"2021-05-26T00:00:00.000Z",tags:[{label:"modules",permalink:"/singusaurus/blog/tags/modules"},{label:"package managers",permalink:"/singusaurus/blog/tags/package-managers"},{label:"npm",permalink:"/singusaurus/blog/tags/npm"},{label:"classes",permalink:"/singusaurus/blog/tags/classes"}],title:"NPM exercise & JavaScript Classes",truncated:!1,nextItem:{title:"NPM, NodeJS Modules & JavaScript Objects",permalink:"/singusaurus/blog/2021/05/25/js-objects-nodejs-fs-npm"}},c=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],s=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},g={toc:c,Highlight:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},g,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(s,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Review algorithm of the day"),Object(o.b)("li",{parentName:"ul"},"Exercise to practice NodeJS custom and third-party modules"),Object(o.b)("li",{parentName:"ul"},"Unit project presentation"),Object(o.b)("li",{parentName:"ul"},"JavaScript Classes"),Object(o.b)("li",{parentName:"ul"},"Express (nodeJS framework)")),Object(o.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(s,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"How to deal with interview algorithms ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.freecodecamp.org/news/how-to-approach-any-algorithm-interview-without-panicking-b6d7ae5c050/"}),"link")),Object(o.b)("li",{parentName:"ul"},"Exercise freecodecamp about classes ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-class-syntax-to-define-a-constructor-function"}),"Link"))),Object(o.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(s,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Algorithm of the day by Arnau - ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/"}),"Valid Anagram")),Object(o.b)("li",{parentName:"ul"},"More classes exercise"),Object(o.b)("li",{parentName:"ul"},"Express framework")))}u.isMDXComponent=!0},323:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),g=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=g(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=g(r),p=a,b=u["".concat(i,".").concat(p)]||u[p]||h[p]||o;return r?n.a.createElement(b,l(l({ref:t},s),{},{components:r})):n.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);