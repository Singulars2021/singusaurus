(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{377:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=a.a.createContext({}),c=function(e){var t=a.a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.a.createElement(g.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,p=u["".concat(o,".").concat(h)]||u[h]||b[h]||i;return r?a.a.createElement(p,l(l({ref:t},g),{},{components:r})):a.a.createElement(p,l({ref:t},g))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var g=2;g<i;g++)o[g]=r[g];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"Highlight",(function(){return g})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(377)),o={title:"Git branches & Agile User Stories",author:"Oscar Miras",author_title:"FOAP 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["git","github","agile","kanban","user stories","branch","revert","reset","checkout","merge"]},l={permalink:"/singusaurus/blog/2021/06/28/git-user-stories",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-06-28-git-user-stories.mdx",source:"@site/blog\\2021-06-28-git-user-stories.mdx",description:"borderRadius: '2px',",date:"2021-06-28T00:00:00.000Z",tags:[{label:"git",permalink:"/singusaurus/blog/tags/git"},{label:"github",permalink:"/singusaurus/blog/tags/github"},{label:"agile",permalink:"/singusaurus/blog/tags/agile"},{label:"kanban",permalink:"/singusaurus/blog/tags/kanban"},{label:"user stories",permalink:"/singusaurus/blog/tags/user-stories"},{label:"branch",permalink:"/singusaurus/blog/tags/branch"},{label:"revert",permalink:"/singusaurus/blog/tags/revert"},{label:"reset",permalink:"/singusaurus/blog/tags/reset"},{label:"checkout",permalink:"/singusaurus/blog/tags/checkout"},{label:"merge",permalink:"/singusaurus/blog/tags/merge"}],title:"Git branches & Agile User Stories",truncated:!1,nextItem:{title:"SQL Join",permalink:"/singusaurus/blog/2021/06/25/intro-git-agile-kickoff-project"}},s=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],g=function(e){var t=e.children,r=e.color;return Object(i.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},c={toc:s,Highlight:g};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(g,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Markdown tutorial"),Object(i.b)("li",{parentName:"ul"},"Git branches "),Object(i.b)("li",{parentName:"ul"},"Undo and redo changes (revert, reset)"),Object(i.b)("li",{parentName:"ul"},"More about the agile framework"),Object(i.b)("li",{parentName:"ul"},"Assigment of first project issues")),Object(i.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(g,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Markdown tutorial ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.markdowntutorial.com/"}),"Link")),Object(i.b)("li",{parentName:"ul"},"What are agile methodologies? ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.atlassian.com/es/agile"}),"Link")),Object(i.b)("li",{parentName:"ul"},"Differences between Scrum and kanban ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=BWyMyq4xu48"}),"Link"))),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(g,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Example git revert"),Object(i.b)("li",{parentName:"ul"},"First common issue in Avisa.me project")))}u.isMDXComponent=!0}}]);