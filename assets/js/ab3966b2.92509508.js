"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3451],{31770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(85893),d=t(11151);const s={title:"Recommended AI Hardware by Model"},i=void 0,o={id:"hardware/recommendations/by-model",title:"Recommended AI Hardware by Model",description:"Codellama 34b",source:"@site/docs/hardware/recommendations/by-model.md",sourceDirName:"hardware/recommendations",slug:"/hardware/recommendations/by-model",permalink:"/hardware/recommendations/by-model",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/hardware/recommendations/by-model.md",tags:[],version:"current",lastUpdatedBy:"hiento09",lastUpdatedAt:1705633577,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{title:"Recommended AI Hardware by Model"}},l={},c=[{value:"Codellama 34b",id:"codellama-34b",level:2},{value:"System Requirements:",id:"system-requirements",level:3},{value:"Performance Recommendations:",id:"performance-recommendations",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"codellama-34b",children:"Codellama 34b"}),"\n",(0,r.jsx)(n.h3,{id:"system-requirements",children:"System Requirements:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),": If you want to use ",(0,r.jsx)(n.a,{href:"https://huggingface.co/TheBloke/CodeLlama-7B-Instruct-GPTQ/tree/main",children:"Codellama 7B"})," models on your own computer, you can take advantage of your GPU and run this with GPTQ file models."]}),"\n",(0,r.jsxs)(n.p,{children:["GPTQ is a format that compresses the model parameters to 4-bit, which reduces the VRAM requirements significantly. You can use the\xa0",(0,r.jsx)(n.a,{href:"https://github.com/oobabooga/text-generation-webui",children:"oobabooga webui"}),"\xa0or ",(0,r.jsx)(n.a,{href:"https://jan.ai/",children:"JanAI"}),", which are simple interfaces that let you interact with different LLMS on your browser. It is pretty easy to set up and run. You can\xa0install it on Windows\xa0or Linux. (linked it to our installation page)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"For 7B Parameter Models (4-bit Quantization)"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Format"}),(0,r.jsx)(n.th,{children:"RAM Requirements"}),(0,r.jsx)(n.th,{children:"VRAM Requirements"}),(0,r.jsx)(n.th,{children:"Minimum recommended GPU"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GPTQ (GPU inference)"}),(0,r.jsx)(n.td,{children:"6GB (Swap to Load*)"}),(0,r.jsx)(n.td,{children:"6GB"}),(0,r.jsx)(n.td,{children:"GTX 1660, 2060,RTX 3050, 3060 AMD 5700 XT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GGML / GGUF (CPU inference)"}),(0,r.jsx)(n.td,{children:"4GB"}),(0,r.jsx)(n.td,{children:"300MB"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Combination of GPTQ and GGML / GGUF (offloading)"}),(0,r.jsx)(n.td,{children:"2GB"}),(0,r.jsx)(n.td,{children:"2GB"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"For 13B Parameter Models (4-bit Quantization)"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Format"}),(0,r.jsx)(n.th,{children:"RAM Requirements"}),(0,r.jsx)(n.th,{children:"VRAM Requirements"}),(0,r.jsx)(n.th,{children:"Minimum recommended GPU"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GPTQ (GPU inference)"}),(0,r.jsx)(n.td,{children:"12GB (Swap to Load*)"}),(0,r.jsx)(n.td,{children:"10GB"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GGML / GGUF (CPU inference)"}),(0,r.jsx)(n.td,{children:"8GB"}),(0,r.jsx)(n.td,{children:"500MB"}),(0,r.jsx)(n.td,{children:"AMD 6900 XT, RTX 2060 12GB, 3060 12GB, 3080, A2000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Combination of GPTQ and GGML / GGUF (offloading)"}),(0,r.jsx)(n.td,{children:"10GB"}),(0,r.jsx)(n.td,{children:"10GB"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"For 34B Parameter Models (4-bit Quantization)"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Format"}),(0,r.jsx)(n.th,{children:"RAM Requirements"}),(0,r.jsx)(n.th,{children:"VRAM Requirements"}),(0,r.jsx)(n.th,{children:"Minimum recommended GPU"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GPTQ (GPU inference)"}),(0,r.jsx)(n.td,{children:"32GB (Swap to Load*)"}),(0,r.jsx)(n.td,{children:"20GB"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GGML / GGUF (CPU inference)"}),(0,r.jsx)(n.td,{children:"20GB"}),(0,r.jsx)(n.td,{children:"500MB"}),(0,r.jsx)(n.td,{children:"RTX 3080 20GB, A4500, A5000, 3090, 4090, 6000, Tesla V100, Tesla P40"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Combination of GPTQ and GGML / GGUF (offloading)"}),(0,r.jsx)(n.td,{children:"10GB"}),(0,r.jsx)(n.td,{children:"4GB"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"For 7B Parameter Models (8-bit Quantization)"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Format"}),(0,r.jsx)(n.th,{children:"RAM Requirements"}),(0,r.jsx)(n.th,{children:"VRAM Requirements"}),(0,r.jsx)(n.th,{children:"Minimum recommended GPU"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GPTQ (GPU inference)"}),(0,r.jsx)(n.td,{children:"24GB (Swap to Load*)"}),(0,r.jsx)(n.td,{children:"12GB"}),(0,r.jsx)(n.td,{children:"RTX 3080, RTX 3080 Ti, RTX 3090, A5000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GGML / GGUF (CPU inference)"}),(0,r.jsx)(n.td,{children:"16GB"}),(0,r.jsx)(n.td,{children:"1GB"}),(0,r.jsx)(n.td,{children:"RTX 3060 12GB, RTX 3070, A2000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Combination of GPTQ and GGML / GGUF (offloading)"}),(0,r.jsx)(n.td,{children:"12GB"}),(0,r.jsx)(n.td,{children:"4GB"}),(0,r.jsx)(n.td,{children:"RTX 3060, RTX 3060 Ti, A2000"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"For 13B Parameter Models (8-bit Quantization)"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Format"}),(0,r.jsx)(n.th,{children:"RAM Requirements"}),(0,r.jsx)(n.th,{children:"VRAM Requirements"}),(0,r.jsx)(n.th,{children:"Minimum recommended GPU"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GPTQ (GPU inference)"}),(0,r.jsx)(n.td,{children:"36GB (Swap to Load*)"}),(0,r.jsx)(n.td,{children:"20GB"}),(0,r.jsx)(n.td,{children:"RTX 4090, A6000, A6000 Ti, A8000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GGML / GGUF (CPU inference)"}),(0,r.jsx)(n.td,{children:"24GB"}),(0,r.jsx)(n.td,{children:"2GB"}),(0,r.jsx)(n.td,{children:"RTX 3080 20GB, RTX 3080 Ti, A5000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Combination of GPTQ and GGML / GGUF (offloading)"}),(0,r.jsx)(n.td,{children:"20GB"}),(0,r.jsx)(n.td,{children:"8GB"}),(0,r.jsx)(n.td,{children:"RTX 3080, RTX 3080 Ti, A5000"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"For 34B Parameter Models (8-bit Quantization)"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Format"}),(0,r.jsx)(n.th,{children:"RAM Requirements"}),(0,r.jsx)(n.th,{children:"VRAM Requirements"}),(0,r.jsx)(n.th,{children:"Minimum recommended GPU"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GPTQ (GPU inference)"}),(0,r.jsx)(n.td,{children:"64GB (Swap to Load*)"}),(0,r.jsx)(n.td,{children:"40GB"}),(0,r.jsx)(n.td,{children:"A8000, A8000 Ti, A9000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GGML / GGUF (CPU inference)"}),(0,r.jsx)(n.td,{children:"40GB"}),(0,r.jsx)(n.td,{children:"2GB"}),(0,r.jsx)(n.td,{children:"RTX 4090, A6000, A6000 Ti, A8000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Combination of GPTQ and GGML / GGUF (offloading)"}),(0,r.jsx)(n.td,{children:"48GB"}),(0,r.jsx)(n.td,{children:"20GB"}),(0,r.jsx)(n.td,{children:"RTX 4090, A6000, A6000 Ti, A8000"})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\ud83d\udcdd"," ",(0,r.jsx)(n.strong,{children:"Note"}),": System RAM, not VRAM, required to load the model, in addition to having enough VRAM. Not required to run the model. You can use swap space if you do not have enough RAM."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"performance-recommendations",children:"Performance Recommendations:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Optimal Performance"}),": To achieve the best performance when working with CodeLlama models, consider investing in a high-end GPU such as NVIDIA's latest RTX 3090 or RTX 4090. For the largest models like the 65B and 70B, a dual GPU setup is recommended. Additionally, ensure your system boasts sufficient RAM, with a minimum of 16 GB, although 64 GB is ideal for seamless operation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Budget-Friendly Approach"}),": If budget constraints are a concern, focus on utilizing CodeLlama GGML/GGUF models that can comfortably fit within your system's available RAM. Keep in mind that while you can allocate some model weights to the system RAM to save GPU memory, this may result in a performance trade-off."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\ud83d\udcdd"," ",(0,r.jsx)(n.strong,{children:"Note"}),": It's essential to note that these recommendations are guidelines, and the actual performance you experience will be influenced by various factors. These factors include the specific task you're performing, the implementation of the model, and the concurrent system processes. To optimize your setup, consider these recommendations as a starting point and adapt them to your unique requirements and constraints."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(67294);const d={},s=r.createContext(d);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);