import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Home from '../views/main/HomePage/Home.vue'
import Layout from '../views/Layout.vue'
import Product from '../views/main//Product'
import Params from '../views/main/Params/index.vue'
import ADCategory from '../views/main/ADCategory/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    // name:'Layout',
    component:Layout,
    children:[
      {
        path: '',
        name:'Home',
        component: Home,
        meta:{
          isLogin:true
        }
      },
      {
        path:'product',
        name:'Product',
        // component:() => import("../views/main/Product.vue")
        component:Product,
        meta:{
          isLogin:true
        }
      },
      {
        path:'params',
        name:'Params',
        // component:()=>import("../views/main/params.vue")
        component:Params,
        meta:{
          isLogin:true
        }
      },
      {
        path:'ad',
        name:'ADCategory',
        // component:()=>import("../views/main/ADCategory.vue")
        component:ADCategory,
        meta:{
          isLogin:true
        }
      },
      {
        path:'details',
        // name:'Details',
        component:()=>import("@/views/main/HomePage/sub/Details.vue"),
        children:[
          {
            path:'openproduct',
            name:'OpenProduct',
            component:()=>import('@/views/main/HomePage/sub/openproduct.vue')
          },
          {
            path:'golife',
            name:'golife',
            component:()=>import('@/views/main/HomePage/sub/golife.vue')
          },
          {
            path:'heigh',
            name:'OpenPrheighoduct',
            component:()=>import('@/views/main/HomePage/sub/heigh.vue')
          },
          {
            path:'logo',
            name:'logo',
            component:()=>import('@/views/main/HomePage/sub/logo.vue')
          },
        ]
      }

    ]
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/Login.vue')
  }
  
  
]

const router = new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes
})

export default router
