const express = require("express")
const app = express()
const cors =require("cors")
const bodyParser = require("body-parser")
const router = require('./router.js')



// cors 解决跨域问题
app.use(cors())
// Node.js 正文解析中间件
app.use(bodyParser.urlencoded({
  extended:true
}))

app.use('/api',router)

// 绑定侦听端口号
app.listen(3000,()=>{
  console.log(3000);
})