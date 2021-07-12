(self.webpackChunkturbowarp_docs=self.webpackChunkturbowarp_docs||[]).push([[619],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||s;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1776:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),s=(n(7294),n(3905)),i=["components"],a={slug:"/development/custom-extensions"},u="Custom Extensions",c={unversionedId:"development/custom-extensions",id:"development/custom-extensions",isDocsHomePage:!1,title:"Custom Extensions",description:"TurboWarp supports sandboxed extensions specified via URL parameter, for example//turbowarp.org/editor?extension=https://extensions.turbowarp.org/fetch.js",source:"@site/docs/development/custom-extensions.md",sourceDirName:"development",slug:"/development/custom-extensions",permalink:"/development/custom-extensions",editUrl:"https://github.com/TurboWarp/docs/edit/master/docs/development/custom-extensions.md",version:"current",frontMatter:{slug:"/development/custom-extensions"},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/development/getting-started"}},p=[],l={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"custom-extensions"},"Custom Extensions"),(0,s.kt)("p",null,"TurboWarp supports sandboxed extensions specified via URL parameter, for example: ",(0,s.kt)("a",{parentName:"p",href:"https://turbowarp.org/editor?extension=https://extensions.turbowarp.org/fetch.js"},"https://turbowarp.org/editor?extension=https://extensions.turbowarp.org/fetch.js")),(0,s.kt)("p",null,"This is an experimental feature."))}m.isMDXComponent=!0}}]);