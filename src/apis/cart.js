//api接口实现购物车添加删除操作
import httpInstance from "@/utils/http";
//添加购物车
export const addCartListAPI=(skuId,count)=>{
    return httpInstance({
        url:'/member/cart',
        method:'POST',
        data:{
            skuId,
            count
        }
    })
}
//获取最新购物车数据
export const getNewCartListAPI=()=>{
    return httpInstance({
        url:'/member/cart'
    })
}
//删除
export const deleteCartListAPI=(ids)=>{
    return httpInstance({
        url:'/member/cart',
        method:'DELETE',
        data:{
            ids
        }
    })
}
//合并
export const mergeCartList=(data)=>{
    return httpInstance({
        url:'/member/cart/merge',
        method:'POST',
        data
    })
}