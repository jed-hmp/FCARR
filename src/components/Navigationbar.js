import { Navbar, Nav, Container, Offcanvas, NavDropdown } from 'react-bootstrap';
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigationbar.css";
import logo from "./logo.png"; // Adjust the path to your logo image

function MyNavbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const location = useLocation(); // Get the current URL location

  const handleLinkClick = () => {
    setShowOffcanvas(false); // Close the offcanvas when a link is clicked
  };

  return (
    <Navbar expand="md" className="navbar-custom" fixed="top">
      <Container>
        {/* Logo and Brand Name */}
        <Navbar.Brand href="#" className="navbar-brand-custom">
          <img 
            src={logo} 
            alt="Logo" 
            className="navbar-logo" 
          />
          FCARR
        </Navbar.Brand>

        <Navbar.Toggle
        aria-controls="offcanvasNavbar-expand-md"
        onClick={() => setShowOffcanvas(true)}
        className="custom-toggle"
      >
        <span className="mini-label">Menu</span>
      </Navbar.Toggle>

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="start"
          show={showOffcanvas} // Control visibility with state
          onHide={() => setShowOffcanvas(false)} // Close when dismissed
        >
        <Offcanvas.Header closeButton className="custom-offcanvas-header">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="offcanvas-logo" />
          </div>
          <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
          <strong style={{ color: "#003153" }}>FAITH CHRISTIAN ACADEMY</strong> 
          </Offcanvas.Title>
        </Offcanvas.Header>

          <Offcanvas.Body>
          <Nav className="me-auto custom-nav">
              <Nav.Link 
                as={Link} 
                to="/" 
                className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
                onClick={handleLinkClick}
              >
                Home
              </Nav.Link>

              <NavDropdown title="About" id="about-dropdown" className="nav-item">
                <NavDropdown.Item as={Link} to="/about" onClick={handleLinkClick}>
                  About
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/teacherstaffs" onClick={handleLinkClick}>
                  Teachers & Staffs
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Academics" id="academics-dropdown" className="nav-item">
                <NavDropdown.Item as={Link} to="/curriculum" onClick={handleLinkClick}>
                  Curriculum
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/faculty" onClick={handleLinkClick}>
                  Faculty
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Activities" id="activities-dropdown" className="nav-item">
                <NavDropdown.Item as={Link} to="/sports" onClick={handleLinkClick}>
                  Sports
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/clubs" onClick={handleLinkClick}>
                  Clubs
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link 
                as={Link} 
                to="/contact" 
                className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}
                onClick={handleLinkClick}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
