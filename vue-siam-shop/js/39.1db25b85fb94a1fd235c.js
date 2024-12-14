(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1190:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e._self._c;return t("section",[t("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[t("el-form",{attrs:{inline:!0,model:e.searchMsg}},[t("el-form-item",{attrs:{label:"原料名称",prop:"name"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入原料名称"},model:{value:e.searchMsg.name,callback:function(t){e.$set(e.searchMsg,"name",t)},expression:"searchMsg.name"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getList(1)}}},[e._v("查询")])],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.handleEdit}},[e._v("新增")])],1)],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"highlight-current-row":"","cell-style":e.cellStyle,"header-cell-style":e.headerCellStyle}},[t("el-table-column",{attrs:{prop:"name",label:"原料名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"unit",label:"采购单位"}}),e._v(" "),t("el-table-column",{attrs:{prop:"price",label:"采购单价",formatter:e.addUnit}}),e._v(" "),t("el-table-column",{attrs:{prop:"stock",label:"当前库存"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("span",[e._v(e._s(i.row.stock+i.row.unit))])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"stockLowerLimit",label:"库存过低线"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("span",[e._v(e._s(i.row.stockLowerLimit+i.row.unit))])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"stockUpperLimit",label:"库存超出线"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("span",[e._v(e._s(i.row.stockUpperLimit+i.row.unit))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"操作",fixed:"right",width:"150"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-button",{attrs:{size:"small"},on:{click:function(t){return e.handleEdit(i.$index,i.row)}}},[e._v("编辑")]),e._v(" "),t("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.handleDel(i.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("el-col",{staticClass:"toolbar",attrs:{span:24}},[t("el-pagination",{staticStyle:{float:"right"},attrs:{"page-sizes":[10,20,50,100],"page-size":e.searchMsg.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),t("el-dialog",{attrs:{title:"编辑",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t},close:e.closeDialog}},[t("el-form",{ref:"editForm",staticStyle:{width:"80%"},attrs:{model:e.editForm,"label-width":"150px",rules:e.editFormRules}},[t("el-form-item",{attrs:{label:"原料名称",prop:"name"}},[t("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"采购单位",prop:"unit"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.unit,callback:function(t){e.$set(e.editForm,"unit",t)},expression:"editForm.unit"}},e._l(e.unitArray,(function(e){return t("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1)],1),e._v(" "),t("el-form-item",{attrs:{label:"采购单价",prop:"price"}},[t("el-input",{attrs:{type:"number"},model:{value:e.editForm.price,callback:function(t){e.$set(e.editForm,"price",t)},expression:"editForm.price"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"库存",prop:"stock"}},[t("el-input",{attrs:{type:"number"},model:{value:e.editForm.stock,callback:function(t){e.$set(e.editForm,"stock",t)},expression:"editForm.stock"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"库存过低线",prop:"stockLowerLimit"}},[t("el-input",{attrs:{type:"number"},model:{value:e.editForm.stockLowerLimit,callback:function(t){e.$set(e.editForm,"stockLowerLimit",t)},expression:"editForm.stockLowerLimit"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"库存超出线",prop:"stockUpperLimit"}},[t("el-input",{attrs:{type:"number"},model:{value:e.editForm.stockUpperLimit,callback:function(t){e.$set(e.editForm,"stockUpperLimit",t)},expression:"editForm.stockUpperLimit"}})],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit.apply(null,arguments)}}},[e._v("提交")])],1)],1)],1)};s._withStripped=!0;var r={data:()=>({searchMsg:{pageNo:1,pageSize:20},list:[],total:0,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,editFormRules:{name:[{required:!0,message:"请输入原料名称",trigger:"blur"}],unit:[{required:!0,message:"请选择采购单位",trigger:"change"}],price:[{required:!0,message:"请输入采购单价",trigger:"blur"}],stock:[{required:!0,message:"请输入库存",trigger:"blur"}],stockLowerLimit:[{required:!0,message:"请输入库存过低线",trigger:"blur"}],stockUpperLimit:[{required:!0,message:"请输入库存超出线",trigger:"blur"}]},editForm:{name:"",unit:"",price:"",stock:"",stockLowerLimit:"",stockUpperLimit:""},unitArray:[{name:"克",value:"克"},{name:"袋",value:"袋"},{name:"个",value:"个"},{name:"片",value:"片"}]}),methods:{cellStyle:({row:e,column:t,rowIndex:i,columnIndex:s})=>"text-align:center",headerCellStyle:({row:e,rowIndex:t})=>"text-align:center",closeDialog(){this.$refs.editForm.resetFields()},formatTime(e,t){let i=new Date(e[t.property]),s=this.$utils.formatDate(i,"yyyy-MM-dd hh:mm:ss");return null!=e[t.property]&&"1970-01-01 08:00:00"!=s||(s="-"),s},addUnit:(e,t)=>(e[t.property]||0)+"元",handleSizeChange(e){this.searchMsg.pageSize=e,this.getList()},handleCurrentChange(e){this.searchMsg.pageNo=e,this.getList()},getList(e){e&&(this.searchMsg.pageNo=e);let t=this,i=Object.assign(t.searchMsg);t.listLoading=!0,t.$http.post(t,"/rest/merchant/rawmaterial/list",i,(e,t)=>{e.list=t.data.records,e.total=t.data.total,e.listLoading=!1},(e,i)=>{t.listLoading=!1,t.$message({showClose:!0,message:i.message,type:"error"})})},handleDel(e){this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(()=>{let t=this;t.$http.delete(t,"/rest/merchant/rawmaterial/delete",{id:e},(function(e,t){e.$message({showClose:!0,message:t.message,type:"success"}),e.getList()}),(function(e,i){t.$message({showClose:!0,message:i.message,type:"error"})}))}).catch(()=>{})},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=t?{id:t.id,name:t.name,unit:t.unit,price:t.price,stock:t.stock,stockLowerLimit:t.stockLowerLimit,stockUpperLimit:t.stockUpperLimit}:{name:"",price:"",unit:"",price:"",stock:"",stockLowerLimit:"",stockUpperLimit:""}},editSubmit:function(){this.$refs.editForm.validate(e=>{if(e){let e=this,t=Object.assign({},this.editForm),i="";t.id?(i="/rest/merchant/rawmaterial/update",e.$http.put(e,i,t,(e,t)=>{e.$message({showClose:!0,message:t.message,type:"success"}),e.getList(),e.editFormVisible=!1},(t,i)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:i.message,type:"error"})})):(i="/rest/merchant/rawmaterial/insert",e.$http.post(e,i,t,(e,t)=>{e.$message({showClose:!0,message:t.message,type:"success"}),e.getList(),e.editFormVisible=!1},(t,i)=>{e.editFormVisible=!1,e.$message({showClose:!0,message:i.message,type:"error"})}))}})}},mounted(){this.getList(),this.$orderPrint.init()}},a=i(275),l=Object(a.a)(r,s,[],!1,null,"1c686028",null);t.default=l.exports}}]);