import React, {Component} from "react";
import dialogs from './Dialogs.module.css';
import Users from "./Users/Users";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    //Messages
    let MessageElements = props.state.MessageData.map ( message => <Messages msg={message.msg}/>)
    //Users
    let UsersElements = props.state.UsersData.map ( user => <Users name={user.name} id={user.id} avatar={user.avatar}/>)

    return (
        <div className={dialogs.container}>
            <div className={dialogs.users__list}>
                { UsersElements }
            </div>
            
            <div className={dialogs.messages}>
                { MessageElements }
            </div>
        </div>
    )
}

export default Dialogs;