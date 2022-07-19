import React from "react";
import myFriends from "./Friends.module.css";
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    return (
        <NavLink to={"/friends/" + props.id}>
            <div className={myFriends.friends__bar} key={props.id}>
                <div className={myFriends.friends__avatar}>
                    <img src={props.friends}/>
                </div>
            </div>
        </NavLink>
    )
}

export default Friends;