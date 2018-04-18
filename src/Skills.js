import React, { Component } from "react";
import { Animated } from "react-animated-css";
import ReactPlayer from "react-player";
import { Container, Header, Button, Icon } from "semantic-ui-react";
import Singing from "./Singing.js";
import Tennis from "./Tennis.js";
import Ektaal from "./Ektaal.js";

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  handleNext(e) {
    if (this.state.number == 2) {
      this.setState({
        number: 0
      });
    } else {
      var newNum = this.state.number;
      newNum++;
      this.setState({
        number: newNum
      });
    }
  }

  handlePrevious(e) {
    if (this.state.number == 0) {
      this.setState({
        number: 2
      });
    } else {
      var newNum = this.state.number;
      newNum--;
      this.setState({
        number: newNum
      });
    }
  }

  render() {
    var current = "";
    if (this.state.number == 0) {
      current = <Singing />;
    } else if (this.state.number == 1) {
      current = <Tennis />;
    } else if (this.state.number == 2) {
      current = <Ektaal />;
    }
    return (
      <div>
       
          <h1 className="category-title">My Activities</h1>
        
        <div className="toggle">
          <div className="toggle-back">
            <Button
              icon
              inverted
              color="orange"
              onClick={e => this.handlePrevious(e)}
            >
              <Icon name="long arrow left" />
            </Button>
          </div>
          <div className="toggle-forward">
            <Button
              icon
              inverted
              color="orange"
              onClick={e => this.handleNext(e)}
            >
              <Icon name="long arrow right" />
            </Button>
          </div>
        </div>
        <div className="activity">{current}</div>
      </div>
    );
  }
}
