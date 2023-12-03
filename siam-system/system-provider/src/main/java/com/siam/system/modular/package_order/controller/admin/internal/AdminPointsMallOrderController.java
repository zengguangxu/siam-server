package com.siam.system.modular.package_order.controller.admin.internal;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.siam.package_common.entity.BasicResult;
import com.siam.package_common.exception.StoneCustomerException;
import com.siam.package_common.model.valid_group.ValidGroupOfAudit;
import com.siam.package_common.model.valid_group.ValidGroupOfId;
import com.siam.system.modular.package_order.model.param.internal.PointsMallOrderParam;
import com.siam.system.modular.package_order.model.result.internal.PointsMallOrderResult;
import com.siam.system.modular.package_order.service.internal.PointsMallOrderService;
import com.siam.system.modular.package_order.entity.internal.PointsMallOrder;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.text.ParseException;
import java.util.*;

@RestController
@RequestMapping(value = "/rest/admin/pointsMall/order")
@Transactional(rollbackFor = Exception.class)
@Api(tags = "后台订单模块相关接口", description = "AdminPointsMallOrderController")
public class AdminPointsMallOrderController {

    @Resource(name = "pointsMallOrderServiceImpl")
    private PointsMallOrderService orderService;

    @ApiOperation(value = "订单列表")
    @PostMapping(value = "/list")
    public BasicResult list(@RequestBody @Validated(value = {}) PointsMallOrderParam param){
        Page page = orderService.getListByPageWithAsc(param);
        return BasicResult.success(page);
    }

    @ApiOperation(value = "订单列表(附带订单商品详情)")
    @PostMapping(value = "/listWithDetail")
    public BasicResult listWithDetail(@RequestBody @Validated(value = {}) PointsMallOrderParam param){
        Page<PointsMallOrderResult> page = orderService.getListByPageWithAsc(param);
        return BasicResult.success(page);
    }

    @ApiOperation("打印小票")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id" ,value="订单商品详情表主键id",required = true,paramType = "query",dataType="int")
    })
    public BasicResult printRceceipts(@RequestBody @Validated(value = {}) PointsMallOrderParam param){
        for(String id : param.getIds()){
            orderService.printRceceipts(Long.valueOf(id));
        }
        return BasicResult.success();
    }

    @ApiOperation(value = "查询单个订单信息")
    @PostMapping(value = "/selectById")
    public BasicResult selectById(@RequestBody @Validated(value = {}) PointsMallOrderParam param){
        PointsMallOrder dbPointsMallOrder = orderService.selectByPrimaryKey(param.getId());
        if(dbPointsMallOrder == null){
            throw new StoneCustomerException("该订单不存在");
        }
        return BasicResult.success(dbPointsMallOrder);
    }

    @ApiOperation(value = "批量修改订单的是否已打印状态为已打印")
    @PostMapping(value = "/batchUpdateIsPrintedTrue")
    public BasicResult batchUpdateIsPrintedTrue(@RequestBody @Validated(value = {}) PointsMallOrderParam param){
        orderService.batchUpdateIsPrintedTrue(param);
        return BasicResult.success();
    }

    @ApiOperation(value = "今日订单列表")
    @PostMapping(value = "/todayPointsMallOrderList")
    public BasicResult todayPointsMallOrderList(@RequestBody @Validated(value = {}) PointsMallOrderParam param){
        Page page = orderService.getListByTodayOrderWithAsc(param);
        return BasicResult.success(page);
    }

    @ApiOperation(value = "查询所有订单标签页的待处理数量")
    @PostMapping(value = "/selectAllTabWaitHandleNum")
    public BasicResult selectAllTabWaitHandleNum(@RequestBody @Validated(value = {}) PointsMallOrderParam param){
        Map map = orderService.selectAllTabWaitHandleNum(param);
        return BasicResult.success(map);
    }

    @ApiOperation(value = "查询所有已付款未打印的订单")
    @PostMapping(value = "/waitPrintPointsMallOrderList")
    public BasicResult waitPrintPointsMallOrderList(@RequestBody @Validated(value = {}) PointsMallOrderParam param){
        List<PointsMallOrder> pointsMallOrders = orderService.waitPrintPointsMallOrderList(param);
        return BasicResult.success(pointsMallOrders);
    }

    @ApiOperation(value = "订单统计(支付成功订单数量、取消订单数量、退款订单数量，按自取或者外卖分开)")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "startCreateTime", value = "下单开始时间", required = false, paramType = "query", dataType = "Date"),
            @ApiImplicitParam(name = "endCreateTime", value = "下单结束时间", required = false, paramType = "query", dataType = "Date"),
    })
    @PostMapping(value = "/countPointsMallOrder")
    public BasicResult countPointsMallOrder(@RequestBody @Validated(value = {}) PointsMallOrderParam param){
        Map count = orderService.countOrder(param);
        return BasicResult.success(count);
    }

    @ApiOperation(value = "售后处理订单列表")
    @PostMapping(value = "/afterSalesList")
    public BasicResult afterSalesList(@RequestBody @Validated(value = {}) PointsMallOrderParam param){
        Page<Map<String, Object>> page = orderService.getAfterSalesListByPageWithAsc(param);
        return BasicResult.success(page);
    }

    @ApiOperation(value = "售后处理订单列表")
    @PostMapping(value = "/afterSalesListWithDetail")
    public BasicResult afterSalesListWithDetail(@RequestBody @Validated(value = {}) PointsMallOrderParam param){
        Page<Map<String, Object>> page = orderService.getAfterSalesListByPageWithAsc(param);
        return BasicResult.success(page);
    }

    /**
     * 售后处理订单-处理
     *
     * @return
     * @author 暹罗
     */
    @PostMapping(value = "/auditAfterSalesOrder")
    public BasicResult auditAfterSalesOrder(@RequestBody @Validated(value = {ValidGroupOfId.class, ValidGroupOfAudit.class}) PointsMallOrderParam orderParam){
        orderService.auditAfterSalesOrder(orderParam);
        return BasicResult.success();
    }

    /**
     * 查询订单统计数据
     * PS；一次性将所有数据全部查出来，而不是每次选择时间段时来实时请求数据
     */
    @PostMapping(value = "/statistic")
    public BasicResult statisticPointsMallOrder(@RequestBody @Validated(value = {}) PointsMallOrderParam param) throws ParseException {
        Map map = orderService.statistic(param);
        return BasicResult.success(map);
    }

    /**
     * 订单发货
     *
     * @return
     * @author 暹罗
     */
    @PostMapping(value = "/deliver")
    public BasicResult deliver(@RequestBody @Validated(value = {}) PointsMallOrderParam param){
        orderService.deliver(param);
        return BasicResult.success();
    }

    /**
     * 修改快递单号
     *
     * @return
     * @author 暹罗
     */
    @PostMapping(value = "/updateLogisticsNo")
    public BasicResult updateLogisticsNo(@RequestBody @Validated(value = {}) PointsMallOrderParam param){
        orderService.updateLogisticsNo(param);
        return BasicResult.success();
    }

    /**
     * 修改订单信息
     *
     * @return
     * @author 暹罗
     */
    @PostMapping(value = "/update")
    public BasicResult update(@RequestBody @Validated(value = {}) PointsMallOrderParam param){
        orderService.updateByAdmin(param);
        return BasicResult.success();
    }
}