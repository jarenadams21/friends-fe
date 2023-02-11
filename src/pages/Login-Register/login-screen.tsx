import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './registration-screen.css'

function LoginScreen() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="Container">
      <header className="Header">Log in</header>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
            type="username" 
            placeholder="Username"
            onChange={e => {
                const val = e.target.value;
                setUsername(val);
            }}/>
        </Form.Group>
        <InputGroup className="mb-3">
          <Form.Control 
            type={passwordShown ? "text" : "password"} 
            placeholder="Password" 
            onChange={e => {
                const val = e.target.value;
                setPassword(val);
            }}/>
            <Button variant="outline-secondary" id="addon" onClick={togglePassword} className="ShowButton">
              <i className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye" } />
            </Button>           
        </InputGroup>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div className="SwitchLoginCreateGroup">
        <p>Don't have an account?</p>
        <Link to="/registration">Register</Link>
      </div>
    </div>
  );
}

export default LoginScreen;