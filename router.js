const express = require('express')

// 创建路由对象
const router = express.Router()

// 挂载路由
router.get('/', (req, res) => {
  res.send('get 请求 -')
})

router.post('/', (req, res) => {
  res.send('post 请求 -')
})

module.exports = router