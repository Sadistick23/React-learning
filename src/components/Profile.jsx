import React, {Component} from "react";
import './../App.css';

const Profile = () => {
    return (
            <main className={'content'}>
                <div className={'contentHeader'}>
                    <img src="https://pbs.twimg.com/profile_banners/1721701999/1481548159/1500x500"/>
                </div>
                <div className={'userinfo'}>
                    <div className={'avatar'}>
                        <img
                            src="https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png"/>
                    </div>
                    <div className={'info'}>
                        <h4>Me_Ariku</h4>
                        My name is jon.<br/>
                        My age is 21.
                    </div>
                </div>
                <div className={'creatPost'}>
                    <h1>My Posts</h1>
                </div>
                <div className={'allPost'}>
                    <div className={'post'}>
                        <h4>post1</h4>
                    </div>
                    <div className={'post'}>
                        <h4>post2</h4>
                    </div>
                </div>
            </main>
    )
}

export default Profile;