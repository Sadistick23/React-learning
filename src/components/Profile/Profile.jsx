import React, {Component} from "react";
import '../../App.css';
import classes from './Profile.module.css';
import Post from "./MyPosts/Post/Post";
import CreatePost from "./MyPosts/CreatePost";
import Userinfo from "./UserInfo/Userinfo";

const Profile = (props) => {

    //Post
    let PostElement = props.state.PostData.map ( post => <Post namePost={post.namePost} description={post.description} images={post.images} LikeCount={post.LikeCount} CommentCount={post.CommentCount} RepostCount={post.RepostCount} /> )

    return (
            <main className={classes.content}>
                <Userinfo name='Me_Ariku' age='21' descriptions='I am a coder!' />
                <CreatePost />
                <div>
                    { PostElement }
                </div>
            </main>
    )
}

export default Profile;