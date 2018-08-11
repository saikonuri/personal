import React, { Component } from "react";
import "./App.css";
import prof from "./assets/link.png";
import { Button, Icon } from "semantic-ui-react";
import Social from "./Social.js";
import scrollToElement from "scroll-to-element";
import About from "./About.js";
import Projects from "./Projects.js";
import Activities from "./Activities.js";
import Resume from "./Resume.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: false,
      projects: false,
      activities: false,
      resume: false
    }
  }

  showAboutPage() {
    //document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    scrollToElement(".category");
    this.setState({
      about: true,
      projects: false,
      activities: false,
      resume: false
    })
  }

  showProjectsPage() {
    scrollToElement(".category");
    this.setState({
      projects: true,
      about: false,
      activities: false,
      resume: false
    })
  }

  showActivitiesPage() {
    scrollToElement(".category");
    this.setState({
      activities: true,
      about: false,
      projects: false,
      resume: false
    })
  }

  showResume() {
    scrollToElement(".category");
    this.setState({
      activities: false,
      about: false,
      projects: false,
      resume: true
    })
  }

  render() {
    return (
      <div className="App">
        <img className="profile-pic" src={prof} />
        <div className="name-position">
          <h1 id="name">Sai Konuri</h1>
          <h2 id="position">Software Developer</h2>
        </div>
        <Social />
        <div className="category">
          <About />
        </div>
      </div>
    );
  }
}

export default App;
