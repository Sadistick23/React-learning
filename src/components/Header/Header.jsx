import React, {Component} from "react";
import header from './Header.module.css';

const Header = () => {
    return (
        <header className={header.header}>
            <div className={`${header.item} ${header.logo}`}><a href="#" className={header.link}>HOME</a></div>
            <div className={header.link}>
                <div className={header.item}><a href="#">Profile</a></div>
                <div className={header.item}><a href="#">About</a></div>
                <div className={header.item}><a href="#">Sign up</a></div>
            </div>
        </header>
    );
}

export default Header;