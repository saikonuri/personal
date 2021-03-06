import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { Container, Header, Button, Icon } from "semantic-ui-react";
import contra from "./assets/contra.jpg";

export default class Contra extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="activities-content">
        <img src={contra} alt={"logo"} width={400} height={215} />
        <div>
          <Container text>
            <p id="desc">
              • Built the form UI for users interested in applying for a clinical trial in male contraception
                  <br />
              <br />
              • Designed data visuals such as graphs, maps, charts, etc. using Highcharts.js and d3.js
                  <br />
              <br />
              <a href="https://contraportal-2ec72.firebaseapp.com/">
                Form Portal (The Data visual portal is private to Contraline and I cannot give access.)
                  </a>
            </p>
          </Container>
        </div>
      </div>
    );
  }
}
