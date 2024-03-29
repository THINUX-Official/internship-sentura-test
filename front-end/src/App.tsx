import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// @ts-ignore
import {DefaultComponent} from "./component/DefaultComponent/DefaultComponent";

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" Component={DefaultComponent}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
