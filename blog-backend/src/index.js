const Router = require('koa-router');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');


const api = require('./api');

const app = new Koa(); // 라우터를 api에 연결
const router = new Router();

router.use('/api', api.routes());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());


app.listen(4000, ()=>{
    console.log('listening to port 4000');
});