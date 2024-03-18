import logo from './logo.svg';
import './App.css';
import Login from './auth/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './Componets/Dashboard/Dashboard';
import Navbar from './Componets/Navbar/Navbar';


function App() {
  return (
    <>
      <div className="main-root">
        <Navbar />
        <BrowserRouter> {/* Use BrowserRouter instead of Router */}
          <div className="w-full">
            <Routes >
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
