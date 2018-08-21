import React, { Component } from "react";
import { Animated } from "react-animated-css";
import ReactPlayer from "react-player";
import { Container, Header, Button, Icon } from "semantic-ui-react";
import tennis from "./assets/tennis.jpg";

var tenn = {
  fontSize: "20px"
};

export default class Tennis extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="activities-content">
          <div className="media">

            <img src={tennis} alt={"logo"} width={550} height={375} />

          </div>
          <div className="description-activities">

            <h2 id="activity-title"> Tennis </h2>
            <Container text>
              <p id="desc" style={tenn}>
                State Finalist, Regional Champion
                  <br />
                <br />
                Top 300 Recruit
                  <br />
                <br />
                Captain of Briar Woods Tennis
                  <br />
                <br />
                US Army Reserve National Scholar Athlete Award Nominee
                </p>
            </Container>

          </div>
        </div>
      </div>
    );
  }
}
