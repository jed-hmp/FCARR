import React, { useEffect, useState } from "react";
import { db } from "../../firebase"; // Import Firebase Firestore
import { collection, getDocs } from "firebase/firestore"; // Fix import
import { AnimatePresence, motion } from 'framer-motion';
import "./TeacherStaffs.css";
import footerLogo from "./assets/footerLogo.png";
import { doc, getDoc } from "firebase/firestore";

export default function Events() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [professorImage, setProfessorImage] = useState(""); // Store professor image

  const [footerInfo, setFooterInfo] = useState({
    facebook: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const fetchFooterInfo = async () => {
      try {
        const footerRef = doc(db, "contacts", "contactInfo");
        const footerSnap = await getDoc(footerRef);

        if (footerSnap.exists()) {
          setFooterInfo(footerSnap.data());
        } else {
          console.log("No such footer document!");
        }
      } catch (error) {
        console.error("Error fetching footer info:", error);
      }
    };

    const fetchProfessorImage = async () => {
      try {
        const professorDocRef = doc(db, "professors", "latest"); // Reference specific document
        const professorSnap = await getDoc(professorDocRef); // Get document
    
        if (professorSnap.exists()) {
          setProfessorImage(professorSnap.data().imageUrl); // Ensure the correct field name
        } else {
          console.log("Professor document 'latest' not found!");
        }
      } catch (error) {
        console.error("Error fetching professor image:", error);
      }
    };
    
    fetchFooterInfo();
    fetchProfessorImage();
  }, []);

  return (
    <div id="teacherstaffPage">
      <div className="org-chart">
        <div className="teacher-staff">
          <h2>OUR TEACHER AND STAFF</h2>
          <p>Good education starts from great Teachers</p>
        </div>

        {/* Image section and description */}
        <div className="content-section">
          {professorImage ? (
            <img
              src={professorImage}
              alt="Professor"
              className="staff-picture"
              onClick={() => setIsZoomed(true)} // Zoom on click
            />
          ) : (
            <p>Loading image...</p>
          )}
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
                  src={professorImage} // Use fetched image
                  alt="Zoomed Professor"
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

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo-container">
              <img src={footerLogo} alt="FCARR Logo" className="footer-logo" />
              <span className="footer-logo-text">FCARR</span>
            </div>
            <p className="footer-text">© 1995 FCARR.<br />All rights reserved</p>
          </div>
          <div className="footer-right">
            <p className="footer-contact-title">Contact us</p>
            <p className="footer-contact">
              <a href={footerInfo.facebook} target="_blank" rel="noopener noreferrer">
                FCARR FB Page
              </a><br />
              {footerInfo.phone}<br />
              {footerInfo.email}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
