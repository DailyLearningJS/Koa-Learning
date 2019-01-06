var koa = require('koa')
var app = new koa()

var main = ctx => {
    ctx.throw(500)
    // ctx.response.status = 404
}

// 错误公共中间件
// var logger = async (ctx ,next) => {
//     try {
//         await next()
//     } catch (err) {
//         ctx.response.status = err.statusCode || err.status || 500
//         ctx.response.body = {
//            message: err.message 
//         }
//     }
// }

// error事件监听
app.on('error', (err, ctx) => {
    console.error('server error', err);
  })

// app.use(logger)

app.use(main)
app.listen(3000)