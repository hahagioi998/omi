import{W as r,h as n,t as o,s as t,b as e}from"./vendor.3f489542.js";import"./admin-docs.bfe65179.js";import"./index.039482e5.js";import"./container.db7f9588.js";import"./index.esm.fc42bb18.js";import"./___vite-browser-external_commonjs-proxy.755037e0.js";var a=Object.defineProperty,d=Object.getOwnPropertyDescriptor;let s=class extends r{constructor(){super(...arguments),this.options={aspectRatio:1,legend:!1,tooltips:!1,elements:{point:{borderColor:"#ccc",borderWidth:1,hoverBackgroundColor:"transparent",hoverBorderColor:"red",hoverBorderWidth:2,radius:"3 + Math.abs($v)/100 * $w/24"}}},this.data={datasets:[{label:"My First dataset",borderColor:"rgb(55,99,132)",backgroundColor:"transparent",data:[{x:11,y:44,v:22},{x:77,y:11,v:11},{x:55,y:22,v:99},{x:44,y:33,v:34},{x:33,y:9,v:98},{x:20,y:1,v:1},{x:55,y:3,v:2}]},{label:"My Second dataset",borderColor:"rgb(255,99,132)",backgroundColor:"transparent",data:[{x:18,y:44,v:22},{x:77,y:21,v:11},{x:55,y:122,v:99},{x:84,y:3,v:34},{x:33,y:29,v:98},{x:20,y:111,v:1},{x:55,y:13,v:2}]}]},this.mdA="\n  ```html\n<o-bubble id=\"myChart\" width=\"300\" height=\"350\"\n  data=\"{\n    datasets: [{\n      label: 'My First dataset',\n      borderColor: 'rgb(55,99,132)',\n      backgroundColor: 'transparent',\n      data: [\n        { x: 11, y: 44, v: 22 },\n        { x: 77, y: 11, v: 11 },\n        { x: 55, y: 22, v: 99 },\n        { x: 44, y: 33, v: 34 },\n        { x: 33, y: 9, v: 98 },\n        { x: 20, y: 1, v: 1 },\n        { x: 55, y: 3, v: 2 }\n      ]\n      }, {\n        label: 'My Second dataset',\n        borderColor: 'rgb(255,99,132)',\n        backgroundColor: 'transparent',\n        data: [\n        { x: 18, y: 44, v: 22 },\n        { x: 77, y: 21, v: 11 },\n        { x: 55, y: 122, v: 99 },\n        { x: 84, y: 3, v: 34 },\n        { x: 33, y: 29, v: 98 },\n        { x: 20, y: 111, v: 1 },\n        { x: 55, y: 13, v: 2 }\n        ]\n      }]\n    }\"\n\n  options=\"{\n    aspectRatio: 1,\n    legend: false,\n    tooltips: false,\n\n    elements: {\n      point: {\n        borderColor: '#ccc',\n\n        borderWidth: 1,\n\n        hoverBackgroundColor: 'transparent',\n\n        hoverBorderColor: 'red',\n\n        hoverBorderWidth: 2,\n\n        radius: '3 + Math.abs($v)/100 * $w/24'\n      }\n    }\n  }\">\n</o-bubble>\n  ```\n  "}installed(){}render(){return n("code-demo-container",null,n("code-demo",{title:"气泡图",describe:"气泡图显示",code:this.mdA},n("div",{slot:"demo",class:o`px-3 py-5`},n("o-bubble",{id:"myChart",width:"300",height:"350",data:this.data,options:this.options}))))}};s.css=[t.target],s=((r,n,o,t)=>{for(var e,s=t>1?void 0:t?d(n,o):n,i=r.length-1;i>=0;i--)(e=r[i])&&(s=(t?e(n,o,s):e(s))||s);return t&&s&&a(n,o,s),s})([e("bubble-chart")],s);export{s as default};
