import React, { Component } from "react";
import { Animated } from "react-animated-css";
import ReactPlayer from "react-player";
import { Container, Header, Button, Icon } from "semantic-ui-react";

var hans = {
  fontSize: "20px"
};

var quote = {
  color: "orange"
};

export default class Singing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="activities-content">
          <div className="media">
              <ReactPlayer
                url="https://www.facebook.com/sai.konuri/videos/1118071598336427/"
                controls
                facebook
              />
          </div>
          <div className="description-activities">
              <h2 id="activity-title"> Music </h2>
              <Container text>
                <p id="sing-desc">
                  <text style={quote}>"Where words fail, music speaks." </text>
                  <br />
                  <i style={hans}>-Hans Christian Andersen</i>
                </p>
              </Container>
          </div>
        </div>
      </div>
    );
  }
}
