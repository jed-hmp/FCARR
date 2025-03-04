import { Navbar, Nav, Container, Offcanvas, NavDropdown, Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for dropdown animation
import logo from "./logo.png"; // Adjust path to your logo
import "./Navigationbar.css";


function MyNavbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [showModal, setShowModal] = useState(false);
  const [enrollmentType, setEnrollmentType] = useState(null);
  const location = useLocation(); // Get current URL

  const handleLinkClick = () => {
    setShowOffcanvas(false); // Close Offcanvas on link click
  };

  const handleDropdownToggle = (eventKey) => {
    setOpenDropdown(openDropdown === eventKey ? null : eventKey); // Toggle dropdown
  };
  
  const handleEnrollmentClick = (e) => {
    e.preventDefault();
    setShowModal(true);
    setEnrollmentType(null);
  };


  const handleConfirm = (link) => {
    setShowModal(false);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
  
    <>
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
                  About Us
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
              
              <a href="#" className="nav-item enrollment-link" onClick={handleEnrollmentClick}>
                  Enrollment
                </a>


              


            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    
        {/* Enrollment Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Enrollment Type</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          {enrollmentType === null ? (
            <div className="modal-buttons">
              <Button variant="primary" className="modal-button new-old-button mb-2" onClick={() => setEnrollmentType("newOld")}>New/Old Students</Button>
              <Button variant="success" className="modal-button transferee-button" onClick={() => setEnrollmentType("transferee")}>Transferee</Button>
            </div>
          ) : (
            <div className="modal-confirmation">
              <p>Are you sure you want to proceed to enrollment?</p>
              <div className="modal-buttons modal-buttons-row">
                <Button variant="danger" className="no-button" onClick={() => setEnrollmentType(null)}>No</Button>
                <Button
                  variant="success"
                  className="yes-button"
                  onClick={() => handleConfirm(
                    enrollmentType === "newOld"
                      ? "https://docs.google.com/forms/d/e/1FAIpQLSeeCep4_ixA6MP91ea1N2cHcN5CsLntZPK8047fKdgQnSo2wQ/viewform"
                      : "https://docs.google.com/forms/d/e/1FAIpQLSeuKIuoUfYDSEcAuHHCxOD94jGvWTJRfI_Gzv_GjMuqjGElnA/viewform"
                  )}
                >
                  Yes
                </Button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
      </>
  );
}

export default MyNavbar;
