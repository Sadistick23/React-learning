import React, {Component} from "react";
import dialogs from './Dialogs.module.css';
import Users from "./Users/Users";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    //Messages
    let MessageElements = props.state.MessageData.map ( message => <Messages msg={message.msg} who={message.who}/>)
    //Users
    let UsersElements = props.state.UsersData.map ( user => <Users name={user.name} id={user.id} avatar={user.avatar}/>)

    return (
        <div className={dialogs.container}>
            <div className={dialogs.users__list}>
                { UsersElements }
            </div>
            <div>
                <div className={dialogs.messages}>
                    <div>{MessageElements}</div>
                </div>
                <div className={dialogs.messages__textarea_container}>
                    <textarea className={dialogs.messages__textarea} placeholder="Write message..." required></textarea>
                    <a className={dialogs.messages__button} href="#"><img src="https://img.icons8.com/material-outlined/344/filled-sent.png"/></a>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;