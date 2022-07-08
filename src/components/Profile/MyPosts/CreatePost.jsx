import React, {Component} from "react";
import createpost from './CreatePost.module.css';
import TextareaAutosize from 'react-textarea-autosize';
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../Redux/State";

const CreatPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( addPostActionCreater() );
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreater(text);
        props.dispatch(action);
    }

    return (
        <div className={createpost.creatPost}>
            <div className={createpost.text}>Creat Post:</div>
            <TextareaAutosize minRows={3} maxRows={10}
                              className={createpost.textarea}
                              ref={newPostElement}
                              onChange={onPostChange}
                              value={ props.PostElements.newPostText }
                              placeholder="Post name..." />
            <button onClick={ addPost } className={createpost.button__post}>Post</button>
        </div>
    )
}

export default CreatPost;