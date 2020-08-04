import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/alien.svg";
import "./header.styles.scss";

export const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/my-website">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/about">
        ABOUT
      </Link>
      <Link className="option" to="/knowledge">
        KNOWLEDGE
      </Link>
      <Link className="option" to="/resume">
        RESUME
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
