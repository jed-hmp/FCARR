import React, { useEffect, useState } from "react";
import { db } from "../../firebase"; // Import Firebase Firestore
import { doc, getDoc, collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion"; // For animations
import ReactPlayer from "react-player";
import "./AboutUs.css";

// Carousel images
import mainImage from "./assets/mainImage.png";
import subImage1 from "./assets/subImage1.png";
import subImage2 from "./assets/subImage2.png";
import subImage3 from "./assets/subImage3.png";

// Zoomable images
import elem1 from "./assets/elem1.png";
import elem2 from "./assets/elem2.png";
import elem3 from "./assets/elem3.png";
import hs from "./assets/highschool.png";

// Footer assets
import footerLogo from "./assets/footerLogo.png";

export default function AboutUs() {
  const subImages = [mainImage, subImage1, subImage2, subImage3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [footerInfo, setFooterInfo] = useState({
    facebook: "",
    phone: "",
    email: "",
  });
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    // Fetch footer contact details
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

    fetchFooterInfo();
  }, []);

  useEffect(() => {
    // Carousel auto-switch
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % subImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleZoom = (img) => {
    setZoomedImage(img);
  };

  useEffect(() => {
    // Fetch latest video from Firestore
    const fetchLatestVideo = async () => {
      try {
        const latestVideoQuery = query(collection(db, "videos"), orderBy("timestamp", "desc"), limit(1));
        const latestVideoSnap = await getDocs(latestVideoQuery);
        if (!latestVideoSnap.empty) {
          const latestVideo = latestVideoSnap.docs[0].data();
          setVideoUrl(latestVideo.youtubeLink);
        } else {
          console.log("No latest video found.");
        }
      } catch (error) {
        console.error("Error fetching latest video:", error);
      }
    };

    fetchLatestVideo();
  }, []);

  return (
    <div id="aboutusPage">
      <div className="about-us-container">
        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="main-image">
            <img src={subImages[currentIndex]} alt="Main Group" className="image-style" />
          </div>
          <div className="small-images">
            {subImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Event ${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`image-style ${currentIndex === index ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* About Text */}
        <div className="about-text">
          <h2>ABOUT US</h2>
          <p>
            Faith Christian Academy of Rodriguez Rizal, Inc. is a private educational institution established in 1995, located in Kasiglahan Village, San Jose, Rodriguez, Rizal. The school aims to provide quality education in a Christian-centered environment, fostering both academic excellence and character development.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mission-vision">
          <div className="mission">
            <h2>MISSION</h2>
            <p>
              To dedicate our sublime and noble duty, time, values, and knowledge in imparting the joy and love of learning so as to develop the child's innate potential who will emerge great leaders and nation builders in the future.
            </p>
          </div>
          <div className="vision">
            <h2>VISION</h2>
            <p>
              To be an institution that builds a strong educational foundation for young minds, who will excel in their chosen craft to become law-abiding citizens, morally and spiritually upright, and productive contributors to society.
            </p>
          </div>
        </div>

        {/* Academic Offer */}
        <div className="academic-offer">
          <h2>ACADEMIC OFFER</h2>
          <p>Preschool, Gradeschool, Highschool</p>
        </div>

        {/* Academic Images with Clickable Zoom */}
        <div className="academic-imagesA">
          <div className="academic-row">
            {[elem1, elem2, elem3].map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Students ${index + 1}`}
                className="academic-imageB"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, delay: index * 0.3 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleZoom(img)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
          <div className="academic-column">
            <motion.img
              src={hs}
              alt="High School"
              className="academic-imageB large"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleZoom(hs)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        {/* Video Section */}
        <div className="video-container">
          <h2 className="video-title">NEW LOCATION OF FAITH CHRISTIAN ACADEMY OF RODRIGUEZ</h2>
          <div className="player-wrapper">
            {videoUrl ? (
              <ReactPlayer 
                className="react-player"
                url={videoUrl} 
                controls 
                width="100%" 
                height="100%"
                config={{
                  youtube: {
                    playerVars: { modestbranding: 1, rel: 0, disablekb: 1 },
                  },
                }}
              />
            ) : (
              <p>Loading latest video...</p>
            )}
          </div>
        </div>

        {/* Zoomed Image Fullscreen View */}
        <AnimatePresence>
          {zoomedImage && (
            <motion.div
              className="zoomed-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomedImage(null)}
            >
              <motion.img
                src={zoomedImage}
                alt="Zoomed"
                className="zoomed-image"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={footerLogo} alt="FCARR Logo" className="footer-logo" />
            <span className="footer-logo-text">FCARR</span>
            <p>© 1995 FCARR. All rights reserved</p>
          </div>
          <div className="footer-right">
            <p className="footer-contact-title">Contact us</p>
            <p className="footer-contact">
              <a href={footerInfo.facebook} target="_blank" rel="noopener noreferrer">FCARR FB Page</a><br />
              {footerInfo.phone}<br />
              {footerInfo.email}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
