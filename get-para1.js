// 获取查询的字符串参数
// 导入 Express
const express = require('express')

// 创建 Web 服务器
const app = express()

// 监听 get 请求
app.get('/login', (req, res) => {
  // req.query 默认是空对象，当客户端将查询字符串（本例为 ?name=chenjing）发送到服务器上时，
  // 可以通过 req.query 对象获取客户端传递的响应值
  console.log(req.query) // 接收客户端发送的参数
  console.log(req.query.name) // 获取对象中参数的值
  res.send(req.query)
})

app.listen('8080', () => {
  console.log('server runnnig at http:127.0.0.1:8080');
})