var koa = require('koa')
var app = new koa()
var koaBody = require('koa-body')

var main = async ctx => {
    const body = ctx.request.body
    if(!body.name) ctx.throw(400, '.name required')
    ctx.body = {name: body.name}
}

app.use(koaBody())
app.use(main)
app.listen(3000)


/*
打开另一个命令行窗口，运行下面的命令。
$ curl -X POST --data "name=Jack" 127.0.0.1:3000
{"name":"Jack"}

$ curl -X POST --data "name" 127.0.0.1:3000
name required

*/