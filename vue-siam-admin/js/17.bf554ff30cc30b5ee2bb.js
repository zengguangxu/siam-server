(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1048:function(e,t,s){var a=s(1084);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(277)(a,r);a.locals&&(e.exports=a.locals)},1083:function(e,t,s){"use strict";s(1048)},1084:function(e,t,s){},1179:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("section",[t("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[t("el-form",{attrs:{inline:!0,model:e.searchMsg}},[t("el-form-item",[t("el-select",{attrs:{placeholder:"请选择购物方式搜索",clearable:""},model:{value:e.searchMsg.shoppingWay,callback:function(t){e.$set(e.searchMsg,"shoppingWay",t)},expression:"searchMsg.shoppingWay"}},[t("el-option",{attrs:{label:"自取",value:1}}),e._v(" "),t("el-option",{attrs:{label:"配送",value:2}})],1)],1),e._v(" "),t("el-form-item",[t("el-input",{attrs:{placeholder:"请输入取餐号搜索",clearable:""},model:{value:e.searchMsg.queueNo,callback:function(t){e.$set(e.searchMsg,"queueNo",t)},expression:"searchMsg.queueNo"}})],1),e._v(" "),t("el-form-item",[t("el-input",{attrs:{placeholder:"请输入联系电话搜索",clearable:""},model:{value:e.searchMsg.contactPhone,callback:function(t){e.$set(e.searchMsg,"contactPhone",t)},expression:"searchMsg.contactPhone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:""}},[t("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.searchMsg.createTime,callback:function(t){e.$set(e.searchMsg,"createTime",t)},expression:"searchMsg.createTime"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getList(1)}}},[e._v("查询")])],1)],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"highlight-current-row":"","cell-style":e.cellStyle,"header-cell-style":e.headerCellStyle}},[t("el-table-column",{attrs:{prop:"shopName",label:"店铺名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"queueNo",label:"取餐号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"description",label:"订单描述"}}),e._v(" "),t("el-table-column",{attrs:{prop:"goodsTotalPrice",label:"订单总额"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",[e._v(e._s(s.row.goodsTotalPrice+s.row.packingCharges+s.row.deliveryFee)+"元")])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"paymentMode",label:"支付方式"},scopedSlots:e._u([{key:"default",fn:function(s){return[1==s.row.paymentMode?t("span",[e._v("微信支付")]):2==s.row.paymentMode?t("span",[e._v("平台余额")]):3==s.row.paymentMode?t("span",[e._v("平台积分")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"actualPrice",label:"实付款",formatter:e.addUnit}}),e._v(" "),t("el-table-column",{attrs:{prop:"goodsTotalQuantity",label:"商品总数量"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",[e._v(e._s(s.row.goodsTotalQuantity)+"件")])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"remark",label:"备注"}}),e._v(" "),t("el-table-column",{attrs:{prop:"shoppingWay",label:"购物方式",formatter:e.formatShoppingWay}}),e._v(" "),t("el-table-column",{attrs:{prop:"contactRealname",label:"联系人姓名",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"contactPhone",label:"联系电话",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"contactProvince",label:"派送地址",width:"190"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\t\t\t\t\t"+e._s(t.row.contactProvince)+" - "+e._s(t.row.contactCity)+" - "+e._s(t.row.contactArea)+" - "+e._s(t.row.contactStreet)+"\n\t\t\t\t")]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"status",label:"订单状态",width:"100",formatter:e.formatOrder}}),e._v(" "),t("el-table-column",{attrs:{prop:"createTime",label:"下单时间",formatter:e.formatTime,width:"190"}}),e._v(" "),t("el-table-column",{attrs:{prop:"refundType",label:"退款类型"},scopedSlots:e._u([{key:"default",fn:function(s){return[1==s.row.refundType?t("span",[e._v("已支付订单1分钟内被取消")]):e._e(),e._v(" "),2==s.row.refundType?t("span",[e._v("已支付订单24小时内申请退款")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"refundWay",label:"退款方式"},scopedSlots:e._u([{key:"default",fn:function(s){return[1==s.row.refundWay?t("span",[e._v("全额退款")]):e._e(),e._v(" "),2==s.row.refundWay?t("span",[e._v("部分退款")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"refundReason",label:"退款原因"},scopedSlots:e._u([{key:"default",fn:function(s){return[1==s.row.refundReason?t("span",[e._v("信息填写错误")]):e._e(),e._v(" "),2==s.row.refundReason?t("span",[e._v("送达时间选错了")]):e._e(),e._v(" "),3==s.row.refundReason?t("span",[e._v("买错了/买少了")]):e._e(),e._v(" "),4==s.row.refundReason?t("span",[e._v("商家缺货")]):e._e(),e._v(" "),5==s.row.refundReason?t("span",[e._v("商家联系我取消")]):e._e(),e._v(" "),6==s.row.refundReason?t("span",[e._v("配送太慢")]):e._e(),e._v(" "),7==s.row.refundReason?t("span",[e._v("骑手联系我取消")]):e._e(),e._v(" "),8==s.row.refundReason?t("span",[e._v("我不想要了")]):e._e(),e._v(" "),9==s.row.refundReason?t("span",[e._v("商家通知我卖完了")]):e._e(),e._v(" "),10==s.row.refundReason?t("span",[e._v("商家沟通态度差")]):e._e(),e._v(" "),11==s.row.refundReason?t("span",[e._v("骑手沟通态度差")]):e._e(),e._v(" "),12==s.row.refundReason?t("span",[e._v("送太慢了，等太久了")]):e._e(),e._v(" "),13==s.row.refundReason?t("span",[e._v("商品撒漏/包装破损")]):e._e(),e._v(" "),14==s.row.refundReason?t("span",[e._v("商家少送商品")]):e._e(),e._v(" "),15==s.row.refundReason?t("span",[e._v("商家送错商品")]):e._e(),e._v(" "),16==s.row.refundReason?t("span",[e._v("口味不佳/个人感受不好")]):e._e(),e._v(" "),17==s.row.refundReason?t("span",[e._v("餐品内有异物")]):e._e(),e._v(" "),18==s.row.refundReason?t("span",[e._v("食用后引起身体不适")]):e._e(),e._v(" "),19==s.row.refundReason?t("span",[e._v("商品变质/有异味")]):e._e(),e._v(" "),20==s.row.refundReason?t("span",[e._v("其他")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"refundAmount",label:"退款金额",formatter:e.addUnit}}),e._v(" "),t("el-table-column",{attrs:{prop:"refundStatus",label:"退款原因"},scopedSlots:e._u([{key:"default",fn:function(s){return[1==s.row.refundStatus?t("span",[e._v("退款申请已提交")]):e._e(),e._v(" "),2==s.row.refundStatus?t("span",[e._v("等待商家处理")]):e._e(),e._v(" "),3==s.row.refundStatus?t("span",[e._v("商家拒绝退款")]):e._e(),e._v(" "),4==s.row.refundStatus?t("span",[e._v("等待平台处理")]):e._e(),e._v(" "),5==s.row.refundStatus?t("span",[e._v("平台拒绝退款，退款已关闭")]):e._e(),e._v(" "),6==s.row.refundStatus?t("span",[e._v("退款已关闭")]):e._e(),e._v(" "),7==s.row.refundStatus?t("span",[e._v("退款成功")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"refundCreateTime",label:"申请退款时间",formatter:e.formatTime,width:"190"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(s){return[2!=s.row.refundType||4!=s.row.refundStatus&&6!=s.row.refundStatus?e._e():t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.handleCheck(s.row)}}},[e._v("处理")]),e._v(" "),t("el-button",{attrs:{size:"small"},on:{click:function(t){return e.gotoOtherPage("view",s.row)}}},[e._v("订单详情")])]}}])})],1),e._v(" "),t("el-col",{staticClass:"toolbar",attrs:{span:24}},[t("el-pagination",{staticStyle:{float:"right"},attrs:{"page-sizes":[10,20,50,100],"page-size":e.searchMsg.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),t("el-dialog",{attrs:{title:"处理",visible:e.checkFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.checkFormVisible=t}}},[t("el-form",{ref:"checkEdit",attrs:{model:e.checkEdit,"label-width":"150px"}},[t("el-form-item",{attrs:{label:"是否通过",prop:"status"}},[t("el-radio-group",{model:{value:e.checkEdit.status,callback:function(t){e.$set(e.checkEdit,"status",t)},expression:"checkEdit.status"}},[t("el-radio",{staticClass:"radio",attrs:{label:1}},[e._v("通过")]),e._v(" "),t("el-radio",{staticClass:"radio",attrs:{label:2}},[e._v("不通过")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"审核意见",prop:"opinion"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.checkEdit.opinion,callback:function(t){e.$set(e.checkEdit,"opinion",t)},expression:"checkEdit.opinion"}})],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"small"},nativeOn:{click:function(t){e.checkFormVisible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.checkEditSubmit}},[e._v("提交")])],1)],1)],1)};a._withStripped=!0;var r={data:()=>({pickerOptions:{shortcuts:[{text:"最近一周",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-6048e5),e.$emit("pick",[s,t])}},{text:"最近两周",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-12096e5),e.$emit("pick",[s,t])}},{text:"最近一月",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-2592e6),e.$emit("pick",[s,t])}},{text:"最近三月",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-7776e6),e.$emit("pick",[s,t])}},{text:"最近半年",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-15552e6),e.$emit("pick",[s,t])}},{text:"最近一年",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-31104e6),e.$emit("pick",[s,t])}},{text:"最近两年",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-62208e6),e.$emit("pick",[s,t])}},{text:"最近三年",onClick(e){const t=new Date;let s=new Date;s.setTime(t.getTime()-93312e6),e.$emit("pick",[s,t])}}]},searchMsg:{pageNo:1,pageSize:20},list:[],total:0,listLoading:!1,sels:[],editFormVisible:!1,editForm:{},searchData:[],dealtype:"",dealId:"",dialogTitle:"申诉处理",timer:null,checkFormVisible:!1,checkEdit:{id:"",status:0,opinion:""}}),methods:{handleCheck(e){this.checkFormVisible=!0,this.checkEdit.id=e.id},checkEditSubmit:function(){let e=this,t=Object.assign({},this.checkEdit);if(2==t.status&&""==t.opinion)return e.$message({showClose:!0,message:"审核不通过时，审核意见不能为空",type:"error"}),!1;e.$http.post(e,"/rest/admin/order/auditAfterSalesOrder",t,(e,t)=>{t.success&&(e.$message({showClose:!0,message:t.message,type:"success"}),e.getList(),e.checkFormVisible=!1)},(t,s)=>{e.checkFormVisible=!1,e.$message({showClose:!0,message:s.message,type:"error"})})},cellStyle:({row:e,column:t,rowIndex:s,columnIndex:a})=>"text-align:center",headerCellStyle:({row:e,rowIndex:t})=>"text-align:center",gotoOtherPage(e,t){"view"===e&&this.$router.push({path:"orderDetail",query:{id:t.id}})},dealOption(){let e=this,t="",s={id:e.dealId,dealadvise:e.editForm.dealadvise};t=e.dealtype?"/rest/admin/order/updateOrderByBack":"/rest/admin/order/updateByDealadvise",e.$http.post(e,t,s,(e,t)=>{e.$message({showClose:!0,message:t.message,type:"success"}),e.editFormVisible=!1,e.getList()},(t,s)=>{e.$message({showClose:!0,message:s.message,type:"error"})})},openDialog(e,t=0){this.editFormVisible=!0,this.dealId=e,this.dealtype=t,!t||(this.dialogTitle="退款")},editFormClose(){this.editForm={}},addStand(){let e=this,t=Object.assign({},e.editForm);return/^[1-9]\d*$/.test(t.sort)?t.stand?void e.$http.post(e,"/rest/admin/stand/update",t,(e,t)=>{e.$message({showClose:!0,message:t.message,type:"success"}),e.editFormVisible=!1,e.getList()},(t,s)=>{e.$message({showClose:!0,message:s.message,type:"error"})}):(e.$message({showClose:!0,message:"请输入规格",type:"error"}),!1):(e.$message({showClose:!0,message:"输入正整数序号",type:"error"}),!1)},addUnit:(e,t)=>(e[t.property]||0)+"元",formatShoppingWay:(e,t)=>1==e.shoppingWay?"自取":2==e.shoppingWay?"配送":"-",formatDescription:(e,t)=>null!=e.description?e.description.replace(/&nbsp;/g," "):"-",formatTime(e,t){let s=new Date(e[t.property]);return this.$utils.formatDate(s,"yyyy-MM-dd hh:mm")},formatOrder(e,t){switch(e[t.property]){case 1:return"未付款";case 2:return"待处理";case 3:return"待自取";case 4:return"待配送";case 5:return"已配送";case 6:return"已完成";case 7:return"售后处理中";case 8:return"已退款";case 9:return"售后处理完成";case 10:return"已取消(未支付)";case 11:return"已取消(已支付)"}},handleSizeChange(e){this.searchMsg.pageSize=e,this.getList()},handleCurrentChange(e){this.searchMsg.pageNo=e,this.getList()},getList(e){e&&(this.searchMsg.pageNo=e);let t=this,s=Object.assign({},t.searchMsg);if(t.searchMsg.createTime){let e=t.searchMsg.createTime[0],a=t.searchMsg.createTime[1];s.startCreateTime=this.$utils.formatDate(new Date(e),"yyyy/MM/dd hh:mm:ss"),s.endCreateTime=this.$utils.formatDate(new Date(a),"yyyy/MM/dd hh:mm:ss"),delete s.createTime}s.status=-1,t.listLoading=!0,t.$http.post(t,"/rest/admin/order/afterSalesList",s,(e,t)=>{e.list=t.data.records,e.total=t.data.total,e.listLoading=!1},(e,s)=>{t.listLoading=!1,t.$message({showClose:!0,message:s.message,type:"error"})})},handleDel(e){this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(()=>{let t=this;t.$http.post(t,"/rest/admin/stand/deleteById",{id:e},(function(e,t){e.$message({showClose:!0,message:t.message,type:"success"}),e.getList()}),(function(e,s){t.$message({showClose:!0,message:s.message,type:"error"})}))}).catch(()=>{})},handleEdit(e){let t=this,s={orderid:e.id,status:1};t.$http.post(t,"/rest/admin/order/updateOrderState",s,(function(e,t){e.$message({showClose:!0,message:t.message,type:"success"}),e.getList()}),(function(e,s){t.$message({showClose:!0,message:s.message,type:"error"})}))}},mounted(){this.getList(),this.timer=setInterval(this.getList,6e4),this.$orderPrint.init()},beforeDestroy(){clearInterval(this.timer)}},o=(s(1083),s(276)),n=Object(o.a)(r,a,[],!1,null,"025c4895",null);t.default=n.exports}}]);