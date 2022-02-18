(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{173:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"Highlight",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),i=(r(0),r(194)),a={title:"Vuex & actions",author:"Oscar Miras",author_title:"Singulars 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["vue","router","sprint"]},l={permalink:"/singusaurus/blog/2021/02/17/vuex-actions copy",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-02-17-vuex-actions copy.mdx",source:"@site/blog\\2021-02-17-vuex-actions copy.mdx",description:"borderRadius: '2px',",date:"2021-02-17T00:00:00.000Z",tags:[{label:"vue",permalink:"/singusaurus/blog/tags/vue"},{label:"router",permalink:"/singusaurus/blog/tags/router"},{label:"sprint",permalink:"/singusaurus/blog/tags/sprint"}],title:"Vuex & actions",truncated:!1,prevItem:{title:"Box Model and CSS Units",permalink:"/singusaurus/blog/2022/02/17/box-model-css-units"},nextItem:{title:"Vuex",permalink:"/singusaurus/blog/2021/02/16/vuex-project copy"}},c=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],u=function(e){var t=e.children,r=e.color;return Object(i.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},g={toc:c,Highlight:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},g,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(u,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Finish Vuex exercise"),Object(i.b)("li",{parentName:"ul"},"Think about possible Vuex structure in Tender"),Object(i.b)("li",{parentName:"ul"},"Project ")),Object(i.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(u,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(u,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Defensive programming & error handling")))}s.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),g=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=g(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=g(r),p=n,b=s["".concat(a,".").concat(p)]||s[p]||h[p]||i;return r?o.a.createElement(b,l(l({ref:t},u),{},{components:r})):o.a.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);