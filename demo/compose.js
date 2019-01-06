var koa = require('koa')
var app = new koa()
var compose = require('koa-compose') // 合并中间件

var logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
    next()
}

var main = ctx => {
    ctx.response.body = 'hello world'
}

app.use( compose([logger, main]) )
app.listen(3000)