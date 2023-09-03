import React from "react";
import logo from "./photos/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footerInfo">
      <div className="footerLeft">
        <span>
          We would love to hear from you. Let’s work — together with Reload
        </span>
        <a href="/">Contact us</a>
      </div>
      <div className="footerRight">
        <div className="footerRightHeaders">
          <span>Bussiness requires</span>
          <p>hello@colstic.com</p>
          <p>+27 123 456 789</p>
        </div>
        <div className="footerRightHeaders">
          <span>Open positions</span>
          <p>Junior Graphic Design</p>
          <p>Videography</p>
          <p>Photography</p>
        </div>
        <div className="footerRightHeaders">
          <span>London</span>
          <p>133A Rye lane London SE15 4BQ UK</p>
        </div>
        <div className="footerRightHeaders">
          <span>Cape town</span>
          <p>14 Upper pepper street CBD, 8001 Cape Town</p>
        </div>
      </div>
    </div>
    <div className="footerLinks">
      <img className="footerLogo" src={logo} alt="logo" />
      <div className="links">
        <a href="/">DRIBBLE</a>
        <a href="/">INSTAGRAM</a>
        <a href="/">LINKEDIN</a>
      </div>
    </div>
  </div>
  );
};

export default Footer;