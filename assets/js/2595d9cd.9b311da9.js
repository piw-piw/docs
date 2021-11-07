"use strict";(self.webpackChunkturbowarp_docs=self.webpackChunkturbowarp_docs||[]).push([[102],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>d});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||l[d]||n;return r?o.createElement(f,s(s({ref:t},h),{},{components:r})):o.createElement(f,s({ref:t},h))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<n;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9002:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>i,metadata:()=>p,toc:()=>h,default:()=>u});var o=r(3117),a=r(102),n=(r(7294),r(3905));const s=["components"],c={slug:"/unshared-projects",hide_table_of_contents:!0},i="Unshared Projects",p={unversionedId:"website/unshared-projects",id:"website/unshared-projects",isDocsHomePage:!1,title:"Unshared Projects",description:"You've probably noticed that TurboWarp, forkphorus, etc. can load unshared projects, and you may be concerned about that.",source:"@site/docs/website/unshared-projects.md",sourceDirName:"website",slug:"/unshared-projects",permalink:"/unshared-projects",editUrl:"https://github.com/TurboWarp/docs/edit/master/docs/website/unshared-projects.md",tags:[],version:"current",frontMatter:{slug:"/unshared-projects",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Intro",permalink:"/"},next:{title:"Cloud Variables",permalink:"/cloud-variables"}},h=[{value:"Why doesn&#39;t TurboWarp refuse to load unshared projects?",id:"why-not-fix",children:[],level:2},{value:"How to protect your unshared projects",id:"prevention",children:[],level:2},{value:"What is project ID 1?",id:"what-is-1",children:[],level:2}],l={toc:h};function u(e){let{components:t}=e,r=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"unshared-projects"},"Unshared Projects"),(0,n.kt)("p",null,"You've probably noticed that TurboWarp, forkphorus, etc. can load unshared projects, and you may be concerned about that."),(0,n.kt)("h3",null,"This is a problem with the Scratch API that's been around for over eight years. It's not a TurboWarp bug."),(0,n.kt)("p",null,"Even the official Scratch development builds maintained by the Scratch Team can view unshared projects (for example: ",(0,n.kt)("a",{parentName:"p",href:"https://llk.github.io/scratch-gui/develop/#1"},"https://llk.github.io/scratch-gui/develop/#1"),") which implies to us that the Scratch Team does not consider this a serious issue. As TurboWarp loads projects the same way as Scratch, it's also able to load unshared projects."),(0,n.kt)("p",null,"If this concerns you, please voice your concerns to the Scratch Team. They are the only people that can change this."),(0,n.kt)("h2",{id:"why-not-fix"},"Why doesn't TurboWarp refuse to load unshared projects?"),(0,n.kt)("p",null,"Even if TurboWarp refused to load unshared projects, the root cause is still the Scratch API. Unshared projects could still be easily viewed using the official Scratch development builds or ",(0,n.kt)("a",{parentName:"p",href:"https://www.google.com/search?hl=en&q=unshared%20project%20viewer%20scratch"},"any other tool"),". As TurboWarp is open source, someone could easily make their own website with the code to check if a project is unshared removed. Unshared projects would not be any safer."),(0,n.kt)("p",null,"This is a problem that can only be fixed by the Scratch Team implementing access control for projects.scratch.mit.edu (where project data is downloaded from) as they've already done for api.scratch.mit.edu (where project titles and descriptions are loaded from). If you think this is important, let the Scratch Team know."),(0,n.kt)("h2",{id:"prevention"},"How to protect your unshared projects"),(0,n.kt)("p",null,"Don't share the project ID (the numbers in the project URL) with others. That includes links to your project and screenshots/videos that include your browser's URL bar."),(0,n.kt)("p",null,"If the project ID has already been leaked, and you don't want people to see the project, then save a copy of the project (File > Save as a copy) and delete everything from the original project. ",(0,n.kt)("strong",{parentName:"p"},"Deleting a project through the My Stuff page (even emptying the trash) is not enough because Scratch doesn't actually delete the project.")," You must manually clear everything from the original project and overwrite it. If someone already downloaded the project to their computer before you did this, there's not much you can directly do about that. If someone has stolen one of your unshared projects and released it as-if they made it, contact the Scratch Team."),(0,n.kt)("p",null,"This would be a good opportunity to download a backup of the project to your computer for safekeeping so that you don't have to learn the importance of backups the ",(0,n.kt)("a",{parentName:"p",href:"https://ocular.jeffalo.net/search?q=project%20disappeared&sort=relevance"},"hard way"),"."),(0,n.kt)("p",null,"Another alternative to keep your project safe would be to use an offline editor. We recommend ",(0,n.kt)("a",{parentName:"p",href:"https://desktop.turbowarp.org/"},"TurboWarp Desktop"),"."),(0,n.kt)("h2",{id:"what-is-1"},"What is project ID 1?"),(0,n.kt)("p",null,"Curious people have visited ",(0,n.kt)("a",{parentName:"p",href:"https://turbowarp.org/1"},"https://turbowarp.org/1")," or ",(0,n.kt)("a",{parentName:"p",href:"https://llk.github.io/scratch-gui/develop/#1"},"https://llk.github.io/scratch-gui/develop/#1")," and found a strange project. That's just what the Scratch API returns when you ask for the project with ID 1."))}u.isMDXComponent=!0}}]);