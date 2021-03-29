(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{190:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a(196),i=a(22),o=a(200),m=a(197);var s=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},u=a(198);var d=function(){var e=Object(i.default)().siteConfig.title,t=Object(u.useActivePlugin)({failfast:!0}).pluginId,a=Object(c.useDocsPreferredVersion)(t).savePreferredVersionName,n=Object(u.useActiveVersion)(t),r=Object(u.useDocVersionSuggestions)(t),o=r.latestDocSuggestion,s=r.latestVersionSuggestion;if(!s)return l.a.createElement(l.a.Fragment,null);var d,v=null!=o?o:(d=s).docs.find((function(e){return e.id===d.mainDocId}));return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===n.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,n.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,n.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(m.a,{to:v.path,onClick:function(){return a(s.name)}},"latest version"))," ","(",s.label,")."))},v=a(215),E=a(208),g=a(195),f=a(79),p=a.n(f);t.default=function(e){const{siteConfig:t}=Object(i.default)(),{url:a}=t,{content:n}=e,{metadata:m,frontMatter:{image:f,keywords:b,hide_title:N,hide_table_of_contents:h}}=n,{description:_,title:O,permalink:j,editUrl:w,lastUpdatedAt:k,lastUpdatedBy:y}=m,{pluginId:C}=Object(u.useActivePlugin)({failfast:!0}),x=Object(u.useVersions)(C),L=Object(u.useActiveVersion)(C),I=x.length>1,A=Object(c.useTitleFormatter)(O),S=Object(o.a)(f,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,A),l.a.createElement("meta",{property:"og:title",content:A}),_&&l.a.createElement("meta",{name:"description",content:_}),_&&l.a.createElement("meta",{property:"og:description",content:_}),b&&b.length&&l.a.createElement("meta",{name:"keywords",content:b.join(",")}),f&&l.a.createElement("meta",{property:"og:image",content:S}),f&&l.a.createElement("meta",{name:"twitter:image",content:S}),f&&l.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${O}`}),j&&l.a.createElement("meta",{property:"og:url",content:a+j}),j&&l.a.createElement("link",{rel:"canonical",href:a+j})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(g.a)("col",{[p.a.docItemCol]:!h})},l.a.createElement(d,null),l.a.createElement("div",{className:p.a.docItemContainer},l.a.createElement("article",null,I&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",L.label)),!N&&l.a.createElement("header",null,l.a.createElement("h1",{className:p.a.docTitle},O)),l.a.createElement("div",{className:"markdown"},l.a.createElement(n,null))),(w||k||y)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},w&&l.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(E.a,null),"Edit this page")),(k||y)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",k&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*k).toISOString(),className:p.a.docLastUpdatedAt},new Date(1e3*k).toLocaleDateString()),y&&" "),y&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,y)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:m})))),!h&&n.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(v.a,{toc:n.toc}))))}},208:function(e,t,a){"use strict";var n=a(3),l=a(7),r=a(0),c=a.n(r),i=a(195),o=a(57),m=a.n(o);t.a=function(e){var t=e.className,a=Object(l.a)(e,["className"]);return c.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(i.a)(m.a.iconEdit,t)},a),c.a.createElement("g",null,c.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},215:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(195);var c=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],c=l[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,i=!1,o=document.getElementsByClassName(e);l<o.length&&!i;){var m=o[l],s=m.href,u=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===u&&(r&&r.classList.remove(t),m.classList.add(t),c(m),i=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i=a(56),o=a.n(i),m="table-of-contents__link";function s(e){var t=e.toc,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(s,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return c(m,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(o.a.tableOfContents,"thin-scrollbar")},l.a.createElement(s,{toc:t}))}}}]);