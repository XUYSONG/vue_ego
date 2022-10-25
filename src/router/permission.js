// 路由权限

import router from "./index.js"
import store from '../store'

router.beforeEach((to,from,next) =>{
  if(to.meta.isLogin){
    let token = store.state.login.user.token
    if(token){
      next()
    }else{
      next({
        name:'Login'
      })
    }
  }else{
    next()
  }
})