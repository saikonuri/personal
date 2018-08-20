import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { Container, Header, Button, Icon } from "semantic-ui-react";
import logo from "./assets/logo.jpg";

export default class Alexa extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="activities-content">
        <img src={logo} alt={"logo"} width={450} height={215} />
        <div>
          <Container text>
            <p id="desc">
              • Developing an Alexa Skill using the Alexa SDK and Node.js
                  <br />
              <br />
              • Hoping to help students get motivated by offering daily inspirational quotes and speeches
                  <br />
            </p>
          </Container>
        </div>
      </div>
    );
  }
}
