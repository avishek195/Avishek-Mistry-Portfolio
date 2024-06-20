import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <a href="https://www.instagram.com/avishek_mistry/" target="_blank">
        <FaInstagram className="icon icon1" />
      </a>
      <a href="https://www.facebook.com/rajib.hgig" target="_blank">
        <FaFacebook className="icon icon2" />
      </a>
      <a href="https://x.com/AvishekMistry2" target="_blank">
        <FaTwitter className="icon icon3" />
      </a>
      <a href="https://www.linkedin.com/in/avishekmistry/" target="_blank">
        <FaLinkedin className="icon icon4" />
      </a>
      <a href="https://github.com/avishek195" target="_blank">
        <FaGithub className="icon icon5" />
      </a>
      <a href="mailto:avishekmistry420@gmail.com">
        <FaEnvelope className="icon icon6" />
      </a>
    </div>
  );
};

export default Contact;
