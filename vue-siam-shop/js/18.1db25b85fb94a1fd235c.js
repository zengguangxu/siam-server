(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1069:function(e,t,o){var s=o(1116);"string"==typeof s&&(s=[[e.i,s,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};o(276)(s,l);s.locals&&(e.exports=s.locals)},1115:function(e,t,o){"use strict";o(1069)},1116:function(e,t,o){},1193:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e._self._c;return t("section",[t("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[t("el-form",{attrs:{inline:!0,model:e.searchMsg}},[t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleRelationGoods()}}},[e._v("新增")])],1)],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"goodsTable",staticStyle:{width:"100%"},attrs:{data:e.list,"highlight-current-row":"","cell-style":e.cellStyle,"header-cell-style":e.headerCellStyle}},[t("el-table-column",{attrs:{label:"商品主图",prop:"mainImage"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("img",{attrs:{src:e.$http.publicUrl(o.row.mainImage),width:"50",height:"50"}})]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"goodsPrice",label:"一口价",formatter:e.addUnit}}),e._v(" "),t("el-table-column",{attrs:{prop:"packingCharges",label:"包装费",formatter:e.addUnit}})],1),e._v(" "),t("el-col",{staticClass:"toolbar",attrs:{span:24}},[t("el-pagination",{staticStyle:{float:"right"},attrs:{"page-sizes":[10,20,50,100],"page-size":e.searchMsg.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),t("el-dialog",{attrs:{title:"关联商品",visible:e.editFormVisibleGoodsTable,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisibleGoodsTable=t},close:e.closeDialog}},[t("div",{staticClass:"dialogDiv"},[t("el-form",{ref:"editForm",staticStyle:{width:"80%"},attrs:{model:e.editForm,"label-width":"150px",rules:e.editFormRules}},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoadingGoodsTable,expression:"listLoadingGoodsTable"}],ref:"goodsTable_dialog",staticStyle:{width:"100%"},attrs:{data:e.listGoodsTable,"highlight-current-row":"","cell-style":e.cellStyle,"header-cell-style":e.headerCellStyle},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),t("el-table-column",{attrs:{label:"商品主图",prop:"mainImage"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("img",{attrs:{src:e.$http.publicUrl(o.row.mainImage),width:"50",height:"50"}})]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"menuName",label:"类别"}}),e._v(" "),t("el-table-column",{attrs:{prop:"price",label:"一口价",formatter:e.addUnit}}),e._v(" "),t("el-table-column",{attrs:{prop:"packingCharges",label:"包装费",formatter:e.addUnit}})],1)],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{nativeOn:{click:function(t){e.editFormVisibleGoodsTable=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary",loading:e.editLoadingGoodsTable},nativeOn:{click:function(t){return e.editSubmitGoodsTable.apply(null,arguments)}}},[e._v("提交")])],1)])],1)};s._withStripped=!0;var l={data:()=>({searchMsg:{pageNo:1,pageSize:20},list:[],total:0,listLoading:!1,sels:[],editFormVisible:!1,editFormRules:{specificationName:[{required:!0,message:"请输入规格名称",trigger:"change"}],name:[{required:!0,message:"请输入规格选项名称",trigger:"change"}],price:[{required:!0,message:"请输入加价金额",trigger:"blur"}]},editForm:[],searchData:[],goodsId:"",goodsTable:"",editFormVisibleGoodsTable:!1,editLoadingGoodsTable:!1,goodsTable_dialog:"",multipleSelection:[],searchMsgGoodsTable:{pageNo:-1,pageNoIndex:1,pageSize:20},listGoodsTable:[],totalGoodsTable:0,listLoadingGoodsTable:!1,selsGoodsTable:[],couponsIdGoodsTable:""}),methods:{cellStyle:({row:e,column:t,rowIndex:o,columnIndex:s})=>"text-align:center",headerCellStyle:({row:e,rowIndex:t})=>"text-align:center",editFormClose(){this.editForm=[]},addUnit:(e,t)=>(e[t.property]||0)+"元",formatSalePrice:(e,t)=>e.isSale?e.salePrice+"元":"-",gotoAdd(e,t){"add"===e?this.$router.push({path:"addGoods"}):this.$router.push({path:"editGoods",query:{id:t.id}})},formatTime(e,t){let o=new Date(e[t.property]);return this.$utils.formatDate(o,"yyyy-MM-dd hh:mm")},formatappType:(e,t)=>1==e.apptype?"ios":"android",formatType(e,t){switch(e[t.property]){case 1:return"待上架";case 2:return"已上架";case 3:return"已下架";case 4:return"售罄"}},handleSizeChange(e){this.searchMsg.pageSize=e,this.getList()},handleCurrentChange(e){this.searchMsg.pageNo=e,this.getList()},getList(e){e&&(this.searchMsg.pageNo=e);let t=this,o=Object.assign({},t.searchMsg,{token:sessionStorage.getItem("token")});console.log("param="+JSON.stringify(o)),console.log("searchMsg="+JSON.stringify(t.searchMsg)),t.listLoading=!0,t.$http.post(t,"/rest/merchant/merchantRecommendGoods/list",o,(e,t)=>{e.list=t.data.records,e.total=t.data.total,e.listLoading=!1},(e,o)=>{t.listLoading=!1,t.$message({showClose:!0,message:o.message,type:"error"})})},getListGoodsTable(){let e=this,t=Object.assign({},e.searchMsgGoodsTable,{token:sessionStorage.getItem("token")});console.log("param="+JSON.stringify(t)),console.log("searchMsg="+JSON.stringify(e.searchMsgGoodsTable)),e.listLoadingGoodsTable=!0,e.$http.post(e,"/rest/merchant/goods/list",t,(e,t)=>{e.listGoodsTable=t.data.records,e.totalGoodsTable=t.data.total,e.listLoadingGoodsTable=!1},(t,o)=>{e.listLoadingGoodsTable=!1,e.$message({showClose:!0,message:o.message,type:"error"})})},handleRelationGoods(){this.$nextTick((function(){this.toggleSelectionSingle()})),this.editFormVisibleGoodsTable=!0;let e=this;e.$http.post(e,"/rest/merchant/merchantRecommendGoods/list",{pageNo:1,pageSize:1e3},(e,t)=>{let o=t.data.records;if(o.length>0)for(let e=0;e<o.length;e++)for(let t=0;t<this.listGoodsTable.length;t++)if(o[e].goodsId==this.listGoodsTable[t].id){this.toggleSelectionSingle(this.listGoodsTable[t]);break}console.log(this.multipleSelection)},(t,o)=>{e.$message({showClose:!0,message:o.message,type:"error"})})},editSubmitGoodsTable:function(){let e=this,t={goodsIdListStr:""},o="";if(0==this.multipleSelection.length)return e.$message({showClose:!0,message:"请选择要关联的商品",type:"error"}),!1;if(this.multipleSelection.length>6)return e.$message({showClose:!0,message:"最多选择6件商品",type:"error"}),!1;let s=[];for(let e=0;e<this.multipleSelection.length;e++)s.push(this.multipleSelection[e].id);t.goodsIdListStr=JSON.stringify(s),o="/rest/merchant/merchantRecommendGoods/insert",e.$http.post(e,"/rest/merchant/merchantRecommendGoods/insert",t,(e,t)=>{e.$message({showClose:!0,message:t.message,type:"success"}),this.getList(),e.editFormVisibleGoodsTable=!1},(t,o)=>{e.editFormVisibleGoodsTable=!1,e.$message({showClose:!0,message:o.message,type:"error"})})},toggleSelection(e){e?e.forEach(e=>{this.$refs.goodsTable_dialog.toggleRowSelection(e)}):this.$refs.goodsTable_dialog.clearSelection()},toggleSelectionSingle(e){e?this.$refs.goodsTable_dialog.toggleRowSelection(e):this.$refs.goodsTable_dialog.clearSelection()},handleSelectionChange(e){this.multipleSelection=e,console.log(this.multipleSelection)}},mounted(){this.getList(),this.getListGoodsTable(),this.$orderPrint.init()}},a=(o(1115),o(275)),i=Object(a.a)(l,s,[],!1,null,"4df98c5c",null);t.default=i.exports}}]);