import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';


function Navbar() {
  return (
    <>
      <Nav className="justify-content-end me-5" 
      activeKey="home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="my-plans">My Plans</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="profile">Profile</Nav.Link>
        </Nav.Item>
        
      </Nav>
    </>
  );
}

export default Navbar;