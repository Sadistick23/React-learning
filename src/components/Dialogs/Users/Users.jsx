import React from "react";
import dialogs from "./Users.module.css";

const Users = (props) => {
    return (
        <div className={dialogs.user__dialog}>
            <div className={dialogs.user__avatar}><img src={ props.avatar }/></div>
            <div className={dialogs.user__name}>{ props.name }</div>
        </div>
    )
}

export default Users;
