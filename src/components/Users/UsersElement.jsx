import React from "react";
import users from "./Users.module.css"

const UsersElement = (props) => {
    return (
        <div>
            <div className={users.user__item}>
                <div className={users.user__avatar}>
                    <div><img className={users.user__item_img} src={props.images}/></div>
                </div>
                <div className={users.user__description}>
                    <div className={users.user__name}>Name: {props.UserName}</div>
                    <div className={users.user__status}>Status: {props.Status}</div>
                    <div className={users.follow}>
                        { props.follow ? <button className={users.follow__button} onClick={ () => { props.unfollow(props.id) } } >Unfollow</button> : <button className={users.follow__button} onClick={ () => { props.follow(props.id) } }>Follow</button> }
                        <button className={users.follow__button}>Follow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersElement;