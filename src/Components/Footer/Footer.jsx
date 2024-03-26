import React from "react";
import "./Footer.css";
import { LiaInstagram } from "react-icons/lia";
import { LiaFacebookF } from "react-icons/lia";
import { LiaLinkedinIn } from "react-icons/lia";
import { LiaWhatsapp } from "react-icons/lia";
import image from "../images/white.png";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-logo">
        <img src={image} alt="" />
        <p>
          Infinkey Solutions is your partner in accelerating business growth.
          Our comprehensive range of cutting-edge solutions is designed to
          optimize your operations, enhance customer experiences, and unlock new
          opportunities. With our expertise and industry insights, we work
          alongside you to develop customized strategies that fuel innovation
          and drive your business towards unprecedented success.
        </p>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="icons">
        <div>
          <LiaInstagram className="icon" />
        </div>
        <div>
          <LiaFacebookF className="icon" />
        </div>
        <div>
          <LiaLinkedinIn className="icon" />
        </div>
        <div>
          <LiaWhatsapp className="icon" />
        </div>
      </div>
      <div className="border"></div>
      <div className="rights">
        <p>©️ 2024 INFINKEY Solutions. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
