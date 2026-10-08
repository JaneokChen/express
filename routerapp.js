const express = require('express')
const app = express()

// 1、导入路由模块
const router = require('./router.js') // 后缀可以不写，但路径要正确

// 2、注册路由模块
app.use(router)

// 支持添加前缀，访问地址为 http://127.0.0.1:8080/api
// app.use('/api', router)
app.listen('8080', () => {
  console.log('server running at http://127.0.0.1:8080')
})