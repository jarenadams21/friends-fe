import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './registration-screen.css'
import axios from 'axios'

interface User {
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
}

function RegistrationScreen() {
  const nav = useNavigate();
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

  const handleRegistration = (username: string, email: string, password: string, confirmationPassword:string, firstName: string, lastName: string) => {
    if(password !== confirmationPassword) {
      console.log('Passwords do not match')
      return;
    }
    axios.post("http://172.20.10.2:5000/users/add", {
      username,
      email,
      password,
      firstName,
      lastName,})
    .then(res => {
      console.log(res.data);
      nav("/feed")
    }) 
    .catch(err => console.log(err));
  }


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRegistration(username, email, password, confirmationPassword, firstName, lastName);
  }

  return (
    <div className="Container">
      <header className="Header">Sign up</header>
      <Form className='Form' onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Control 
            required
            type="text" 
            placeholder="First name"
            onChange={e => {
                const val = e.target.value;
                setFirstName(val);
            }}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control 
            required
            type="text" 
            placeholder="Last name" 
            onChange={e => {
                const val = e.target.value;
                setLastName(val);
            }}/>
        </Form.Group>
        <InputGroup className="mb-3" hasValidation>
          <Form.Control 
            required
            type="email" 
            placeholder="Email" 
            value={email}
            isInvalid={email.slice(-4) !== '.edu' && !!email}
            onChange={e => {
                const val = e.target.value;
                setEmail(val);
            }}/>
            <Form.Control.Feedback type="invalid">
              Make sure you use your university email!
            </Form.Control.Feedback>
        </InputGroup>
        <Form.Group className="mb-3">
          <Form.Control 
            required
            type="text" 
            placeholder="Username" 
            onChange={e => {
                const val = e.target.value;
                setUsername(val);
            }}/>
        </Form.Group>
        <InputGroup className="mb-3">          
            <Button variant="outline-secondary" id="addon" onClick={togglePassword} className="ShowButton">
              <i className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye" } />
            </Button>  
            <Form.Control 
            required
            type={passwordShown ? "text" : "password"} 
            placeholder="Password" 
            value={password}
            onChange={e => {
                const val = e.target.value;
                setPassword(val);
            }}/>         
        </InputGroup>
        <InputGroup className="mb-3" hasValidation>
          <Button variant="outline-secondary" id="addon" onClick={togglePassword} className="ShowButton">
            <i className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye" } />
          </Button>
          <Form.Control 
            type={passwordShown ? "text" : "password"} 
            placeholder="Confirm Password" 
            value={confirmationPassword}
            isInvalid={password !== confirmationPassword && !!confirmationPassword}
            onChange={e => {
                const val = e.target.value;
                setConfirmationPassword(val);
            }}/>
            <Form.Control.Feedback type="invalid">
              Passwords do not match!
            </Form.Control.Feedback>
        </InputGroup>
        <Button variant="primary" type="submit" className='SubmitButton'>
          Sign up
        </Button>
      </Form>
      <div className="SwitchLoginCreateGroup">
        <p>Already have an account?</p>
        <Link to="/login">Sign in</Link>
      </div>
    </div>
  );
}

export default RegistrationScreen;