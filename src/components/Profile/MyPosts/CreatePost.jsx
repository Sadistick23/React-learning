import React, {Component} from "react";
import createpost from './CreatePost.module.css';

const CreatPost = () => {
    return (
        <div className={createpost.creatPost}>
            <div className={createpost.text}>Creat Posts:</div>
            <button className={createpost.button__post}>Post</button>
        </div>
    )
}

export default CreatPost;