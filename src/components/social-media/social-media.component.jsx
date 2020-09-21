import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./social-media.styles.css";

export const SocialMedia = () => (
  <div className="social-container">
    <p className="name">@Ivan(Yoni) Borisenco</p>
    <a
      href="https://www.facebook.com/yoni.borisenko?ref=bookmarks"
      className="facebook social"
    >
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a href="https://github.com/Colvan" className="github social">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <a
      href="https://www.instagram.com/yoni.borisenco/"
      className="instagram social"
    >
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a
      href="https://www.linkedin.com/in/ivan-borisenco-a323a919a/"
      className="linkedin social"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
  </div>
);

export default SocialMedia;
