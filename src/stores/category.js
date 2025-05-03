import { defineStore } from "pinia";
import {ref} from 'vue'
import { getCategoryAPI } from "@/apis/layout";
export const useCategoryStore=defineStore('category',()=>{
    //定义nav数组
const navList=ref([])
const getCategory=async()=>{
  const res = await getCategoryAPI()
  navList.value=res.result
}
return{
    //这个用于给父组件使用，获得数据
    getCategory,
    //这个用于给子组件使用，直接拿数据，不用在请求
    navList
}

})