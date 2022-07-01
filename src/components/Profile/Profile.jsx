import React, {Component} from "react";
import '../../App.css';
import classes from './Profile.module.css';
import Post from "./MyPosts/Post/Post";
import CreatePost from "./MyPosts/CreatePost";
import Userinfo from "./UserInfo/Userinfo";

const Profile = () => {
    return (
            <main className={classes.content}>
                <div className={classes.contentHeader}>
                    <img src="https://pbs.twimg.com/profile_banners/1721701999/1481548159/1500x500"/>
                </div>
                <div className={classes.userinfo}>
                    <div className={classes.avatar}>
                        <img
                            src="https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png"/>
                    </div>
                    <Userinfo />
                </div>
                    <CreatePost />
                <div>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </main>
    )
}

export default Profile;