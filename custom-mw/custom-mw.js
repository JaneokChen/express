// 导入 Express
const express = require('express')
// 导入自定义中间件模块
const myParser = require('./custom-parser')

// 创建 Web 服务器
const app = express()

// 使用自定义中间件模块
app.use(myParser)

// 定义路由
app.post('/login', (req, res) => {
  res.send(req.body)
})

app.listen('8080', () => {
  console.log('server running at http://127.0.0.1:8080');
})


