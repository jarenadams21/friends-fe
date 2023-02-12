import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css'
import axios from 'axios';
import { url } from '../../constants';
import backdrop from "./backdrop.jpg";
import LogoCard from "../../Home-Page/LogoCard";

interface User {
  username: string,
  password: string,
}

function LoginScreen() {
  const nav = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = (username: string, password: string) => {
    axios.get(url + "users/login", {
      params: {
        username: username,
        password: password,
      }
    }
    )
    .then(res => {
      console.log(res);
      const id = res.data.toString();
      nav("/feed/" + id)
    }) 
    .catch(err => console.log(err));
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin(username, password);
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between"}}>
      <div className="Container">
        <div className="pt-28 px-8">
        <header className="Header font-sans font-bold">Log in</header>
        <hr className="pt-0" />
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="username"
              placeholder="Username"
              onChange={e => {
                const val = e.target.value;
                setUsername(val);
              }} />
          </Form.Group>
          <InputGroup className="mb-3">
            <Form.Control
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              onChange={e => {
                const val = e.target.value;
                setPassword(val);
              }} />
            <Button variant="outline-secondary" id="addon" onClick={togglePassword} className="ShowButton">
              <i className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye"} />
            </Button>
          </InputGroup>
          <Button className="font-sans font-bold" variant="danger" type="submit">
            Login
          </Button>
        </Form>
        <div className="SwitchLoginCreateGroup font-sans">
          <p>Don't have an account?</p>
          <Link to="/registration/" className="font-sans font-bold">Register</Link>
        </div>
        </div>
        </div>
        <div className="absolute bottom-0 left-36 text-slate-900"><LogoCard/></div>
      <div>
        <img src={backdrop}width="1500px"/>
      </div>
    </div>
  );
}

export default LoginScreen;