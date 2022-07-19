import React from "react";
import dialogs from './Dialogs.module.css';
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import TextareaAutosize from 'react-textarea-autosize';

const Dialogs = (state) => {

    let newMessageElement = React.createRef();

    let MessageElements = state.MessageData.map ( message => <Messages msg={message.msg}  key={message.id} who={message.who}/>)
    let UsersElements = state.UsersData.map ( user => <Users name={user.name} key={user.id} id={user.id} avatar={user.avatar}/>)


    let onSendMessageClick = () => {
        if ( state.newMessageText === '' ) {
            alert("Message clear")
        } else {
            state.sendMessage();
        }
    }

    let onMessageChange = (event) => {
        let body = event.target.value;
        state.updateNewMessageBody(body);
    }

    let onEnterPress = (event) => {
        if (event.keyCode === 13 && event.shiftKey === false) {
            event.preventDefault();
            if ( state.newMessageText === '' ) {
                alert( "Message clear" )
            } else {
                state.sendMessage();
            }
        }
    }

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
                    <TextareaAutosize minRows={1} maxRows={6}
                                      ref={newMessageElement}
                                      className={dialogs.messages__textarea}
                                      onChange={onMessageChange}
                                      onKeyDown={onEnterPress}
                                      value={ state.newMessageText }
                                      placeholder="Write message..." required/>
                    <a className={dialogs.messages__button} onClick={ onSendMessageClick }><img src="https://img.icons8.com/material-outlined/344/filled-sent.png"/></a>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;