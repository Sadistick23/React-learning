import React from "react";
import dialogs from "./Users.module.css";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id}>
            <div className={dialogs.user__dialog}>
                <div className={dialogs.user__avatar}><img src={props.avatar}/></div>
                <div className={dialogs.user__name}>{props.name}</div>
            </div>
        </NavLink>
    )
}

export default Users;
