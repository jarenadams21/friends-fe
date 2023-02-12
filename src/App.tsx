import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import MyPlans from './pages/MyPlans'
//import LoginScreen from './Login/login-screen';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RegistrationScreen from "./pages/Login-Register/registration-screen";
import LoginScreen from "./pages/Login-Register/login-screen";
import Profile from "./pages/Profile/profile";

function App() {
  return (
    <div>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/my-plans" element={ <MyPlans/> } />
        <Route path="/login" element={ <LoginScreen/> } />
        <Route path="/registration" element={ <RegistrationScreen/> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
