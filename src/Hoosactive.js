import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { Container, Header, Button, Icon } from "semantic-ui-react";
import hoos from "./assets/hoos.png";

export default class HoosActive extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="activities-content">
        <img src={hoos} alt={"logo"} width={200} height={400} />
        <div>
          <Container text>
            <p id="desc">
              • Mobile Application that allows UVA students to manage and
              schedule pick up games with each other
                  <br />
              <br />
              <a href = "https://www.youtube.com/watch?v=Oy_cXYoBB28">
                Project Demo
              </a>
                  <br />
              <a href="https://github.com/saikonuri/hoos-native">
                Project Repo
                  </a>
            </p>
          </Container>
        </div>
      </div>
    );
  }
}
