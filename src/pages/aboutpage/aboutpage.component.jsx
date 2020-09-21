import React from "react";
import "./aboutpage.styles.css";
import Goo from "../../components/gooball/gooball.component";
const AboutPage = () => (
  <div className="aboutpage">
    <h1 className="head">About me</h1>
    <Goo />
    <br />
    <span className="aboutme">Hi my name is Ivan Borisenco</span>
    <br />
    <span className="aboutme">
      I'm a software engineering student at SCE Sami Shamoon college of
      engineering
    </span>
    <br />
    <span className="aboutme">
      Well-organised person,problem solver,independent and communicative.
    </span>

    <br />
    <span className="aboutme">
      Fan of MMA,outdoor activities,TV series and video games
    </span>
    <br />
    <span className="aboutme">
      Since Childhood i was intrested in computers and games which has brought
      me to study software
    </span>
  </div>
);

export default AboutPage;
