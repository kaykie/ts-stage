(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{224:function(e,a,t){"use strict";t.d(a,"a",function(){return p});t(242);var n=t(10),l=t(12),r=t(19),c=t(47),i=t(46),m=t(104),s=t(48),o=t(0),u=t.n(o),p=(t(243),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(i.a)(a).call(this,e))).input=Object(o.createRef)(),t.upload=function(){var e=t.input.current;e&&e.click()},t.uploading=function(e){if(e.target.files){var a=e.target.files[0],n=a.type;if(/^image\/(png|jpg|jpeg)/.test(n)&&!(a.size>8388608)){var l=new FileReader;l.readAsDataURL(a);Object(m.a)(t);l.onload=function(e){}}}},t.state={loading:!1},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"beforeUpload",value:function(){return!0}},{key:"handleChange",value:function(){}},{key:"render",value:function(){return u.a.createElement("div",{className:"mf-uploader"},this.props.imageUrl?u.a.createElement("div",{className:"mf-uploader__image"},u.a.createElement("img",{src:this.props.imageUrl,alt:"",onClick:this.upload}),u.a.createElement("a",{className:"mf-uploader__image__reupload",onClick:this.upload},"\u91cd\u65b0\u4e0a\u4f20")):u.a.createElement("div",{className:"mf-uploader__upload",onClick:this.upload},u.a.createElement(n.a,{type:this.state.loading?"loading":"plus"})),u.a.createElement("input",{type:"file",ref:this.input,style:{display:"none"},onChange:this.uploading}))}}]),a}(u.a.Component))},243:function(e,a,t){},413:function(e,a,t){},429:function(e,a,t){"use strict";t.r(a);t(223);var n,l=t(222),r=t(12),c=t(19),i=t(47),m=t(46),s=t(48),o=(t(219),t(220)),u=(t(244),t(241)),p=t(0),E=t.n(p),d=(t(413),t(224)),f=u.a.Option,v=o.a.TextArea;!function(e){e.ENTERPRISE="enterprise",e.GOVERNMENT="government",e.INDIVIDUAL="individual",e.OTHER="other"}(n||(n={}));var g=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).test=function(){},t.changeFormType=function(e){},t.changeRadio=function(e){t.props.form.getFieldsValue()},t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e={labelCol:{span:2},wrapperCol:{span:20}},a=this.props.form.getFieldDecorator;return E.a.createElement("div",{className:"mf-info"},E.a.createElement("div",{className:"mf-info-title"},"\u7f16\u8f91\u4f01\u4e1a\u4fe1\u606f"),E.a.createElement("div",{className:"mf-info-content"},E.a.createElement(l.a,e,E.a.createElement(l.a.Item,Object.assign({label:"\u4f01\u4e1a\u540d\u79f0"},e),a("businessEntity",{rules:[{required:!0,whitespace:!1,message:"\u8bf7\u8f93\u5165\u4f01\u4e1a\u540d\u79f0"}]})(E.a.createElement("div",null,E.a.createElement(o.a,{placeholder:"",maxLength:32}),E.a.createElement("div",{className:"mf-info-content__prompt"},E.a.createElement("span",null,"\u4f01\u4e1a\u540d\u79f0\u957f\u5ea6\u6700\u591a\u4e3a32\u4e2a\u6c49\u5b57\u6216\u5b57\u6bcd\uff0c\u5982\u5df2\u8ba4\u8bc1\u5219\u4e0d\u53ef\u4fee\u6539"))))),E.a.createElement(l.a.Item,{label:"\u4f01\u4e1alogo"},a("logoUrl",{})(E.a.createElement(d.a,{imageUrl:""}))),E.a.createElement(l.a.Item,Object.assign({label:"\u4f01\u4e1a\u7c7b\u578b"},e),a("companyType",{rules:[{required:!0,whitespace:!1,message:"\u8bf7\u9009\u62e9\u4f01\u4e1a\u7c7b\u578b"}],initialValue:"1"})(E.a.createElement(u.a,null,E.a.createElement(f,{value:"1"},"\u4f01\u4e1a"),E.a.createElement(f,{value:"2"},"\u4e2a\u4f53\u5de5\u5546\u6237"),E.a.createElement(f,{value:"3"},"\u653f\u5e9c/\u4e8b\u4e1a\u5355\u4f4d"),E.a.createElement(f,{value:"4"},"\u5176\u4ed6\u7ec4\u7ec7")))),E.a.createElement(l.a.Item,Object.assign({label:"\u6240\u5728\u884c\u4e1a"},e),a("industry",{rules:[{required:!0,whitespace:!1,message:"\u8bf7\u9009\u62e9\u6240\u5728\u884c\u4e1a"}],initialValue:"1"})(E.a.createElement(u.a,null,E.a.createElement(f,{value:"1"},"\u5b89\u9632\u884c\u4e1a")))),E.a.createElement(l.a.Item,Object.assign({label:"\u529e\u516c\u5730\u5740"},e),a("addr",{rules:[{required:!0,whitespace:!1,message:"\u8bf7\u8f93\u5165\u529e\u516c\u5730\u5740"}]})(E.a.createElement("div",null,E.a.createElement(o.a,{placeholder:"",maxLength:32}),E.a.createElement("div",{className:"mf-info-content__prompt"},E.a.createElement("span",null,"\u529e\u516c\u5730\u5740\u8f93\u5165\u89c4\u5219\u53ca\u76f8\u5173\u63d0\u793a"))))),E.a.createElement(l.a.Item,Object.assign({label:"\u4eba\u5458\u89c4\u6a21"},e),a("staffNum",{rules:[{required:!0,whitespace:!1,message:"\u8bf7\u9009\u62e9\u4eba\u5458\u89c4\u6a21"}],initialValue:"1"})(E.a.createElement(u.a,null,E.a.createElement(f,{value:"1"},"50\u4eba\u4ee5\u4e0b"),E.a.createElement(f,{value:"2"},"51-100\u4eba"),E.a.createElement(f,{value:"3"},"101-200\u4eba"),E.a.createElement(f,{value:"4"},"201-500\u4eba"),E.a.createElement(f,{value:"5"},"501-1000\u4eba"),E.a.createElement(f,{value:"6"},"1001-2000\u4eba"),E.a.createElement(f,{value:"7"},"2001-5000\u4eba"),E.a.createElement(f,{value:"8"},"5001-10000\u4eba"),E.a.createElement(f,{value:"9"},"1\u4e07\u4eba\u4ee5\u4e0a")))),E.a.createElement(l.a.Item,Object.assign({label:"\u4f01\u4e1a\u5b98\u7f51"},e),a("officialWebsite",{})(E.a.createElement("div",null,E.a.createElement(o.a,{placeholder:"",maxLength:32}),E.a.createElement("div",{className:"mf-info-content__prompt"},E.a.createElement("span",null,"\u7f51\u5740\u8f93\u5165\u89c4\u5219\u53ca\u76f8\u5173\u63d0\u793a"))))),E.a.createElement(l.a.Item,Object.assign({label:"\u8054\u7cfb\u7535\u8bdd"},e),a("phone",{})(E.a.createElement("div",null,E.a.createElement(o.a,{placeholder:"",maxLength:11}),E.a.createElement("div",{className:"mf-info-content__prompt"},E.a.createElement("span",null,"\u8054\u7cfb\u7535\u8bdd\u8f93\u5165\u89c4\u5219\u53ca\u76f8\u5173\u63d0\u793a"))))),E.a.createElement(l.a.Item,Object.assign({label:"\u4f01\u4e1a\u7b80\u4ecb"},e),a("companyBrief",{})(E.a.createElement("div",null,E.a.createElement(v,{rows:4}),E.a.createElement("div",{className:"mf-info-content__prompt"},E.a.createElement("span",null,"\u7b80\u4ecb\u8f93\u5165\u89c4\u5219\u53ca\u76f8\u5173\u63d0\u793a"))))))))}}]),a}(E.a.Component),h=l.a.create()(g);a.default=h}}]);
//# sourceMappingURL=10.2e17ab1d.chunk.js.map