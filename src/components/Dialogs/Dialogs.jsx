import React, {Component} from "react";
import dialogs from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={dialogs.container}>
            <div className={dialogs.users}>
                <h1>Hello!</h1>
            </div>
            <div className={dialogs.messages}>
                <h1>ERDTFHUJOL</h1>
            </div>
        </div>
    )
}

export default Dialogs;