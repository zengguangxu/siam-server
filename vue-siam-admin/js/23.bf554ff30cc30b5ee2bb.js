(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1054:function(e,t,a){var i=a(1096);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(277)(i,r);i.locals&&(e.exports=i.locals)},1095:function(e,t,a){"use strict";a(1054)},1096:function(e,t,a){},1165:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("section",[t("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[t("el-form",{attrs:{inline:!0,model:e.searchMsg}},[t("el-form-item",{attrs:{label:"轮播图名称",prop:"imageName"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入轮播图名称"},model:{value:e.searchMsg.imageName,callback:function(t){e.$set(e.searchMsg,"imageName",t)},expression:"searchMsg.imageName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"轮播图类型",prop:"type"}},[t("el-select",{attrs:{clearable:""},model:{value:e.searchMsg.type,callback:function(t){e.$set(e.searchMsg,"type",t)},expression:"searchMsg.type"}},[t("el-option",{attrs:{label:"首页轮播图",value:1}}),e._v(" "),t("el-option",{attrs:{label:"积分商城页面轮播图",value:3}}),e._v(" "),t("el-option",{attrs:{label:"分享页面生成美图",value:4}})],1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getList(1)}}},[e._v("查询")])],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.gotoAdd("add")}}},[e._v("新增")])],1)],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"highlight-current-row":"","cell-style":e.cellStyle,"header-cell-style":e.headerCellStyle}},[t("el-table-column",{attrs:{label:"轮播图",prop:"imagePath"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("img",{attrs:{src:e.$http.publicUrl(a.row.imagePath),width:"50",height:"50"}})]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"imageName",label:"轮播图名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"description",label:"说明"}}),e._v(" "),t("el-table-column",{attrs:{prop:"type",label:"轮播图类型"},scopedSlots:e._u([{key:"default",fn:function(a){return[1==a.row.type?t("span",[e._v("首页轮播图")]):e._e(),e._v(" "),2==a.row.type?t("span",[e._v("菜单页轮播图")]):e._e(),e._v(" "),3==a.row.type?t("span",[e._v("积分商城页面轮播图")]):e._e(),e._v(" "),4==a.row.type?t("span",[e._v("分享页面生成美图")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"imageLinkUrl",label:"点击轮播图跳转的链接"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作",fixed:"right",width:"150"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"small"},on:{click:function(t){return e.gotoAdd("edit",a.row)}}},[e._v("编辑")]),e._v(" "),t("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.handleDel(a.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("el-col",{staticClass:"toolbar",attrs:{span:24}},[t("el-pagination",{staticStyle:{float:"right"},attrs:{"page-sizes":[10,20,50,100],"page-size":e.searchMsg.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),t("el-dialog",{attrs:{title:"编辑",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t},close:e.closeDialog}},[t("el-form",{ref:"editForm",staticClass:"advertisementForm",staticStyle:{width:"80%"},attrs:{model:e.editForm,"label-width":"150px",rules:e.editFormRules}},[t("el-form-item",{attrs:{label:"轮播图类型",prop:"type"}},[t("el-radio-group",{attrs:{size:"medium"},model:{value:e.editForm.type,callback:function(t){e.$set(e.editForm,"type",t)},expression:"editForm.type"}},[t("el-radio-button",{attrs:{label:"首页轮播图（宽450px * 高225px）",value:"1"}}),e._v(" "),t("el-radio-button",{attrs:{label:"积分商城页面轮播图（宽450px * 高225px）",value:"3"}}),e._v(" "),t("el-radio-button",{attrs:{label:"分享页面生成美图（宽1080px * 高1854px）",value:"4"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"轮播图名称",prop:"imageName"}},[t("el-input",{model:{value:e.editForm.imageName,callback:function(t){e.$set(e.editForm,"imageName",t)},expression:"editForm.imageName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"轮播图",prop:"imagePathFile"}},[t("el-upload",{ref:"upload",staticClass:"avatar-uploader",attrs:{accept:".image, .png, .jpg",action:"",multiple:"",name:"imagePathUpload","on-remove":e.handleRemoveImagePath,"before-upload":e.beforeAvatarUpload,"http-request":e.upload,"list-type":"picture-card"}},[t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),t("el-form-item",{attrs:{label:"说明",prop:"description"}},[t("el-input",{model:{value:e.editForm.description,callback:function(t){e.$set(e.editForm,"description",t)},expression:"editForm.description"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"点击轮播图跳转的链接",prop:"imageLinkUrl"}},[t("el-input",{model:{value:e.editForm.imageLinkUrl,callback:function(t){e.$set(e.editForm,"imageLinkUrl",t)},expression:"editForm.imageLinkUrl"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"排序号",prop:"sortNumber"}},[t("el-input",{model:{value:e.editForm.sortNumber,callback:function(t){e.$set(e.editForm,"sortNumber",t)},expression:"editForm.sortNumber"}})],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit.apply(null,arguments)}}},[e._v("提交")])],1)],1)],1)};i._withStripped=!0;var r=[],s={data:()=>({searchMsg:{pageNo:1,pageSize:20},list:[],total:0,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,editFormRules:{type:[{required:!0,message:"请选择轮播图类型",trigger:"change"}],imageName:[{required:!0,message:"请输入轮播图名称",trigger:"blur"}],tempImagePathFile:[{type:"array",required:!0,message:"请上传轮播图",trigger:"change"}],description:[{required:!1,message:"请输入说明",trigger:"blur"}],imageLinkUrl:[{required:!1,message:"请输入点击轮播图跳转的链接",trigger:"blur"}],sortNumber:[{required:!1,message:"请输入排序号",trigger:"blur"}]},editForm:{type:"",imageName:"",imagePathFile:[],description:"",imageLinkUrl:"",sortNumber:""}}),methods:{cellStyle:({row:e,column:t,rowIndex:a,columnIndex:i})=>"text-align:center",headerCellStyle:({row:e,rowIndex:t})=>"text-align:center",closeDialog(){this.$refs.editForm.resetFields()},formatTime(e,t){let a=new Date(e[t.property]),i=this.$utils.formatDate(a,"yyyy-MM-dd hh:mm:ss");return null!=e[t.property]&&"1970-01-01 08:00:00"!=i||(i="-"),i},formatType:(e,t)=>1==e.type?"首页轮播图":2==e.type?"菜单页轮播图":3==e.type?"积分商城页面轮播图":4==e.type?"分享页面生成美图":"-",addUnit:(e,t)=>(e[t.property]||0)+"元",handleSizeChange(e){this.searchMsg.pageSize=e,this.getList()},handleCurrentChange(e){this.searchMsg.pageNo=e,this.getList()},getList(e){e&&(this.searchMsg.pageNo=e);let t=this,a=Object.assign(t.searchMsg);t.listLoading=!0,t.$http.post(t,"/rest/admin/advertisement/list",a,(e,t)=>{e.list=t.data.records,e.total=t.data.total,e.listLoading=!1},(e,a)=>{alert(a),t.listLoading=!1,t.$message({showClose:!0,message:a.message,type:"error"})})},handleDel(e){this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(()=>{let t=this;t.$http.delete(t,"/rest/admin/advertisement/delete",{id:e},(function(e,t){e.$message({showClose:!0,message:t.message,type:"success"}),e.getList()}),(function(e,a){t.$message({showClose:!0,message:a.message,type:"error"})}))}).catch(()=>{})},gotoAdd(e,t){"add"===e?this.$router.push({path:"addAdvertisementList"}):this.$router.push({path:"editAdvertisementList",query:{id:t.id}})},handleEdit:function(e,t){this.editFormVisible=!0,t?(this.editForm={id:t.id,type:1==t.type?"首页轮播图（宽450px * 高225px）":2==t.type?"菜单页轮播图（宽450px * 高185px）":3==t.type?"积分商城页面轮播图（宽450px * 高225px）":4==t.type?"分享页面生成美图（宽1080px * 高1854px）":"-",imageName:t.imageName,imagePathFile:this.resetImg(t,"imagePath"),description:t.description,imageLinkUrl:t.imageLinkUrl,sortNumber:t.sortNumber},r=[],this.$refs.upload.clearFiles()):(this.editForm={type:"首页轮播图（宽450px * 高225px）",imageName:"",imagePathFile:"",description:"",imageLinkUrl:"",sortNumber:""},r=[],this.$refs.upload.clearFiles())},editSubmit:function(){this.$refs.editForm.validate(e=>{if(e){let e=this,t=Object.assign({},this.editForm),a="";if(!t.id&&!r.length)return e.$message({showClose:!0,message:"请上传轮播图",type:"error"}),!1;if(r.length>1)return e.$message({showClose:!0,message:"只能上传一张轮播图",type:"error"}),!1;t.imagePath=e.getIdByArr(r),delete t.imagePathFile,t.type="首页轮播图（宽450px * 高225px）"==t.type?1:"菜单页轮播图（宽450px * 高185px）"==t.type?2:"积分商城页面轮播图（宽450px * 高225px）"==t.type?3:"分享页面生成美图（宽1080px * 高1854px）"==t.type?4:"",t.id?(a="/rest/admin/advertisement/update",e.$http.put(e,a,t,(e,t)=>{e.$message({showClose:!0,message:t.message,type:"success"}),e.getList(),e.editFormVisible=!1},(t,a)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:a.message,type:"error"})})):(a="/rest/admin/advertisement/insert",e.$http.post(e,a,t,(e,t)=>{e.$message({showClose:!0,message:t.message,type:"success"}),e.getList(),e.editFormVisible=!1},(t,a)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:a.message,type:"error"})}))}})},handleRemoveImagePath(e,t){r=r.filter((function(t){return t.uid!==e.uid}))},beforeAvatarUpload(e){const t=e.size/1024/1024<6;return t||this.$message({showClose:!0,message:"上传图片大小不能超过 6MB!",type:"error"}),t},upload(e){let t=e.file,a=new FormData;a.append("file",t),this.$http.postupload(this,"/rest/admin/uploadSingleImage",a,(function(t,a){e.onSuccess();let i={url:a.data,uid:e.file.uid};"imagePathUpload"===e.filename&&r.push(i)}),(function(t){e.onError()}))},resetImg(e,t){if(e[t]){let a=e[t].split(","),i=[],r=0;return a.forEach(e=>{let t={url:this.$http.publicUrl(e),oldUrl:e,name:r+1};i.push(t),r++}),i}return[]},getIdByArr:e=>(e||[]).map(e=>null==e.oldUrl?e.url:e.oldUrl).join(",")},mounted(){this.getList(),this.$orderPrint.init()}},l=(a(1095),a(276)),o=Object(l.a)(s,i,[],!1,null,"b8915bc4",null);t.default=o.exports}}]);