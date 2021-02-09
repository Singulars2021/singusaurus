(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{171:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},g=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=r,b=g["".concat(i,".").concat(m)]||g[m]||p[m]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"Highlight",(function(){return u})),n.d(t,"default",(function(){return g}));var r=n(3),o=n(7),a=(n(0),n(171)),i={title:"Vue dynamic components",author:"Oscar Miras",author_title:"Singulars 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["vue","components","template","vue-cli","dynamic"]},c={permalink:"/singusaurus/blog/2021/02/08/vue-dynamic-components copy",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-02-08-vue-dynamic-components copy.mdx",source:"@site/blog\\2021-02-08-vue-dynamic-components copy.mdx",description:"borderRadius: '2px',",date:"2021-02-08T00:00:00.000Z",tags:[{label:"vue",permalink:"/singusaurus/blog/tags/vue"},{label:"components",permalink:"/singusaurus/blog/tags/components"},{label:"template",permalink:"/singusaurus/blog/tags/template"},{label:"vue-cli",permalink:"/singusaurus/blog/tags/vue-cli"},{label:"dynamic",permalink:"/singusaurus/blog/tags/dynamic"}],title:"Vue dynamic components",truncated:!1,prevItem:{title:"Vue  components and form communication",permalink:"/singusaurus/blog/2021/02/09/vue-components-communication"},nextItem:{title:"Vue custom events amd NPM usage",permalink:"/singusaurus/blog/2021/02/05/vue-custom-events-2 copy"}},l=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{borderRadius:"2px",color:n,padding:"0.2rem"}},t)},s={toc:l,Highlight:u};function g(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(u,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Dynamic components in Vue"),Object(a.b)("li",{parentName:"ul"},"Learn about different workflows to develope software"),Object(a.b)("li",{parentName:"ul"},"First week app planifications"),Object(a.b)("li",{parentName:"ul"},"Talk about registering Tender app")),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(u,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))))}g.isMDXComponent=!0}}]);