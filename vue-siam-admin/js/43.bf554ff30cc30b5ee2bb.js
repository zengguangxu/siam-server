(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1180:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e._self._c;return t("section",[t("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[t("el-form",{attrs:{inline:!0,model:e.searchMsg}},[t("el-form-item",{attrs:{label:""}},[t("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.searchMsg.createTime,callback:function(t){e.$set(e.searchMsg,"createTime",t)},expression:"searchMsg.createTime"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getList(1)}}},[e._v("查询")])],1)],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"highlight-current-row":"","cell-style":e.cellStyle,"header-cell-style":e.headerCellStyle}},[t("el-table-column",{attrs:{prop:"shopName",label:"店铺名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"username",label:"用户名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"orderNo",label:"订单编号"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",[t("a",{staticStyle:{color:"blue"},attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.goOrderDetail(s.row.orderId)}}},[e._v(e._s(s.row.orderNo))])])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"content",label:"评价内容"}}),e._v(" "),t("el-table-column",{attrs:{prop:"level",label:"店铺打分"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",[e._v(e._s(s.row.level)+"星")])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"replyList",label:"回复数量"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",[e._v(e._s(s.row.replyPage.records.length)+"个")])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"giveLikeCount",label:"点赞数量"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",[e._v(e._s(s.row.giveLikeCount)+"个")])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"createTime",label:"评价时间",formatter:e.formatTime,width:"190"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作",fixed:"right",width:"150"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.handleDel(s.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("el-col",{staticClass:"toolbar",attrs:{span:24}},[t("el-pagination",{staticStyle:{float:"right"},attrs:{"page-sizes":[10,20,50,100],"page-size":e.searchMsg.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),t("el-dialog",{attrs:{title:"编辑",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t},close:e.closeDialog}},[t("el-form",{ref:"editForm",staticStyle:{width:"80%"},attrs:{model:e.editForm,"label-width":"150px",rules:e.editFormRules}},[t("el-form-item",{attrs:{label:"回复内容",prop:"content"}},[t("el-input",{attrs:{type:"textarea",rows:6},model:{value:e.editForm.content,callback:function(t){e.$set(e.editForm,"content",t)},expression:"editForm.content"}})],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit.apply(null,arguments)}}},[e._v("提交")])],1)],1)],1)};i._withStripped=!0;var a={data:()=>({pickerOptions:{shortcuts:[{text:"最近一周",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-6048e5),e.$emit("pick",[s,t])}},{text:"最近两周",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-12096e5),e.$emit("pick",[s,t])}},{text:"最近一月",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-2592e6),e.$emit("pick",[s,t])}},{text:"最近三月",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-7776e6),e.$emit("pick",[s,t])}},{text:"最近半年",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-15552e6),e.$emit("pick",[s,t])}},{text:"最近一年",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-31104e6),e.$emit("pick",[s,t])}},{text:"最近两年",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-62208e6),e.$emit("pick",[s,t])}},{text:"最近三年",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-93312e6),e.$emit("pick",[s,t])}}]},searchMsg:{pageNo:1,pageSize:20},list:[],total:0,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,editFormRules:{content:[{required:!0,message:"请输入回复内容",trigger:"blur"}]},editForm:{content:""}}),methods:{cellStyle:({row:e,column:t,rowIndex:s,columnIndex:i})=>"text-align:center",headerCellStyle:({row:e,rowIndex:t})=>"text-align:center",closeDialog(){this.$refs.editForm.resetFields()},formatTime(e,t){let s=new Date(e[t.property]),i=this.$utils.formatDate(s,"yyyy-MM-dd hh:mm:ss");return null!=e[t.property]&&"1970-01-01 08:00:00"!=i||(i="-"),i},formatType:(e,t)=>1==e.stock?"有货":"无货",addUnit:(e,t)=>(e[t.property]||0)+"元",goOrderDetail(e){e&&this.$router.push({path:"orderDetail",query:{id:e}})},handleSizeChange(e){this.searchMsg.pageSize=e,this.getList()},handleCurrentChange(e){this.searchMsg.pageNo=e,this.getList()},getList(e){e&&(this.searchMsg.pageNo=e);let t=this,s=Object.assign(t.searchMsg);if(t.searchMsg.createTime){let e=t.searchMsg.createTime[0],i=t.searchMsg.createTime[1];s.startCreateTime=this.$utils.formatDate(new Date(e),"yyyy/MM/dd hh:mm:ss"),s.endCreateTime=this.$utils.formatDate(new Date(i),"yyyy/MM/dd hh:mm:ss"),delete s.createTime}t.listLoading=!0,t.$http.post(t,"/rest/admin/appraise/list",s,(e,t)=>{e.list=t.data.records,e.total=t.data.total,e.listLoading=!1},(e,s)=>{t.listLoading=!1,t.$message({showClose:!0,message:s.message,type:"error"})})},handleDel(e){this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(()=>{let t=this;t.$http.delete(t,"/rest/admin/appraise/delete",{id:e},(function(e,t){e.$message({showClose:!0,message:t.message,type:"success"}),e.getList()}),(function(e,s){t.$message({showClose:!0,message:s.message,type:"error"})}))}).catch(()=>{})},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=t?{appraiseId:t.id}:{name:""}},editSubmit:function(){this.$refs.editForm.validate(e=>{if(e){let e=this,t=Object.assign({},this.editForm);t.replyType=1;let s="/rest/admin/reply/insert";e.$http.post(e,s,t,(e,t)=>{e.$message({showClose:!0,message:t.message,type:"success"}),e.getList(),e.editFormVisible=!1},(t,s)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:s.message,type:"error"})})}})}},mounted(){this.getList(),this.$orderPrint.init()}},l=s(276),r=Object(l.a)(a,i,[],!1,null,"2481b4ce",null);t.default=r.exports}}]);