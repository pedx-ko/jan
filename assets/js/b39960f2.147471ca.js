"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7391],{33251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(85893),r=n(3905);const a={title:"Data Structures"},o=void 0,c={id:"specs/data-structures",title:"Data Structures",description:"This page is still under construction, and should be read as a scratchpad",source:"@site/docs/specs/data-structures.md",sourceDirName:"specs",slug:"/specs/data-structures",permalink:"/specs/data-structures",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/specs/data-structures.md",tags:[],version:"current",lastUpdatedBy:"Daniel",lastUpdatedAt:1700739178,formattedLastUpdatedAt:"Nov 23, 2023",frontMatter:{title:"Data Structures"},sidebar:"docsSidebar",previous:{title:"Architecture",permalink:"/specs/architecture"},next:{title:"User Interface",permalink:"/specs/user-interface"}},i={},l=[];function d(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"This page is still under construction, and should be read as a scratchpad"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"janroot/\n\tassistants/\n\t\tassistant-a/\n\t\t\tassistant.json\n\t\t\tsrc/\n\t\t\t\tindex.ts\n\t\t\tthreads/\n\t\t\t\tthread-a/\n\t\t\t\tthread-b\n\tmodels/\n\t\tmodel-a/\n\t\t\tmodel.json\n"})}),"\n",(0,s.jsx)(t.p,{children:"Jan use the local filesystem for data persistence, similar to VSCode. This allows for composability and tinkerability."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh=",children:"/janroot               # Jan's root folder (e.g. ~/jan)\n    /models            # For raw AI models\n    /threads           # For conversation history\n    /assistants        # For AI assistants' configs, knowledge, etc.\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh=",children:"/models\n    /modelA\n        model.json        # Default model settings\n        llama-7b-q4.gguf  # Model binaries\n        llama-7b-q5.gguf  # Include different quantizations\n/threads\n    /jan-unixstamp-salt\n        model.json        # Overrides assistant/model-level model settings\n        thread.json       # thread metadata (e.g. subject)\n        messages.json     # messages\n        content.json      # What is this?\n        files/            # Future for RAG\n/assistants\n    /jan\n        assistant.json    # Assistant configs (see below)\n\n        # For any custom code\n        package.json      # Import npm modules\n                          # e.g. Langchain, Llamaindex\n        /src              # Supporting files (needs better name)\n            index.js      # Entrypoint\n            process.js    # For electron IPC processes (needs better name)\n\n        # `/threads` at root level\n        # `/models` at root level\n    /shakespeare\n        assistant.json\n        model.json        # Creator chooses model and settings\n        package.json\n        /src\n            index.js\n            process.js\n\n        /threads          # Assistants remember conversations in the future\n        /models           # Users can upload custom models\n            /finetuned-model\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.ah)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>l});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=s.createContext({}),l=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?s.createElement(f,o(o({ref:t},u),{},{components:n})):s.createElement(f,o({ref:t},u))}));u.displayName="MDXCreateElement"}}]);