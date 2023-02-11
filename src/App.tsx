import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './pages/Navbar';
import LoginScreen from './Login/login-screen';
import {
  Route,
  Link,
  Routes,
  BrowserRouter
} from 'react-router-dom'

function App() {
  return (
    <div className="App"> 
    
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={ <Home/> } /> */}
          <Route path="/login" element={ <LoginScreen/> } />
        </Routes>
      </BrowserRouter>
      
      <>
        <Navbar></Navbar>
      </>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
