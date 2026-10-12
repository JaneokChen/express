const express = require('express')
const app = express()

// 用于解析表单中 JSON 格式的数据
app.use(express.json())

// 用于解析表单中 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
  console.log(req.body); // req.body 可以接收 JSON 格式和 url-encoded 格式的数据
  console.log(req.body.name);
  res.send(req.body)
})

app.listen('8081', () => {
  console.log('server running at http://127.0.0.1:8081');
})