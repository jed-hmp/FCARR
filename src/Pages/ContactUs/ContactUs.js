import React from 'react';
import mainImage from "./assets/contactImage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import footerLogo from "./assets/footerLogo.png";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div id="contactusPage">
      <div className="contact-card">
      <div className="top-section">
      <img src={mainImage} alt="Students in classroom" className="banner-img" />
      </div>

      <div className="bottom-section">
      {/* Left side: Contact details + Map */}
      <div className="left-section">  
      <h2 className="map-heading">SCHOOL LOCATION</h2>
        <div className="map-container">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps?q=FAITH+CHRISTIAN+ACADEMY+RODRIGUEZ+RIZAL&z=16&output=embed"
            className="responsive-map"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <p className="map-instruction">Click map to fully view the location</p>
      </div>

      {/* Right side: Message form + Contact details */}
      <div className="right-section">
        <h2>Message us!</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value="faith.christian.academy.rizal@gmail.com"
            readOnly
             className="bold-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="question">Question:</label>
          <textarea
            id="question"
            placeholder="Your question here..."
          ></textarea>
        </div>

        <h2>CONTACT US</h2>
        <p><strong>Address</strong></p>
        <p>
          <FontAwesomeIcon icon={faHome} className="icon" />
          BLK 6 Lot 11 Phase 1c Kasiglahan
        </p>

        <p><strong>Email Address</strong></p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          faith.christian.academy.rizal@gmail.com
        </p>

        <p><strong>Contact No.</strong></p>
        <p>
          <FontAwesomeIcon icon={faPhone} className="icon" />
          0970 747 9050
        </p>
      </div>
    </div>


    </div>
    
  {/* footer */}
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo-container">
            <img src={footerLogo} alt="FCARR Logo" className="footer-logo"/>
            <span className="footer-logo-text">FCARR</span>
          </div>
          <p className="footer-text">© 1995 FCARR.<br />All rights reserved</p>
        </div>
        <div className="footer-right">
          <p className="footer-contact-title">Contact us</p>
          <p className="footer-contact">
            <a href="https://www.facebook.com/profile.php?id=100081267735529" target="_blank" rel="noopener noreferrer">
              FCARR FB Page
            </a><br />0909-605-7966<br />faith.christian.academy.rizal@gmail.com
          </p>
        </div>
      </div>
    </footer>
  </div>
  );
};
