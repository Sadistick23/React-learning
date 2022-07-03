import React, {Component} from "react";
import userinfo from './Userinfo.module.css';

const Userinfo = (props) => {
    return (
        <div className={userinfo.user__content}>
            <div className={userinfo.user__ui}>
                <div className={userinfo.user__image}>
                    <img src="https://pbs.twimg.com/profile_banners/1721701999/1481548159/1500x500"/>
                </div>
            </div>
            <div className={userinfo.user__info}>
                <div className={userinfo.user__avatar}>
                    <img
                        src="https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png"/>
                </div>
                <div className={userinfo.user__container}>
                    <div className={userinfo.user__name}>Name: {props.name}</div>
                    <div className={userinfo.user__description}>Descriptions: {props.descriptions}</div>
                    <div className={userinfo.user__age}>Age: {props.age}</div>
                </div>
            </div>
        </div>

    )
}

export default Userinfo;