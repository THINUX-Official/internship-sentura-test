import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Weavy, WyChat } from "@weavy/uikit-web";
import {Messenger} from "./component/Messenger/Messenger";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultComponent} from "./component/DefaultComponent/DefaultComponent";


interface AppProps {
    DefaultLayout: React.ComponentType | null
}

function App() {

   /* const weavy = new Weavy();
    weavy.url = "https://myenvironment.weavy.io";
    weavy.tokenFactory = async (refresh) => "access_token";*/

    return (
        <div>
            <div className="mx-20">
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" Component={DefaultComponent}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
