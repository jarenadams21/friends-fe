import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './pages/Navbar';
import LoginScreen from './Login-Register/login-screen';
import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import RegistrationScreen from './Login-Register/registration-screen';

function App() {
  return (
    <div className="App"> 
    
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={ <Home/> } /> */}
          <Route path="/login" element={ <LoginScreen/> } />
          <Route path="/registration" element={ <RegistrationScreen/> } />
        </Routes>
      </BrowserRouter>
      
      <>
        <Navbar></Navbar>
      </>
    </div>
  );
}

export default App;
