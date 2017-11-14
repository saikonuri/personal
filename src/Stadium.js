import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { Container, Header, Button, Icon } from "semantic-ui-react";
import stadium from "./assets/stadium.jpg";

export default class Stadium extends React.Component {
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
              <img src={stadium} alt={"logo"} width={650} height={375} />
            </Animated>
          </div>
          <div className="description-activities">
            <Animated
              animationIn="bounceInUp"
              animationOut="fadeOut"
              isVisible={true}
            >
              <h2 id="activity-title"> StadiumTour </h2>
              <Container text>
                <p id="desc">
                  - WebVR Application that can allow people to see a 360 degree
                  view of how it is to be in sports stadiums
                  <br />
                  <br />
                  - Plan to use ReactVR and A-Frame
                  <br />
                  <br />
                  - In the long run, we hope to help people make decisions
                  before buying tickets to sports events
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
