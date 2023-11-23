"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2800],{85529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(85893),o=t(3905);const i={title:"Introduction",slug:"/intro"},a=void 0,s={id:"intro/introduction",title:"Introduction",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/intro/introduction.md",sourceDirName:"intro",slug:"/intro",permalink:"/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/intro/introduction.md",tags:[],version:"current",lastUpdatedBy:"Daniel",lastUpdatedAt:1700739178,formattedLastUpdatedAt:"Nov 23, 2023",frontMatter:{title:"Introduction",slug:"/intro"},sidebar:"docsSidebar",next:{title:"Quickstart",permalink:"/intro/quickstart"}},c={},l=[{value:"Why Jan?",id:"why-jan",level:2},{value:"\ud83d\udcbb Own your AI",id:"-own-your-ai",level:4},{value:"\ud83c\udfd7\ufe0f Extensions",id:"\ufe0f-extensions",level:4},{value:"\ud83d\uddc2\ufe0f Open File Formats",id:"\ufe0f-open-file-formats",level:4},{value:"\ud83c\udf0d Open Source",id:"-open-source",level:4}];function d(e){const n={a:"a",h2:"h2",h4:"h4",p:"p",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Jan is a ChatGPT-alternative that runs on your own computer, with a ",(0,r.jsx)(n.a,{href:"/api",children:"local API server"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Jan uses ",(0,r.jsx)(n.a,{href:"/docs/models",children:"open-source AI models"}),", stores data in ",(0,r.jsx)(n.a,{href:"/specs/data-structures",children:"open file formats"}),", is highly customizable via ",(0,r.jsx)(n.a,{href:"/docs/extensions",children:"extensions"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Jan believes in the need for an open source AI ecosystem. We aim to build infra and tooling to allow open source AIs to compete on a level playing field with proprietary offerings."}),"\n",(0,r.jsx)(n.h2,{id:"why-jan",children:"Why Jan?"}),"\n",(0,r.jsx)(n.h4,{id:"-own-your-ai",children:"\ud83d\udcbb Own your AI"}),"\n",(0,r.jsxs)(n.p,{children:["Jan runs 100% on your own machine, ",(0,r.jsx)(n.a,{href:"https://www.reddit.com/r/LocalLLaMA/comments/17mghqr/comment/k7ksti6/?utm_source=share&utm_medium=web2x&context=3",children:"predictably"}),", privately and even offline. No one else can see your conversations, not even us."]}),"\n",(0,r.jsx)(n.h4,{id:"\ufe0f-extensions",children:"\ud83c\udfd7\ufe0f Extensions"}),"\n",(0,r.jsxs)(n.p,{children:["Jan ships with a powerful ",(0,r.jsx)(n.a,{href:"/docs/extensions",children:"extension framework"}),", which allows developers to extend and customize Jan's functionality. In fact, most core modules of Jan are ",(0,r.jsx)(n.a,{href:"/specs/architecture",children:"built as extensions"})," and use the same extensions API."]}),"\n",(0,r.jsx)(n.h4,{id:"\ufe0f-open-file-formats",children:"\ud83d\uddc2\ufe0f Open File Formats"}),"\n",(0,r.jsxs)(n.p,{children:["Jan stores data in a ",(0,r.jsx)(n.a,{href:"/specs/data-structures",children:"local folder of non-proprietary files"}),". You're never locked-in and can do what you want with your data with extensions, or even a different app."]}),"\n",(0,r.jsx)(n.h4,{id:"-open-source",children:"\ud83c\udf0d Open Source"}),"\n",(0,r.jsxs)(n.p,{children:["Both Jan and ",(0,r.jsx)(n.a,{href:"https://nitro.jan.ai",children:"Nitro"}),", our lightweight inference engine, are licensed via the open source ",(0,r.jsx)(n.a,{href:"https://github.com/janhq/jan/blob/main/LICENSE",children:"AGPLv3 license"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,o.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>l});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(t),p=o,f=h["".concat(c,".").concat(p)]||h[p]||d[p]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));u.displayName="MDXCreateElement"}}]);