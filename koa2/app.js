const Koa = require('koa2')
const chalk = require('chalk')
const fs = require('fs')
const Router = require('koa-router')
const _static = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const router = new Router()
const app = new Koa()
app.use(bodyParser)

app.use(_static(
  path.join(__dirname, './static')
))
app.use(async (ctx, next) => {
  if (ctx.request.path === '/') {
    ctx.response.status = 200
    ctx.response.body = 'index'
  }
  await next()
})

let urls = fs.readdirSync(__dirname + '/urls')
urls.forEach(element => {
  let module = require(__dirname + '/urls/' + element)
  router.use('/' + element.replace('.js', ''), module.routes(), module.allowedMethods()) // 嵌套路由
})
app.use(router.routes())


app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(async (ctx, next) => {
  await ctx.render('index', {message: 'index'}) // render 渲染方法，这里加载到 views/index.ejs 文件 | 第二参数是传参到模版
  await next()
})

app.use(async (ctx, next) => {
  ctx.util = {
    log: require('./utils/log')
  }
  await next()
})

// app.use(async (ctx, next) => {
//   ctx.util.log.info('Something important')
//   await next()
// })

app.listen(3000, function () {
  console.log(chalk.green('启动成功'))
})