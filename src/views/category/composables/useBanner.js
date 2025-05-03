import {ref,onMounted} from 'vue'
import { getBannerAPI } from '@/apis/home';
export const useBanner=()=>{
    const bannerList=ref({})
    const getBanner=async ()=>{
        const res_banner=await getBannerAPI({distributionSite:'2'})
        bannerList.value=res_banner.result
    }
    onMounted(()=>getBanner())
    return {
        bannerList
    }
}