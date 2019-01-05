const Koa = require('koa');
const route = require('koa-route'); // 注意提示module not found  npm install koa-route@next 安装
const app = new Koa();

const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(route.get('/', main));
app.use(route.get('/about', about));

app.listen(3000);