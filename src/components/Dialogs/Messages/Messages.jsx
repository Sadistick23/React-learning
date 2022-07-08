import React from "react";
import messages from "./Messages.module.css"
import './Messages.css'



const Messages = (props) => {
    return (
        <div className={messages.container}>
            <div className={`${messages.msg__text} ${ props.who }`}>{ props.msg }</div>
        </div>
    )
}

export default Messages;