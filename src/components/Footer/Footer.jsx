import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <p>About Us</p>
        <p>Terms & Conditions</p>
        <p>Privacy & Cookie Policies</p>
      </div>
      <div className="copyRight">
        <span>2023</span> <span>&copy; Unilife</span>
      </div>
    </div>
  );
}

export default Footer;
