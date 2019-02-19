const Router = require('koa-router');
const posts = require('./posts');


const api = new Router(); // 라우터를 api에 연결

api.use('/posts', posts.routes());

module.exports = api;