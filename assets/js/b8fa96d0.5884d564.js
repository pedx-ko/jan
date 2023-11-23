"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[844],{72283:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=n(85893),a=n(3905);const r={title:"Messages"},i=void 0,o={id:"specs/messages",title:"Messages",description:"This is currently under development.",source:"@site/docs/specs/messages.md",sourceDirName:"specs",slug:"/specs/messages",permalink:"/specs/messages",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/specs/messages.md",tags:[],version:"current",lastUpdatedBy:"Daniel",lastUpdatedAt:1700739178,formattedLastUpdatedAt:"Nov 23, 2023",frontMatter:{title:"Messages"},sidebar:"docsSidebar",previous:{title:"Threads",permalink:"/specs/threads"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"<code>message.jsonl</code>",id:"messagejsonl",level:2},{value:"Examples",id:"examples",level:3},{value:"API Reference",id:"api-reference",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"This is currently under development."})}),"\n",(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Messages"})," capture a conversation's content. This can include the content from LLM responses and other metadata from ",(0,t.jsx)(s.a,{href:"/specs/chats",children:"chat completions"}),"."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Users and assistants can send multimedia messages."}),"\n",(0,t.jsxs)(s.li,{children:["An ",(0,t.jsx)(s.a,{href:"https://platform.openai.com/docs/api-reference/messages",children:"OpenAI Message API"})," compatible endpoint at ",(0,t.jsx)(s.code,{children:"localhost:3000/v1/messages"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,t.jsxs)(s.p,{children:["Messages are saved in the ",(0,t.jsx)(s.code,{children:"/threads/{thread_id}"})," folder in ",(0,t.jsx)(s.code,{children:"messages.jsonl"})," files"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"jan/\n    threads/\n        assistant_name_unix_timestamp/\n            ...\n            messages.jsonl\n        jan_2341243134/\n            ...\n            messages.jsonl\n"})}),"\n",(0,t.jsx)(s.h2,{id:"messagejsonl",children:(0,t.jsx)(s.code,{children:"message.jsonl"})}),"\n",(0,t.jsxs)(s.p,{children:["Individual messages are saved in ",(0,t.jsx)(s.code,{children:"jsonl"})," format for indexing purposes."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:"{...message_2}\n{...message_1}\n{...message_0}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.p,{children:["Here's a standard example ",(0,t.jsx)(s.code,{children:"message"})," sent from a user."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"id": "0",                            // Sequential or UUID\n"object": "thread.message",           // Defaults to "thread.message"\n"created_at": 1698983503,\n"thread_id": "thread_asdf",           // Defaults to parent thread\n"assistant_id": "jan",                // Defaults to parent thread\n"role": "user",                  // From either "user" or "assistant"\n"content": [\n  {\n    "type": "text",\n    "text": {\n      "value": "Hi!?",\n      "annotations": []\n    }\n  }\n],\n"metadata": {},                       // Defaults to {}\n// "run_id": "...",                   // Rather than `run` id abstraction\n// "file_ids": [],\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Here's an example ",(0,t.jsx)(s.code,{children:"message"})," response from an assistant."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"id": "0",                            // Sequential or UUID\n"object": "thread.message",           // Defaults to "thread.message"\n"created_at": 1698983503,\n"thread_id": "thread_asdf",           // Defaults to parent thread\n"assistant_id": "jan",                // Defaults to parent thread\n"role": "assistant",                  // From either "user" or "assistant"\n"content": [                          // Usually from Chat Completion obj\n  {\n    "type": "text",\n    "text": {\n      "value": "Hi! How can I help you today?",\n      "annotations": []\n    }\n  }\n],\n"metadata": {},                       // Defaults to {}\n// "run_id": "...",                   // KIV\n// "file_ids": [],                    // KIV\n// "usage": {}                        // KIV: saving chat completion properties https://platform.openai.com/docs/api-reference/chat/object\n'})}),"\n",(0,t.jsx)(s.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,t.jsxs)(s.p,{children:["Jan's ",(0,t.jsx)(s.code,{children:"messages"})," API is compatible with ",(0,t.jsx)(s.a,{href:"https://platform.openai.com/docs/api-reference/messages",children:"OpenAI's Messages API"}),", with additional methods for managing messages locally."]}),"\n",(0,t.jsxs)(s.p,{children:["See ",(0,t.jsx)(s.a,{href:"https://jan.ai/api-reference#tag/Messages",children:"Jan Messages API"})]})]})}function p(e={}){const{wrapper:s}={...(0,a.ah)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3905:(e,s,n)=>{n.d(s,{ah:()=>l});var t=n(67294);function a(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function r(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?r(Object(n),!0).forEach((function(s){a(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function o(e,s){if(null==e)return{};var n,t,a=function(e,s){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],s.indexOf(n)>=0||(a[n]=e[n]);return a}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var s=t.useContext(c),n=s;return e&&(n="function"==typeof e?e(s):i(i({},s),e)),n},d={inlineCode:"code",wrapper:function(e){var s=e.children;return t.createElement(t.Fragment,{},s)}},p=t.forwardRef((function(e,s){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(n),m=a,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||r;return n?t.createElement(u,i(i({ref:s},p),{},{components:n})):t.createElement(u,i({ref:s},p))}));p.displayName="MDXCreateElement"}}]);