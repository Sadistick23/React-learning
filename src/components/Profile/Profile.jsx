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
                    <Userinfo name='Me_Ariku' age='21' descriptions='I am coder!'/>
                </div>
                    <CreatePost />
                <div>
                    <Post namepost='My first post' description='Hello, its my first post!' images='https://img.fonwall.ru/o/2p/canada-moraine-lake-ozero-gory.jpg?route=mid&amp;h=750' />
                    <Post namepost='Homework' description='Hello, its my first post!' images='https://i.pinimg.com/originals/3e/2b/b0/3e2bb0e5ca44f5c65c2432aae9d94ab1.jpg' />
                    <Post namepost='Girlfriend' description='Hello, its my first post!' images='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701372504.jpg'/>
                    <Post namepost='Its my dog' description='Hello, its my first post!' images='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701372504.jpg' />
                    <Post namepost='Codding' description='Hello, its my first post!' images='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701372504.jpg' />
                    <Post namepost='School' description='Hello, its my first post!' images='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701372504.jpg' />
                </div>
            </main>
    )
}

export default Profile;