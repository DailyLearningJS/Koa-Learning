var koa = require('koa')
var app = new koa()
const fs = require('fs')

const main = async function (ctx ,next) {
    ctx.response.type = 'html'
    ctx.response.body = await fs.createReadStream('./template.html')
}
app.use(main)
app.listen(3000)