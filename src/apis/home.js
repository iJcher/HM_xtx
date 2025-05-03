import httpInstance from '@/utils/http'
//根据param传递的值不同，判断是首页需要还是其他位置
export const getBannerAPI=(param={})=>{
  const {distributionSite}=param
    return httpInstance({
        url:'/home/banner',
        params:{
          distributionSite
        }
    })
}
//新鲜好物
export const findNewAPI = () => {
    return httpInstance({
      url:'/home/new'
    })
  }
//人气推荐
export const getHotAPI = () => {
    return httpInstance({
      url:'/home/hot'
    })
  }
  /**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}