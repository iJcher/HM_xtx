import CartListIndex from '@/views/cartList/cartListIndex.vue'
import CategoryIndex from '@/views/category/categoryIndex.vue'
import CheckoutIndex from '@/views/Checkout/CheckoutIndex.vue'
import DetailsIndex from '@/views/details/detailsIndex.vue'
import HomeIndex from '@/views/Home/homeIndex.vue'
import LayoutIndex from '@/views/layout/layoutIndex.vue'
import LoginIndex from '@/views/Login/LoginIndex.vue'
import PayIndex from '@/views/pay/payIndex.vue'
import SubCategoryIndex from '@/views/subCategory/subCategoryIndex.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:LayoutIndex,
      children:[
        {
          path:'',
          component:HomeIndex
        },
        {
          path:'/category/:id',
          component:CategoryIndex
        },
        {
          path:'/category/sub/:id',
          component:SubCategoryIndex
        },
        {
          path:'detail/:id',
          component:DetailsIndex
        },
        {
          path:'/cartList',
          component:CartListIndex
        },
        {
          path:'/checkout',
          component:CheckoutIndex
        },
        {
          path:'/pay',
          component:PayIndex
        }
      ]
    },
    {
      path:'/login',
      component:LoginIndex
    },
    
  ],
  scrollBehavior:()=>{
    return {
      top:0
    }
  }
})

export default router
