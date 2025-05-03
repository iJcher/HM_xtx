import { getSecondCategoryAPI } from '@/apis/category';
import {ref,onMounted} from 'vue'
import { useRoute,onBeforeRouteUpdate } from 'vue-router';
export const useSecondCategory=()=>{
    const route=useRoute()
    const categoryData=ref({})
    
    const getSecondCategory=async (id=route.params.id)=>{
        const res_category=await getSecondCategoryAPI(id)
        categoryData.value=res_category.result
    }
    onMounted(()=>getSecondCategory())
    onBeforeRouteUpdate((to)=>{
        getSecondCategory(to.params.id)
    })
    return{
        categoryData
    }
}
