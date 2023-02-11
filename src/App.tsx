import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Feed from './pages/Feed';
import Welcome from './pages/Welcome'

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
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={ <Home/> } /> */}
        <Route path="/" element={<Welcome/>} />
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
