(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1067:function(e,i,o){var t=o(1112);"string"==typeof t&&(t=[[e.i,t,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(276)(t,s);t.locals&&(e.exports=t.locals)},1111:function(e,i,o){"use strict";o(1067)},1112:function(e,i,o){},1186:function(e,i,o){"use strict";o.r(i);var t=function(){var e=this,i=e._self._c;return i("section",[i("el-form",{ref:"editForm",staticClass:"editForm",staticStyle:{width:"80%"},attrs:{model:e.editForm,"label-width":"150px",rules:e.editFormRules}},[i("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[i("el-input",{model:{value:e.editForm.name,callback:function(i){e.$set(e.editForm,"name",i)},expression:"editForm.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"商品类别",prop:"menuId"}},[i("el-select",{staticClass:"minInput",model:{value:e.editForm.menuId,callback:function(i){e.$set(e.editForm,"menuId",i)},expression:"editForm.menuId"}},e._l(e.menuList,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"状态",prop:"status"}},[i("el-select",{staticClass:"minInput",model:{value:e.editForm.status,callback:function(i){e.$set(e.editForm,"status",i)},expression:"editForm.status"}},[i("el-option",{attrs:{label:"待上架",value:1}}),e._v(" "),i("el-option",{attrs:{label:"已上架",value:2}}),e._v(" "),i("el-option",{attrs:{label:"已下架",value:3}}),e._v(" "),i("el-option",{attrs:{label:"售罄",value:4}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"一口价(元)",prop:"price"}},[i("el-input",{staticClass:"minInput",model:{value:e.editForm.price,callback:function(i){e.$set(e.editForm,"price",i)},expression:"editForm.price"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"包装费",prop:"packingCharges"}},[i("el-input",{staticClass:"minInput",model:{value:e.editForm.packingCharges,callback:function(i){e.$set(e.editForm,"packingCharges",i)},expression:"editForm.packingCharges"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"商品描述",prop:"detail"}},[i("el-input",{attrs:{type:"textarea",rows:6},model:{value:e.editForm.detail,callback:function(i){e.$set(e.editForm,"detail",i)},expression:"editForm.detail"}})],1),e._v(" "),i("el-form-item",{staticClass:"subImagesFileItem",attrs:{label:"介绍图片/商品详情页轮播图（宽600px * 高600px）",prop:"subImagesFile"}},[i("el-upload",{ref:"multipleUpload",staticClass:"avatar-uploader",attrs:{action:"",accept:".image, .png, .jpg",multiple:"",name:"subImagesUpload","on-remove":e.handleRemoveSubImages,"before-upload":e.beforeAvatarUpload,"list-type":"picture-card","file-list":e.editForm.subImagesFile,"auto-upload":!1,"on-change":(i,o)=>{e.changeUpload(i,o,"subImagesUpload")},"on-preview":(i,o)=>{e.handlePictureCardPreview(i,o,"subImagesUpload")}}},[i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),e._v(" "),i("div",{staticClass:"el-dialog__footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.goBack}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.saveGoodsMsg}},[e._v("保存")])],1),e._v(" "),i("div",[i("el-dialog",{attrs:{title:"图片裁减",visible:e.dialogVisible,"append-to-body":"",top:"10vh"},on:{"update:visible":function(i){e.dialogVisible=i},close:e.beforeClose}},[i("div",{staticClass:"cropper-content"},[i("div",{staticClass:"cropper",staticStyle:{"text-align":"center"}},[i("vueCropper",{ref:"cropper",attrs:{img:e.option.img,outputSize:e.option.size,outputType:e.option.outputType,info:!0,full:e.option.full,autoCropHeight:e.option.autoCropHeight,autoCropWidth:e.option.autoCropWidth,canMove:e.option.canMove,canMoveBox:e.option.canMoveBox,original:e.option.original,autoCrop:e.option.autoCrop,fixed:e.option.fixed,fixedNumber:e.option.fixedNumber,centerBox:e.option.centerBox,infoTrue:e.option.infoTrue,fixedBox:e.option.fixedBox,high:e.option.high},on:{realTime:e.realTime}})],1)]),e._v(" "),e.isReduces?i("div",{staticStyle:{"{\n              width":"100%",display:"flex","align-items":"center","justify-content":"center"}},[i("div",{staticClass:"show-preview",style:{width:e.previews.w+"px",height:e.previews.h+"px",overflow:"hidden",margin:"5px 5px 5px 15px"}},[i("div",{style:e.previews.div},[i("img",{style:e.previews.img,attrs:{src:e.previews.url,"preview-src-list":[e.previews.url],title:"裁减预览"},on:{click:function(i){return e.previewsView("base64")}}})])])]):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.previewsModel,expression:"previewsModel"}],staticClass:"preview-model",on:{click:function(i){e.previewsModel=!1}}},[i("div",{staticClass:"preview-model-show"},[i("img",{attrs:{src:e.previewsModelSrc,alt:""}})])]),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e.isReduces?e._e():i("el-button",{on:{click:function(i){e.dialogVisible=!1,e.loading=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"success"},on:{click:function(i){e.isReduces?e.bindReduces():e.bindPreviews()}}},[e._v(e._s(e.isReduces?"取消裁减":"查看大图"))]),e._v(" "),i("el-upload",{staticClass:"upload-demo",staticStyle:{display:"inline","margin-left":"10px"},attrs:{action:"","on-remove":e.handleRemoveSubImages,"before-upload":e.beforeAvatarUpload,"auto-upload":!1,"file-list":e.refileList,"on-change":(i,o)=>{e.changeReUpload(i,o,"subImagesUpload")}}},[i("el-button",{attrs:{type:"danger"}},[e._v("重新上传")])],1)],1)])],1)],1)};t._withStripped=!0;var s={props:{pic:{type:String,default:""}},data:()=>({menuList:[],refileList:[],editForm:{mainImageFile:[],subImagesFile:[],detailImagesFile:[]},editFormRules:{name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],menuId:[{required:!0,message:"请选择商品类别",trigger:"change"}],price:[{required:!0,message:"请输入一口价(元)",trigger:"blur"}],salePrice:[{required:!0,message:"请输入折扣价(元)",trigger:"blur"}],packingCharges:[{required:!0,message:"请输入包装费",trigger:"blur"}],productTime:[{required:!0,message:"请输入制作时长",trigger:"blur"}],exchangePoints:[{required:!0,message:"请输入兑换商品所需积分数量",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"blur"}],mainImageFile:[{type:"array",required:!0,message:"请上传主图",trigger:"change"}],subImagesFile:[{type:"array",required:!0,message:"请上传介绍图片",trigger:"change"}],detailImagesFile:[{type:"array",required:!0,message:"请上传详情图片",trigger:"change"}]},action:"上传地址",disabled:!1,uploadData:{file:"",project:""},imageUrl:"",loading:!1,maskBox:!1,dialogVisible:!1,lockScroll:!1,option:{img:"",info:!0,outputSize:.8,outputType:"jpeg",canScale:!1,autoCrop:!1,autoCropWidth:600,autoCropHeight:355,fixedBox:!1,fixed:!0,fixedNumber:[1,1],full:!0,canMoveBox:!0,original:!1,centerBox:!0,infoTrue:!0,high:!0},picsList:[],previews:{},previewsModel:!1,previewsModelSrc:"",isReduces:!1}),methods:{setAvatarBase64(e,i){let o=this,t=new Image;console.log(1),t.src=e+"?v="+Math.random(),console.log(2),t.crossOrigin="*",t.onload=function(){let e=o.transBase64FromImage(t);i&&i(e)},console.log(2.1)},transBase64FromImage(e){let i=document.createElement("canvas");return i.width=e.width,i.height=e.height,i.getContext("2d").drawImage(e,0,0,e.width,e.height),i.toDataURL("image/png")},saveGoodsMsg(){this.$refs.editForm.validate(e=>{if(e){let e=this;if(!e.editForm.subImagesFile.length)return e.$message({showClose:!0,message:"请上传介绍图片",type:"error"}),!1;let i=Object.assign({},this.editForm);delete i.createTime,delete i.updateTime,i.mainImage=e.getIdByArr(i.mainImageFile),i.subImages=e.getIdByArr(i.subImagesFile),delete i.mainImageFile,delete i.subImagesFile;let o="";o=i.id?"/rest/merchant/goods/update":"/rest/merchant/goods/insert",e.$http.post(e,o,i,(e,i)=>{e.$message({showClose:!0,message:i.message,type:"success"}),e.goBack()},(i,o)=>{e.$message({showClose:!0,message:o.message,type:"error"})})}})},goBack(){this.$refs.editForm.resetFields(),this.$router.push({path:"goodsList"})},getIdByArr:e=>(e||[]).map(e=>e.oldUrl).join(","),removeDomain(e){var i=this.editForm.standData.indexOf(e);-1!==i&&this.editForm.standData.splice(i,1)},addDomain(){this.editForm.standData.push({stand:"",stock:""})},getDetail(e){let i=this;i.$http.post(i,"/rest/merchant/goods/getById",{id:e},(e,i)=>{let o=i.data;o.mainImageFile=e.resetImg(o,"mainImage"),o.subImagesFile=e.resetImg(o,"subImages"),e.editForm=Object.assign({},o)},(e,o)=>{i.$message({showClose:!0,message:o.message,type:"error"})})},resetImg(e,i){if(e[i]){let o=e[i].split(","),t=[],s=0;return o.forEach(e=>{let i={url:this.$http.publicUrl(e),oldUrl:e,name:s+1};t.push(i),s++}),t}return[]},getTypeList(){let e=this;e.$http.post(e,"/rest/merchant/menu/list",{pageNo:-1,pageSize:10,typestatus:0},(e,i)=>{e.menuList=i.data.records},(i,o)=>{e.$message({showClose:!0,message:o.message,type:"error"})})},handleRemoveMainImage(e,i){let o=this.editForm.mainImageFile;this.editForm.mainImageFile=o.filter((function(i){return i.uid!==e.uid}))},handleRemoveSubImages(e,i){let o=this.editForm.subImagesFile;this.editForm.subImagesFile=o.filter((function(i){return i.uid!==e.uid}))},handleRemoveDetailImages(e,i){let o=this.editForm.detailImagesFile;this.editForm.detailImagesFile=o.filter((function(i){return i.uid!==e.uid}))},beforeAvatarUpload(e){const i=e.size/1024/1024<2;return i||this.$message({showClose:!0,message:"上传图片大小不能超过 2MB!",type:"error"}),i},changeUpload(e,i,o,t){console.log(e),console.log(i),console.log(o),console.log(t),this.fileinfo=e,this.filename=o,1==i.length?"subImagesUpload"==o&&(this.option.fixedNumber=[1,1]):this.option.fixedNumber=[9,5.5],"mainImageUpload"==o&&(this.option.fixedNumber=[1,1]),this.upload(e,o)},changeReUpload(e,i,o,t){console.log(e),console.log(i),console.log(o),console.log(t),this.fileinfo=e,this.filename=o,1==this.editForm.subImagesFile.length?"subImagesUpload"==o&&(this.option.fixedNumber=[1,1]):this.option.fixedNumber=[9,5.5],"mainImageUpload"==o&&(this.option.fixedNumber=[1,1]),this.reUpload(e,i,o)},reUpload(e,i,o,t){const s=this.$loading({lock:!0,text:"上传中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});console.log("upload----图片重新上传"),console.log(e);let l=e.raw,a=new FormData;a.append("file",l),console.log(a),this.$http.postupload(this,"/rest/merchant/uploadSingleImage",a,(function(a,r){if(r.success){let s={url:e.url,uid:l.uid,upUrl:r.data,oldUrl:r.data,name:e.name};if("subImagesUpload"===o){if(a.previewFile)if(console.log("商品详情页值和长度",a.editForm.subImagesFile,a.editForm.subImagesFile.length),a.editForm.subImagesFile.length<=0)a.$set(a.editForm.subImagesFile,0,s);else{let e=!1;a.editForm.subImagesFile.forEach((i,o)=>{console.log("选中裁减的图片",a.previewFile.uid),a.previewFile.uid==i.uid&&(e=!0,console.log("是这个"),console.log("等于选中的图片uid",i.uid),a.$set(a.editForm.subImagesFile,o,s))}),e||a.editForm.subImagesFile.push(s)}else a.editForm.subImagesFile.push(s);console.log("上传后的图片列表",a.editForm.subImagesFile)}else if("detailImagesUpload"===o)a.previewFile?a.editForm.detailImagesFile.forEach((e,i)=>{console.log("选中裁减的图片",a.previewFile.uid),a.previewFile.uid==e.uid&&(console.log("是这个"),console.log("等于选中的图片uid",e.uid),console.log("裁减后更新的图片",s),a.$set(a.editForm.detailImagesFile,i,s))}):a.editForm.detailImagesFile.push(s);else if(a.previewFile)if(a.editForm.mainImageFile.length<=0)a.$set(a.editForm.mainImageFile,0,s);else{let e=!1;a.editForm.mainImageFile.forEach((i,o)=>{console.log("选中裁减的图片",a.previewFile.uid),console.log("选中裁减的图片",i.uid),a.previewFile.uid==i.uid&&(console.log("是这个"),console.log("等于选中的图片uid",i.uid),console.log("裁减后更新的图片",s),e=!0,a.$set(a.editForm.mainImageFile,o,s))}),e||a.editForm.mainImageFile.push(s)}else a.editForm.mainImageFile.push(s);a.$message({message:r.message,type:"success"}),s.url=a.$http.publicUrl(r.data),console.log(s),a.refileList=[s],a.handlePictureCardPreview(s,i,o,t)}s.close()}),(function(e){console.log(e)}))},upload(e,i){const o=this.$loading({lock:!0,text:"上传中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});console.log("upload----图片上传"),console.log(e);let t=e.raw,s=new FormData;s.append("file",t),console.log(s),this.$http.postupload(this,"/rest/merchant/uploadSingleImage",s,(function(s,l){if(l.success){let o={url:e.url,uid:t.uid,upUrl:l.data,oldUrl:l.data};"subImagesUpload"===i?s.editForm.subImagesFile.push(o):"detailImagesUpload"===i?s.editForm.detailImagesFile.push(o):s.editForm.mainImageFile.push(o),s.$message({message:l.message,type:"success"})}o.close()}),(function(e){console.log(e)}))},handlePictureCardPreview(e,i,o,t){console.log("=============== handlePictureCardPreview =============="),console.log(e),console.log(i),console.log(o),console.log(t);let s=this;if(e.hasOwnProperty("upUrl"))s.option.img=e.url,e.name=e.uid+".png";else{console.log("由于跨域问题，需要将图片先转换为base64格式，再进行赋值展示"),this.setAvatarBase64(e.url,e=>{s.option.img=e}),-1==JSON.stringify(e.name).indexOf(".")&&(e.name=e.name+".png")}this.dialogVisible=!0,this.fileinfo=e,this.filename=o,this.previewFile=e},refreshCrop(){this.$refs.cropper.refresh()},realTime(e){console.log(e);this.previews=e,this.$refs.cropper.getCropBlob(e=>{console.log(e);let i=window.URL.createObjectURL(e);console.log("操作后的实时路径",i)})},beforeClose(){console.log("点击了取消"),this.isReduces=!1,this.option.autoCrop=!1,this.refreshCrop()},bindReduces(){this.isReduces=!this.isReduces,this.option.autoCrop=!this.option.autoCrop,this.refreshCrop()},bindPreviews(){console.log("查看原图"),console.log(this.option.img),this.previewsModelSrc=this.option.img,this.previewsModel=!0},finish(e){let i=this;this.$refs.cropper.getCropBlob(e=>{let o=window.URL.createObjectURL(e);console.log("裁减后的照片路径",o),this.loading=!0,console.log(this.fileinfo);var t=new File([e],this.fileinfo.name,{type:"image/jpeg",lastModified:Date.now()});let s=new FormData;console.log("获取裁减后的照片：",t),s.append("file",t),i.$http.postupload(i,"/rest/merchant/uploadSingleImage",s,(function(e,i){if(console.log("============== data =============="),console.log(i),i.success){console.log(i.success);let s={url:o,uid:t.lastModified,upUrl:i.data,oldUrl:i.data};if(console.log("裁减后更新的图片",s),console.log(e.previewFile),console.log(e.filename),"subImagesUpload"===e.filename){if(e.previewFile)if(console.log("商品详情页值和长度",e.editForm.subImagesFile,e.editForm.subImagesFile.length),e.editForm.subImagesFile.length<=0)e.$set(e.editForm.subImagesFile,0,s);else{let i=!1;e.editForm.subImagesFile.forEach((o,t)=>{console.log("选中裁减的图片",e.previewFile.uid),e.previewFile.uid==o.uid&&(i=!0,console.log("是这个"),console.log("等于选中的图片uid",o.uid),e.$set(e.editForm.subImagesFile,t,s))}),i||e.editForm.subImagesFile.push(s)}else e.editForm.subImagesFile.push(s);console.log("上传后的图片列表",e.editForm.subImagesFile)}else if("detailImagesUpload"===e.filename)e.previewFile?e.editForm.detailImagesFile.forEach((i,o)=>{console.log("选中裁减的图片",e.previewFile.uid),e.previewFile.uid==i.uid&&(console.log("是这个"),console.log("等于选中的图片uid",i.uid),console.log("裁减后更新的图片",s),e.$set(e.editForm.detailImagesFile,o,s))}):e.editForm.detailImagesFile.push(s);else if(e.previewFile)if(e.editForm.mainImageFile.length<=0)e.$set(e.editForm.mainImageFile,0,s);else{let i=!1;e.editForm.mainImageFile.forEach((o,t)=>{console.log("选中裁减的图片",e.previewFile.uid),console.log("选中裁减的图片",o.uid),e.previewFile.uid==o.uid&&(console.log("是这个"),console.log("等于选中的图片uid",o.uid),console.log("裁减后更新的图片",s),i=!0,e.$set(e.editForm.mainImageFile,t,s))}),i||e.editForm.mainImageFile.push(s)}else e.editForm.mainImageFile.push(s);e.$message({message:i.message,type:"success"}),e.option.img="",e.dialogVisible=!1,e.loading=!1,e.previewFile=""}}),(function(e){i.loading=!1}))})},previewsView(e){"blob"===e?this.$refs.cropper.getCropBlob(e=>{var i=window.URL.createObjectURL(e);this.previewsModel=!0,this.previewsModelSrc=i}):this.$refs.cropper.getCropData(e=>{this.previewsModel=!0,this.previewsModelSrc=e})}},created(){this.getTypeList();let e=this.$route.query.id;this.getDetail(e),this.$orderPrint.init(),this.imageUrl=this.picUrl},watch:{pic:{handler(e,i){console.log(e),e&&(this.imageUrl=e)},deep:!0}}},l=(o(1111),o(275)),a=Object(l.a)(s,t,[],!1,null,"974c6c90",null);i.default=a.exports}}]);