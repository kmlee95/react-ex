const Koa = require('koa');
const Router = require('koa-router');

const api = require('./api');

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

router.get('/about', )
app.listen(4000, ()=>{
    console.log('listening to port 4000');
});