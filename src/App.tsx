import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
//import LoginScreen from './Login/login-screen';
import {
  Route,
  Link,
  Routes,
  BrowserRouter
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
        </div>
  );
}

export default App;
