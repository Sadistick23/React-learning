import React, {Component} from "react";
import post from './Post.module.css';

const Post = (props) => {
    return (
        <div className={post.post}>
            <div className={post.namepost}>{ props.namePost }</div>
            <div className={post.description}>{ props.description }</div>
            <div className={post.image}><img src={ props.images }/></div>
            <div className={post.button}>
                <div>
                    <a href="#">
                        <div className={post.button__style}>
                            <img src="https://img.icons8.com/material-outlined/24/like--v1.png"/>
                            <div className={post.count}>{ props.LikeCount }</div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <div className={post.button__style}>
                            <img
                                src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/external-comment-communication-royyan-wijaya-detailed-outline-royyan-wijaya.png"/>
                            <div className={post.count}>{ props.CommentCount }</div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <div className={post.button__style}>
                            <img
                                src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/24/external-Repost-social-media-bearicons-detailed-outline-bearicons.png"/>
                            <div className={post.count}>{ props.RepostCount }</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Post;