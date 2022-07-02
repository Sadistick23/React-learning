import React, {Component} from "react";
import '../../App.css';
import nav from './Navigation.module.css';
import {NavLink} from "react-router-dom";


const Navigation = () => {
    return (
        <nav className={nav.nav}>
            <div className={nav.nav__border}>
                <NavLink to="/profile" className={navData => navData.isActive ? nav.active : nav.nav__link}>
                    <div className={nav.design}>Profile</div>
                </NavLink>
                <NavLink to="/dialogs" className={navData => navData.isActive ? nav.active : nav.nav__link}>
                    <div className={nav.design}>Messages</div>
                </NavLink>
                <NavLink to="/music" className={navData => navData.isActive ? nav.active : nav.nav__link}>
                    <div className={nav.design}>Music</div>
                </NavLink>
                <NavLink to="/news" className={navData => navData.isActive ? nav.active : nav.nav__link}>
                    <div className={nav.design}>News</div>
                </NavLink>
                <NavLink to="/settings" className={navData => navData.isActive ? nav.active : nav.nav__link}>
                    <div className={nav.design}>Settings</div>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navigation;