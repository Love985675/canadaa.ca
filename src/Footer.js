import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Contact Information</h3>
        <ul>
          <li>Feedback</li>
          <li>Enquiries</li>
          <li>How Government Works</li>
          <li>Government-wide Reporting</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Government</h3>
        <ul>
          <li>Departments and Agencies</li>
          <li>Open Government</li>
          <li>IRCC Offices</li>
          <li>Prime Minister</li>
          <li>Proactive Disclosure</li>
          <li>Social Media</li>
          <li>Media Contacts</li>
          <li>Ministers</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Transparency</h3>
        <ul>
          <li>Public Service and Military</li>
          <li>Privacy</li>
          <li>News Releases</li>
          <li>Treaties, Laws, and Regulations</li>
          <li>Mobile Centre</li>
          <li>Libraries</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Feedback</h3>
        <ul>
          <li><img className="imagesFooter" src="feeback.png" alt="menu" /></li>
          
        </ul>
        <h3>Social Media</h3>
        <ul>
        <li><img className="imagesFooter" src="SocialMedia.png" alt="menu" /></li>
          
        </ul>
        <h3>Mobile Center</h3>
        <ul>
        <li><img  className="imagesFooter" src="MobileCenter.png" alt="menu" /></li>
          
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
