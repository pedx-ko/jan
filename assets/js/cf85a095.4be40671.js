"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1752],{19646:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(85893),n=t(11151);const s={title:"How to Get Error Logs",slug:"/troubleshooting/how-to-get-error-logs",description:"How to get error logs.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","troubleshooting","error logs","app logs","server logs"]},i=void 0,l={id:"guides/troubleshooting/how-to-get-error-logs",title:"How to Get Error Logs",description:"How to get error logs.",source:"@site/docs/guides/08-troubleshooting/04-how-to-get-error-logs.mdx",sourceDirName:"guides/08-troubleshooting",slug:"/troubleshooting/how-to-get-error-logs",permalink:"/troubleshooting/how-to-get-error-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/08-troubleshooting/04-how-to-get-error-logs.mdx",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1706195111,formattedLastUpdatedAt:"Jan 25, 2024",sidebarPosition:4,frontMatter:{title:"How to Get Error Logs",slug:"/troubleshooting/how-to-get-error-logs",description:"How to get error logs.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","troubleshooting","error logs","app logs","server logs"]},sidebar:"guidesSidebar",previous:{title:"Jan is Not Using GPU",permalink:"/troubleshooting/gpu-not-used"},next:{title:"Permission Denied",permalink:"/troubleshooting/permission-denied"}},a={},c=[];function d(e){const o={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:["To get the error logs of Jan, you can navigate to the ",(0,r.jsx)(o.code,{children:"~/jan/logs"})," directory through ",(0,r.jsx)(o.code,{children:"Settings"})," > ",(0,r.jsx)(o.code,{children:"Advanced"})," > ",(0,r.jsx)(o.code,{children:"Open App Directory"}),"."]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Open the ",(0,r.jsx)(o.code,{children:"app.log"})," file if you are using UI."]}),"\n",(0,r.jsxs)(o.li,{children:["Open the ",(0,r.jsx)(o.code,{children:"error.log"})," file for error logs if you are using the local API server."]}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"# Using UI\ntail -n 50 ~/jan/logs/app.log\n\n# Using local api server\ntail -n 50 ~/jan/logs/server.log\n"})}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"When sharing logs or error information, make sure to redact any private or sensitive information."}),"\n"]})}),"\n",(0,r.jsxs)(o.p,{children:["If you have any questions or are looking for support, please don't hesitate to contact us via our ",(0,r.jsx)(o.a,{href:"https://discord.gg/Dt7MxDyNNZ",children:"Discord community"})," or create a ",(0,r.jsx)(o.a,{href:"https://github.com/janhq/jan/issues/new/choose",children:"new issue in our GitHub repository"}),"."]})]})}function g(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>l,a:()=>i});var r=t(67294);const n={},s=r.createContext(n);function i(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);