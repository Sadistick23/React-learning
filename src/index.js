import React from 'react';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import './index.css';
import store from "./Redux/redux-store";
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
)

reportWebVitals();
