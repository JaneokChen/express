// 导入 Express
const express = require("express");


// 创建 Web 服务器
const app = express()

// 托管静态资源
app.use(express.static('pages'))


app.listen('8081', () => {
  console.log('server running at http://127.0.0.1:8081');
})
