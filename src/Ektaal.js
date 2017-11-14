import React, { Component } from "react";
import { Animated } from "react-animated-css";
import ReactPlayer from "react-player";
import { Container, Header, Button, Icon } from "semantic-ui-react";
import ektaal from "./assets/ektaal2.jpg";

var acap = {
  fontSize: "22px",
  fontColor: "orange"
};

export default class Ektaal extends React.Component {
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
              <img src={ektaal} alt={"logo"} width={650} height={375} />
            </Animated>
          </div>
          <div className="description-activities">
            <Animated
              animationIn="bounceInUp"
              animationOut="fadeOut"
              isVisible={true}
            >
              <h2 id="activity-title"> Ektaal </h2>
              <Container text>
                <p id="desc" style={acap}>
                  UVA's only Bollywood Fusion Acapella Group
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
