import React from 'react';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import './index.css';
import store from "./Redux/State";
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={ state } dispatch={ store.dispatch.bind(store) }/>
            </React.StrictMode>
        </BrowserRouter>
    )
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

reportWebVitals();
