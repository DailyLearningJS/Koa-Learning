// logger 中间件
var koa = require('koa')
var app = new koa()

// 第一种写法
// app.use( ctx => {
//     console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
//     ctx.response.body = 'hello world'
// })




// 第二种写法
// var logger = (ctx, next) => {
//     console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
//     next()
// }
// app.use(logger)
// app.use(ctx => {
//     ctx.response.body = 'hello'
// })


// 中间件传递关系 栈(先进后出)
const one = (ctx, next) => {
    console.log('>> one');
    next();
    console.log('<< one');
  }
  
  const two = (ctx, next) => {
    console.log('>> two');
    next(); 
    console.log('<< two');
  }
  
  const three = (ctx, next) => {
    console.log('>> three');
    next();
    console.log('<< three');
  }
  
  app.use(one);
  app.use(two);
  app.use(three);

app.listen(3000)