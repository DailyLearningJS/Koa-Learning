const koa = require('koa')
const app = new koa()

app.use(async (ctx, next) => {
    ctx.throw(404, '没找到该页面')
    await next()
})

app.listen(3000)