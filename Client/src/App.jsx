import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import NavBar from './Components/NavBar';
import Login from './Components/Login';

import ForgotPassword from './Components/ForgetPassword';
import Signup from './Components/signup';
import ResetPassword from './Components/ResetPassword';
import Home from './Components/Home';

const APP = (props) => {
  return (
    <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path='/Login' element = {<Login />}></Route>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/signup' element = {<Signup/>}></Route>
        <Route path='/forgot-password' element = {<ForgotPassword />}></Route>
        <Route path='/reset-password' element = {<ResetPassword />}></Route>

      </Routes>      
    
    
    </BrowserRouter>
  );
};

export default APP;