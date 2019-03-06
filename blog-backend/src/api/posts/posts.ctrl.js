const Post = require('models/post');
//포스트 작성 부분
exports.write = async (ctx) =>{
    const {title, body, tags} = ctx.request.body;

    const post = new Post({
        title,body,tags
    });
    try{
        await post.save();
        ctx.body = post;
    }catch(e){
        ctx.throw(e, 500);
    }
};

//포스트 목록 조회 GET /api/posts
exports.list = async(ctx) =>{
    try{
        const posts = await Post.find().exec();
        ctx.body = posts ;
    }catch(e){
        ctx.throw(e, 500);
    }
};

//특정 포스트 목록 조회 GET /api/posts/:id
exports.read = async(ctx) => {
    const { id } = ctx.params;
    try{
        const post = await Post.findById(id).exec();
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(e, 500);
    }
};

//특정 포스트 제거 DELETE /api/posts/:id
exports.remove = (ctx) => {
 
};

//포스트 수정 교체 PUT /api/posts/:id

exports.replace = (ctx)=>{

};

//포스트 수정(특정 필드 변경) PATH /api/posts/:id
exports.update = (ctx) =>{

};
