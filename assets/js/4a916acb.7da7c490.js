"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2197],{12676:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var n=t(85893),r=t(11151);const i={title:"GPUs and VRAM"},a=void 0,o={id:"hardware/concepts/gpu-and-vram",title:"GPUs and VRAM",description:"What Is a GPU?",source:"@site/docs/hardware/concepts/gpu-and-vram.md",sourceDirName:"hardware/concepts",slug:"/hardware/concepts/gpu-and-vram",permalink:"/hardware/concepts/gpu-and-vram",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/hardware/concepts/gpu-and-vram.md",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1704773e3,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{title:"GPUs and VRAM"}},c={},h=[{value:"What Is a GPU?",id:"what-is-a-gpu",level:2},{value:"What Are GPUs Used For?",id:"what-are-gpus-used-for",level:2},{value:"<strong>Here are some example use cases:</strong>",id:"here-are-some-example-use-cases",level:3},{value:"What is VRAM In GPU?",id:"what-is-vram-in-gpu",level:2},{value:"What makes VRAM and RAM different from each other?",id:"what-makes-vram-and-ram-different-from-each-other",level:2},{value:"RAM (Random Access Memory):",id:"ram-random-access-memory",level:3},{value:"VRAM (Video Random Access Memory):",id:"vram-video-random-access-memory",level:3},{value:"How to Connect GPU to the Motherboard via PCIe",id:"how-to-connect-gpu-to-the-motherboard-via-pcie",level:2},{value:"How to Choose a Graphics Card for your AI works",id:"how-to-choose-a-graphics-card-for-your-ai-works",level:2},{value:"Here are some of the best GPU options for this purpose:",id:"here-are-some-of-the-best-gpu-options-for-this-purpose",level:3}];function d(e){const s={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"what-is-a-gpu",children:"What Is a GPU?"}),"\n",(0,n.jsxs)(s.p,{children:["A Graphics Card, or GPU (Graphics Processing Unit), is a fundamental component in modern computing. Think of it as the powerhouse behind rendering the stunning visuals you see on your screen. Similar to the motherboard in your computer, the graphics card is a printed circuit board. However, it's not just a passive piece of hardware; it's a sophisticated device equipped with essential components like fans, onboard RAM, a dedicated memory controller, BIOS, and various other features. If you want to learn more about GPUs then read here to ",(0,n.jsx)(s.a,{href:"https://medium.com/codex/understanding-the-architecture-of-a-gpu-d5d2d2e8978b",children:"Understand the architecture of a GPU."})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"GPU Image",src:t(45701).Z+"",width:"1200",height:"674"})}),"\n",(0,n.jsx)(s.h2,{id:"what-are-gpus-used-for",children:"What Are GPUs Used For?"}),"\n",(0,n.jsx)(s.p,{children:"Two decades ago, GPUs primarily enhanced real-time 3D graphics in gaming. But as the 21st century dawned, a revelation occurred among computer scientists. They recognized that GPUs held untapped potential to solve some of the world's most intricate computing tasks.\nThis revelation marked the dawn of the general-purpose GPU era. Today's GPUs have evolved into versatile tools, more adaptable than ever before. They now have the capability to accelerate a diverse range of applications that stretch well beyond their original graphics-focused purpose."}),"\n",(0,n.jsx)(s.h3,{id:"here-are-some-example-use-cases",children:(0,n.jsx)(s.strong,{children:"Here are some example use cases:"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Gaming"}),": They make games look good and run smoothly."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Content Creation"}),": Help with video editing, 3D design, and graphics work."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"AI and Machine Learning"}),": Used for training smart machines."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Science"}),": Speed up scientific calculations and simulations."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Cryptocurrency Mining"}),": Mine digital currencies like Bitcoin."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Medical Imaging"}),": Aid in analyzing medical images."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Self-Driving Cars"}),": Help cars navigate autonomously."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Simulations"}),": Create realistic virtual experiences."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Data Analysis"}),": Speed up data processing and visualization."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Video Streaming"}),": Improve video quality and streaming efficiency."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"what-is-vram-in-gpu",children:"What is VRAM In GPU?"}),"\n",(0,n.jsx)(s.p,{children:"VRAM, or video random-access memory, is a type of high-speed memory that is specifically designed for use with graphics processing units (GPUs). VRAM is used to store the textures, images, and other data that the GPU needs to render graphics. Its allows the GPU to access the data it needs quickly and efficiently. This is essential for rendering complex graphics at high frame rates."}),"\n",(0,n.jsx)(s.p,{children:"VRAM is different from other types of memory, such as the system RAM that is used by the CPU. VRAM is optimized for high bandwidth and low latency, which means that it can read and write data very quickly. The amount of VRAM that a GPU has is one of the factors that determines its performance. More VRAM allows the GPU to store more data and render more complex graphics. However, VRAM is also one of the most expensive components of a GPU. So when choosing a graphics card, it is important to consider the amount of VRAM that it has. If you are planning on running demanding LLMs or video games, or 3D graphics software, you will need a graphics card with more VRAM."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"VRAM",src:t(63284).Z+"",width:"1500",height:"900"})}),"\n",(0,n.jsx)(s.h2,{id:"what-makes-vram-and-ram-different-from-each-other",children:"What makes VRAM and RAM different from each other?"}),"\n",(0,n.jsx)(s.p,{children:"RAM (Random Access Memory) and VRAM (Video Random Access Memory) are both types of memory used in computers, but they have different functions and characteristics. Here are the differences between RAM and VRAM."}),"\n",(0,n.jsx)(s.h3,{id:"ram-random-access-memory",children:"RAM (Random Access Memory):"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"RAM is a general-purpose memory that stores data and instructions that the CPU needs to access quickly."}),"\n",(0,n.jsx)(s.li,{children:"RAM is used for short-term data storage and is volatile, meaning that it loses its contents when the computer is turned off."}),"\n",(0,n.jsx)(s.li,{children:"RAM is connected to the motherboard and is accessed by the CPU."}),"\n",(0,n.jsx)(s.li,{children:"RAM typically has a larger capacity compared to VRAM, which is designed to store smaller amounts of data with faster access times."}),"\n",(0,n.jsx)(s.li,{children:"RAM stores data related to the operating system and the various programs that are running, including code, program files, and user data."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"vram-video-random-access-memory",children:"VRAM (Video Random Access Memory):"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"VRAM is a type of RAM that is specifically used to store image data for a computer display."}),"\n",(0,n.jsx)(s.li,{children:"VRAM is a graphics card component that is connected to the GPU (Graphics Processing Unit)."}),"\n",(0,n.jsx)(s.li,{children:"VRAM is used exclusively by the GPU and doesn\u2019t need to store as much data as the CPU."}),"\n",(0,n.jsx)(s.li,{children:"VRAM is similar to RAM in that it is volatile and loses its contents when the computer is turned off."}),"\n",(0,n.jsx)(s.li,{children:"VRAM stores data related specifically to graphics, such as textures, frames, and other graphical data."}),"\n",(0,n.jsx)(s.li,{children:"VRAM is designed to store smaller amounts of data with faster access times than RAM."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"In summary, RAM is used for general-purpose memory, while VRAM is used for graphics-related tasks. RAM has a larger capacity and is accessed by the CPU, while VRAM has a smaller capacity and is accessed by the GPU."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Key differences between VRAM and RAM:"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Characteristic"}),(0,n.jsx)(s.th,{children:"VRAM"}),(0,n.jsx)(s.th,{children:"RAM"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Purpose"}),(0,n.jsx)(s.td,{children:"Graphics processing"}),(0,n.jsx)(s.td,{children:"General processing"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Speed"}),(0,n.jsx)(s.td,{children:"Faster"}),(0,n.jsx)(s.td,{children:"Slower"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Latency"}),(0,n.jsx)(s.td,{children:"Lower"}),(0,n.jsx)(s.td,{children:"Higher"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Bandwidth"}),(0,n.jsx)(s.td,{children:"Higher"}),(0,n.jsx)(s.td,{children:"Lower"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Cost"}),(0,n.jsx)(s.td,{children:"More expensive"}),(0,n.jsx)(s.td,{children:"Less expensive"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Availability"}),(0,n.jsx)(s.td,{children:"Less widely available"}),(0,n.jsx)(s.td,{children:"More widely available"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"RAM-VRAM",src:t(20709).Z+"",width:"824",height:"207"})}),"\n",(0,n.jsx)(s.h2,{id:"how-to-connect-gpu-to-the-motherboard-via-pcie",children:"How to Connect GPU to the Motherboard via PCIe"}),"\n",(0,n.jsx)(s.p,{children:"Connecting hardware components to a motherboard is often likened to assembling LEGO pieces. If the parts fit together seamlessly, you're on the right track. Experienced PC builders find this process straightforward. However, for first-time builders, identifying where each hardware component belongs on the motherboard can be a bit perplexing."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"So follow the below 5 steps to Connect your GPU to the Motherboard:"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"First, make sure your computer is powered off and unplugged from the electrical outlet to ensure safety."}),"\n",(0,n.jsx)(s.li,{children:"Open your computer case if necessary to access the motherboard. Locate the PCIe x16 on the motherboard where you'll install the GPU. These slots are typically longer than other expansion slots and are used for graphics cards.\nRemove Slot Covers (if applicable): Some PCIe slots may have protective covers or brackets covering them. Remove these covers by unscrewing them from the case using a Phillips-head screwdriver. And PCIe x16 will have plastic lock on one side only. There may be more than one PCIe x16 slot depending on the motherboard. You can use any of the slots according to your choice."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"PCIe x16",src:t(32090).Z+"",width:"1600",height:"870"})}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsx)(s.li,{children:"Now Insert the Graphics Card slowly:"}),"\n"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Unlock the plastic lock on one side of the PCIe x16 slot by pulling it outwards."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"slot",src:t(91971).Z+"",width:"784",height:"461"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Align the PCIe slot with your graphics card, making sure that the HDMI port side of the GPU faces the rear side of the CPU case."}),"\n",(0,n.jsx)(s.li,{children:"Gently press on the card until you hear it securely snap in place."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"GPU",src:t(59635).Z+"",width:"743",height:"348"})}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsx)(s.li,{children:"Insert the Power Connector: If your GPU requires additional power (most modern GPUs do), connect the necessary power cables from your power supply to the GPU's power connectors. These connectors are usually located on the top or side of the GPU."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Power",src:t(9540).Z+"",width:"742",height:"415"})}),"\n",(0,n.jsxs)(s.ol,{start:"5",children:["\n",(0,n.jsx)(s.li,{children:"Power on the System: After turning on the PC see if the fans on your graphics card spin. If it does not spin, remove the power cable from the GPU, reconnect it, and power on the PC again."}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["\ud83d\udcdd"," Note: To better understand you can also watch YouTube tutorials on how to Connect the GPU to the Motherboard via PCIe"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-choose-a-graphics-card-for-your-ai-works",children:"How to Choose a Graphics Card for your AI works"}),"\n",(0,n.jsx)(s.p,{children:"Selecting the optimal GPU for running Large Language Models (LLMs) on your home PC is a decision influenced by your budget and the specific LLMs you intend to work with. Your choice should strike a balance between performance, efficiency, and cost-effectiveness."}),"\n",(0,n.jsx)(s.p,{children:"In general, the following GPU features are important for running LLMs:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"High VRAM:"}),"\xa0LLMs are typically very large and complex models, so they require a GPU with a high amount of VRAM. This will allow the model to be loaded into memory and processed efficiently."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"CUDA Compatibility:"}),"\xa0When running LLMs on a GPU, CUDA compatibility is paramount. CUDA is NVIDIA's parallel computing platform, and it plays a vital role in accelerating deep learning tasks. LLMs, with their extensive matrix calculations, heavily rely on parallel processing. Ensuring your GPU supports CUDA is like having the right tool for the job. It allows the LLM to leverage the GPU's parallel processing capabilities, significantly speeding up model training and inference."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Number of CUDA, Tensor, and RT Cores:"}),"\xa0High-performance NVIDIA GPUs have both CUDA and Tensor cores. These cores are responsible for executing the neural network computations that underpin LLMs' language understanding and generation. The more CUDA cores your GPU has, the better equipped it is to handle the massive computational load that LLMs impose. Tensor cores in your GPU, further enhance LLM performance by accelerating the critical matrix operations integral to language modeling tasks."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Generation (Series)"}),": When selecting a GPU for LLMs, consider its generation or series (e.g., RTX 30 series). Newer GPU generations often come with improved architectures and features. For LLM tasks, opting for the latest generation can mean better performance, energy efficiency, and support for emerging AI technologies. Avoid purchasing, RTX-2000 series GPUs which are much outdated nowadays."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"here-are-some-of-the-best-gpu-options-for-this-purpose",children:"Here are some of the best GPU options for this purpose:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"NVIDIA RTX 3090"}),": The NVIDIA RTX 3090 is a high-end GPU with a substantial 24GB of VRAM. This copious VRAM capacity makes it exceptionally well-suited for handling large LLMs. Moreover, it's known for its relative efficiency, meaning it won't overheat or strain your home PC's cooling system excessively. The RTX 3090's robust capabilities are a boon for those who need to work with hefty language models."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"NVIDIA RTX 4090"}),": If you're looking for peak performance and can afford the investment, the NVIDIA RTX 4090 represents the pinnacle of GPU power. Boasting 24GB of VRAM and featuring a cutting-edge Tensor Core architecture tailored for AI workloads, it outshines the RTX 3090 in terms of sheer capability. However, it's important to note that the RTX 4090 is also pricier and more power-hungry than its predecessor, the RTX 3090."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"AMD Radeon RX 6900 XT"}),": On the AMD side, the Radeon RX 6900 XT stands out as a high-end GPU with 16GB of VRAM. While it may not quite match the raw power of the RTX 3090 or RTX 4090, it strikes a balance between performance and affordability. Additionally, it tends to be more power-efficient, which could translate to a more sustainable and quieter setup in your home PC."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"If budget constraints are a consideration, there are more cost-effective GPU options available:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"NVIDIA RTX 3070"}),": The RTX 3070 is a solid mid-range GPU that can handle LLMs effectively. While it may not excel with the most massive or complex language models, it's a reliable choice for users looking for a balance between price and performance."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"AMD Radeon RX 6800 XT"}),": Similarly, the RX 6800 XT from AMD offers commendable performance without breaking the bank. It's well-suited for running mid-sized LLMs and provides a competitive option in terms of both power and cost."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"When selecting a GPU for LLMs, remember that it's not just about the GPU itself. Consider the synergy with other components in your PC:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"CPU"}),": To ensure efficient processing, pair your GPU with a powerful CPU. LLMs benefit from fast processors, so having a capable CPU is essential."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"RAM"}),": Sufficient RAM is crucial for LLMs. They can be memory-intensive, and having enough RAM ensures smooth operation."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Cooling System"}),": LLMs can push your PC's hardware to the limit. A robust cooling system helps maintain optimal temperatures, preventing overheating and performance throttling."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"By taking all of these factors into account, you can build a home PC setup that's well-equipped to handle the demands of running LLMs effectively and efficiently."})]})}function l(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},59635:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/GPU-5c5cbdea44506dcd4af8cf75b9aac52b.png"},45701:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/GPU_Image-231c0b8e4b585ac1d18c2330840bb1d6.png"},32090:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/PCIex16-83af51562c34bc672cda33199e42464d.png"},9540:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/Power-76f62f2aba4379d9f7368014d52484f8.png"},20709:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/RAM-VRAM-8ecee89416490242a132a14073e166fc.png"},63284:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/VRAM-Image-a29fe70e7f4d5782f1ef912a49fd0636.png"},91971:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/slot-e0b9ed4b774e0ae2fd485650de82f089.png"},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>a});var n=t(67294);const r={},i=n.createContext(r);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);