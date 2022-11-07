const express = require("express")
const router = express.Router()
const sqlClient = require('./config.js')
const jwt = require('jsonwebtoken')
const url = require('url')
const fs = require("fs")
const multer = require("multer")

// 注册
router.post('/register',(req,res)=>{
  const{username,password,email} = req.body
  const sql = "insert into user values(null,?,?,?)"
  const arr = [username,password,email]
  sqlClient(sql,arr,result=>{
    if(result.affectedRows > 0){
      
      res.send({
        status:200,
        msg:"注册成功！"
      })
    }else{
      res.send({
        status:401,
        msg:"注册失败！"
      })
    }
  })

})

// 登录
router.post('/login',(req,res)=>{
  const {username,password} = req.body
  const sql = "select * from user where username=? and password=?"
  const arr = [username,password]
  sqlClient(sql,arr,result=>{
    if(result.length > 0){
      // 加密
      let token = jwt.sign({
        username,
        id:result[0].id
      },'soomekeys')

      res.send({
        status:200,
        token,
        username
      })
    }else(
      res.send({
        status:401,
        mag:"登录失败",
        result
      })
    )
  })
})


// 后面要联调

// 商品查询
router.get("/backend/item/selectTbItmeAllByPage",(req,res)=>{
  // 分页
  const page = url.parse(req.url,true).query.page || 1;
  const sql = "select * from project order by id desc limit 10 offset " + (page-1)*10
  sqlClient(sql,null,result=>{
    if(result.length > 0){
      res.send({
        status:200,
        result
      })
    }else{
      res.send({
        status:401,
        mag:'暂无数据'
      })
    }
  }) 
})

// 商品总条数
router.get("/total",(req,res)=>{
  const sql = "select count(*) from project where id"
  sqlClient(sql,null,result=>{
    if(result.length > 0){
      res.send({
        status:200,
        result
      })
    }else{
      res.send({
        status:500,
        mag:"暂无更多数据"
      })
    }
  })
})

// 模糊查询接口
router.get("/search",(req,res)=>{
  const search = url.parse(req.url,true).query.search;
  const sql = "select * from project where concat(`title`,`sellPoint`,`descs`) like '%" + search + "%'"
  sqlClient(sql,null,result =>{
    if(result.length > 0){
      res.send({
        status:200,
        result
      })
    }else{
      res.send({
        status:500,
        mag:'暂无数据'
      })
    }
  })
})

// 类目选择
router.get("/backend/itemCategory/selectItemCategoryByParenteId",(req,res)=>{
  const id = url.parse(req.url,true).query.id || 1
  const sql = "select * from category where id=?"
  const arr = [id]
  sqlClient(sql,arr,result =>{
    if(result.length > 0){
      res.send({
        status:200,
        result
      })
    }else{
      res.send({
        status:500,
        msg:"暂无数据"
      })
    }
  })
})

/**
 * 上传图片
 */
 var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "./upload/")
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname)
  }
})

var createFolder = function (folder) {
  try {
      fs.accessSync(folder);
  } catch (e) {
      fs.mkdirSync(folder);
  }
}

var uploadFolder = './upload/';
createFolder(uploadFolder);
var upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), function (req, res, next) {
  var file = req.file;
  console.log('文件类型：%s', file.mimetype);
  console.log('原始文件名：%s', file.originalname);
  console.log('文件大小：%s', file.size);
  console.log('文件保存路径：%s', file.path);
  res.json({ res_code: '0', name: file.originalname, url: file.path });
});

/**
 * 商品添加
 */
 router.get("/backend/item/insertTbItem", (req, res) => {
  /**
   * 获取参数
   */
  const title = url.parse(req.url, true).query.title || "";
  const cid = url.parse(req.url, true).query.cid || "";
  const sellPoint = url.parse(req.url, true).query.sellPoint || "";
  const price = url.parse(req.url, true).query.price || "";
  const num = url.parse(req.url, true).query.num || "";
  const desc = url.parse(req.url, true).query.desc || "";
  const image = url.parse(req.url, true).query.image || "";

  const sql = "insert into project values (null,?,?,?,?,?,?,'',1,'','',?)"
  const arr = [title,image,sellPoint,price,cid,num,desc];
  sqlClient(sql, arr, result => {
      if (result.affectedRows > 0) {
          res.send({
              status: 200,
              msg: "添加成功"
          })
      } else {
          res.send({
              status: 500,
              msg: "添加失败"
          })
      }
  })
})

