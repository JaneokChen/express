// 导入 Express
const express = require('express')

// 创建 Web 服务器
const app = express()

// 直接挂载路由
app.get('/', (req, res) => {
  res.send('get 请求')
})

app.post('/', (req, res) => {
  res.send('post 请求')
})

// 启动服务器
app.listen(8080, () => {
  console.log('server running at http://127.0.0.1:8080');
})