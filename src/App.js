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
        <div className="category">
        <Resume />
        </div>
        <div className="category">
        <Projects/>
        </div>
        <div className="category">
        <Activities/>
        </div>
      </div>
    );
  }
}

export default App;
