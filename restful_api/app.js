// 导入 Express
const express = require('express')

// 创建 Web 服务器
const app = express()

// 配置 urlencoded 中间件，用于解析 urlencoded 格式的数据
app.use(express.urlencoded({ extended: false }))

// 导入路由模块
const router = require('./router')

// 注册路由模块
app.use('/api', router)

// 启动服务器
app.listen('8080', () => {
  console.log('server running at http://127.0.0.1:8080')
})
