const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

app.use(ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./template.html')
})

app.listen(3000)