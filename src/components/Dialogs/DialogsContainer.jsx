import React from "react";
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../Redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        MessageData: state.MessagesPage.MessageData,
        UsersData: state.MessagesPage.UsersData,
        MessageElement: state.MessagesPage.MessageElement,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(addMessageActionCreater());
        },

        onMessageChange: (body) => {
            dispatch(updateNewMessageTextActionCreater(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;