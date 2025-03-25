import React, { useEffect, useState } from "react";
import { db } from "../../firebase"; // Import Firebase Firestore
import { doc, getDoc } from "firebase/firestore";
import mainImage from "./assets/contactImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import footerLogo from "./assets/footerLogo.png";
import "./ContactUs.css";

export default function ContactUs() {
  const [contactInfo, setContactInfo] = useState({
    address: "",
    email: "",
    phone: "",
    mapLink: "",
  });

  const [footerInfo, setFooterInfo] = useState({
    facebook: "",
    phone: "",
    email: "",
  });

  const [userEmail, setUserEmail] = useState("");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const contactRef = doc(db, "contacts", "contactInfo");
        const contactSnap = await getDoc(contactRef);

        if (contactSnap.exists()) {
          const data = contactSnap.data();
          setContactInfo({
            address: data.address || "No address available",
            email: data.email || "No email available",
            phone: data.phone || "No phone number available",
            mapLink: data.mapLink || "",
          });
        } else {
          console.log("No such contact document!");
        }
      } catch (error) {
        console.error("Error fetching contact info:", error);
      }
    };

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

    fetchContactInfo();
    fetchFooterInfo();
  }, []);

  const getSearchQueryLink = (placeLink) => {
    const defaultMap =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.0192530420984!2d121.1292619!3d14.7474128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb0056a4e691%3A0x9a51b4d846b8f36d!2sFAITH%20CHRISTIAN%20ACADEMY%20RODRIGUEZ%20RIZAL!5e0!3m2!1sen!2sph!4v1711654325678!5m2!1sen!2sph";

    if (!placeLink) return defaultMap;

    // Ensure it's an embeddable URL
    if (!placeLink.includes("embed")) {
      console.warn("Invalid map link, using default:", placeLink);
      return defaultMap;
    }

     // Append zoom level if missing
  if (!placeLink.includes("&z=")) {
    return `${placeLink}&z=17`; // Zoom level set to 1 (world view)
  }


    return placeLink;
  };


  const handleSubmit = () => {
    if (!userEmail || !question) {
      alert("Please enter both your email and question.");
      return;
    }

    window.location.href = `mailto:${contactInfo.email}?subject=Inquiry from ${userEmail}&body=${encodeURIComponent(question)}`;
  };

  return (
    <div id="contactusPage">
      <div className="contact-card">
        <div className="top-section">
          <img src={mainImage} alt="Students in classroom" className="banner-img" />
        </div>

        <div className="bottom-section">
          <div className="left-section">
            <h2 className="map-heading">SCHOOL LOCATION</h2>
            <div className="map-container">
              <iframe
                title="Location Map"
                src={getSearchQueryLink(contactInfo.mapLink)}
                className="responsive-map"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <p className="map-instruction">Click map to fully view the location</p>
          </div>

          <div className="right-section">
            

            <h2>CONTACT US</h2>
            <p><strong>Address</strong></p>
            <p>
              <FontAwesomeIcon icon={faHome} className="icon" />
              {contactInfo.address}
            </p>

            <p><strong>Email Address</strong></p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              {contactInfo.email}
            </p>

            <p><strong>Contact No.</strong></p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              {contactInfo.phone}
            </p>
          </div>
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
