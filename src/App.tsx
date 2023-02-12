import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Feed from "./pages/Feed";
import Welcome2 from "./Home-Page/WelcomePart2";
import Welcome3 from "./Home-Page/WelcomePart3";

//import LoginScreen from './Login/login-screen';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RegistrationScreen from "./pages/Login-Register/registration-screen";
import LoginScreen from "./pages/Login-Register/login-screen";
import Profile from "./pages/Profile/profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={ <Home/> } /> */}

          {/* Welcome1, Welcome2, Welcome3 are all different themes */}
          <Route path="/" element={<Welcome2 />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/registration" element={<RegistrationScreen />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
