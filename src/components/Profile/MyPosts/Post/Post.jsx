import React, {Component} from "react";
import post from './Post.module.css';

const Post = (props) => {
    return (
        <div className={post.post}>
            <div className={post.namepost}>{ props.namePost }</div>
            <div className={post.description}>{ props.description }</div>
            <div className={post.image}><img src={ props.images }/></div>
        </div>
    )
}

export default Post;