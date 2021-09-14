import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm.js';
import LoginCreate from './LoginCreate.js';
import ResetLogin from './ResetLogin.js';
import LostLogin from './LostLogin.js';

export default function Login() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm></LoginForm>}></Route>
        <Route path="create" element={<LoginCreate></LoginCreate>}></Route>
        <Route path="reset" element={<ResetLogin></ResetLogin>}></Route>
        <Route path="lost" element={<LostLogin></LostLogin>}></Route>
      </Routes>
    </>
  );
}
