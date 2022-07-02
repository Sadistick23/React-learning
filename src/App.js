import React, {Component} from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News"
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navigation/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="dialogs/*" element={<Dialogs/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
