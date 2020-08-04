import React from "react";
import "./resumepage.styles.css";
import photo from "../../assets/IvanBorisencoResume.jpg";
import MyPDF from "../../assets/IvanBorisencoResume.pdf";

function ResumePage() {
  return (
    <div>
      <img alt="mySelf" src={photo} className="resume" />
      <a href={MyPDF} download>
        <button className="download">DOWNLOAD RESUME</button>
      </a>
    </div>
  );
}

export default ResumePage;
