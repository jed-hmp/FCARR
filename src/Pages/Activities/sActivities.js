import React, { useEffect, useState } from "react";
import { db } from "../../firebase"; // Import Firestore configuration
import { collection, getDocs,  doc, getDoc } from "firebase/firestore";
import "./sActivities.css";
import footerLogo from "./assets/footerLogo.png";
import mainImage from "./assets/mainImage.png";

export default function Events() {
  const [activities, setActivities] = useState([]);
  const [footerInfo, setFooterInfo] = useState({
    facebook: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "activities"));
        const activitiesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setActivities(activitiesData);
      } catch (error) {
        console.error("Error fetching activities:", error);
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

    fetchActivities();
    fetchFooterInfo();
  }, []);








  
  return (
    <div id="sActivitiesPage">
      <div className="activities-container">
        <h2 className="activities-title">SCHOOL ACTIVITIES</h2>
        <div className="activities-list">
          <p className="activities-intro">
            At Faith Christian Academy, we create a vibrant school experience with monthly celebrations, sports competitions, and academic activities that inspire excellence, teamwork, and faith.
          </p>

          <div className="academic-images">
            <img src={mainImage} alt="Academic Event" />
            <h2 className="academic-title">SPORTS</h2>
            <p className="academic-caption">
              At Faith Christian Academy, we believe in nurturing not only the minds but also the bodies of our students through engaging and competitive sports programs.
            </p>
          </div>

      {/* Dynamically Render Activities */}
{activities.map((activity) => (
  <div key={activity.id} className="zActivities-card">
    <div className="zActivites-content">
      <p>
        <strong>{activity.title} {activity.name} </strong> - {activity.description}
      </p>
    </div>
    <div className="zActivities-image">
      <img src={activity.imageUrl} alt={activity.title} className="zActivites-img" />
    </div>
  </div>
))}

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
