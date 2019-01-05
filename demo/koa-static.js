// koa-static使用
// http://localhost:3000/koa-static.js 查看代码
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname));

app.use(main);
app.listen(3000);
console.log("listening on port 3000")