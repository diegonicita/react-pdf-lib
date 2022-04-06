import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

function MyNavbar({ saveUserEmail, saveApiToken }) {

  return (
  <>
  <Navbar bg="primary" expand="sm" variant="dark">
  <Container>
    <Navbar.Brand href="/">Protocolos Muñiz</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/" exact="true">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <NavDropdown title="Users" id="basic-nav-dropdown">
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="#">Logout</NavDropdown.Item>
          <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">Help</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>    
  </>
  );
}

export default MyNavbar;