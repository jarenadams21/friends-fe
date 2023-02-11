import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './pages/Navbar';
import Feed from './pages/Feed';
//import LoginScreen from './Login/login-screen';
import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import RegistrationScreen from './pages/Login-Register/registration-screen';
import LoginScreen from './pages/Login-Register/login-screen';
import Profile from './pages/Profile/profile';

function App() {
  return (
    <div>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={ <Home/> } /> */}
        <Route path="/login" element={ <LoginScreen/> } />
        <Route path="/registration" element={ <RegistrationScreen/> } />
        <Route path="/profile" element={ <Profile/> } />
        <Route path="/feed" element={ <Feed/> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
