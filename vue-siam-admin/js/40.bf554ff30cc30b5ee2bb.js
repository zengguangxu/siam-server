(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1152:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e._self._c;return t("section",[t("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[t("el-form",{attrs:{inline:!0,model:e.searchMsg}},[t("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入分类名称"},model:{value:e.searchMsg.name,callback:function(t){e.$set(e.searchMsg,"name",t)},expression:"searchMsg.name"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getList(1)}}},[e._v("查询")])],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.gotoAdd("add")}}},[e._v("新增")])],1)],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"highlight-current-row":"","cell-style":e.cellStyle,"header-cell-style":e.headerCellStyle}},[t("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),e._v(" "),t("el-table-column",{attrs:{label:"分类图标",prop:"icon"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("img",{attrs:{src:e.$http.publicUrl(i.row.icon),width:"50",height:"50"}})]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"description",label:"描述"}}),e._v(" "),t("el-table-column",{attrs:{prop:"createTime",label:"创建时间",formatter:e.formatTime}}),e._v(" "),t("el-table-column",{attrs:{prop:"updateTime",label:"修改时间",formatter:e.formatTime}}),e._v(" "),t("el-table-column",{attrs:{label:"操作",fixed:"right",width:"150"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-button",{attrs:{size:"small"},on:{click:function(t){return e.gotoAdd("edit",i.row)}}},[e._v("编辑")]),e._v(" "),t("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.handleDel(i.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("el-col",{staticClass:"toolbar",attrs:{span:24}},[t("el-pagination",{staticStyle:{float:"right"},attrs:{"page-sizes":[10,20,50,100],"page-size":e.searchMsg.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),t("el-dialog",{attrs:{title:"编辑",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t},close:e.closeDialog}},[t("el-form",{ref:"editForm",staticStyle:{width:"80%"},attrs:{model:e.editForm,"label-width":"150px",rules:e.editFormRules}},[t("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[t("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),t("el-form-item",{staticClass:"iconFileItem",attrs:{label:"分类图标（宽400px * 高400px）",prop:"iconFile"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{accept:".image, .png, .jpg",action:"",multiple:"",name:"iconUpload","on-remove":e.handleRemoveMainImage,"before-upload":e.beforeAvatarUpload,"http-request":e.upload,"list-type":"picture-card"}},[t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),t("el-form-item",{attrs:{label:"描述",prop:"description"}},[t("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.editForm.description,callback:function(t){e.$set(e.editForm,"description",t)},expression:"editForm.description"}})],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit.apply(null,arguments)}}},[e._v("提交")])],1)],1)],1)};s._withStripped=!0;var a={data:()=>({searchMsg:{pageNo:1,pageSize:20},list:[],total:0,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,editFormRules:{isDisabled:[{required:!0,message:"请选择分类状态",trigger:"change"}],name:[{required:!0,message:"请输入分类名称",trigger:"blur"}],description:[{required:!1,message:"请输入分类描述",trigger:"blur"}],iconFile:[{type:"array",required:!0,message:"请上传主图",trigger:"change"}]},editForm:{isDisabled:!1,name:"",description:"",iconFile:[]}}),methods:{handleRemoveMainImage(e,t){let i=this.editForm.iconFile;this.editForm.iconFile=i.filter((function(t){return t.uid!==e.uid}))},upload(e){let t=e.file,i=new FormData;i.append("file",t),this.$http.postupload(this,"/rest/admin/uploadSingleImage",i,(function(t,i){e.onSuccess();let s={url:i.data,uid:e.file.uid};"subImagesUpload"===e.filename?t.editForm.subImagesFile.push(s):"detailImagesUpload"===e.filename?t.editForm.detailImagesFile.push(s):t.editForm.iconFile.push(s)}),(function(t){e.onError()}))},cellStyle:({row:e,column:t,rowIndex:i,columnIndex:s})=>"text-align:center",headerCellStyle:({row:e,rowIndex:t})=>"text-align:center",closeDialog(){this.$refs.editForm.resetFields()},formatTime(e,t){let i=new Date(e[t.property]),s=this.$utils.formatDate(i,"yyyy-MM-dd hh:mm:ss");return null!=e[t.property]&&"1970-01-01 08:00:00"!=s||(s="-"),s},formatType:(e,t)=>e.isDisabled?"禁用":"正常",handleSizeChange(e){this.searchMsg.pageSize=e,this.getList()},handleCurrentChange(e){this.searchMsg.pageNo=e,this.getList()},getList(e){e&&(this.searchMsg.pageNo=e);let t=this,i=Object.assign(t.searchMsg);t.listLoading=!0,t.$http.post(t,"/rest/admin/pointsMall/menu/list",i,(e,t)=>{e.list=t.data.records,e.total=t.data.total,e.listLoading=!1},(e,i)=>{t.listLoading=!1,t.$message({showClose:!0,message:i.message,type:"error"})})},handleDel(e){this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(()=>{let t=this;t.$http.delete(t,"/rest/admin/pointsMall/menu/delete",{ids:[e]},(function(e,t){e.$message({showClose:!0,message:t.message,type:"success"}),e.getList()}),(function(e,i){t.$message({showClose:!0,message:i.message,type:"error"})}))}).catch(()=>{})},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=t?{id:t.id,isDisabled:t.isDisabled,name:t.name,description:t.description}:{isDisabled:0,name:"",description:""}},gotoAdd(e,t){"add"===e?this.$router.push({path:"pointsMall_addMenu"}):this.$router.push({path:"pointsMall_editMenu",query:{id:t.id}})},editSubmit:function(){this.$refs.editForm.validate(e=>{if(e){this.editLoading=!0;let e=this;if(!e.editForm.iconFile.length)return e.$message({showClose:!0,message:"请上传商品主图",type:"error"}),!1;if(e.editForm.iconFile.length>1)return e.$message({showClose:!0,message:"只能上传一张商品主图",type:"error"}),!1;let t=Object.assign({},this.editForm);t.icon=e.getIdByArr(t.iconFile),delete t.iconFile;let i="";t.id?(i="/rest/admin/pointsMall/menu/update",e.$http.put(e,i,t,(e,t)=>{this.editLoading=!1,e.$message({showClose:!0,message:t.message,type:"success"}),e.getList(),e.editFormVisible=!1},(t,i)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:i.message,type:"error"})})):(i="/rest/admin/pointsMall/menu/insert",e.$http.post(e,i,t,(e,t)=>{this.editLoading=!1,e.$message({showClose:!0,message:t.message,type:"success"}),e.getList(),e.editFormVisible=!1},(t,i)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:i.message,type:"error"})}))}})}},mounted(){this.getList(),this.$orderPrint.init()}},l=i(276),o=Object(l.a)(a,s,[],!1,null,"5d6e8dac",null);t.default=o.exports}}]);