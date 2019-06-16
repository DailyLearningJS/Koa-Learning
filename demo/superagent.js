const Koa = require('koa')
const route = require('koa-route')
const superagent = require('superagent')
const axios = require('axios')
const cheerio = require('cheerio')
const app = new Koa()


function getContent (ctx){
    return new Promise((resolve, reject) => {
        ctx.body = '请求中...'
        axios.get('https://cnodejs.org/')
        .then(sres => {
            var $ = cheerio.load(sres.data)
            var items = []
            $('#topic_list .topic_title').each(function (idx, element) {
                var $elemeent = $(element)
                items.push({
                    title: $elemeent.attr('title'),
                    href: $elemeent.attr('href')
                })
            })
            ctx.type="html"
            ctx.body = items.map(item => {
                return `<p><a href="https://cnodejs.org${item.href}">${item.title}</p>`
            }).join('<br/>')
            resolve(items)
        }).catch(err => {
            console.error(err)
        })
    })
}

app.use(route.get('/', getContent))
console.log('启动成功')
app.listen(3000)