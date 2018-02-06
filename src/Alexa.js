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
      <div>
        <div className="activities-content">
          <div className="media">
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <img src={logo} alt={"logo"} width={450} height={215} />

            </Animated>
          </div>
          <div className="description-activities">
            <Animated
              animationIn="bounceInUp"
              animationOut="fadeOut"
              isVisible={true}
            >
              <h2 id="activity-title"> MotivateMe </h2>
              <Container text>
                <p id="desc">
                  • Developing an Alexa Skill using the Alexa SDK and Node.js
                  <br />
                  <br />
                  • Hoping to help students get motivated by offering daily inspirational quotes and speeches
                  <br />
                </p>
              </Container>
            </Animated>
          </div>
        </div>
      </div>
    );
  }
}
