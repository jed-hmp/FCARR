import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";
import mainImage from "./assets/mainImage.png";
import eventImages from "./assets/eventImages.png";
import footerLogo from "./assets/footerLogo.png";

export default function Home() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div id="homePage">
      <div className="container scrollable-page">
        <div className="background-circles"></div>

        {/* Banner Section */}
        <div className="banner">
          <img src={mainImage} alt="Students in classroom" className="banner-img" />
          <h1 className="title">“YOUR SUCCESS IS OUR MISSION”</h1>
        </div>

        {/* Philosophy Section */}
        <div className="content philosophy">
          <h2 className="heading">PHILOSOPHY OF EDUCATION</h2>
          <div className="philosophy-box scrollable">
            <p className="text">
              The ultimate goal of man is the attainment of the highest good through
              education, a productive life, and a peaceful, harmonious co-existence
              with society and fellowmen.
            </p>
          </div>
        </div>

        {/* Sub-Content Section */}
        <div className="sub-content">
          <div className="left-section">
            <h3 className="sub-heading">SADSADF SADA</h3>
            <div className="sadsad box scrollable">
              <p className="text">
                The ultimate goal of man is the attainment of the highest good through
                education, a productive life, and a peaceful, harmonious co-existence
                with society and fellowmen.
              </p>
            </div>
          </div>

          {/* Right Section with Animated Image & Click-to-Zoom Feature */}
          <div className="right-section">
            <motion.img
              src={eventImages}
              alt="School Events"
              className="event-img"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              onClick={() => setIsZoomed(true)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay for Zoomed Image */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsZoomed(false)}
          >
            <motion.img
              src={eventImages}
              alt="Zoomed Event"
              className="zoomed-img"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

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

      {/* Inline Styles for Overlay */}
      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .zoomed-img {
          max-width: 90%;
          max-height: 90%;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
