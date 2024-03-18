import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './auth/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './Componets/Dashboard';


function App() {
  const token = localStorage.getItem('token'); // Get token from local storage

  return (
    <BrowserRouter> {/* Use BrowserRouter instead of Router */}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
