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
            
              <img src={hoos} alt={"logo"} width={450} height={215} />
            
          </div>
          <div className="description-activities">
           
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
           
          </div>
        </div>
      </div>
    );
  }
}
