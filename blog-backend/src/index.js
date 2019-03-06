require('dotenv').config();

const Router = require('koa-router');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const {
    PORT : port = 4000,
    MONGO_URI: mongoURI
} = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI).then(() => {
    console.log('connected to mongodb');
}).catch( (e) => {
    console.error(e);
});

const api = require('./api');

const app = new Koa(); // 라우터를 api에 연결
const router = new Router();

router.use('/api', api.routes());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());


app.listen(port, () => {
    console.log('listening to port 4000');
});