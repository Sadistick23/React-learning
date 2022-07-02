import React, {Component} from "react";
import dialogs from './Dialogs.module.css';
import Users from "./Users/Users";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={dialogs.container}>
            <div className={dialogs.users__list}>
                <NavLink to="/dialogs/1"><Users name='Maksim' avatar='https://igra4.ru/wp-content/uploads/2019/12/4675e38ad2a7ce99b0627bec81823772.png'/></NavLink>
                <NavLink to="/dialogs/2"><Users name='Olga' avatar='https://igra4.ru/wp-content/uploads/2019/12/4675e38ad2a7ce99b0627bec81823772.png'/></NavLink>
                <NavLink to="/dialogs/3"><Users name='Sergey' avatar='https://igra4.ru/wp-content/uploads/2019/12/4675e38ad2a7ce99b0627bec81823772.png'/></NavLink>
                <NavLink to="/dialogs/4"><Users name='Polina' avatar='https://igra4.ru/wp-content/uploads/2019/12/4675e38ad2a7ce99b0627bec81823772.png'/></NavLink>
                <NavLink to="/dialogs/5"><Users name='Sveta' avatar='https://igra4.ru/wp-content/uploads/2019/12/4675e38ad2a7ce99b0627bec81823772.png'/></NavLink>
            </div>
            
            <div className={dialogs.messages}>
                <div className={dialogs.user__message}>Hello!</div>
                <div className={dialogs.user__message}>How are u?</div>
                <div className={dialogs.user__message}>I am fine. U?</div>
                <div className={dialogs.user__message}>Can u give me pen?</div>
                <div className={dialogs.user__message}>NO</div>
                <div className={dialogs.user__message}>Why, no?</div>
                <div className={dialogs.user__message}>I am so sry, i dont have 2 pen.</div>
                <div className={dialogs.user__message}>Okay, no problem.</div>
            </div>
        </div>
    )
}

export default Dialogs;