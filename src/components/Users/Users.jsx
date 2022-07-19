import React from "react";
import style from "./Users.module.css"
import axios from "axios";

const Users = (props) => {
    if (props.UsersData.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUser(response.data.items)
            })
            /*[
            {
                id: 1,
                UserName: 'John',
                Status: 'Hello, i join this project!',
                images: 'https://a.d-cd.net/1a424f2s-960.jpg',
                followed: true
            },
                {
                    id: 2,
                    UserName: 'Sasha',
                    Status: 'Hello!',
                    images: 'https://a.d-cd.net/1a424f2s-960.jpg',
                    followed: true
                },
                {
                    id: 3,
                    UserName: 'Masha',
                    Status: 'Hello!',
                    images: 'https://a.d-cd.net/1a424f2s-960.jpg',
                    followed: false
                },
            ]*/
    }
    let UsersElements = props.UsersData.map(users => <div key={users.id}>
        <div className={style.user__item}>
            <div className={style.user__avatar}>
                <div><img className={style.user__item_img} src={users.images}/></div>
            </div>
            <div className={style.user__description}>
                <div className={style.user__name}>Name: {users.name}</div>
                <div className={style.user__status}>Status: {users.status}</div>
                <div className={style.follow}>
                    { users.followed
                        ? <button className={style.follow__button} onClick={() => {props.unFollow(users.id)}}>Unfollow</button>
                        : <button className={style.follow__button} onClick={() => {props.follow(users.id)}}>Follow</button>
                    }
                </div>
            </div>
        </div>
    </div>)
    return (
        <div className={style.container}>
            <div className={style.content}>
                {UsersElements}
            </div>
        </div>
    )
}

export default Users;