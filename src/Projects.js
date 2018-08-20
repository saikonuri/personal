import React, { Component } from "react";
import { Animated } from "react-animated-css";
import HoosActive from "./Hoosactive.js";
import Alexa from "./Alexa.js";
import Contra from "./Contra.js";
import { Container, Header, Button, Icon } from "semantic-ui-react";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="projects-background">
        <br />
        <h1 className="category-title">My Projects</h1>
        <br />
        <div className="projects">
          <div className="project">
            <h2 className="project-title">HoosActive</h2>
            <HoosActive />
          </div>
          <div className="project">
            <h2 className="project-title">MotivateMe</h2>
            <Alexa />
          </div>
          <div className="project">
            <h2 className="project-title">Contraportal</h2>
            <Contra />
          </div>
        </div>
      </div>
    );
  }
}
