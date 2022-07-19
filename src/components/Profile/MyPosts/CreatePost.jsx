import React, {Component} from "react";
import createpost from './CreatePost.module.css';
import TextareaAutosize from 'react-textarea-autosize';
import Post from "./Post/Post";

const CreatPost = (props) => {
    let PostElement = props.posts.map ( post => <Post namePost={  post.namePost}
                                                                  description={post.description}
                                                                  images={post.images}
                                                                  LikeCount={post.LikeCount}
                                                                  CommentCount={post.CommentCount}
                                                                  RepostCount={post.RepostCount}
                                                                  key={post.id}/> )

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={createpost.creatPost}>
            <div className={createpost.text}>Creat Post:</div>
            <div>
                <TextareaAutosize minRows={1} maxRows={6}
                                  className={createpost.textarea}
                                  ref={newPostElement}
                                  onChange={onPostChange}
                                  value={ props.newPostText }
                                  placeholder="Post name..." required/>
            </div>
            <div><button onClick={ onAddPost } className={createpost.button__post}>Creat Post</button></div>
            <div>
                { PostElement }
            </div>
        </div>
    )
}

export default CreatPost;