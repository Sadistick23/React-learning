import React, {Component, useEffect} from "react";
import dialogs from './Dialogs.module.css';
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import TextareaAutosize from 'react-textarea-autosize';
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../Redux/State";



const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        if ( props.state.MessageElement.newMessageText === '' ) {
            alert( "Message clear" )
        } else {
            props.dispatch( addMessageActionCreater() );
        }
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreater(text);
        props.dispatch(action);
    }

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" && !event.shiftKey || event.code === "NumpadEnter" ) {
                event.preventDefault();
                if ( props.state.MessageElement.newMessageText === '' ) {
                    alert( "Message clear" )
                } else {
                    props.dispatch( addMessageActionCreater() );
                }
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, []);

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
                    <TextareaAutosize minRows={3} maxRows={10}
                                      ref={newMessageElement}
                                      className={dialogs.messages__textarea}
                                      onChange={onMessageChange}
                                      value={ props.state.MessageElement.newMessageText }
                                      placeholder="Write message..." required/>
                    <a className={dialogs.messages__button} href="#" onClick={ addMessage }><img src="https://img.icons8.com/material-outlined/344/filled-sent.png"/></a>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;