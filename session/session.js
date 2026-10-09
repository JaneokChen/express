// 导入 Express
const express = require('express')

// 创建 Web 服务器
const app = express()

// 托管静态资源
app.use(express.static('pages'))

// 解析 urlencoded 数据
app.use(express.urlencoded({ extended: false }))

// 跨域
const cors = require('cors')
app.use(cors())

// 1、导入 Session 中间件
const session = require('express-session')

// 2、配置中间件
app.use(session({
  secret: 'chenjing', // 密钥，可以是任意字符串
  resave: false, // 固定写法
  saveUninitialized: true // 固定写法
}))

// 登录接口，用于将用户信息存储到 Session 中
app.post('/login', (req, res) => {
  console.log(req.body)
  if (req.body.username === 'admin' && req.body.pwd === '123456') {
    console.log(req.body);
    // 登录成功，用户信息存在服务器的 Session 中
    req.session.user = req.body // 用户信息
    req.session.isLogin = true // 登录状态
    res.send({ status: 1, msg: '登录成功' })
  } else {
    return res.send({ status: 0, msg: "账号密码错误，登录失败！" })
  }
})

// 获取用户信息接口，用户从 Session 中读取数据
app.get('/userInfo', (req, res) => {
  // 判断用户是否登录
  if (!req.session.isLogin) {
    return res.send({ status: 0, msg: '未登录' })
  }

  res.send({
    status: 1,
    msg: '获取成功',
    username: req.session.user.username
  })
})

// 退出接口，用于清除 Session 数据
app.post('/logout', (req, res) => {
  req.session.destroy(); // 清空当前客户端对应的 Session 信息
  res.send({
    status: 1,
    msg: '退出成功'
  })
})

app.listen('8080', () => {
  console.log('server running at http://127.0.0.1:8080');
})