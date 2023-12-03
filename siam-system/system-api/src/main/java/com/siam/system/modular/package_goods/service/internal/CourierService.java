package com.siam.system.modular.package_goods.service.internal;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.siam.system.modular.package_goods.entity.internal.Courier;

import java.util.Map;

/**
 *  jianyang
 */
public interface CourierService {

    void deleteByPrimaryKey(Integer id);

    void insertSelective(Courier courier);

    Courier selectByPrimaryKey(Integer id);

    void updateByPrimaryKeySelective(Courier courier);

    /**
     * 条件查询集合
     * @param courier 查询条件对象
     * @param pageNo 分页所在页
     * @param pageSize 单页数据量大小
     * @return
     */
    Page getList(int pageNo, int pageSize, Courier courier);

    /**
     * 条件查询集合
     * @param courier 查询条件对象
     * @param pageNo 分页所在页
     * @param pageSize 单页数据量大小
     * @return
     */
    Page<Map<String, Object>> getListJoinShop(int pageNo, int pageSize, Courier courier);
}