import React from 'react';
import './App.css';
import { UserStorage } from './UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login/*" element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
      </UserStorage>
    </BrowserRouter>
  );
}
