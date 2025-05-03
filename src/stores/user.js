import { defineStore } from "pinia";
import {ref} from 'vue'
import { userLoginAPI } from "@/apis/user";
export const useUserStore=defineStore('user',()=>{
    const userInfo=ref({})
    const getUserInfo=async(account,password)=>{
        const res = await userLoginAPI(account,password)
        userInfo.value=res.result
    }
    const removeUserInfo=()=>{
        userInfo.value={}
    }
    return{
        userInfo,
        getUserInfo,
        removeUserInfo
    }
},{
    persist:true
})