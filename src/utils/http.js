import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from "@/stores/user";
import router from "@/router";
//创建实例
const httpInstance=axios.create({
    baseURL:'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})
//请求拦截器
httpInstance.interceptors.request.use(config=>{
    //携带token,一段时间后token失效就要重新登录
    const userStore=useUserStore()
    const token=userStore.userInfo.token
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},e=>Promise.reject(e))
//响应拦截器
httpInstance.interceptors.response.use(res=>res.data,e=>{
    // const router=useRouter()
    ElMessage({type:'error',message:e.response.data.msg})
    //401错误处理（token失效导致）
    if(e.response.status==401){
        const userStore=useUserStore()
        //清除数据
        userStore.removeUserInfo()
        //返回登录页
        router.replace('/login')
    }
    return Promise.reject(e)
})
export default httpInstance