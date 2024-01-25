"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[420],{91822:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(85893),t=i(11151);const r={title:"10/1/24: Bitdefender False Positive Flag (Resolved)\n",slug:"/postmortems/january-10-2024-bitdefender-false-positive-flag",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","postmortem","incident","flagging issue"]},o=void 0,a={id:"about/engineering/postmortems/january-10-2024-bitdefender-false-positive-flag",title:"10/1/24: Bitdefender False Positive Flag (Resolved)\n",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/about/03-engineering/05-postmortems/01-january-10-2024-bitdefender-false-positive-flag.mdx",sourceDirName:"about/03-engineering/05-postmortems",slug:"/postmortems/january-10-2024-bitdefender-false-positive-flag",permalink:"/postmortems/january-10-2024-bitdefender-false-positive-flag",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/about/03-engineering/05-postmortems/01-january-10-2024-bitdefender-false-positive-flag.mdx",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1706195111,formattedLastUpdatedAt:"Jan 25, 2024",sidebarPosition:1,frontMatter:{title:"10/1/24: Bitdefender False Positive Flag (Resolved)\n",slug:"/postmortems/january-10-2024-bitdefender-false-positive-flag",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","postmortem","incident","flagging issue"]},sidebar:"aboutSidebar",previous:{title:"Postmortems",permalink:"/postmortems"},next:{title:"Product",permalink:"/product"}},l={},d=[{value:"Incident Overview",id:"incident-overview",level:2},{value:"Bug Description",id:"bug-description",level:3},{value:"Affected Antivirus",id:"affected-antivirus",level:3},{value:"Incident Timeline",id:"incident-timeline",level:3},{value:"Investigation Update",id:"investigation-update",level:2},{value:"Follow-ups and Action Items",id:"follow-ups-and-action-items",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Lessons Learned",id:"lessons-learned",level:2}];function c(e){const n={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Following the recent incident related to Jan version 0.4.4 triggering Bitdefender on Windows with Gen",":Variant",".Tedy.258323 on January 10, 2024, we wanted to provide a comprehensive postmortem and outline the necessary follow-up actions."]}),"\n",(0,s.jsx)(n.h2,{id:"incident-overview",children:"Incident Overview"}),"\n",(0,s.jsx)(n.h3,{id:"bug-description",children:"Bug Description"}),"\n",(0,s.jsxs)(n.p,{children:["Jan 0.4.4 installation on Windows triggered Bitdefender to flag it as infected with Gen",":Variant",".Tedy.258323, leading to automatic quarantine."]}),"\n",(0,s.jsx)(n.h3,{id:"affected-antivirus",children:"Affected Antivirus"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"McAfee / Microsoft Defender was unaffected"}),"\n",(0,s.jsx)(n.li,{children:"Bitdefender consistently flagged the issue."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"incident-timeline",children:"Incident Timeline"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"10 Jan, 2:18 am SGT:"})," Hawke flags up Malware antivirus errors for 0.4.4 installation on Windows computers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"10 Jan, 2:21 am SGT:"})," @0xSage responds in Discord."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"10 Jan, 2:35 am SGT:"})," Hawke confirms multiple people have experienced this error on fresh installs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"10 Jan, 2:41 am SGT:"})," @louis-jan and @dan-jan revert 0.4.4 out of an abundance of caution."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Incident ongoing:"})," To triage and investigate the next day."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"10 Jan, 11:36 am SGT:"})," @Hien has investigated all versions of Nitro and conducted scans using Bitdefender. Only the 2 latest versions raised warnings (0.2.7, 0.2.8)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"10 Jan, 12:44 pm SGT:"})," @Hien tested again for the 0.2.6 and suggested using 0.2.6 for now, the 2 remaining Nitro version (0.2.7, 0.2.8) will under further investigation."]}),"\n",(0,s.jsx)(n.li,{children:"The team started testing on the fixed build."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"10 Jan, 3:22 pm SGT:"})," Diagnosis found that it's most likely a false positive. @Hien has only found a solution by attempting to build Nitro Windows CPU on a GitHub-hosted runner and hasn't identified the root cause yet."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"10 Jan, 5:24 pm SGT:"})," @Hien testing two scenarios and still trying to understand the workings of Bitdefender."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"11 Jan, 5:46 pm SGT:"})," Postmortem meeting"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"investigation-update",children:"Investigation Update"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"@Hien has investigated all versions of Nitro and conducted scans using Bitdefender. and only the 2 latest versions raised warnings from Bitdefender. Nitro 0.2.6, which is the highest version without the issue, was tested again, and it no longer triggers a warning from Bitdefender."}),"\n",(0,s.jsx)(n.li,{children:"We have observed that Nitro versions up to 0.2.6 remain unaffected. However, Bitdefender flags versions 0.2.7 and 0.2.8 as infected, leading to the deletion. In order to proceed with the current release, Hien suggests downgrading Nitro to version 0.2.6 and conducting tests with this version. Simultaneously, he will investigate why Bitdefender is flagging versions 0.2.7 and 0.2.8."}),"\n",(0,s.jsx)(n.li,{children:"It's essential to note that between versions 0.2.6, 0.2.7, and 0.2.8, only minor changes were made, which should not trigger a malicious code warning. We can refer to the changelog between 0.2.7 and 0.2.8 to pinpoint these changes."}),"\n",(0,s.jsx)(n.li,{children:"Our primary message is to convey that we did not introduce malicious code into Jan (indicating a false positive), and the investigation aims to understand the root cause behind Bitdefender flagging versions 0.2.7 and 0.2.8."}),"\n",(0,s.jsxs)(n.li,{children:["The current diagnosis looks like a false positive but it's still under investigation. Reference link: ",(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/75886428/fake-positive-bit-defender-problem-genvariant-tedy-304469",children:"here"}),", ",(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/58010466/bitdefender-detects-my-console-application-as-genvariant-ursu-56053",children:"here"}),", and ",(0,s.jsx)(n.a,{href:"https://www.cisa.gov/sites/default/files/2023-06/mar-10365227.r1.v1.clear_.pdf",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["@Hien testing two scenarios and still trying to understand the workings of Bitdefender. Still under investigation: is the issue with the code or the CI?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In Case 1, using the same CI agent for tags 0.2.6 and 0.2.8, after PRs by Alan and myself, Bitdefender flagged the Nitro CPU binary build. Naturally, one would conclude this is due to the code."}),"\n",(0,s.jsx)(n.li,{children:"However, I proceeded with a further experiment: for the 0.2.8 code, instead of using our CI agent, I used a GitHub hosted agent. This time, Bitdefender did not flag our binary build."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"We've identified the Bitdefender warning was not an attack. There is no malicious code"}),"\n",(0,s.jsx)(n.li,{children:"We've isolated the event to originate from a CI agent, which resulted in a BitDefender false positive alert."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"follow-ups-and-action-items",children:"Follow-ups and Action Items"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Reproduce Bitdefender Flag in Controlled Environment [Done]:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Objective:"})," To replicate the issue in a controlled environment to understand the triggers and specifics of Bitdefender's detection."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Investigate Malicious Code or False Positive:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Objective:"})," Determine whether the flagged issue is a result of actual malicious code or a false positive. If it's a false positive, work towards resolution while communicating with Bitdefender."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Supply Chain Attack Assessment:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Objective:"})," Evaluate the possibility of a supply chain attack. Investigate whether the Nitro 0.4.4 distribution was compromised or tampered with during the release process."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Testing after the Hotfix:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Objective:"})," In addition to verifying the issue after the fix, it is essential to conduct comprehensive testing across related areas, ensuring compatibility across different operating systems and antivirus software (latest version / free version only)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Process Improvement for Future Releases:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Objective:"})," Identify and implement improvements to our release process to prevent similar incidents in the future. This may include enhanced testing procedures, code analysis, and collaboration with antivirus software providers during the pre-release phase. Additionally, we should add verifying the latest antivirus software in the release checklist."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Documentation of Tested Antivirus Versions:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Objective:"})," Create a document that outlines the testing conducted, including a matrix that correlates Jan versions with the tested antivirus versions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Sample list:"})," for consideration purpose","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bitdefender"}),"\n",(0,s.jsx)(n.li,{children:"McAfee"}),"\n",(0,s.jsx)(n.li,{children:"Avira"}),"\n",(0,s.jsx)(n.li,{children:"Kaspersky"}),"\n",(0,s.jsx)(n.li,{children:"Norton"}),"\n",(0,s.jsx)(n.li,{children:"Microsoft defender"}),"\n",(0,s.jsx)(n.li,{children:"AVG"}),"\n",(0,s.jsx)(n.li,{children:"TotalAV"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The team should follow up on each action item with clear ownership priority, and deadlines."}),"\n",(0,s.jsx)(n.li,{children:"Communicate progress transparently with the community and clients through appropriate channels. If any insights or suggestions, share them within the dedicated channels."}),"\n",(0,s.jsx)(n.li,{children:"Update internal documentation and procedures based on the lessons learned from this incident."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"lessons-learned",children:"Lessons Learned"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Antivirus Compatibility Awareness:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Observation:"})," The incident underscored the significance of recognizing and testing for antivirus compatibility, particularly with widely-used solutions like Bitdefender."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Lesson Learned:"}),' In the future, we will integrate comprehensive checks for compatibility with various antivirus software, including both antivirus and "Malicious Code Detection," into our CI or QA checklist. This proactive measure aims to minimize false positive detections during the release and testing processes.']}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Cross-Platform Testing:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Observation:"})," The problem did not occur on MacOS and Linux systems, implying a potential oversight in cross-platform testing during our release procedures."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Lesson Learned:"})," Clarification \u2014 This observation is not directly related to antivirus testing. Instead, it underscores the necessity to improve our testing protocols, encompassing multiple operating systems. This ensures a thorough evaluation of potential issues on diverse platforms, considering the various antivirus software and differences in architectures on Mac and Linux systems."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"User Communication and Documentation:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Observation:"})," Due to the timely response from Nicole, who was still active on Discord and Github at 2 am, this quick response facilitated our ability to assess the impact accurately."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Lesson Learned:"}),' While our communication with users was effective in this instance, it was mainly due to Nicole\'s presence during the incident. To improve our overall response capability, we should prioritize "24/7 rapid triage and response." This involves ensuring continuous availability or establishing a reliable rotation of team members for swift user communication and issue documentation, further enhancing our incident response efficiency.']}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Proactive Incident Response:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Observation:"})," The incident response, while involving a prompt version rollback, experienced a slight delay due to the release occurring at midnight. This delay postponed the initiation of the investigation until the next working hours."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Lesson Learned:"})," Recognizing the importance of swift incident response, particularly in time-sensitive situations, we acknowledge that releasing updates during off-hours can impact the immediacy of our actions. Moving forward, we will strive to optimize our release schedules to minimize delays and ensure that investigations can commence promptly regardless of the time of day. This may involve considering alternative release windows or implementing automated responses to critical incidents, ensuring a more proactive and timely resolution."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Supply Chain Security Measures:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Observation:"})," While the incident prompted consideration of a potential supply chain attack, it's crucial to emphasize that this was not the case. Nonetheless, the incident underscored the importance of reviewing our supply chain security measures."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Lesson Learned:"})," Going forward, we should strengthen supply chain security by introducing additional verification steps to uphold the integrity of our release process. Collaborating with distribution channels is essential for enhancing security checks and ensuring a robust supply chain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Longer-term:"})," Exploring options for checking Jan for malicious code and incorporating antivirus as part of our CI/CD pipeline should be considered for a more comprehensive and proactive approach."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"User Education on False Positives:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Observation:"}),' Users reported Bitdefender automatically "disinfecting" the flagged Nitro version without allowing any user actions.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Lesson Learned:"})," Educate users about the possibility of false positives and guide them on how to whitelist or report such incidents to their antivirus provider (if possible). Provide clear communication on steps users can take in such situations."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These lessons learned will serve as a foundation for refining our processes and ensuring a more resilient release and incident response framework in the future. Continuous improvement is key to maintaining the reliability and security of our software."}),"\n",(0,s.jsx)(n.p,{children:"Thank you for your dedication and cooperation in resolving this matter promptly."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(67294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);