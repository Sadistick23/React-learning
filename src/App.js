import React, {Component} from "react";
import './App.css';
import Header from "./components/Header/Header";
import NavigationContainer from "./components/Navigation/NavigationContainer";
import Profile from "./components/Profile/Profile";
import MusicContainer from "./components/Music/MusicContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";



const App = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavigationContainer/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/music" element={<MusicContainer/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/news" element={<NewsContainer/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                </Routes>
            </div>
            {/*<Footer/>*/}
        </div>
    )
}

export default App;
