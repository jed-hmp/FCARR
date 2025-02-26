import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";
import mainImage from "./assets/mainImage.png";
import collagepict from "./assets/collagepict.png";
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

      {/* Animated Container */}
      <motion.div
        className="image-text-container"
        initial={{ opacity: 0, y: 50 }} // Start faded out and moved down
        animate={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ duration: 1.8, ease: "easeOut" }} // Smooth transition
      >
        <img
          src={collagepict}
          alt="School Event"
          className="uploaded-img"
          onClick={() => setIsZoomed(true)} // Trigger zoom
        />
        <p className="uploaded-text">
          At Faith Christian Academy of Rodriguez Rizal, we believe in nurturing
          not just students, but well-rounded individuals ready to take on the world.
          Our vibrant community is dedicated to providing a supportive and engaging
          environment where curiosity is encouraged, creativity is celebrated, and
          critical thinking is developed. We understand that each student is unique,
          and we strive to help them discover their passions and strengths. By fostering
          responsible digital citizenship and professional skills, we aim to prepare our
          students to make a positive impact in their communities and beyond. Together,
          we're not just shaping future leaders; we're building a family that values
          growth, compassion, and lifelong learning.
        </p>
      </motion.div>

      {/* Fullscreen Overlay for Zoomed Image */}
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
              src={collagepict} // Use the same image as the clicked one
              alt="Zoomed Event"
              className="zoomed-img"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }} // Smooth zoom in and out
            />
          </motion.div>
        )}
      </AnimatePresence>
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
}
