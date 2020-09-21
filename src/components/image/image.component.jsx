import React from "react";
import photo from "../../assets/me.png";
import "./image.styles.css";

const Image = () => (
  <div>
    <img alt="mySelf" src={photo} className="photo" />
  </div>
);

export default Image;
