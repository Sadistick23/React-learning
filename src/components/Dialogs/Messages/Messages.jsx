import React from "react";
import messages from "./Messages.module.css"

const Messages = (props) => {
    return (
        <div className={messages.container}>
            <div className={messages.msg__text} id={ props.my }> { props.msg } </div>
        </div>
    )
}

export default Messages;