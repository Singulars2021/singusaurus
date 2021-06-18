(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{355:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),g=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=g(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=g(r),b=n,p=u["".concat(i,".").concat(b)]||u[b]||h[b]||a;return r?o.a.createElement(p,l(l({ref:t},s),{},{components:r})):o.a.createElement(p,l({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"Highlight",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(355)),i={title:"HTML5 - CSS - Challange",author:"Oscar Miras",author_title:"FOAP 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["html5","responsive","box model","float","CSS units"]},l={permalink:"/singusaurus/blog/2021/05/12/html5-boxmodel-css-specifity",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-05-12-html5-boxmodel-css-specifity.mdx",source:"@site/blog\\2021-05-12-html5-boxmodel-css-specifity.mdx",description:"borderRadius: '2px',",date:"2021-05-12T00:00:00.000Z",tags:[{label:"html5",permalink:"/singusaurus/blog/tags/html-5"},{label:"responsive",permalink:"/singusaurus/blog/tags/responsive"},{label:"box model",permalink:"/singusaurus/blog/tags/box-model"},{label:"float",permalink:"/singusaurus/blog/tags/float"},{label:"CSS units",permalink:"/singusaurus/blog/tags/css-units"}],title:"HTML5 - CSS - Challange",truncated:!1,prevItem:{title:"JavaScript - Challange",permalink:"/singusaurus/blog/2021/05/13/javascript-dom-events"},nextItem:{title:"HTML5 - CSS - Intro Programming",permalink:"/singusaurus/blog/2021/05/11/html5-css-intro-programming"}},c=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],s=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},g={toc:c,Highlight:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},g,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(s,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Review HTML structure exercises"),Object(a.b)("li",{parentName:"ul"},"CSS Specificity"),Object(a.b)("li",{parentName:"ul"},"CSS",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Box model"),Object(a.b)("li",{parentName:"ul"},"Media queries"),Object(a.b)("li",{parentName:"ul"},"Display values"),Object(a.b)("li",{parentName:"ul"},"Float"),Object(a.b)("li",{parentName:"ul"},"CSS Units"))),Object(a.b)("li",{parentName:"ul"},"BEM Methodology"),Object(a.b)("li",{parentName:"ul"},"Frontend mentor challange - ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62"}),"Stats Preview Card Components")),Object(a.b)("li",{parentName:"ul"},"Send exercises as homework")),Object(a.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(s,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Box model - ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/es/docs/Web/CSS/box-sizing"}),"Link")),Object(a.b)("li",{parentName:"ul"},"How-To. Don't reinvent the wheel. Someone had to do it before - ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.w3schools.com/howto"}),"Link")),Object(a.b)("li",{parentName:"ul"},"Em, Rem, px - Best practices - ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://blog.devgenius.io/a-bite-sized-best-practices-guide-for-css-units-em-rem-px-and-more-f621c0d56df4"}),"Link")),Object(a.b)("li",{parentName:"ul"},"Background images - ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.w3schools.com/html/html_images_background.asp"}),"Link")),Object(a.b)("li",{parentName:"ul"},"Another way to solve our challange - ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.google.com/search?q=frontendmentor.io+solutions+stats+preview&oq=frontendmentor.io+solutions+stats+preview&aqs=chrome..69i57j33i160l3.27598j1j7&sourceid=chrome&ie=UTF-8"}),"Link"))),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(s,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Full project in JavaScript")))}u.isMDXComponent=!0}}]);