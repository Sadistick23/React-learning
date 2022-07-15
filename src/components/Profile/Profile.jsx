import React, {Component} from "react";
import '../../App.css';
import classes from './Profile.module.css';
import Userinfo from "./UserInfo/Userinfo";
import CreatePostContainer from "./MyPosts/CreatePostContainer";

const Profile = (props) => {
    return (
            <main className={classes.content}>
                <Userinfo name='Me_Ariku' age='21' descriptions='I am a coder!' />
                <CreatePostContainer />
            </main>
    )
}

export default Profile;