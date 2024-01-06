"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9848],{75900:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(85893),r=i(11151);const s={title:"From Source",slug:"/install/from-source",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},o="Installing Jan from Source",a={id:"guides/installation/from-source",title:"From Source",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/guides/02-installation/04-from-source.md",sourceDirName:"guides/02-installation",slug:"/install/from-source",permalink:"/install/from-source",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/02-installation/04-from-source.md",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1704505979,formattedLastUpdatedAt:"Jan 6, 2024",sidebarPosition:4,frontMatter:{title:"From Source",slug:"/install/from-source",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},sidebar:"guidesSidebar",previous:{title:"Linux",permalink:"/install/linux"},next:{title:"Nightly Release",permalink:"/install/nightly"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Instructions",id:"instructions",level:3},{value:"For production build",id:"for-production-build",level:4}];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"installing-jan-from-source",children:"Installing Jan from Source"}),"\n",(0,t.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(e.h3,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,t.jsx)(e.p,{children:"Before proceeding with the installation of Jan from source, ensure that the following software versions are installed on your system:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Node.js version 20.0.0 or higher"}),"\n",(0,t.jsx)(e.li,{children:"Yarn version 1.22.0 or higher"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"instructions",children:"Instructions"}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"This instruction is tested on MacOS only."})}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Clone the Jan repository from GitHub"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/janhq/jan\ngit checkout DESIRED_BRANCH\ncd jan\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"Install the required dependencies using Yarn"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"yarn install\n\n# Build core module\nyarn build:core\n\n# Packing base plugins\nyarn build:plugins\n\n# Packing uikit\nyarn build:uikit\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsx)(e.li,{children:"Run development and using Jan"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"yarn dev\n"})}),"\n",(0,t.jsxs)(e.p,{children:["This will start the development server and open the desktop app. During this step, you may encounter notifications about installing base plugins. Simply click ",(0,t.jsx)(e.code,{children:"OK"})," and ",(0,t.jsx)(e.code,{children:"Next"})," to continue."]}),"\n",(0,t.jsx)(e.h4,{id:"for-production-build",children:"For production build"}),"\n",(0,t.jsx)(e.p,{children:"Build the app for macOS M1/M2 for production and place the result in the dist folder"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# Do step 1 and 2 in previous section\ngit clone https://github.com/janhq/jan\ncd jan\nyarn install\n\n# Build core module\nyarn build:core\n\n# Package base plugins\nyarn build:plugins\n\n# Packing uikit\nyarn build:uikit\n\n# Build the app\nyarn build\n"})}),"\n",(0,t.jsx)(e.p,{children:"This completes the installation process for Jan from source. The production-ready app for macOS can be found in the dist folder."})]})}function u(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>a,a:()=>o});var t=i(67294);const r={},s=t.createContext(r);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);