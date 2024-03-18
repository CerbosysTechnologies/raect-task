import logo from './logo.svg';
import './App.css';
import Login from './auth/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './Componets/Dashboard';


function App() {
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
