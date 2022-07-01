import React, {Component} from "react";
import '../../App.css';
import nav from './Navigation.module.css';


const Navigation = () => {
    return (
        <nav className={nav.nav}>
            <div className={nav.nav__border}>
                <div className={`${nav.design_button} ${nav.nav__link}`}><a href="#">Profile</a></div>
                <div className={`${nav.design_button} ${nav.nav__link}`}><a href="#">Messages</a></div>
                <div className={`${nav.design_button} ${nav.nav__link}`}><a href="#">Music</a></div>
                <div className={`${nav.design_button} ${nav.nav__link}`}><a href="#">News</a></div>
                <div className={`${nav.design_button} ${nav.nav__link}`}><a href="#">Settings</a></div>
            </div>
        </nav>
    )
}

export default Navigation;