var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,s,n)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n;import{s as r,W as l,a as c,h as d,t as h,b as m,r as f,c as u}from"./vendor.c531581f.js";let b;const p={},g=function(e,t){if(!t||0===t.length)return e();if(void 0===b){const e=document.createElement("link").relList;b=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in p)return;p[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":b,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))};var x=Object.defineProperty,_=Object.getOwnPropertyDescriptor;let v=class extends l{constructor(){super(...arguments),this.items=[{label:"中文",value:"zh"},{label:"English",value:"en"}],this.isShowColorPicker=!1,this.toggle=e=>{this.isShowColorPicker=!this.isShowColorPicker,this.update(),e.stopPropagation()},this.onColorChange=e=>{this.store.themeColor=e.detail.color,c("primary",e.detail.color)},this.onMenuChange=e=>{this.store.isLeftPanelClosed=e.detail,this.store.isLeftPanelClosed?this.store.openLeftPanel():this.store.closeLeftPanel()},this.onItemSelect=e=>{this.store.setLocals(e.detail.value)}}install(){g((()=>import("./index.esm.5141d4fa.js")),["assets/index.esm.5141d4fa.js","assets/vendor.c531581f.js"]),window.addEventListener("click",(()=>{this.isShowColorPicker=!1,this.update()}))}render(){return d("div",{class:h`bg-gray-100 h-12 text-left border-b-1`},d("div",{class:h`flex justify-between`},d("div",{class:h`flex flex-row p-1 order-1`},d("o-hamburger-menu",{class:h`mt-1.5 ml-1 `,color:"rgb(107, 114, 128)",active:!this.store.isLeftPanelClosed,onchange:this.onMenuChange}),d("img",{class:h`w-8 m-1 ml-3`,src:"./assets/logo.a690a1ac.svg",alt:"logo"}),d("div",null,d("h1",{class:h`ml-3 leading-10 text-gray-500`},"OMI ADMIN")),d("div",{class:h`inline-block mt-1.5 ml-3`},d("o-select",{css:"\n            .o-select .o-input__inner {\n              width: 117px;\n            ",size:"mini","onitem-select":this.onItemSelect,value:this.store.locale,items:this.items}))),d("div",{class:h`flex flex-row order-3 p-1 mr-3`},d("div",{class:h`relative mt-2 mr-5`},d("div",{class:h`cursor-pointer`,onClick:this.toggle,style:{color:this.store.themeColor}},d("o-icon-palette",null),this.store.localeMap.base.Theme),this.isShowColorPicker&&d("o-color-picker",{onchange:this.onColorChange,onClick:e=>e.stopPropagation(),class:h`absolute right-0 z-50`,save:!1,preview:!1,button:!1,clear:!1,width:"300px"})),d("o-avatar",{src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}))))}};v.css=r.target,v=((e,t,s,n)=>{for(var i,a=n>1?void 0:n?_(t,s):t,o=e.length-1;o>=0;o--)(i=e[o])&&(a=(n?i(t,s,a):i(a))||a);return n&&a&&x(t,s,a),a})([m("layout-header")],v);var y=Object.defineProperty,k=Object.getOwnPropertyDescriptor;let w=class extends l{constructor(){super(...arguments),this.onNodeClick=e=>{if(!e.detail.children){const t=this.store.tabs.find((t=>t.id===e.detail.id));t?this.store.tabsActiveIndex=this.store.tabs.indexOf(t):(this.store.tabs.push({label:e.detail.label,closeable:!1,id:e.detail.id,href:e.detail.href}),this.store.tabsActiveIndex=this.store.tabs.length-1)}e.detail.md&&e.detail.md.then((e=>{this.store.markdown=e.default}))}}install(){g((()=>import("./emoji-people.a16f85ab.js").then((function(e){return e.e}))),["assets/emoji-people.a16f85ab.js","assets/vendor.c531581f.js"]),g((()=>import("./ballot.f2169cb6.js").then((function(e){return e.b}))),["assets/ballot.f2169cb6.js","assets/vendor.c531581f.js"])}installed(){this.store.ui.leftPanel=this}render(){return d("div",{style:"height:calc(100vh - 3rem)",class:h`text-left border-r-1 relative`},d("o-tree",{"onnode-click":this.onNodeClick,data:this.store.treeData}))}};w.css=[r.target,".menu {\n  position: absolute;\n  cursor: pointer;\n  background-color: #acb7c1;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  width: 8px;\n  bottom: 0;\n  margin-top: -25px;\n  right: -8px;\n  z-index: 999;\n}\n\n.menu svg {\n  font-size: 10px;\n  display: inline-block;\n  position: relative;\n  top: -2px;\n  right: 1px;\n}\n\n.menu.closed svg {\n  transform: rotate(180deg);\n}"],w=((e,t,s,n)=>{for(var i,a=n>1?void 0:n?k(t,s):t,o=e.length-1;o>=0;o--)(i=e[o])&&(a=(n?i(t,s,a):i(a))||a);return n&&a&&y(t,s,a),a})([m("layout-left-panel")],w);var P=Object.defineProperty,O=Object.getOwnPropertyDescriptor;let E=class extends l{constructor(){super(...arguments),this.onChange=e=>{const t=this.store.tabs.find((t=>t.id===e.detail.tab.id));this.store.tabsActiveIndex=this.store.tabs.indexOf(t),this.store.selectTreeNodeById(e.detail.tab.id),location.hash=e.detail.tab.href},this.onRemove=e=>{let t=e.detail.index;this.store.tabsActiveIndex===e.detail.index?(t-=1,t<0&&(t=0),this.store.tabsActiveIndex=t):this.store.tabsActiveIndex>t&&(this.store.tabsActiveIndex-=1);const s=this.store.tabs[this.store.tabsActiveIndex];this.store.selectTreeNodeById(s.id),location.hash=s.href}}installed(){this.store.ui.baseLayout=this}render(){return d(d.f,null,d("layout-header",{class:h`h-12 block`}),d("div",{class:h`flex flex-row`},d("layout-left-panel",{class:h`${this.store.isLeftPanelClosed?"sm:w-0 -translate-x-full":"sm:w-64 w-3/4 translate-x-0"} overflow-hidden bg-white z-50 transition-all duration-500 ease-in-out  sm:relative fixed `}),d("layout-container",{class:h`flex-1`},d("o-tabs",{closable:!0,type:"card",list:this.store.tabs,onchange:this.onChange,onremove:this.onRemove,"active-index":this.store.tabsActiveIndex}),d("div",{style:"height:calc(100vh - 90px);",class:h`overflow-auto`},d("slot",null)))))}};E.css=[r.target,"\n.is-closed{\n  width: 0;\n  transform: translateX(-100%);\n}\n"],E=((e,t,s,n)=>{for(var i,a=n>1?void 0:n?O(t,s):t,o=e.length-1;o>=0;o--)(i=e[o])&&(a=(n?i(t,s,a):i(a))||a);return n&&a&&P(t,s,a),a})([m("basic-layout")],E);var C=Object.defineProperty,L=Object.getOwnPropertyDescriptor;let I=class extends l{render(){return d("div",null,d("slot",null))}};I.css=r.target,I=((e,t,s,n)=>{for(var i,a=n>1?void 0:n?L(t,s):t,o=e.length-1;o>=0;o--)(i=e[o])&&(a=(n?i(t,s,a):i(a))||a);return n&&a&&C(t,s,a),a})([m("layout-container")],I);var T=Object.defineProperty,j=Object.getOwnPropertyDescriptor;let A=class extends l{render(){return d("div",{class:h``},d("div",{class:h`w-4/5 sm:w-96 m-auto pt-52`},d("svg",{version:"1.1",viewBox:"0 0 800 600",xmlns:"http://www.w3.org/2000/svg"},d("symbol",{id:"text"},d("text",{x:"2%",y:"35%",class:"text"},"Welcome to"),d("text",{x:"69%",y:"35%",class:"text"},"Admin")),d("symbol",{id:"omi"},d("text",{x:"46%",y:"35%",class:"text"},"OMI")),d("g",null,d("use",{"xlink:href":"#omi",class:"use-omi"}),d("use",{"xlink:href":"#omi",class:"use-omi"}),d("use",{"xlink:href":"#omi",class:"use-omi"}),d("use",{"xlink:href":"#omi",class:"use-omi"}),d("use",{"xlink:href":"#omi",class:"use-omi"})),d("g",null,d("use",{"xlink:href":"#text",class:"use-text"}),d("use",{"xlink:href":"#text",class:"use-text"}),d("use",{"xlink:href":"#text",class:"use-text"}),d("use",{"xlink:href":"#text",class:"use-text"}),d("use",{"xlink:href":"#text",class:"use-text"})))))}};A.css=[r.target,'.text {\n  font-size: 60px;\n  font-family: cursive;\n}\n\n\n/* line 19, ../../src/css/source/_chat.scss */\nsvg {\n  width: 100%;\n  height: 100%;\n}\n\n/* line 27, ../../src/css/source/_chat.scss */\n.use-text {\n  fill: none;\n  stroke: white;\n  stroke-dashoffset: 35%;\n  stroke-dasharray: 0 87.5%;\n  stroke-width: 2px;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss "#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"*/\n.use-text:nth-child(1) {\n  stroke: #777e7a;\n  animation: animation1 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(2) {\n  stroke: #777e7a;\n  animation: animation2 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(3) {\n  stroke: #777e7a;\n  animation: animation3 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(4) {\n  stroke: #777e7a;\n  animation: animation4 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(5) {\n  stroke: #777e7a;\n  animation: animation5 8s infinite ease-in-out forwards;\n\n}\n\n.use-omi {\n  fill: none;\n  stroke: white;\n  stroke-dashoffset: 35%;\n  stroke-dasharray: 0 87.5%;\n  stroke-width: 2px;\n\n}\n\n.use-omi:nth-child(1) {\n  stroke: #07c160;\n  animation: animation1 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(2) {\n  stroke: #07c160;\n  animation: animation2 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(3) {\n  stroke: #07c160;\n  animation: animation3 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(4) {\n  stroke: #07c160;\n  animation: animation4 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(5) {\n  stroke: #07c160;\n  animation: animation5 8s infinite ease-in-out forwards;\n\n}\n\n@keyframes animation1 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 7%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 7%;\n  }\n}\n\n@keyframes animation2 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 14%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 14%;\n  }\n}\n\n@keyframes animation3 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 21%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 21%;\n  }\n}\n\n@keyframes animation4 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 28%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 28%;\n  }\n}\n\n@keyframes animation5 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 35%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 35%;\n  }\n}\n'],A=((e,t,s,n)=>{for(var i,a=n>1?void 0:n?j(t,s):t,o=e.length-1;o>=0;o--)(i=e[o])&&(a=(n?i(t,s,a):i(a))||a);return n&&a&&T(t,s,a),a})([m("admin-main-welcome")],A);const D=e=>[{label:e.base.Demo1,icon:"description",href:"#/docs/demo1",md:g((()=>import("./demo.d6adbe13.js")),[]),id:27},{label:e.base.Demo2,icon:"description",href:"#/docs/demo2",md:g((()=>import("./demo2.00871e17.js")),[]),id:17}];var R=Object.defineProperty,B=Object.getOwnPropertyDescriptor;let M=class extends l{constructor(){super(...arguments),this.data={tagName:"admin-main-welcome"}}getMdByName(e,t){const s=`#/docs/${e}`,n=t.find((e=>e.href===s));if(n)return n.md;for(let i=0,a=t.length;i<a;i++)if(t[i].children){const e=this.findNodeByHash(s,t[i].children);if(e)return e.md}}async transitionTo(e){await this.transition.leave(),this.data.tagName=e,this.update(),await this.transition.enter()}installed(){this.store.ui.myApp=this,u("/",(()=>{this.update()})),u("/welcome",(()=>{this.transitionTo("admin-main-welcome")})),u("/table/basic",(()=>{g((()=>import("./basic-table.02ef9adf.js")),["assets/basic-table.02ef9adf.js","assets/vendor.c531581f.js","assets/index.esm.860715ad.js"]).then((()=>this.transitionTo("basic-table")))})),u("/docs/:name",(e=>{this.getMdByName(e.params.name,this.store.treeData).then((e=>{this.payload={mdContent:e.default},g((()=>import("./admin-docs.5539a143.js")),["assets/admin-docs.5539a143.js","assets/admin-docs.4020d4d7.css","assets/vendor.c531581f.js"]).then((()=>this.transitionTo("admin-docs")))}))})),u("/table/pagination",(()=>{g((()=>import("./pagination-table.24d78f95.js")),["assets/pagination-table.24d78f95.js","assets/vendor.c531581f.js","assets/index.esm.860715ad.js"]).then((()=>this.transitionTo("pagination-table")))})),u("/form",(()=>{g((()=>import("./admin-form.cf43dc3c.js")),["assets/admin-form.cf43dc3c.js","assets/vendor.c531581f.js","assets/index.esm.1819a86d.js"]).then((()=>this.transitionTo("admin-form")))})),u("/comment",(()=>{g((()=>import("./admin-comment.c388de8f.js")),["assets/admin-comment.c388de8f.js","assets/admin-comment.cc2186d8.css","assets/vendor.c531581f.js","assets/index.esm.1819a86d.js"]).then((()=>this.transitionTo("admin-comment")))})),u("/icon",(()=>{g((()=>import("./admin-icon.e5dc4bec.js")),["assets/admin-icon.e5dc4bec.js","assets/vendor.c531581f.js"]).then((()=>this.transitionTo("admin-icon")))})),u("/error",(()=>{g((()=>import("./status-error.308ddfea.js")),["assets/status-error.308ddfea.js","assets/vendor.c531581f.js"]).then((()=>this.transitionTo("status-error")))})),u("/loading-component",(()=>{g((()=>import("./loading-component.8bb7e715.js")),["assets/loading-component.8bb7e715.js","assets/vendor.c531581f.js","assets/admin-docs.5539a143.js","assets/admin-docs.4020d4d7.css"]).then((()=>this.transitionTo("loading-component")))})),u("/toast-component",(()=>{g((()=>import("./toast-component.120f2bc3.js")),["assets/toast-component.120f2bc3.js","assets/vendor.c531581f.js","assets/admin-docs.5539a143.js","assets/admin-docs.4020d4d7.css"]).then((()=>this.transitionTo("toast-component")))})),u("/warning",(()=>{g((()=>import("./status-warning.d9d772a8.js")),["assets/status-warning.d9d772a8.js","assets/vendor.c531581f.js"]).then((()=>this.transitionTo("status-warning")))})),u("*",(function(){console.log("not found")})),location.hash&&this.routeTo(location.hash)}findNodeByHash(e,t){const s=t.find((t=>t.href===e));if(s)return s;for(let n=0,i=t.length;n<i;n++)if(t[n].children){const s=this.findNodeByHash(e,t[n].children);if(s)return s}}routeTo(e){const t=this.findNodeByHash(e,this.store.treeData);if(this.store.selectTreeNodeById(t.id),!t.children){const e=this.store.tabs.find((e=>e.id===t.id));e?this.store.tabsActiveIndex=this.store.tabs.indexOf(e):(this.store.tabs.push({label:t.label,closeable:!1,id:t.id,href:t.href}),this.store.tabsActiveIndex=this.store.tabs.length-1)}t.md&&t.md.then((e=>{this.store.markdown=e.default}))}render(){return d("basic-layout",null,d("o-transition",{ref:e=>this.transition=e,appear:!0,name:"fade"},d(this.data.tagName,(e=((e,t)=>{for(var s in t||(t={}))i.call(t,s)&&o(e,s,t[s]);if(n)for(var s of n(t))a.call(t,s)&&o(e,s,t[s]);return e})({},this.payload),r={class:h`block`},t(e,s(r))))));var e,r}};M.css=[r.target,".fade-leave-to,\n.fade-enter {\n  opacity: 0;\n  transform: translateX(15px);\n}\n\n.fade-leave-active,\n.fade-enter-active {\n  transition: all 300ms ease-in;\n}\n"],M=((e,t,s,n)=>{for(var i,a=n>1?void 0:n?B(t,s):t,o=e.length-1;o>=0;o--)(i=e[o])&&(a=(n?i(t,s,a):i(a))||a);return n&&a&&R(t,s,a),a})([m("my-app")],M),new class{constructor(e){this.themeColor="#07c160",this.installed=e.installed,this.locale=e.locale,this.isLeftPanelClosed=window.innerWidth<640,this.ignoreAttrs=!0,this.ui={},this.markdown="",this.html="",this.localeMap={},this.setLocals(this.locale,(()=>{this.tabs=[{label:this.localeMap.base.Welcome,href:"#/welcome",closable:!1,id:2}],this.tabsActiveIndex=0})),this.isInstalled=!1}setLocals(e,t){this.locale=e,function(e){switch(e){case"./l10n/en/base.ts":return g((()=>import("./base.3a6750ce.js")),[]);case"./l10n/zh/base.ts":return g((()=>import("./base.0c7be85c.js")),[]);default:return new Promise((function(t,s){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./l10n/${e}/base.ts`).then((e=>{this.localeMap=e,t&&t(),this.treeData=[{label:e.base.ManagerWorkbench,sign:"●",expanded:!0,id:1,icon:"ac-unit-outlined",children:[{sign:"M",label:e.base.WelcomePage,icon:"emoji-people",color:"#07c160",selected:!0,href:"#/welcome",id:2},{label:e.base.BasicTable,icon:"grid-on",href:"#/table/basic",id:4},{label:e.base.TableDeleteAnimation,icon:"grid-on",href:"#/table/pagination",id:5},{label:e.base.Form,expanded:!0,id:9,href:"#/form",icon:"list-alt"},{label:e.base.MaterialIcons,expanded:!0,id:10,href:"#/icon",icon:"sentiment-satisfied-alt"}]},{label:e.base.Others,sign:"●",expanded:!0,id:6,icon:"ac-unit-outlined",children:[{sign:"90020",label:e.base.Error,icon:"error",color:"#F56C6C",href:"#/error",id:7},{sign:"993",label:e.base.Warning,icon:"warning",color:"#E6A23C",href:"#/warning",id:8},{sign:"993",label:e.base.Comment,icon:"comment",href:"#/comment",id:120},{label:e.base.ExternalLink,icon:"insert-link",href:"https://github.com/Tencent/omi",id:119,target:"_blank"}]},{label:e.base.MarkdownDocs,expanded:!0,id:6,icon:"ac-unit-outlined",children:D(e)},{label:e.base.Components,expanded:!0,id:11,icon:"ac-unit-outlined",children:[{label:e.base.Loading,id:12,icon:"ac-unit-outlined",href:"#/loading-component"},{label:e.base.Toast,id:13,icon:"ac-unit-outlined",href:"#/toast-component"}]}],this.tabs.forEach((e=>{e.label=this.getTabLabelById(e.id)})),this.isInstalled?this.ui.myApp.update():(this.installed(this),this.isInstalled=!0)}))}getTabLabelById(e){const t=this.treeData.find((t=>t.id===e));if(t)return t.label;for(let s=0,n=this.treeData.length;s<n;s++){const t=this.treeData[s].children.find((t=>t.id===e));if(t)return t.label}}toggleLeftPanel(){this.isLeftPanelClosed=!this.isLeftPanelClosed,this.ui.baseLayout.update()}openLeftPanel(){this.isLeftPanelClosed=!1,this.ui.baseLayout.update()}closeLeftPanel(){this.isLeftPanelClosed=!0,this.ui.baseLayout.update()}selectTreeNodeById(e){this.treeData.forEach((t=>{this.deselect(t,e)}))}deselect(e,t){e.selected=!1,e.children&&e.children.forEach((e=>{e.selected=!1,this.deselect(e,t)})),e.id===t&&(e.selected=!0)}}({locale:"zh",installed(e){f(d("my-app",{name:"Omi"}),"#root",e)}});
