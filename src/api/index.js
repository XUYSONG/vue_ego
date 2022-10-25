// 引入网络请求
import axios from "../utils/request.js"
import base from "./base.js"

// 请求接口
const api ={
  // 注册
  register(params){
    return axios.post(base.baseUrl + base.register,params)
  },

  // 登录
  login(params){
    return axios.post(base.baseUrl + base.login,params)
  }
}

export default api
