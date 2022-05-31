import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import StoreProvider from "./utils/storeProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreProvider>
        <HashRouter>
            <App/>
        </HashRouter>
    </StoreProvider>
);
