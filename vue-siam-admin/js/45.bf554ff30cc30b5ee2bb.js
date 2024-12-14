(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1177:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("section",[t("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[t("el-form",{attrs:{inline:!0,model:e.searchMsg}},[t("el-form-item",{attrs:{label:"文案名称",prop:"name"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入文案名称"},model:{value:e.searchMsg.name,callback:function(t){e.$set(e.searchMsg,"name",t)},expression:"searchMsg.name"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getList(1)}}},[e._v("查询")])],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.handleEdit}},[e._v("新增")])],1)],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"highlight-current-row":"","cell-style":e.cellStyle,"header-cell-style":e.headerCellStyle}},[t("el-table-column",{attrs:{prop:"name",label:"文案名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"content",label:"文案内容"}}),e._v(" "),t("el-table-column",{attrs:{prop:"pushedNumber",label:"已推送次数"}}),e._v(" "),t("el-table-column",{attrs:{prop:"lastPushedTime",label:"上次推送时间",formatter:e.formatTime}}),e._v(" "),t("el-table-column",{attrs:{prop:"createTime",label:"创建时间",formatter:e.formatTime}}),e._v(" "),t("el-table-column",{attrs:{prop:"updateTime",label:"修改时间",formatter:e.formatTime}}),e._v(" "),t("el-table-column",{attrs:{label:"操作",fixed:"right",width:"150"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{type:"small",size:"small"},on:{click:function(t){return e.handlePush(s.row.id)}}},[e._v("推送")]),e._v(" "),t("el-button",{attrs:{size:"small"},on:{click:function(t){return e.handleEdit(s.$index,s.row)}}},[e._v("编辑")]),e._v(" "),t("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.handleDel(s.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("el-col",{staticClass:"toolbar",attrs:{span:24}},[t("el-pagination",{staticStyle:{float:"right"},attrs:{"page-sizes":[10,20,50,100],"page-size":e.searchMsg.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),t("el-dialog",{attrs:{title:"编辑",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t},close:e.closeDialog}},[t("el-form",{ref:"editForm",staticStyle:{width:"80%"},attrs:{model:e.editForm,"label-width":"150px",rules:e.editFormRules}},[t("el-form-item",{attrs:{label:"文案名称",prop:"name"}},[t("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"文案内容",prop:"content"}},[t("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.editForm.content,callback:function(t){e.$set(e.editForm,"content",t)},expression:"editForm.content"}})],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit.apply(null,arguments)}}},[e._v("提交")])],1)],1)],1)};a._withStripped=!0;var i={data:()=>({searchMsg:{pageNo:1,pageSize:20},list:[],total:0,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,editFormRules:{name:[{required:!0,message:"请输入文案名称",trigger:"blur"}],content:[{required:!0,message:"请输入文案内容",trigger:"blur"}]},editForm:{name:"",content:""}}),methods:{cellStyle:({row:e,column:t,rowIndex:s,columnIndex:a})=>"text-align:center",headerCellStyle:({row:e,rowIndex:t})=>"text-align:center",closeDialog(){this.$refs.editForm.resetFields()},formatTime(e,t){let s=new Date(e[t.property]),a=this.$utils.formatDate(s,"yyyy-MM-dd hh:mm:ss");return null!=e[t.property]&&"1970-01-01 08:00:00"!=a||(a="-"),a},formatType:(e,t)=>e.isDisabled?"禁用":"正常",handleSizeChange(e){this.searchMsg.pageSize=e,this.getList()},handleCurrentChange(e){this.searchMsg.pageNo=e,this.getList()},getList(e){e&&(this.searchMsg.pageNo=e);let t=this,s=Object.assign(t.searchMsg);t.listLoading=!0,t.$http.post(t,"/rest/admin/paperworkPush/list",s,(e,t)=>{e.list=t.data.records,e.total=t.data.total,e.listLoading=!1},(e,s)=>{t.listLoading=!1,t.$message({showClose:!0,message:s.message,type:"error"})})},handlePush(e){this.$confirm("确认推送该文案吗?","提示",{type:"warning"}).then(()=>{let t=this;t.$http.put(t,"/rest/admin/paperworkPush/push",{id:e},(function(e,t){e.$message({showClose:!0,message:t.message,type:"success"}),e.getList()}),(function(e,s){t.$message({showClose:!0,message:s.message,type:"error"})}))}).catch(()=>{})},handleDel(e){this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(()=>{let t=this;t.$http.delete(t,"/rest/admin/paperworkPush/delete",{ids:[e]},(function(e,t){e.$message({showClose:!0,message:t.message,type:"success"}),e.getList()}),(function(e,s){t.$message({showClose:!0,message:s.message,type:"error"})}))}).catch(()=>{})},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=t?{id:t.id,sex:t.sex,name:t.name,content:t.content}:{sex:"男",name:"",content:""}},editSubmit:function(){this.$refs.editForm.validate(e=>{if(e){let e=this,t=Object.assign({},this.editForm),s="";t.id?(s="/rest/admin/paperworkPush/update",e.$http.put(e,s,t,(e,t)=>{e.$message({showClose:!0,message:t.message,type:"success"}),e.getList(),e.editFormVisible=!1},(t,s)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:s.message,type:"error"})})):(s="/rest/admin/paperworkPush/insert",e.$http.post(e,s,t,(e,t)=>{e.$message({showClose:!0,message:t.message,type:"success"}),e.getList(),e.editFormVisible=!1},(t,s)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:s.message,type:"error"})}))}})}},mounted(){this.getList()}},l=s(276),r=Object(l.a)(i,a,[],!1,null,"4ff129c8",null);t.default=r.exports}}]);