(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1145:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e._self._c;return t("section",[t("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[t("el-form",{attrs:{inline:!0,model:e.searchMsg}},[t("el-form-item",{attrs:{label:"规则名称",prop:"name"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入规则名称"},model:{value:e.searchMsg.name,callback:function(t){e.$set(e.searchMsg,"name",t)},expression:"searchMsg.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"活动状态",prop:"status"}},[t("el-select",{attrs:{clearable:""},model:{value:e.searchMsg.status,callback:function(t){e.$set(e.searchMsg,"status",t)},expression:"searchMsg.status"}},[t("el-option",{attrs:{label:"开启",value:1}}),e._v(" "),t("el-option",{attrs:{label:"关闭",value:2}})],1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getList(1)}}},[e._v("查询")])],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.handleEdit}},[e._v("新增")])],1)],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"highlight-current-row":"","cell-style":e.cellStyle,"header-cell-style":e.headerCellStyle}},[t("el-table-column",{attrs:{prop:"name",label:"规则名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"limitedPrice",label:"满足价格",formatter:e.addUnit}}),e._v(" "),t("el-table-column",{attrs:{prop:"reducedPrice",label:"减价额度",formatter:e.addUnit}}),e._v(" "),t("el-table-column",{attrs:{prop:"status",label:"活动状态"},scopedSlots:e._u([{key:"default",fn:function(s){return[1==s.row.status?t("span",{staticStyle:{color:"black"}},[e._v("开启")]):2==s.row.status?t("span",{staticStyle:{color:"red"}},[e._v("关闭")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"操作",fixed:"right",width:"150"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{size:"small"},on:{click:function(t){return e.handleEdit(s.$index,s.row)}}},[e._v("编辑")]),e._v(" "),t("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.handleDel(s.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("el-col",{staticClass:"toolbar",attrs:{span:24}},[t("el-pagination",{staticStyle:{float:"right"},attrs:{"page-sizes":[10,20,50,100],"page-size":e.searchMsg.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),t("el-dialog",{attrs:{title:"编辑",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t},close:e.closeDialog}},[t("el-form",{ref:"editForm",staticStyle:{width:"80%"},attrs:{model:e.editForm,"label-width":"150px",rules:e.editFormRules}},[t("el-form-item",{attrs:{label:"规则名称",prop:"name"}},[t("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"满足价格",prop:"limitedPrice"}},[t("el-input",{model:{value:e.editForm.limitedPrice,callback:function(t){e.$set(e.editForm,"limitedPrice",t)},expression:"editForm.limitedPrice"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"减价额度",prop:"reducedPrice"}},[t("el-input",{model:{value:e.editForm.reducedPrice,callback:function(t){e.$set(e.editForm,"reducedPrice",t)},expression:"editForm.reducedPrice"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"活动状态",prop:"status"}},[t("el-radio-group",{attrs:{size:"medium"},model:{value:e.editForm.status,callback:function(t){e.$set(e.editForm,"status",t)},expression:"editForm.status"}},[t("el-radio-button",{attrs:{label:"开启",value:"1"}}),e._v(" "),t("el-radio-button",{attrs:{label:"关闭",value:"2"}})],1)],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit.apply(null,arguments)}}},[e._v("提交")])],1)],1)],1)};i._withStripped=!0;var a={data:()=>({searchMsg:{pageNo:1,pageSize:20},list:[],total:0,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,editFormRules:{name:[{required:!0,message:"请输入规则名称",trigger:"blur"}],limitedPrice:[{required:!0,message:"请输入满足价格",trigger:"blur"}],reducedPrice:[{required:!0,message:"请输入减价额度",trigger:"blur"}],status:[{required:!0,message:"请选择活动状态",trigger:"change"}]},editForm:{name:"",limitedPrice:"",reducedPrice:"",status:!1}}),methods:{cellStyle:({row:e,column:t,rowIndex:s,columnIndex:i})=>"text-align:center",headerCellStyle:({row:e,rowIndex:t})=>"text-align:center",closeDialog(){this.$refs.editForm.resetFields()},formatTime(e,t){let s=new Date(e[t.property]),i=this.$utils.formatDate(s,"yyyy-MM-dd hh:mm:ss");return null!=e[t.property]&&"1970-01-01 08:00:00"!=i||(i="-"),i},formatType:(e,t)=>1==e.status?"开启":"关闭",addUnit:(e,t)=>(e[t.property]||0)+"元",handleSizeChange(e){this.searchMsg.pageSize=e,this.getList()},handleCurrentChange(e){this.searchMsg.pageNo=e,this.getList()},getList(e){e&&(this.searchMsg.pageNo=e);let t=this,s=Object.assign(t.searchMsg);t.listLoading=!0,t.$http.post(t,"/rest/admin/pointsMall/fullReductionRule/list",s,(e,t)=>{e.list=t.data.records,e.total=t.data.total,e.listLoading=!1},(e,s)=>{t.listLoading=!1,t.$message({showClose:!0,message:s.message,type:"error"})})},handleDel(e){this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(()=>{let t=this;t.$http.delete(t,"/rest/admin/pointsMall/fullReductionRule/delete",{id:e},(function(e,t){e.$message({showClose:!0,message:t.message,type:"success"}),e.getList()}),(function(e,s){t.$message({showClose:!0,message:s.message,type:"error"})}))}).catch(()=>{})},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=t?{id:t.id,name:t.name,limitedPrice:t.limitedPrice,reducedPrice:t.reducedPrice,status:1==t.status?"开启":"关闭"}:{name:"",limitedPrice:"",reducedPrice:"",status:"开启"}},editSubmit:function(){this.$refs.editForm.validate(e=>{if(e){let e=this,t=Object.assign({},this.editForm),s="";if(parseFloat(t.reducedPrice)>=parseFloat(t.limitedPrice))return e.$message({showClose:!0,message:"减价额度必须小于满足价格",type:"error"}),!1;this.editLoading=!0,t.status="开启"==t.status?1:2,t.id?(s="/rest/admin/pointsMall/fullReductionRule/update",e.$http.put(e,s,t,(e,t)=>{this.editLoading=!1,e.$message({showClose:!0,message:t.message,type:"success"}),e.getList(),e.editFormVisible=!1},(t,s)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:s.message,type:"error"})})):(s="/rest/admin/pointsMall/fullReductionRule/insert",e.$http.post(e,s,t,(e,t)=>{this.editLoading=!1,e.$message({showClose:!0,message:t.message,type:"success"}),e.getList(),e.editFormVisible=!1},(t,s)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:s.message,type:"error"})}))}})}},mounted(){this.getList(),this.$orderPrint.init()}},l=s(276),r=Object(l.a)(a,i,[],!1,null,"33351564",null);t.default=r.exports}}]);