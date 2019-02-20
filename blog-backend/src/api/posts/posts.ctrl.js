let postId = 1;

const posts = [
    {   id: 1,
        title: '제목',
        body: '내용'
    }
];

exports.write = (ctx) =>{
    const{
        title,
        body
    } = ctx.request.body;
}

peostID += 1;