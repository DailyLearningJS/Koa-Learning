var Koa = require('koa')
var app = new Koa()

app.use( ctx => {
    ctx.response.body = 'hello world'
})

app.listen(3000)