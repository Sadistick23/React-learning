import React, {Component} from "react";
import CreatPost from "./CreatePost";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../Redux/post-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.PostPage.PostData,
        newPostText: state.PostPage.PostElements.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreater(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreater());
        }
    }
}

const CreatPostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatPost)

export default CreatPostContainer;