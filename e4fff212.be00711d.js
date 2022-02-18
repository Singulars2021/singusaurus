(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{175:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"Highlight",(function(){return u})),r.d(t,"default",(function(){return g}));var n=r(3),i=r(7),o=(r(0),r(194)),a={title:"Vuex",author:"Oscar Miras",author_title:"Singulars 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["vue","router","sprint"]},l={permalink:"/singusaurus/blog/2021/02/15/vue-vuex-project copy",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-02-15-vue-vuex-project copy.mdx",source:"@site/blog\\2021-02-15-vue-vuex-project copy.mdx",description:"borderRadius: '2px',",date:"2021-02-15T00:00:00.000Z",tags:[{label:"vue",permalink:"/singusaurus/blog/tags/vue"},{label:"router",permalink:"/singusaurus/blog/tags/router"},{label:"sprint",permalink:"/singusaurus/blog/tags/sprint"}],title:"Vuex",truncated:!1,prevItem:{title:"Vuex",permalink:"/singusaurus/blog/2021/02/16/vuex-project copy"},nextItem:{title:"Vue Router exercise & finish sprint",permalink:"/singusaurus/blog/2021/02/12/vue-router-exercise copy"}},c=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],u=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},s={toc:c,Highlight:u};function g(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(u,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Vuex exercise, understand provide and inject"),Object(o.b)("li",{parentName:"ul"},"Project",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Review of the issues"),Object(o.b)("li",{parentName:"ul"},"Code merge to the main branch for finished issues "),Object(o.b)("li",{parentName:"ul"},"Testing of finished issues (if we can)"),Object(o.b)("li",{parentName:"ul"},"Assign new issues ")))),Object(o.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(u,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(o.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(o.b)("strong",{parentName:"h2"},Object(o.b)(u,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Defensive programming and error management"),Object(o.b)("li",{parentName:"ul"},"Typescript (typed programming languages)"),Object(o.b)("li",{parentName:"ul"},"TDD and Testing (Test Driven Development and testing software)"),Object(o.b)("li",{parentName:"ul"},"Apply these knwoledge to plain JavaScript and then to a Vue project")))}g.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(r),p=n,b=g["".concat(a,".").concat(p)]||g[p]||h[p]||o;return r?i.a.createElement(b,l(l({ref:t},u),{},{components:r})):i.a.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);