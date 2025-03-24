import { Navbar, Nav, Container, Offcanvas, NavDropdown, Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for dropdown animation
import logo from "./logo.png"; // Adjust path to your logo
import "./Navigationbar.css";


function MyNavbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [clickCount, setClickCount] = useState(0); // Track clicks for About dropdown
  const [showModal, setShowModal] = useState(false);
  const [enrollmentType, setEnrollmentType] = useState(null);
  const location = useLocation(); // Get current URL

  const handleLinkClick = () => {
    setShowOffcanvas(false); // Close Offcanvas on link click
  };

  useEffect(() => {
    if (location.pathname !== "/about") {
      setClickCount(0); // Reset click count when leaving About page
    }
  }, [location.pathname]);
  
  const handleDropdownToggle = (eventKey) => {
    if (eventKey === "about-dropdown") {
      if (clickCount < 1) {
        setClickCount(clickCount + 1);
        return; // Prevent opening on first click
      }
    }
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

          {/* Navigation Links - Centered */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="custom-nav">
              <Nav.Link as={Link} to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
                Home
              </Nav.Link>

              {/* About Dropdown with Controlled Click Behavior */}
              <NavDropdown
  title={
    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
        About
      </Link>
      <FaChevronDown style={{ fontSize: "12px", verticalAlign: "middle" }} />
    </span>
  }
  id="about-dropdown"
  className="nav-item"
  show={openDropdown === "about-dropdown"} // Only show when condition is met
  onToggle={() => handleDropdownToggle("about-dropdown")}
>
  <NavDropdown.Item as={Link} to="/teacherstaffs">Teachers & Staffs</NavDropdown.Item>
</NavDropdown>
              <Nav.Link as={Link} to="/admissions" className={`nav-item ${location.pathname === "/admissions" ? "active" : ""}`}>
                Admissions
              </Nav.Link>
              <Nav.Link as={Link} to="sActivities" className={`nav-item ${location.pathname === "sActivities" ? "active" : ""}`}>
                Activities
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
                Contact
              </Nav.Link>
              <a href="#" className="nav-item enrollment-link" onClick={handleEnrollmentClick}>
                Enrollment
              </a>
            </Nav>
          </Navbar.Collapse>
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
