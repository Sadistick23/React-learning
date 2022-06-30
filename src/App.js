import React, {Component} from "react";
import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import Footer from "./components/Footer";


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navigation/>
            <Profile/>
            <Footer/>
        </div>
    )
}

export default App;
