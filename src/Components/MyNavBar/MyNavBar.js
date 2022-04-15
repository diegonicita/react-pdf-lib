import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from 'react-router-dom'

function MyNavbar({ saveUserEmail, saveApiToken }) {

  return (
  <>
  <Navbar bg="success" expand="md" variant="dark">
  <Container fluid>
    <Navbar.Brand href="/">SPA Muñiz</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/protocolos">Protocolos</Nav.Link>        
        {/* <NavDropdown title="Users" id="basic-nav-dropdown">
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="#">Logout</NavDropdown.Item>
          <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">Help</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>    
  </>
  );
}

export default MyNavbar;