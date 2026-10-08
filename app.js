// 使用 Express 创建基本的服务器
// 导入 Express
const express = require('express')

// 创建 Web 服务器
const app = express()

// 托管静态资源
app.use(express.static('html'))

// 监听 get 请求
app.get('/index', (req, res) => {
  res.send('index page') // 发送响应内容给客户端
})

// 监听 post 请求
app.post('/author', (req, res) => {
  res.send({
    name: 'chenjing',
    age: 30,
    gender: 'femal',
    nick: 'cj'
  })
})

// 启动服务器
app.listen(8080, () => {
  console.log('Express 服务器启动 http://127.0.0.1:8080')
})