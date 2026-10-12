// 导入 Express
const express = require('express')
// 导入 Node.js 内置的 querystring 模块
const qs = require('querystring')


// 创建 Web 服务器
const app = express()


// 定义中间件
app.use((req, res, next) => {
  let str = '';

  // 监听 data 事件接收数据
  req.on('data', (block) => {
    str += block;
  })

  // 监听 end 事件，数据接收完毕
  req.on('end', () => {
    console.log(str); // 查询字符串，形如 name=chenjing&age=30

    // 利用 querystring 模块的 parse 方法将查询字符串转化为对象
    const body = qs.parse(str)
    req.body = body
    next()
  })
})

// 定义路由
app.post('/login', (req, res) => {
  res.send(req.body)
})

app.listen('8080', () => {
  console.log('server running at http://127.0.0.1:8080');
})


