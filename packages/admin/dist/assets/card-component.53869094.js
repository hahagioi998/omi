import{W as n,h as t,t as e,s as o,b as a}from"./vendor.fc6dd635.js";import"./add-ic-call-rounded.bb38c1f1.js";import"./admin-docs.7cef0fa5.js";import"./container.f452f0b9.js";var d=Object.defineProperty,r=Object.getOwnPropertyDescriptor;let c=class extends n{constructor(){super(...arguments),this.mdA='\n  ```html\n  // hoverable设置阴影,always总是显示|true鼠标悬浮时|false从不显示\n  <o-card hoverable="always">\n    \x3c!-- slot="cover" 若不填充内容，则header栏不显示。-简单卡片 --\x3e\n    <div slot="cover">\n    </div>\n      <p>Simple Card</p>\n      <p>Card content</p>\n      <p>Card content</p>\n  </o-card>\n  ```\n  ',this.mdB='\n  ```html\n  <o-card title="Default size card" hoverable="always">\n    <o-link\n      underline=\'0\'\n      type="primary"\n      target="_blank"\n      href="https://tencent.github.io/omi/"\n      slot="extra">\n        More\n    </o-link>\n      <p>Card content</p>\n      <p>Card content</p>\n      <p>Card content</p>\n  </o-card>\n  ```\n  ',this.mdC='\n  ```html\n  <o-card\n    title="Action card"\n    size="medium"\n    id="myActionA"\n    hoverable="always"\n    actions={\n      [{icon: \'add-a-photo-rounded\'},\n      {icon: \'add-ic-call-rounded\'},\n      {icon: \'add-comment-rounded\'}]}>\n    <o-link\n      underline=\'0\'\n      type="primary"\n      target="_blank"\n      href="https://tencent.github.io/omi/"\n      slot="extra">\n        More\n    </o-link>\n      <p>Card content</p>\n      <p>Card content</p>\n      <p>Card content</p>\n  </o-card>\n\n  <o-card\n    title="DNT\'s card"\n    id="myActionB"\n    actions={[{icon: \'add-ic-call-rounded\'}]}\n    hoverable="true">\n    <o-avatar slot="extra">DNT</o-avatar>\n      <p>Tel:</p>\n      <p>Company:</p>\n      <p>...</p>\n  </o-card>\n  ```\n  ',this.mdD='\n  ```html\n  <o-card\n    size="large"\n    id="myActionC"\n    actions={\n      [{icon: \'add-ic-call-rounded\'},\n      {icon: \'add-comment-rounded\'}]}\n      hoverable="true">\n    <o-image\n      slot="cover"\n      src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb">\n    </o-image>\n    <div style="display: flex; justify-content: space-around; margin: 10px 0px">\n      <o-avatar style="margin: auto 0px;"\n        src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png">\n      </o-avatar>\n      <div>\n        <p style="font-weight: 600; font-size: 1.2em;">Card title</p>\n        <p>This is the description</p>\n      </div>\n    </div>\n  </o-card>\n\n  <o-card hoverable="true">\n    <o-image\n      slot="cover"\n      src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb">\n    </o-image>\n      <p style="font-weight: 500>OMI Card</p>\n      <p><o-link\n        underline=\'0\'\n        type="primary"\n        target="_blank"\n        href="https://tencent.github.io/omi/"\n        slot="extra">\n        Welcome to OMI\n      </o-link></p>\n  </o-card>\n  ```\n  '}installed(){}render(){const n={breakInside:"avoid",padding:"0 0 1rem 0"};return t("code-demo-container",null,t("code-demo",{title:"简单卡片",describe:"只包含内容区域",code:this.mdA,style:n},t("div",{slot:"demo",class:e`px-5 py-5`},t("o-card",{title:"Simple Card",hoverable:"always"},t("div",{slot:"cover"}),t("p",null,"Simple Card"),t("p",null,"Card content"),t("p",null,"Card content")))),t("code-demo",{title:"典型卡片",describe:"包含标题、内容、操作区域(extra)",code:this.mdB,style:n},t("div",{slot:"demo",class:e`px-5 py-5`},t("o-card",{title:"Default size card",hoverable:"always"},t("o-link",{underline:"0",type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"More"),t("p",null,"Card content"),t("p",null,"Card content"),t("p",null,"Card content")))),t("code-demo",{title:"功能卡片",describe:"支持底部栏添加触发事件(o-icon)",code:this.mdC,style:n},t("div",{slot:"demo",class:e`px-5 py-5`},t("o-card",{title:"Action card",hoverable:"always",size:"medium",id:"myActionA",actions:[{icon:"add-a-photo-rounded"},{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}]},t("o-link",{underline:"0",type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"More"),t("p",null,"Card content"),t("p",null,"Card content"),t("p",null,"Card content")),t("o-card",{title:"DNT's card",id:"myActionB",actions:[{icon:"add-ic-call-rounded"}],hoverable:"true"},t("o-avatar",{slot:"extra"},"DNT"),t("p",null,"Tel:"),t("p",null,"Company:"),t("p",null,"...")))),t("code-demo",{title:"相册卡片",describe:"支持封面、头像、标题和描述信息的卡片",code:this.mdD,style:n},t("div",{slot:"demo",class:e`px-5 py-5`},t("o-card",{title:"Action card",size:"large",id:"myActionC",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"true"},t("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),t("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},t("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),t("div",null,t("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),t("p",null,"This is the description")))),t("o-card",{hoverable:"true"},t("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"}),t("p",null,"OMI Card"),t("p",null,t("o-link",{underline:"0",type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"Welcome to OMI"))))))}};c.css=o.target,c=((n,t,e,o)=>{for(var a,c=o>1?void 0:o?r(t,e):t,i=n.length-1;i>=0;i--)(a=n[i])&&(c=(o?a(t,e,c):a(c))||c);return o&&c&&d(t,e,c),c})([a("card-component")],c);export{c as default};
