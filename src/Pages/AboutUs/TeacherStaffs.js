import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import "./TeacherStaffs.css";
import TeachersStaffs from "./assets/TeacherAndStaffs.png";
import footerLogo from "./assets/footerLogo.png";

export default function Events() {
  const [isZoomed, setIsZoomed] = useState(false);
  
  return (
    <div id="teacherstaffPage">
      <div className="org-chart">
      <div className="teacher-staff"> 
          <h2>OUR TEACHER AND STAFF </h2>
          <p>Good education starts from great Teachers</p>
        </div>

         {/* Image section and description */}
         <div className="content-section">
            <img 
              src={TeachersStaffs} 
              alt="All Staff" 
              className="staff-picture" 
              onClick={() => setIsZoomed(true)} // Zoom on click
            />
            <div className="description">
              <p>
                Our faculty and staff are the heart of our institution, guiding and inspiring students every step of the way with their dedication, expertise, and unwavering commitment to excellence in education and personal growth. Through their passion for teaching, mentorship, and support, they create a nurturing and dynamic learning environment where students can thrive academically, socially, and professionally, preparing them for a successful future.
              </p>
            </div>
            <AnimatePresence>
              {isZoomed && (
                <motion.div
                  className="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setIsZoomed(false)} // Close zoom on click
                >
                  <motion.img
                    src={TeachersStaffs} // Use the same image as the clicked one
                    alt="Zoomed Staff"
                    className="zoomed-img"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

    </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo-container">
              <img src={footerLogo} alt="FCARR Logo" className="footer-logo" />
              <span className="footer-logo-text">FCARR</span>
            </div>
            <p className="footer-text">
              © 1995 FCARR.<br />All rights reserved.
            </p>
          </div>

          <div className="footer-right">
            <p className="footer-contact-title">Contact us</p>
            <p className="footer-contact">
              <a
                href="https://www.facebook.com/profile.php?id=100081267735529"
                target="_blank"
                rel="noopener noreferrer"
              >
                FCARR FB Page
              </a>
              <br />
              0909-605-7966
              <br />
              faith.christian.academy.rizal@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};