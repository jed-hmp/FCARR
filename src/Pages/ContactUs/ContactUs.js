import React from 'react';
import mainImage from "./assets/contactImage.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
        <div className="contact-details">
          <h2>CONTACT US</h2>
          <p><strong>Contact No.</strong></p>
          <p><i className='fas fa-phone' style={{ color: '#003153' }}></i> 0970 747 9050</p>
          <p><strong>Email Address</strong></p>
          <p><i className='fas fa-envelope' style={{ color: '#003153' }}></i> faith.christian.academy.rizal@gmail.com</p>
          <p><strong>Address</strong></p>
          <p><i className='fas fa-home' style={{ color: '#003153' }}></i> BLK 6 Lot 11 Phase 1c Kasiglahan</p>
        </div>
        <div className="map-container">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps?q=FAITH+CHRISTIAN+ACADEMY+RODRIGUEZ+RIZAL&z=19&output=embed"
            className="responsive-map"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
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
