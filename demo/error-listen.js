// try catch 会终止error监听  需要手动释放error事件 才能重新监听到  ctx.app.emit()
var koa = require('koa')
var app = new koa()
var componse = require('koa-compose')

var handle = async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500
        ctx.response.type = 'json'
        ctx.response.body = err
        ctx.app.emit('error', err, ctx)
    }
}

var main = ctx => {
    ctx.throw(500)
}

app.on('error', function (err) {
    console.log('logging error +++++++++', err.message)
    console.log(err)
})

app.use(componse([handle, main]))

app.listen(3000)