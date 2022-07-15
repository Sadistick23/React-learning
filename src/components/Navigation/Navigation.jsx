import React from "react";
import nav from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = (props) => {

    let FriendsElement = props.friendsPage.map(friends => <div className={nav.friends__bar}><a
        href="#"><img src={friends.FriendsAvatar}/></a></div>)

    return (
        <nav className={nav.nav}>
            <div className={nav.nav__border}>
                <NavLink to="/profile"
                         className={navData => navData.isActive ? nav.active : nav.nav__link}>
                    <div className={nav.design}>Profile</div>
                </NavLink>
                <NavLink to="/dialogs"
                         className={navData => navData.isActive ? nav.active : nav.nav__link}>
                    <div className={nav.design}>Messages</div>
                </NavLink>
                <NavLink to="/music"
                         className={navData => navData.isActive ? nav.active : nav.nav__link}>
                    <div className={nav.design}>Music</div>
                </NavLink>
                <NavLink to="/news"
                         className={navData => navData.isActive ? nav.active : nav.nav__link}>
                    <div className={nav.design}>News</div>
                </NavLink>
                <NavLink to="/settings"
                         className={navData => navData.isActive ? nav.active : nav.nav__link}>
                    <div className={nav.design}>Settings</div>
                </NavLink>
            </div>
            <div className={nav.nav__friends_border}>
                <NavLink to="/friends"
                         className={navData => navData.isActive ? nav.active : nav.nav__link}>
                    <div className={nav.design}>Friends</div>
                </NavLink>
                {FriendsElement}
            </div>
        </nav>
    )
}

export default Navigation;