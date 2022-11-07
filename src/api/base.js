const base = {
  baseUrl:"http://localhost:3000",
  register:"/api/register",
  login:"/api/login",
  // 商品列表
  selectTbItmeAllByPage:"/api/backend/item/selectTbItmeAllByPage",
  total:"/api/total", //商品总条数
  search:"/api/search", // 模糊查询
  selectItemCategoryByParenteId:"/api/backend/itemCategory/selectItemCategoryByParenteId", // 类目选择
  insertTbItem:"/api/backend/item/insertTbItem",//商品添加
  deleteItemById:"/api/backend/item/deleteItemById", // 商品删除
  preUpdateItem:"/api/backend/item/preUpdateItem",//预更新接口
  updateTbItem:"/api/backend/item/updateTbItem",//编辑商品
  selectItemParamAll:"/api/backend/itemParam/selectItemParamAll",//规格参数查询
  ParamsSearch:"/api/params/search",//规格参数模糊查询
  insertItemParam:"/api/backend/itemParam/insertItemParam",//规格参数添加
  paramsdelete:"/api/params/delete",//删除
  selectContentCategoryByParentId:"/api/content/selectContentCategoryByParentId",//广告导航管理查询







}

export default base