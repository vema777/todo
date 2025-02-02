import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./login/Login";
import {Layout} from "./layout/Layout";
import {Home} from "./home/Home";
import {Logup} from "./logup/Logup";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home/>} />
                </Route>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Logup/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
