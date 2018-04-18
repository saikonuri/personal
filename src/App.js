import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import prof from "./assets/link.png";
// import { Button, Icon, Rating } from "semantic-ui-react";
import { Button, Icon } from "semantic-ui-react";
import Social from "./Social.js";
import scrollToElement from "scroll-to-element";
import About from "./About.js";
import Projects from "./Projects.js";
import Activities from "./Activities.js";
import Resume from "./Resume.js"
import * as firebase from "firebase";

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
    var category;
    if (this.state.about == true) {
      category = (
        <About />)
    }
    else if (this.state.projects == true) {
      category = (
        <Projects />
      )
    }
    else if (this.state.activities == true) {
      category = (
        <Activities />)
    }
    else if (this.state.resume == true) {
      category = (
        <Resume />
      )
    }
    return (
      <div className="App">
        <div className="pic-name">
          <div className="name-position">
            <h1 id="name">Sai Konuri</h1>
            <h2 id="position">Software Developer</h2>
            <Social />
          </div>
          <img className="profile-pic" src={prof} />
        </div>
        <div className="buttons">
          <div className="button">
            <Button
              animated
              inverted
              color="teal"
              onClick={() => {
                this.showAboutPage();
              }}
            >
              <Button.Content visible>About Me</Button.Content>
              <Button.Content hidden>
                <Icon name="user" color="black" />
              </Button.Content>
            </Button>
          </div>
          <div className="button">
            <Button
              animated
              inverted
              color="teal"
              onClick={() => {
                this.showResume();
              }}
            >
              <Button.Content visible>Resume</Button.Content>
              <Button.Content hidden>
                <Icon name="user" color="black" />
              </Button.Content>
            </Button>
          </div>
          <div className="button">
            <Button
              animated
              inverted
              color="teal"
              onClick={() => {
                this.showProjectsPage();
              }}
            >
              <Button.Content visible>Projects</Button.Content>
              <Button.Content hidden>
                <Icon name="laptop" color="black" />
              </Button.Content>
            </Button>
          </div>
          <div className="button">
            <Button
              animated
              inverted
              color="teal"
              onClick={() => {
                this.showActivitiesPage();
              }}
            >
              <Button.Content visible>Activities</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow circle down" color="black" />
              </Button.Content>
            </Button>
          </div>
        </div>
        <div className="category">
          {category}
        </div>
      </div>
    );
  }
}

export default App;
