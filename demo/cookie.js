var koa = require('koa')
var app = new koa()

var main = ctx => {
    const n = Number(ctx.cookies.get('view') || 0) + 1
    ctx.cookies.set('view', n)
    ctx.response.body = n + 'views'
}

app.use(main)
app.listen(3000)