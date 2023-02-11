import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
//import LoginScreen from './Login/login-screen';
import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import RegistrationScreen from './Login-Register/registration-screen';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
        </div>
  );
}

export default App;
