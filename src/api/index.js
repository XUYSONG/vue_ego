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
  },

  // 商品列表
  selectTbItmeAllByPage(params){
    return axios.get(base.baseUrl + base.selectTbItmeAllByPage,{
      params
    })
  },
  // 商品总条数
  total(){
    return axios.get(base.baseUrl + base.total)
  },
  // 模糊查询
  search(params){
    return axios.get(base.baseUrl + base.search,{
      params
    })
  },
//类目选择
selectItemCategoryByParenteId(params){
  return axios.get(base.baseUrl + base.selectItemCategoryByParenteId,{
    params
  })
},
// 商品添加
insertTbItem(params){
  return axios.get(base.baseUrl + base.insertTbItem,{
    params
  })
},
/**
     * 删除商品
     */
 deleteItemById(params) {
  return axios.get(base.baseUrl + base.deleteItemById, {
      params
  })
},

//预更新
preUpdateItem(params){
  return axios.get(base.baseUrl + base.preUpdateItem, {
    params
})
},

// 商品修改
updateTbItem(params){
  return axios.get(base.baseUrl + base.updateTbItem,{
    params
  })
},

// 规格参数查询
selectItemParamAll(params){
  return axios.get(base.baseUrl + base.selectItemParamAll,{
    params
  })
},

// 规格参数模糊查询
ParamsSearch(params){
  return axios.get(base.baseUrl + base.ParamsSearch,{
    params
  })
},

// 规格参数添加
insertItemParam(params){
  return axios.get(base.baseUrl + base.insertItemParam,{
    params
  })
},
// 规格参数删除
paramsdelete(params){
  return axios.get(base.baseUrl + base.paramsdelete,{
    params
  })
},
// 广告导航管理 查询
selectContentCategoryByParentId(params){
  return axios.get(base.baseUrl + base.selectContentCategoryByParentId,{
    params
  })
},




}

export default api
