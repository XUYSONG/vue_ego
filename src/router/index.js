import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Home from '../views/main/HomePage/Home.vue'
import Layout from '../views/Layout.vue'
import Product from '../views/main//Product.vue'
import Params from '../views/main/Params.vue'
import ADCategory from '../views/main/ADCategory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Layout',
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
