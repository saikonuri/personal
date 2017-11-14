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
              <img src={hoos} alt={"logo"} width={650} height={375} />
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
                  - Web Application that allows UVA students to manage and
                  schedule pick up games with each other
                  <br />
                  <br />
                  - Current Demo/Prototype Version in Web
                  <br />
                  <br />
                  - Currently in iOS development to make it easier for students
                  to use it on the fly
                  <br />
                  <br />
                  <a href="https://hoosactive.firebaseapp.com/">
                    Web Demo (Still Work in Progress)
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
