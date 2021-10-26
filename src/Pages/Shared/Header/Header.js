import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';



// use it just like a RRv4/5 <Link>
// the `to` prop can be a string or an object, see RRv4/5 api for details
<HashLink to="/some/path#with-hash-fragment">Link to Hash Fragment</HashLink>


const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <>
  
  <Navbar sticky="top" bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Gym for health</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">

    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
      <Nav.Link as={HashLink} to="/home#contact">Contact Us</Nav.Link>
      {user?.email ?
      <Button onClick={logOut} variant="light">Logout</Button> :
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
}
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
  
    </Container>
  </Navbar>
</>
    );
};

export default Header;