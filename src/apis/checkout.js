import httpInstance from "@/utils/http";
export const getChekoutInfoAPI=()=>{
    return httpInstance({
        url:'/member/order/pre'
    })
}
//创建订单
export const createOrderAPI=(data)=>{
    return httpInstance({
        url:'/member/order',
        method:'POST',
        data
    })
}