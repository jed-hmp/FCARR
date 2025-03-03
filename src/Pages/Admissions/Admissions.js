import { useState } from 'react';
import { Carousel, Accordion, Container } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Admissions.css';
import mainImage from './assets/mainImage.png';
import student1 from './assets/student1.png';
import student2 from './assets/student2.png';
import student3 from './assets/student3.png';
import student4 from './assets/student4.png';

import footerLogo from "./assets/footerLogo.png";

const images = [student1, student2, student3, student4];

const ImageCarousel = ({ images, current, setCurrent }) => {
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="gallery-container">
      <ChevronLeft className="arrow left" onClick={prevSlide} />
      <Carousel activeIndex={current} onSelect={(selectedIndex) => setCurrent(selectedIndex)} interval={3000} indicators={false} controls={false}>
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              src={img}
              alt={`Student ${index + 1}`}
              className="gallery-image"
              style={{
                opacity: index === current ? 1 : 0.5,
                filter: index === current ? 'none' : 'blur(3px)',
                transform: index === current ? 'scale(1.1)' : 'scale(0.9)',
                transition: 'all 0.5s ease-in-out',
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <ChevronRight className="arrow right" onClick={nextSlide} />
    </div>
  );
};

export default function Events() {
  const [current, setCurrent] = useState(0);

  return (
    <div id="admissionsPage">
      <div className="admissions">
        {/* Header Section */}
        <div className="header">
          <img src={mainImage} alt="Faith Christian Academy" className="header-image" />
          <div className="header-text">
            <h1>“Where Every Students Journey Matter”</h1>
          </div>
        </div>

        {/* Admissions Section */}
        <div className="admissions-content">
          <h2>Admissions</h2>
          <p>
            At Faith Christian Academy, we are dedicated to providing a well-rounded education that fosters academic
            excellence, personal growth, and strong character. Our supportive community and passionate educators create
            an environment where students can thrive, develop their strengths, and build a foundation for lifelong
            success.
          </p>
          <p>
            Whether you're looking for a school that values integrity, excellence, and a nurturing atmosphere, we invite
            you to explore our programs and see how we can support your child's educational journey.
          </p>
        </div>

        {/* Image Gallery */}
        <ImageCarousel images={images} current={current} setCurrent={setCurrent} />

        {/* Accordion Section */}
        <Container className="accordion-container">
          <Accordion defaultActiveKey="0" alwaysOpen className="responsive-accordion">
          <Accordion.Item eventKey="0">
          <Accordion.Header>REQUIREMENTS FOR ENROLLMENT</Accordion.Header>
          <Accordion.Body>
            Must bring the following documents to the school office:
            <ul style={{ color: '#003153' }}>
              <li>PSA Birth Certificate</li>
              <li>Original Report Card</li>
              <li>Form 137/SF10</li>
              <li>Good Morale Certificate</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>APPLICATION PROCEDURE</Accordion.Header>
              <Accordion.Body>
              <ul style={{ color: '#003153' }}>
                  <li>New enrollees must complete all requirements before proceeding with enrollment.</li>
                  <li>Transferee application should be submitted directly to the school office.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>WE OFFER</Accordion.Header>
              <Accordion.Body>
                  <ul style={{ color: '#003153' }}>
                  <li>PRESCHOOL</li>
                  <li>Grade School Grade 1-6</li>
                  <li>HIGHSCHOOL Grade 7-10</li>
                  <li>STUDENT TUTOR</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
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