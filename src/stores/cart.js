//购物车模块
import { defineStore } from "pinia";
import {ref,computed} from 'vue'
import { useUserStore } from "./user";
import { addCartListAPI,getNewCartListAPI,deleteCartListAPI } from "@/apis/cart";
export const useCartListStore=defineStore('cart',()=>{
    //判断是否登录
    const isLogin=computed(()=>useUserStore().userInfo.token)
    //购物车列表
    const cartList=ref([])
    //添加购物车
    const addCartList=async(goods)=>{
        //登录状态下的添加操作
        if(isLogin.value){
            //添加到购物车
            await addCartListAPI(goods.skuId,goods.count)
            //更新
            updateCartList()
        }
        //非登录状态下的添加,通过本地存储
        else{
            const index=cartList.value.findIndex((good)=>good.skuId===goods.skuId)
            //如果商品存在，就在原有数量上++
            if(index!==-1){
                cartList.value[index].count+=goods.count
            }
            //不存在直接push
            else{
                cartList.value.push(goods)
            }
        }
    }
    //删除
    const removeGoods=async(skuId)=>{
        if(isLogin.value){
            await deleteCartListAPI([skuId])
            updateCartList()
        }
        else{
            cartList.value=cartList.value.filter((item)=>{
                return item.skuId!==skuId
            })
        }
        
    }
    //清空购物车，用于退出登录时使用
    const clearCartList=()=>{
        cartList.value=[]
    }
    //将更新数据单独封装
    const updateCartList=async ()=>{
        //获取最新数据
        const {result}=await getNewCartListAPI()
        cartList.value=result
    }
    //单选处理
    const singleCheck=(skuId,selected)=>{
        const item=cartList.value.find((item)=>{
            return item.skuId===skuId
        })
        if(item)
        item.selected=selected
    }
    //总数以及总价格
    const totalNum=computed(()=>{
        let totalNum=0
        cartList.value.forEach(element => {
            totalNum+=element.count
        });
        return totalNum
    })
    const totalPrice=computed(()=>{
        let totalPrice=0
        cartList.value.forEach(element => {
            totalPrice+=element.count*element.price
        });
        return totalPrice
    })
    //被选中的总数及总价格
    const selectedtTotalNum=computed(()=>{
        let totalNum=0
        const selectedCart=cartList.value.filter((item)=>{
            return item.selected===true
        })
        selectedCart.forEach(element => {
            totalNum+=element.count
        });
        return totalNum
    })
    const selectedTotalPrice=computed(()=>{
        const selectedCart=cartList.value.filter((item)=>{
            return item.selected===true
        })
        let totalPrice=0
        selectedCart.forEach(element => {
            totalPrice+=element.count*element.price
        });
        return totalPrice
    })
    //全选
    //单选决定全选是否为true
    const isAll=computed(()=>cartList.value.every((item)=>item.selected===true))
    //全选实现所有单选为true
    const changeAllState=(state)=>{
        cartList.value=cartList.value.map((item)=>{
            item.selected=state
            return item
        })
    }
    return{
        cartList,
        addCartList,
        removeGoods,
        singleCheck,
        totalNum,
        totalPrice,
        selectedTotalPrice,
        selectedtTotalNum,
        isAll,
        changeAllState,
        clearCartList,
        updateCartList
    }
},{
    persist:true
})