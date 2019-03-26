const Koa = require('koa')
const app = new Koa()
const chalk = require('chalk')

function YellowChalk (message) {
    // console.log(chalk.yellow(JSON.stringify(message)))
    for (var i in message) {
        console.log(chalk.yellow(i + ': ' + JSON.stringify(message[i])))
    }
}
app.use(async (ctx, next) => {
    console.log(chalk.green('权限验证中ing...'))
    ctx.name = "糖少"
    await next()
})

app.use(async (ctx, next) => {
    console.log(chalk.green(ctx.name + ' ~你好 日志记录完成'))
    console.log(chalk.yellow('Koa Request 内容：'))
    // YellowChalk(ctx.request)


    console.log(ctx.request)
    // // header
    // YellowChalk(ctx.request.headers) 
    // YellowChalk(ctx.request.protocl)
    // YellowChalk(ctx.request.type)
    // YellowChalk(ctx.request.charset)

    // // method
    // YellowChalk(ctx.request.method)
    // YellowChalk(ctx.request.query) // get
    // YellowChalk(ctx.request.body) // post | 依赖 koa-bodyparse 第三方模块，后面章节有描述

    // // path
    // YellowChalk(ctx.request.url) // path/?get=
    // YellowChalk(ctx.request.path) // path

    // // host
    // YellowChalk(ctx.request.host) // hostname:port
    // YellowChalk(ctx.request.hostname) // hostname
    // YellowChalk(ctx.request.ip)
    // YellowChalk(ctx.request.subdomains) 

    // // cookie
    // console.log(ctx.cookies.get('name')) // 获取 cookie
    // ctx.cookies.set(name, value, { // 设置 cookie
    //     'expires': new Date() // 时间
    //     'path' : '/' // 路径
    //     'domain': '0.0.0.0' // 域
    //     'httpOnly': false // 禁止js获取
    // })

    // // error
    // ctx.throw(404, 'Not found')

    await next()
})
app.use(async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = 'HI, KOA'
    await next()
})



app.listen(3000)