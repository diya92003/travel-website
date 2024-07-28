import React from "react";
import {Routes,Route} from "react-router-dom";

import Home from "../pages/Home";
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';

const Routers = () => { 
    return (
        <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<Home/>} path='/home'/>
            <Route element={<Tours/>} path='/tours'/>
            <Route element={<TourDetails/>} path='/tours/:id'/>
            <Route element={<About/>} path='/about'/>
            <Route element={<Login/>} path='/login'/>
            <Route element={<Register/>} path='/register'/>
        </Routes>
    )
};
export default Routers;