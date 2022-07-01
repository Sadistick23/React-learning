import React, {Component} from "react";
import userinfo from './Userinfo.module.css';

const Userinfo = (props) => {
    return (
        <div className={userinfo.user__info}>
            <div className={userinfo.user__name}>Name: { props.name }</div>
            <div className={userinfo.user__description}>Descriptions: { props.descriptions }</div>
            <div className={userinfo.user__age}>Age: { props.age }</div>
        </div>
    )
}

export default Userinfo;