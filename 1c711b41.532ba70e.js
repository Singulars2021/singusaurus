(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{171:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},g=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(r),m=n,b=g["".concat(i,".").concat(m)]||g[m]||p[m]||a;return r?o.a.createElement(b,u(u({ref:t},c),{},{components:r})):o.a.createElement(b,u({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"Highlight",(function(){return c})),r.d(t,"default",(function(){return g}));var n=r(3),o=r(7),a=(r(0),r(171)),i={title:"Vue custom events amd NPM usage",author:"Oscar Miras",author_title:"Singulars 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["vue","components","template","vue-cli","npm"]},u={permalink:"/singusaurus/blog/2021/02/05/vue-custom-events-2 copy",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-02-05-vue-custom-events-2 copy.mdx",source:"@site/blog\\2021-02-05-vue-custom-events-2 copy.mdx",description:"borderRadius: '2px',",date:"2021-02-05T00:00:00.000Z",tags:[{label:"vue",permalink:"/singusaurus/blog/tags/vue"},{label:"components",permalink:"/singusaurus/blog/tags/components"},{label:"template",permalink:"/singusaurus/blog/tags/template"},{label:"vue-cli",permalink:"/singusaurus/blog/tags/vue-cli"},{label:"npm",permalink:"/singusaurus/blog/tags/npm"}],title:"Vue custom events amd NPM usage",truncated:!1,prevItem:{title:"Vue dynamic components",permalink:"/singusaurus/blog/2021/02/08/vue-dynamic-components copy"},nextItem:{title:"Vue custom events and Vue templates practice",permalink:"/singusaurus/blog/2021/02/04/vue-custom-events copy"}},l=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],c=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},s={toc:l,Highlight:c};function g(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Questions about the UserList exercise?"),Object(a.b)("li",{parentName:"ul"},'Full Vue component exercise: "poker game"')),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Talk about Poker exercise"),Object(a.b)("li",{parentName:"ul"},"Talk about registering Tender app")))}g.isMDXComponent=!0}}]);