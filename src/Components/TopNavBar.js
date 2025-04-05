import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <div>
      <Navbar expand="lg" className="mb-5">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="navbar-brand"
            style={{ fontSize: "35px", color: "black" }}
          >
            Studentopedia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="mx-3">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="mx-3">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-3">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="mx-3 btn-custom">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
