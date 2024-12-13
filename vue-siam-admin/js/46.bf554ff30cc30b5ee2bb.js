(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1160:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("section",[t("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[t("el-form",{attrs:{inline:!0,model:e.searchMsg}},[t("el-form-item",{attrs:{label:"真实姓名",prop:"realname"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入真实姓名"},model:{value:e.searchMsg.realname,callback:function(t){e.$set(e.searchMsg,"realname",t)},expression:"searchMsg.realname"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"门店名称",prop:"shopName"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入门店名称"},model:{value:e.searchMsg.shopName,callback:function(t){e.$set(e.searchMsg,"shopName",t)},expression:"searchMsg.shopName"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getList(1)}}},[e._v("查询")])],1)],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"highlight-current-row":"","cell-style":e.cellStyle,"header-cell-style":e.headerCellStyle}},[t("el-table-column",{attrs:{prop:"realname",label:"真实姓名"}}),e._v(" "),t("el-table-column",{attrs:{prop:"phone",label:"联系电话"}}),e._v(" "),t("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(s){return[0==s.row.sex?t("span",[e._v("无")]):1==s.row.sex?t("span",[e._v("男")]):2==s.row.sex?t("span",[e._v("女")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"shopName",label:"所属门店"}}),e._v(" "),t("el-table-column",{attrs:{prop:"createTime",label:"创建时间",formatter:e.formatTime}}),e._v(" "),t("el-table-column",{attrs:{prop:"updateTime",label:"修改时间",formatter:e.formatTime}})],1),e._v(" "),t("el-col",{staticClass:"toolbar",attrs:{span:24}},[t("el-pagination",{staticStyle:{float:"right"},attrs:{"page-sizes":[10,20,50,100],"page-size":e.searchMsg.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),t("el-dialog",{attrs:{title:"编辑",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t},close:e.closeDialog}},[t("el-form",{ref:"editForm",staticStyle:{width:"80%"},attrs:{model:e.editForm,"label-width":"150px",rules:e.editFormRules}},[t("el-form-item",{attrs:{label:"真实姓名",prop:"realname"}},[t("el-input",{model:{value:e.editForm.realname,callback:function(t){e.$set(e.editForm,"realname",t)},expression:"editForm.realname"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[t("el-input",{model:{value:e.editForm.phone,callback:function(t){e.$set(e.editForm,"phone",t)},expression:"editForm.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别",prop:"sex"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.sex,callback:function(t){e.$set(e.editForm,"sex",t)},expression:"editForm.sex"}},[t("el-option",{attrs:{label:"男",value:1}}),e._v(" "),t("el-option",{attrs:{label:"女",value:2}})],1)],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit.apply(null,arguments)}}},[e._v("提交")])],1)],1)],1)};a._withStripped=!0;var l={data:()=>({searchMsg:{pageNo:1,pageSize:20},list:[],total:0,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,editFormRules:{sex:[{required:!1,message:"请选择性别",trigger:"change"}],realname:[{required:!0,message:"请输入真实姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入联系电话",trigger:"blur"}]},editForm:{sex:"男",realname:"",phone:""}}),methods:{cellStyle:({row:e,column:t,rowIndex:s,columnIndex:a})=>"text-align:center",headerCellStyle:({row:e,rowIndex:t})=>"text-align:center",closeDialog(){this.$refs.editForm.resetFields()},formatTime(e,t){let s=new Date(e[t.property]),a=this.$utils.formatDate(s,"yyyy-MM-dd hh:mm:ss");return null!=e[t.property]&&"1970-01-01 08:00:00"!=a||(a="-"),a},formatType:(e,t)=>e.isDisabled?"禁用":"正常",handleSizeChange(e){this.searchMsg.pageSize=e,this.getList()},handleCurrentChange(e){this.searchMsg.pageNo=e,this.getList()},getList(e){e&&(this.searchMsg.pageNo=e);let t=this,s=Object.assign(t.searchMsg);t.listLoading=!0,t.$http.post(t,"/rest/admin/courier/list",s,(e,t)=>{e.list=t.data.records,e.total=t.data.total,e.listLoading=!1},(e,s)=>{t.listLoading=!1,t.$message({showClose:!0,message:s.message,type:"error"})})},handleDel(e){this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(()=>{let t=this;t.$http.delete(t,"/rest/admin/courier/delete",{ids:[e]},(function(e,t){e.$message({showClose:!0,message:t.message,type:"success"}),e.getList()}),(function(e,s){t.$message({showClose:!0,message:s.message,type:"error"})}))}).catch(()=>{})},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=t?{id:t.id,sex:t.sex,realname:t.realname,phone:t.phone}:{sex:"男",realname:"",phone:""}},editSubmit:function(){this.$refs.editForm.validate(e=>{if(e){let e=this,t=Object.assign({},this.editForm);if(!/^1(3|4|5|7|8)\d{9}$/.test(t.phone))return e.$message({showClose:!0,message:"请输入正确的手机号",type:"error"}),!1;"男"==t.sex?t.sex=1:"女"==t.sex&&(t.sex=2);let s="";t.id?(s="/rest/admin/courier/update",e.$http.put(e,s,t,(e,t)=>{e.$message({showClose:!0,message:t.message,type:"success"}),e.getList(),e.editFormVisible=!1},(t,s)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:s.message,type:"error"})})):(s="/rest/admin/courier/insert",e.$http.post(e,s,t,(e,t)=>{e.$message({showClose:!0,message:t.message,type:"success"}),e.getList(),e.editFormVisible=!1},(t,s)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:s.message,type:"error"})}))}})}},mounted(){this.getList(),this.$orderPrint.init()}},r=s(276),i=Object(r.a)(l,a,[],!1,null,"2a20f685",null);t.default=i.exports}}]);