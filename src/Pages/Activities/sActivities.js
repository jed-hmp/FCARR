import React from 'react';
import "./sActivities.css";
import footerLogo from "./assets/footerLogo.png";

import mainImage from "./assets/mainImage.png";
import badmintonImage from "./assets/BadmintonImage.png";
import basketballImage from "./assets/Basketball.png";
import taekwondoImage from "./assets/Taekwondo.png";
import tournamentImage from "./assets/Tournament.png";
import recollectionImage from "./assets/Recollection.png";


export default function Events() {
  const badmintontitle = "Badminton"; // Define the title variable here
  const basketballtitle = "Basketball"; // Define the title variable here
  const taekwondotitle = "Taekwondo"; // Define the title variable here
  const tournamenttitle = "Tournament"; // Define the title variable here
  const recollectiontitle = "Recollection"; // Define the title variable here



  return (
    <div id="sActivitiesPage">
        <div className="activities-container">
      <h2 className="activities-title">SCHOOL ACTIVITIES</h2>
      <div className="activities-list">
      <p className="activities-intro">
        At Faith Christian Academy, we create a vibrant school experience with monthly
        celebrations, sports competitions, and academic activities that inspire
        excellence, teamwork, and faith.
      </p>
        <p>
          <strong>Monthly Celebrations</strong> - We honor culture, knowledge, and faith through events like Buwan ng Wika, Science Week, Math Month, and Arts & Literacy Month, fostering creativity, curiosity, and community spirit.
        </p>
        <p>
          <strong>Sports Activities</strong> - Students build discipline and teamwork through basketball, badminton, taekwondo, and other exciting competitions.
        </p>
        <p>
          <strong>Academic Events</strong> - From quiz bees and debate competitions to research fairs and leadership training, we challenge young minds to think critically and excel.
        </p>

        <div className="academic-images">
        <img src={mainImage} alt="Academic Event" />
        <h2 className="academic-title">SPORTS </h2>
        <p className="academic-caption">
              At Faith Christian Academy, we believe in nurturing not only the minds but also the bodies of our students through engaging and competitive sports programs. Our Basketball, Badminton, and Taekwondo programs provide students with the opportunity to develop their skills, build character, and foster teamwork in a Christ-centered environment.
        </p>
        </div>

         {/* Sports Card */}
        <div className="zActivities-card">
        <div className="zActivites-content">
          <p>
          <strong>{badmintontitle}</strong>  - Develop precision, speed, and strategy while enjoying the fast-paced excitement of one of the most popular racket sports.
          </p>
        </div>
        <div className="zActivities-image">
          <img src={badmintonImage} alt="Badminton Event" className="zActivites-img" />
        </div>
      </div>


      <div className="zActivities-card">
        <div className="zActivites-content">
          <p>
          <strong>{basketballtitle}</strong>  - Take part in thrilling games, enhance your agility, and strengthen teamwork as you compete and grow in skill and sportsmanship.
          </p>
        </div>
        <div className="zActivities-image">
        <img src={basketballImage} alt="Badminton Event" className="zActivites-img" />
        </div>
      </div>


      <div className="zActivities-card">
        <div className="zActivites-content">
          <p>
          <strong>{taekwondotitle}</strong>  -  Cultivate discipline, self-defense skills, and confidence through structured training and expert coaching.
          </p>
        </div>
        <div className="zActivities-image">
        <img src={taekwondoImage} alt="Badminton Event" className="zActivites-img" />
        </div>
      </div>

      <div className="zActivities-card">
        <div className="zActivites-content">
          <p>
          <strong>{tournamenttitle}</strong>  -  A school tournament is a competitive event where students participate in various sports, academic, or extracurricular activities to showcase their skills and teamwork. It fosters camaraderie, sportsmanship, and school spirit while providing a platform for students to excel and have fun.

          </p>
        </div>
        <div className="zActivities-image">
        <img src={tournamentImage} alt="Badminton Event" className="zActivites-img" />
        </div>
      </div>

      <div className="zActivities-card">
        <div className="zActivites-content">
          <p>
          <strong>{recollectiontitle}</strong> -A school recollection at Faith Christian Academy is a spiritual retreat designed to help students reflect on their faith, personal growth, and relationship with God. It typically includes prayer, worship, inspirational talks, group activities, and moments of silence for self-examination. The goal is to strengthen students' spiritual lives and encourage them to live out Christian values in their daily actions.

          </p>
        </div>
        <div className="zActivities-image">
        <img src={recollectionImage} alt="Badminton Event" className="zActivites-img" />
        </div>
      </div>


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
};