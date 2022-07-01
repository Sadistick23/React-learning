import React, {Component} from "react";
import userinfo from './Userinfo.module.css';

const Userinfo = () => {
    return (
        <div className={userinfo.user__info}>
            <div className={userinfo.user__name}>Name: Me_Ariku</div>
            <div className={userinfo.user__description}>Descriptions: juytdfghjkopiufthbjkjyufyvhkbhlifyj</div>
            <div className={userinfo.user__age}>Age: My age is 21</div>
        </div>
    )
}

export default Userinfo;