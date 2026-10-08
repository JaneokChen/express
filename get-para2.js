// 获取动态参数
// 导入 Express
const express = require('express')

// 创建 Web 服务器
const app = express()

// 在 URl 地址中，可以通过（:参数名）的形式匹配动态参数的值
app.get('/userinfo/:id', (req, res) => {
  // req.params 默认是一个空对象，当客户端以动态参数形式传值时，可以通过此对象取值
  console.log(req.params);
  console.log(req.params.id);
  res.send(req.params)
})

app.listen('8080', () => {
  console.log('server running at http://127.0.0.1:8080')
})

