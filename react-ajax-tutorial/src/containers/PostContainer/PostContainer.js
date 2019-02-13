import React, {Component} from 'react';
import { PostWrapper, Navigate, Post, Warning } from '../../components';
import * as service from '../../services/post';


class PostContainer extends Component {
    componentDidMount(){ //LifeCycle API(컴포넌트 로드되고 데이터 불러옴)
        this.fetchPostInfo(1);
    }
    constructor(props){
        super();
        this.state={
            postId:1, //현재 포스트 번호
            fetching: false, //요청완료
            post:{
                title: null,
                body: null
            },
            comments: [],
            warningVisibility: false
        };
    }
    /*fetchPostInfo = async(postId)=>{
        const post = await service.getPost(postId);
        console.log(post);
        const comments = await service.getComments(postId);
        console.log(comments);   
    }*/
    showWarning = () => {
        this.setState({
            warningVisibility: true
        });

        // after 1.5 sec

        setTimeout(
            () => {
                this.setState({
                    warningVisibility: false
                });
            }, 1500
        );
    }

    fetchPostInfo = async (postId)=>{
        this.setState({
            fetching:true
        });
        try{
            const info = await Promise.all([
                service.getPost(postId),
                service.getComments(postId)
            ]);
            
            const {title, body} = info[0].data; // 정보를 넣고 아래 setState에서 다시설정..
            const comments = info[1].data;
            //console.log(comments);
            this.setState({
                postId,
                post:{
                    title,
                    body
                },
                comments,
                fetching: false
            });
        } catch(e){
            this.setState({
                fetching: false
            })
            this.showWarning();
        }
    }

    handleNavigateClick = (type) => {
        const {postId} = this.state;

        if(type === 'NEXT') {
            this.fetchPostInfo(postId+1);
        } else {
            this.fetchPostInfo(postId-1);
        }
    }

    render() {
        const {postId, fetching, post, comments, warningVisibility} = this.state;

        return (
            <PostWrapper>
                <Navigate 
                    postId={postId}
                    disabled={fetching}
                    onClick={this.handleNavigateClick} // 함수를 넘김
                />
                <Post
                    title={post.title}
                    body={post.body}
                    comments={comments}
                />
                <Warning visible={warningVisibility} message="That post does not exist"/>
            </PostWrapper>
        );
    }
}

export default PostContainer;