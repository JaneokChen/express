// 导入 Express
const express = require("express");


// 创建 Web 服务器
const app = express()

// 跨域支持
const cors = require('cors')
app.use(cors())

// 配置中间件用于接收 urlencoded 表单数据
app.use(express.urlencoded({ extended: false }))

// 1、导入用于生成 JWT 字符串的包
const jwt = require('jsonwebtoken')

// 2、导入用于将客户端发送过来的 JWT 字符串，解析还原成 JSON 对象的包
const { expressjwt: expressJWT } = require('express-jwt');

// 3、定义密钥
const secretKey = 'chenjing'

// 4、注册中间件
app.use(expressJWT({
  secret: secretKey,
  algorithms: ['HS256'],
  credentialsRequired: true // 设置为 false 就不进行校验了，游客页可以访问
}).unless({
  // 不需要验证的接口，即设置 JWT 认证白名单
  path: [
    '/login'
  ]
}))

// 登录接口
app.post('/login', (req, res) => {
  // 接收通过 url-encoded 发送的表单数据
  const userInfo = req.body

  // 生成 JWT
  const token = jwt.sign({
    username: userInfo.username
  }, secretKey, {
    expiresIn: '30s'
  })

  res.send({
    status: 200,
    msg: '登录成功',
    token: token
  })
})

// 获取用户信息，需要权限
app.get('/getUserInfo', (req, res) => {
  console.log(req);
  res.send({
    status: 200,
    msg: '获取成功',
    data: req.user
  })
})

// 全局错误处理中间件
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: 401,
      msg: '无效的 Token'
    })
  }

  return res.send({
    status: 500,
    msg: '未知错误'
  })
})

app.listen('8080', () => {
  console.log('server running at http://127.0.0.1:8080');
})
