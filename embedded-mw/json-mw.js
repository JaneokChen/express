const express = require('express')
const app = express()

// 通过配置 express.json 中间件解析表单中的 JSON 格式数据
app.use(express.json())
app.post('/login', (req, res) => {
  // 在服务器上可以使用 req.body 接收客户端发送的请求数据
  // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined 
  console.log(`接收到客户端数据：${req.body}`);
  console.log(req.body.name); // 打印接收到的对象的属性值
  res.send(req.body); // 将接收到的数据返回值客户端
})

app.listen('8080', () => {
  console.log('server running at http://127.0.0.1:8080');
})