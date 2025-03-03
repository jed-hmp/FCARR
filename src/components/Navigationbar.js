import { Navbar, Nav, Container, Offcanvas, NavDropdown } from "react-bootstrap";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for dropdown animation
import logo from "./logo.png"; // Adjust path to your logo
import "./Navigationbar.css";


function MyNavbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const location = useLocation(); // Get current URL

  const handleLinkClick = () => {
    setShowOffcanvas(false); // Close Offcanvas on link click
  };

  const handleDropdownToggle = (eventKey) => {
    setOpenDropdown(openDropdown === eventKey ? null : eventKey); // Toggle dropdown
  };

  return (
  

    <Navbar expand="md" className="navbar-custom" fixed="top">
      <Container>
        {/* Logo and Brand Name */}
        <Navbar.Brand href="#" className="navbar-brand-custom">
          <img src={logo} alt="Logo" className="navbar-logo" />
          FCARR
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-md"
          onClick={() => setShowOffcanvas(true)}
          className="custom-toggle"
        >
          <div className="toggle-content">
            <span className="navbar-toggler-icon"></span>
            <span className="menu-label">Menu</span>
          </div>
        </Navbar.Toggle>

        {/* Offcanvas Sidebar */}
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="start"
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
        >
          {/* Offcanvas Header */}
          <Offcanvas.Header closeButton className="custom-offcanvas-header">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="offcanvas-logo" />
            </div>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              <strong style={{ color: "#003153" }}>FAITH CHRISTIAN ACADEMY</strong>
            </Offcanvas.Title>
          </Offcanvas.Header>

          {/* Offcanvas Navigation */}
          <Offcanvas.Body>
            <Nav className="me-auto custom-nav">
              {/* Home Link */}
              <Nav.Link
                as={Link}
                to="/"
                className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
                onClick={() => {
                handleLinkClick();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
                    >
                Home
              </Nav.Link>

              {/* About Dropdown */}
              <NavDropdown
                title={
                  <>
                    About{" "}
                    {openDropdown === "about" ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                  </>
                }
                id="about-dropdown"
                className="nav-item"
                show={openDropdown === "about"}
                onClick={() => handleDropdownToggle("about")}
              >
                <NavDropdown.Item as={Link} to="/about" onClick={() => {
                handleLinkClick();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>
                  About
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/teacherstaffs"  onClick={() => {
                handleLinkClick();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>
                  Teachers & Staffs
                </NavDropdown.Item>
              </NavDropdown>

              {/* Admissions Link */}
              <Nav.Link
                as={Link}
                to="/admissions"
                className={`nav-item ${location.pathname === "/admissions" ? "active" : ""}`}
                onClick={() => {
                handleLinkClick();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              >
                Admissions
              </Nav.Link>

              {/* Activities Dropdown */}
              <Nav.Link
                as={Link}
                to="sActivities"
                className={`nav-item ${location.pathname === "sActivities" ? "active" : ""}`}
                onClick={() => {
                handleLinkClick();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
                
              >
                Activities
              </Nav.Link>

              {/* Contact Link */}
              <Nav.Link
                as={Link}
                to="/contact"
                className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}
                onClick={() => {
                handleLinkClick();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              >
                Contact
              </Nav.Link>
              
              <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeuKIuoUfYDSEcAuHHCxOD94jGvWTJRfI_Gzv_GjMuqjGElnA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={`nav-item ${location.pathname === "/enrollment" ? "active" : ""} enrollment-link`}
              onClick={handleLinkClick}
              style={{ textDecoration: "none"  }}
            >
              Enrollment
            </a>

              


            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

  );
}

export default MyNavbar;
