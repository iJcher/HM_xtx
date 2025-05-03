import httpInstance from "@/utils/http";
export const userLoginAPI=(account,password)=>{
    return httpInstance({
        url:'/login',
        method:'POST',
        data:{
            account,
            password
        }
    })
}