/**
 * 商品删除接口
 */
 router.get("/backend/item/deleteItemById", (req, res) => {
  var id = url.parse(req.url, true).query.id;
  const sql = "delete from project where id=?"
  const arr = [id];
  sqlClient(sql, arr, result => {
      if (result.affectedRows > 0) {
          res.send({
              status: 200,
              msg: "删除成功"
          })
      } else {
          res.send({
              status: 500,
              msg: "删除失败"
          })
      }
  })
})

/**
 * 预更新
 */
router.get("/backend/item/preUpdateItem",(req,res)=>{
  const id = url.parse(req.url,true).query.id;
  const sql = "select * from project where id=?";
  sqlClient(sql, [id], result => {
    if (result.length > 0) {
        res.send({
            status: 200,
            result
        })
    } else {
        res.send({
            status: 500,
            msg: "预更新失败"
        })
    }
})
})

// 商品编辑
router.get("/backend/item/updateTbItem", (req, res) => {
  var id = url.parse(req.url, true).query.id;
  var title = url.parse(req.url, true).query.title || "";
  var sellPoint = url.parse(req.url, true).query.sellPoint || "";
  var price = url.parse(req.url, true).query.price || "";
  var num = url.parse(req.url, true).query.num || "";
  var desc = url.parse(req.url, true).query.desc || "";
  var image = url.parse(req.url, true).query.image || "";
  var sql = "update project set title=?,sellPoint=?,price=?,num=?,descs=?,image=? where id=?";
  var arr = [title, sellPoint, price, num, desc, image, id];
  sqlClient(sql, arr, result => {
      if (result.affectedRows > 0) {
          res.send({
              status: 200,
              msg: "修改成功"
          })
      } else {
          res.send({
              status: 500,
              msg: "修改失败"
          })
      }
  })
})


// 规格参数查询
router.get("/backend/itemParam/selectItemParamAll", (req, res) => {
  const page = url.parse(req.url, true).query.page || 1;
  const sql = "select * from params order by id desc limit 10 offset " + (page - 1) * 10;
  sqlClient(sql, null, result => {
      if (result.length > 0) {
          res.send({
              status: 200,
              result
          })
      } else {
          res.send({
              status: 500,
              msg: "暂无数据"
          })
      }
  })
})

/**
 * 规格参数  模糊查询
 */
 router.get("/params/search", (req, res) => {
  var search = url.parse(req.url, true).query.search;
  const sql = "select * from params where concat(`paramData`) like '%" + search + "%'";
  sqlClient(sql,null, result => {
      if (result.length > 0) {
          res.send({
              status: 200,
              result
          })
      } else {
          res.send({
              status: 500,
              msg: '暂无数据'
          })
      }
  })
})

/**
* 规格参数 添加
*/
router.get("/backend/itemParam/insertItemParam", (req, res) => {
  var itemCatId = url.parse(req.url, true).query.itemCatId;
  var paramsContent = url.parse(req.url, true).query.content;
  var sql = "insert into params values (null,?,?)";
  sqlClient(sql, [itemCatId, paramsContent], result => {
      if (result.affectedRows > 0) {
          res.send({
              status: 200,
              msg: "添加成功"
          })
      } else {
          res.send({
              status: 500,
              msg: "添加失败"
          })
      }
  })
})

/**
 * 规格参数删除
 */
 router.get("/params/delete", (req, res) => {
  const id = url.parse(req.url, true).query.id;
  const sql = "delete from params where id=?"
  const arr = [id];
  sqlClient(sql, arr, result => {
      if (result.affectedRows > 0) {
          res.send({
              status: 200,
              msg: "删除成功"
          })
      } else {
          res.send({
              status: 500,
              msg: "删除失败"
          })
      }
  })
})

// 广告分类管理 查询
router.get("/content/selectContentCategoryByParentId", (req, res) => {
  const id = url.parse(req.url, true).query.id || 1;
  const sql = "select * from content where id=?";
  sqlClient(sql, [id], result => {
      if (result.length > 0) {
          res.send({
              status: 200,
              result
          })
      } else {
          res.send({
              status: 500,
              msg: "暂无数据"
          })
      }
  })
})





module.exports = router

