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
      <div>
        <div className="activities-content">
          <div className="media">
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <img src={hoos} alt={"logo"} width={450} height={215} />
            </Animated>
          </div>
          <div className="description-activities">
            <Animated
              animationIn="bounceInUp"
              animationOut="fadeOut"
              isVisible={true}
            >
              <h2 id="activity-title"> HoosActive </h2>
              <Container text>
                <p id="desc">
                  • Mobile Application that allows UVA students to manage and
                  schedule pick up games with each other
                  <br />
                  <br />
                  • Current Demo/Prototype Version in Web (On the left)
                  <br />
                  <br />
                  • Currently in React Native development to make it easier for students
                  to use it on the fly
                  <br />
                  <br />
                  • Mobile version is much more feature rich and is in process of being completed soon and deployed. Below is link to the project repository!
                  <br />
                  <a href="https://github.com/saikonuri/hoos-native">
                    Project Repo
                  </a>
                </p>
              </Container>
            </Animated>
          </div>
        </div>
      </div>
    );
  }
}
