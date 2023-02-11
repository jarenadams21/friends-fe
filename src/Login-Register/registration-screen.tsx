import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './registration-screen.css'



function RegistrationScreen() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmationPassword, setConfirmationPassword] = useState<string>('');
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="Container">
      <header className="Header">Sign up</header>
      <Form className='Form'>
        <Form.Group className="mb-3">
          <Form.Control 
            type="username" 
            placeholder="First name"
            onChange={e => {
                const val = e.target.value;
                setFirstName(val);
            }}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control 
            type="lastname" 
            placeholder="Last name" 
            onChange={e => {
                const val = e.target.value;
                setLastName(val);
            }}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
            type="lastname" 
            placeholder="Email" 
            onChange={e => {
                const val = e.target.value;
                setEmail(val);
            }}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control 
            type="email" 
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
        <InputGroup className="mb-3">
          <Form.Control 
            type={passwordShown ? "text" : "password"} 
            placeholder="Confirm Password" 
            onChange={e => {
                const val = e.target.value;
                setConfirmationPassword(val);
            }}/>
            <Button variant="outline-secondary" id="addon" onClick={togglePassword} className="ShowButton">
              <i className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye" } />
            </Button>           
        </InputGroup>
        <Button variant="primary" type="submit" className='SubmitButton' >
          Sign up
        </Button>
      </Form>
      <div className="SwitchLoginCreateGroup">
        <p>Already have an account?</p>
        <Link to="login">Sign in</Link>
      </div>
    </div>
  );
}

export default RegistrationScreen;