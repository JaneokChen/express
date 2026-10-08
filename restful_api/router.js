const express = require('express')

// 创建路由对象
const router = express.Router()

// 挂载路由
// 登录接口，接收 URL 路径参数
router.get('/login', (req, res) => {
  // 获取用户输入
  console.log(req.query);
  const query = req.query // 约定客户端通过查询字符串的方式传递值

  // 响应数据给客户端
  // 在实际项目中应获取前端传递的信息并查询数据库，此处简化
  let result = {
    status: 0, // 状态
    msg: '服务器收到请求', // 消息
    data: query // 数据
  }
  res.send(result)

})

// 获取用户信息接口，接收 urlencoded 数据
router.post('/userinfo', (req, res) => {
  // 获取用户输入
  console.log(req.body);
  const body = req.body // 约定客户端通过 url-encoded 方式传输值，需要配置 urlencoded 中间件，否则 body 为空对象

  // 响应数据给客户端
  res.send({
    status: 0,
    msg: '收到数据',
    data: body // 如果 body 为空对象，则发送的对象不会包含 data 字段
  })
})

module.exports = router
