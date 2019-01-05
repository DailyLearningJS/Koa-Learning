const koa = require('koa')
const fs = require('fs')
const app = new koa()

// ctx.request.path 获取请求路径

app.use(ctx => {
    if (ctx.request.path !== '/'){
        ctx.response.type = 'html'
        ctx.response.body = "<a href='/'>点我跳转</a>"
    } else {
        ctx.response.body = 'hello world'
    }
})




app.listen(3000)
