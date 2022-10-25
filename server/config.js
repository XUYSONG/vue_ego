// 引入数据库包
const mysql = require('mysql')

const client = mysql.createConnection({
  host:"localhost",
  user:'root',
  password:'abc123',
  database:'2022_ego'
})

const sqlClient = (sql,arr,callback) =>{
  client.query(sql,arr,(error,result)=>{
    if(error){
      console.log(error);
      return
    }else(
      callback(result)
    )
  })
}

module.exports = sqlClient