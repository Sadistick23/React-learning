import React from "react";
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../Redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        MessageData: state.MessagesPage.MessageData,
        UsersData: state.MessagesPage.UsersData,
        newMessageText: state.MessagesPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreater());
        },

        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageTextActionCreater(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;