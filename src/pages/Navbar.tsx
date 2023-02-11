import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';


function Navbar() {
  return (
    <>
      <Nav className="justify-content-center" 
      activeKey="home">
        <Nav.Item>
          <Nav.Link href="home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="my-plans">My Plans</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="my-profile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;