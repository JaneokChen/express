// 导入 Node.js 内置的 querystring 模块
const qs = require('querystring')

// 定义中间件
function myParser(req, res, next) {
  let str = ''

  // 监听 data 事件接收数据
  req.on('data', (block) => {
    str += block
  })

  // 监听 end 事件，数据接收完毕
  req.on('end', () => {
    console.log(str);
    // 利用 querystring 模块的 parse 方法将查询字符串转化为对象
    const body = qs.parse(str)
    req.body = body
    next()
  })
}


// 对外暴露自定义模块
module.exports = myParser 