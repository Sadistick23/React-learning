import React, {Component} from "react";
import createpost from './CreatePost.module.css';

const CreatPost = (props) => {
    return (
        <div className={createpost.creatPost}>
            <div className={createpost.text}>Creat Post:</div>
            <textarea name="" id="" cols="60" rows="10"></textarea>
            <button className={createpost.button__post}>Post</button>
        </div>
    )
}

export default CreatPost;