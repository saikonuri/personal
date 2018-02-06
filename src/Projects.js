import React, { Component } from "react";
import { Animated } from "react-animated-css";
import HoosActive from "./Hoosactive.js";
import Alexa from "./Alexa.js";
import Contra from "./Contra.js";
import { Container, Header, Button, Icon } from "semantic-ui-react";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoos: true,
      alexa: false,
      contra: false
    };
  }

  showHoos(e) {
    this.setState({
      hoos: true,
      alexa: false,
      contra: false
    });
  }

  showAlexa(e) {
    this.setState({
      hoos: false,
      alexa: true,
      contra: false
    });
  }

  showContra(e) {
    this.setState({
      hoos: false,
      alexa: false,
      contra: true
    });
  }

  render() {
    var current = "";
    if (this.state.hoos) {
      current = <HoosActive />;
    } else if (this.state.alexa) {
      current = <Alexa />;
    }
    else {
      current = <Contra />
    }
    return (
      <div>
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <h1 className="category-title">My Projects</h1>
        </Animated>
        <br />
        <div className="toggle-projects">
          <div className="toggle-hoos">
            <Button
              icon
              inverted
              color="orange"
              onClick={e => this.showHoos(e)}
            >
              HoosActive
            </Button>
          </div>
          <div className="toggle-stadium">
            <Button
              icon
              inverted
              color="orange"
              onClick={e => this.showAlexa(e)}
            >
              MotivateMe
            </Button>
          </div>
          <div className="toggle-contra">
            <Button
              icon
              inverted
              color="orange"
              onClick={e => this.showContra(e)}
            >
              ContraPortal
            </Button>
          </div>
        </div>
        {current}
      </div>
    );
  }
}
