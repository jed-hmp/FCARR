import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; //for animation
import { Container, Row, Col, Card, Spinner, Button } from 'react-bootstrap';
import "./AboutUs.css";
import footerLogo from "./assets/footerLogo.png";
import ReactPlayer from "react-player";

//carousel
import mainImage from "./assets/mainImage.png";
import subImage1 from "./assets/subImage1.png";
import subImage2 from "./assets/subImage2.png";
import subImage3 from "./assets/subImage3.png";

//zoomable 4 images
import elem1 from "./assets/elem1.png";
import elem2 from "./assets/elem2.png";
import elem3 from "./assets/elem3.png";
import hs from "./assets/highschool.png";


export default function AboutUs() {
  const subImages = [mainImage, subImage1, subImage2, subImage3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % subImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleZoom = (img) => {
    setZoomedImage(img);
  };

 const [loading, setLoading] = useState(true);

  const handleVideoReady = () => {
    setLoading(false);
  };
  
  

  return (
    <div id="aboutusPage">
      <div className="about-us-container">
        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="main-image">
            <img
              src={subImages[currentIndex]}
              alt="Main Group"
              className="image-style"
            />
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
          Faith Christian Academy of Rodriguez Rizal, Inc. is a private educational institution established in 1995, located in Kasiglahan Village, San Jose, Rodriguez, Rizal. The school aims to provide quality education in a Christian-centered environment, fostering both academic excellence and character development. With a strong foundation in faith and learning, the institution has been dedicated to shaping students into morally upright and responsible individuals for nearly three decades.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mission-vision">
          <div className="mission">
            <h2>MISSION</h2>
            <p>
            To dedicate our sublime and noble duty, time, values, and knowledge in imparting the joy and love of learning so as to develop the child's inmate potential who will emerge great leaders and nation builders in the future
            </p>
          </div>
          <div className="vision">
            <h2>VISION</h2>
            <p>
            To be an institution that builds a strong educational foundation of young minds, who will excel in their chosen craft in order to become law abiding citizens, morally and spiritually upright and productive contributor to the welfare of the community and nation
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
              alt="Students 4"
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
        <Container className="video-section py-5" style={{ backgroundColor: 'transparent' }}>
        <Row className="justify-content-center text-center">
          <Col md={8} sm={12}>
            <h2 className="section-title">🎥 FCARR </h2>
            <Card className="video-card shadow-lg border-0" style={{ backgroundColor: '#003153' }}>
              {loading && (
                <div className="video-loader">
                  <Spinner animation="border" variant="primary" />
                  <p>Loading Video...</p>
                </div>
              )}
              <div className="video-wrapper" style={{ backgroundColor: '#003153', maxWidth: '800px', margin: '0 auto' }}>
                <ReactPlayer
                  url="https://www.facebook.com/share/v/1AzhznNHan/"
                  controls
                  width="100%"
                  height="400px"
                  className="react-player"
                  onReady={handleVideoReady}
                  config={{
                    file: {
                      attributes: {
                        controlsList: 'nodownload', // Disable download option
                        onContextMenu: (e) => e.preventDefault(), // Disable Right Click
                      },
                    },
                  }}
                />
                <div className="prevent-download"></div>
            </div>
          
            </Card>
            <Card.Body>
            <p className="video-description text-dark" style={{ textAlign: 'justify', marginTop: '20px' }}>This video provides an overview of our school's facilities, programs, and community activities. Discover what makes our institution unique and how we strive to create a positive learning environment for all students.
                     our state-of-the-art classrooms, modern technology labs, and vibrant extracurricular opportunities designed to support both academic excellence and personal growth. Hear from our dedicated educators, passionate students, and supportive community as they share their experiences and what makes our school a special place to learn and thrive.</p>
            </Card.Body>
          </Col>
        </Row>
      </Container>

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
                href="https://www.facebook.com/faithchristianacademy.rizal"
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
