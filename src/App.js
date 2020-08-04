import React from "react";
import "./App.css";

import SocialMedia from "./components/social-media/social-media.component";
import Header from "./components/header/header.component";

import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/aboutpage/aboutpage.component";
import ResumePage from "./pages/resumepage/resumepage.component";
import ContactPage from "./pages/contactpage/contactpage.component";

function App() {
  return (
    <div className="back">
      <div className="App">
        <header>
          <Header />
        </header>
        <Switch>
          <Route exact path="/my-website" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/resume" component={ResumePage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
        <SocialMedia />
      </div>
    </div>
  );
}

export default App;
