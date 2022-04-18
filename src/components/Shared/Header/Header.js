
import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import {Link} from 'react-router-dom'
import auth from "../../../firebase.init";
import ActiveRoute from "../../ActiveRoute/ActiveRoute";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSingout = () => {
    signOut(auth);
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="mb-4" >
      <Container>
        <Navbar.Brand>
            <ActiveRoute to='/'><img src="images/logo2.png" height='30px' alt="" /></ActiveRoute>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <ActiveRoute className="nav-link" to="/" >Home</ActiveRoute>
            <ActiveRoute className="nav-link"  to="/service">Service</ActiveRoute>
            <ActiveRoute className="nav-link"  to="/blog">Blog</ActiveRoute>
            <ActiveRoute className="nav-link"  to="/checkout">Checkout</ActiveRoute>
            {/* <ActiveRoute className="nav-link"  to="/contact">Contact</ActiveRoute> */}
            <ActiveRoute className="nav-link"  to="/about">About me</ActiveRoute>
           
          </Nav>
          <Nav>
            {
              user ? <Button onClick={handleSingout}>Sign Out</Button> :<ActiveRoute className="nav-link" to="/login" >LogIn</ActiveRoute>
            }
            
            <ActiveRoute className="nav-link" to="/signup" > Sing Up</ActiveRoute>
          
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
