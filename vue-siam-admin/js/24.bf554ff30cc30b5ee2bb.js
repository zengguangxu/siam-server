(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1056:function(e,t,i){var a=i(1100);"string"==typeof a&&(a=[[e.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i(277)(a,s);a.locals&&(e.exports=a.locals)},1099:function(e,t,i){"use strict";i(1056)},1100:function(e,t,i){},1147:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("section",[t("el-form",{ref:"editForm",staticClass:"editForm",staticStyle:{width:"80%"},attrs:{model:e.editForm,"label-width":"150px",rules:e.editFormRules}},[t("el-form-item",{attrs:{label:"轮播图类型",prop:"type"}},[t("el-radio-group",{attrs:{size:"medium"},model:{value:e.editForm.type,callback:function(t){e.$set(e.editForm,"type",t)},expression:"editForm.type"}},[t("el-radio-button",{attrs:{label:"首页轮播图（宽450px * 高225px）",value:"1"}}),e._v(" "),t("el-radio-button",{attrs:{label:"积分商城页面轮播图（宽450px * 高225px）",value:"3"}}),e._v(" "),t("el-radio-button",{attrs:{label:"分享页面生成美图（宽1080px * 高1854px）",value:"4"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"轮播图名称",prop:"imageName"}},[t("el-input",{model:{value:e.editForm.imageName,callback:function(t){e.$set(e.editForm,"imageName",t)},expression:"editForm.imageName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"轮播图",prop:"imagePathFile"}},[t("el-upload",{ref:"upload",staticClass:"avatar-uploader",attrs:{accept:".image, .png, .jpg",action:"",multiple:"",name:"imagePathUpload","on-remove":e.handleRemoveImagePath,"file-list":e.editForm.imagePathFile,"before-upload":e.beforeAvatarUpload,"http-request":e.upload,"list-type":"picture-card"}},[t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),t("el-form-item",{attrs:{label:"说明",prop:"description"}},[t("el-input",{model:{value:e.editForm.description,callback:function(t){e.$set(e.editForm,"description",t)},expression:"editForm.description"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"点击轮播图跳转的链接",prop:"imageLinkUrl"}},[t("el-input",{model:{value:e.editForm.imageLinkUrl,callback:function(t){e.$set(e.editForm,"imageLinkUrl",t)},expression:"editForm.imageLinkUrl"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"排序号",prop:"sortNumber"}},[t("el-input",{model:{value:e.editForm.sortNumber,callback:function(t){e.$set(e.editForm,"sortNumber",t)},expression:"editForm.sortNumber"}})],1)],1),e._v(" "),t("div",{staticClass:"el-dialog__footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.goBack}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.saveGoodsMsg}},[e._v("保存")])],1)],1)};a._withStripped=!0;var s={data:()=>({menuList:[],editForm:{type:"",imageName:"",imagePathFile:[],description:"",imageLinkUrl:"",sortNumber:""},editFormRules:{type:[{required:!0,message:"请选择轮播图类型",trigger:"change"}],imageName:[{required:!0,message:"请输入轮播图名称",trigger:"blur"}],imagePathFile:[{type:"array",required:!0,message:"请上传轮播图",trigger:"change"}],description:[{required:!1,message:"请输入说明",trigger:"blur"}],imageLinkUrl:[{required:!1,message:"请输入点击轮播图跳转的链接",trigger:"blur"}],sortNumber:[{required:!1,message:"请输入排序号",trigger:"blur"}]}}),methods:{saveGoodsMsg(){this.$refs.editForm.validate(e=>{if(e){let e=this,t=Object.assign({},this.editForm),i="";if(!t.id&&!e.editForm.imagePathFile.length)return e.$message({showClose:!0,message:"请上传轮播图",type:"error"}),!1;if(e.editForm.imagePathFile.length>1)return e.$message({showClose:!0,message:"只能上传一张轮播图",type:"error"}),!1;t.imagePath=e.getIdByArr(e.editForm.imagePathFile),delete t.imagePathFile,delete t.createTime,delete t.updateTime,t.type="首页轮播图（宽450px * 高225px）"==t.type?1:"菜单页轮播图（宽450px * 高185px）"==t.type?2:"积分商城页面轮播图（宽450px * 高225px）"==t.type?3:"分享页面生成美图（宽1080px * 高1854px）"==t.type?4:"",t.id?(i="/rest/admin/advertisement/update",e.$http.put(e,i,t,(e,t)=>{e.$message({showClose:!0,message:t.message,type:"success"}),e.goBack(),e.editFormVisible=!1},(t,i)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:i.message,type:"error"})})):(i="/rest/admin/advertisement/insert",e.$http.post(e,i,t,(e,t)=>{e.$message({showClose:!0,message:t.message,type:"success"}),e.goBack(),e.editFormVisible=!1},(t,i)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:i.message,type:"error"})}))}})},goBack(){this.$refs.editForm.resetFields(),this.$router.push({path:"advertisementList"})},getIdByArr:e=>(e||[]).map(e=>e.oldUrl).join(","),removeDomain(e){var t=this.editForm.standData.indexOf(e);-1!==t&&this.editForm.standData.splice(t,1)},addDomain(){this.editForm.standData.push({stand:"",stock:""})},getDetail(e){let t=this;t.$http.post(t,"/rest/admin/advertisement/getById",{id:e},(e,t)=>{let i=t.data;i.imagePathFile=e.resetImg(i,"imagePath"),i.type=1==i.type?"首页轮播图（宽450px * 高225px）":2==i.type?"菜单页轮播图（宽450px * 高185px）":3==i.type?"积分商城页面轮播图（宽450px * 高225px）":4==i.type?"分享页面生成美图（宽1080px * 高1854px）":"-",e.editForm=Object.assign({},i)},(e,i)=>{t.$message({showClose:!0,message:i.message,type:"error"})})},resetImg(e,t){if(e[t]){let i=e[t].split(","),a=[],s=0;return i.forEach(e=>{let t={url:this.$http.publicUrl(e),oldUrl:e,name:s+1};a.push(t),s++}),a}return[]},getTypeList(){let e=this;e.$http.post(e,"/rest/admin/pointsMall/menu/list",{pageNo:-1,pageSize:10,typestatus:0},(e,t)=>{e.menuList=t.data.records},(t,i)=>{e.$message({showClose:!0,message:i.message,type:"error"})})},handleRemoveSubImages(e,t){let i=this.editForm.subImagesFile;this.editForm.subImagesFile=i.filter((function(t){return t.uid!==e.uid}))},handleRemoveDetailImages(e,t){let i=this.editForm.detailImagesFile;this.editForm.detailImagesFile=i.filter((function(t){return t.uid!==e.uid}))},beforeAvatarUpload(e){const t=e.size/1024/1024<6;return t||this.$message({showClose:!0,message:"上传图片大小不能超过 6MB!",type:"error"}),t},handleRemoveImagePath(e,t){let i=this.editForm.imagePathFile;this.editForm.imagePathFile=i.filter((function(t){return t.uid!==e.uid}))},upload(e){let t=e.file,i=new FormData;i.append("file",t),this.$http.postupload(this,"/rest/admin/uploadSingleImage",i,(function(t,i){e.onSuccess();let a={oldUrl:i.data,url:t.$http.publicUrl(i.data),uid:e.file.uid};"subImagesUpload"===e.filename?t.editForm.subImagesFile.push(a):"detailImagesUpload"===e.filename?t.editForm.detailImagesFile.push(a):t.editForm.imagePathFile.push(a)}),(function(t){e.onError()}))}},created(){this.getTypeList();let e=this.$route.query.id;this.getDetail(e),this.$orderPrint.init()}},r=(i(1099),i(276)),o=Object(r.a)(s,a,[],!1,null,"60d23364",null);t.default=o.exports}}]);