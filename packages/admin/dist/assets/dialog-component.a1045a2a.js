import{W as n,h as o,t,s as e,b as i}from"./vendor.3f489542.js";import"./index.esm.aae8e342.js";import{a as s,c as l,p as a}from"./index.esm.db64f89e.js";import"./admin-docs.bfe65179.js";import"./index.039482e5.js";import"./container.db7f9588.js";import"./___vite-browser-external_commonjs-proxy.755037e0.js";var c=Object.defineProperty,r=Object.getOwnPropertyDescriptor;let m=class extends n{constructor(){super(...arguments),this.visibleA=!1}install(){}render(){return o("code-demo-container",null,o("code-demo",{title:"弹窗",describe:"基础演示",code:'\n```jsx\n<o-dialog visible={this.visibleA} title="提示">\n  <span>你还，omiu dialog</span>\n  <span slot="footer">\n    <o-button size="small">取 消</o-button>\n    <o-button size="small" type="primary">确 定</o-button>\n  </span>\n</o-dialog>\n```\n          '},o("div",{slot:"demo",class:t`px-5 py-5`},o("o-dialog",{visible:this.visibleA,title:"提示"},o("span",null,"你还，omiu dialog"),o("span",{slot:"footer"},o("o-button",{size:"small",onClick:n=>{this.visibleA=!1,this.update()}},"取 消"),o("o-button",{size:"small",onClick:n=>{this.visibleA=!1,this.update()},type:"primary"},"确 定"))),o("o-button",{onClick:n=>{this.visibleA=!0,this.update()},value:"4",max:"10",color:"red"},"显示弹窗"))),o("code-demo",{title:"弹窗",describe:"基础演示",code:"\n```jsx\n<o-button onClick={e => {\n  alert({\n    msg: 'Simple Message',\n    title: 'Msg',\n    confirmButtonText: 'OK',\n    onConfirm: function () {\n      console.log('ok')\n    }\n  })\n}} type=\"default\">alert</o-button>\n\n<o-button onClick={e => {\n  confirm({\n    msg: 'Simple Message',\n    title: 'Msg',\n    cancelButtonText: 'Cancel',\n    confirmButtonText: 'OK',\n    onCancel: function () {\n\n    },\n    onConfirm: function () {\n      console.log('ok')\n    }\n  })\n}} type=\"default\">confirm</o-button>\n\n<o-button onClick={e => {\n  prompt({\n    msg: 'Simple Message',\n    title: 'Msg',\n    cancelButtonText: 'Cancel',\n    confirmButtonText: 'OK',\n    onCancel: function () {\n\n    },\n    onConfirm: function (val) {\n      console.log(val)\n    }\n  })\n}} type=\"default\">prompt</o-button>\n```\n          "},o("div",{slot:"demo",class:t`px-5 py-5`},o("o-button",{onClick:n=>{s({msg:"Simple Message",title:"Msg",confirmButtonText:"OK",onConfirm:function(){console.log("ok")}})},type:"default"},"alert"),o("o-button",{onClick:n=>{l({msg:"Simple Message",title:"Msg",cancelButtonText:"Cancel",confirmButtonText:"OK",onCancel:function(){},onConfirm:function(){console.log("ok")}})},type:"default"},"confirm"),o("o-button",{onClick:n=>{a({msg:"Simple Message",title:"Msg",cancelButtonText:"Cancel",confirmButtonText:"OK",onCancel:function(){},onConfirm:function(n){console.log(n)}})},type:"default"},"prompt"))))}};m.css=[e.target,"o-button{margin-left:10px;}"],m=((n,o,t,e)=>{for(var i,s=e>1?void 0:e?r(o,t):o,l=n.length-1;l>=0;l--)(i=n[l])&&(s=(e?i(o,t,s):i(s))||s);return e&&s&&c(o,t,s),s})([i("dialog-component")],m);export{m as default};
