import React, { Component } from "react";
import { Animated } from "react-animated-css";
import HoosActive from "./Hoosactive.js";
import Stadium from "./Stadium.js";
import { Container, Header, Button, Icon } from "semantic-ui-react";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoos: true
    };
  }

  showHoos(e) {
    if (!this.state.hoos) {
      this.setState({
        hoos: true
      });
    }
  }

  showAlexa(e) {
    if (this.state.hoos) {
      this.setState({
        hoos: false
      });
    }
  }

  showAlexa(e){
      console.log("Clicked For Alexa")
  }

  render() {
    var current = "";
    if (this.state.hoos) {
      current = <HoosActive />;
    } else {
      current = <Stadium />;
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
