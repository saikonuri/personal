import React, { Component } from "react";
import "./App.css";
import { Animated } from "react-animated-css";
import { Container, Header, Button, Icon } from "semantic-ui-react";

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <h1 className="category-title">About Me</h1>
        </Animated>
        <br />
        <div className="about-content">
          <div className="description-activities">
            <Animated
              animationIn="bounceInUp"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div id="about-me">
                <Container text textAlign={"center"}>
                  <p>
                    My name is Sai. As a young and curious software developer, I
                    am looking for internship opportunities to showcase my array
                    of technical skills and contribute to large scale projects.
                    My skills range from front end development using React to
                    building REST API with Express.js. My most recent project
                    included building a full stack web application using the
                    MERN stack for a realty company that needed a database
                    management system. As evident, JavaScript is my strongest
                    language, however, I am proficient in Object Oriented
                    programming as well. I believe software development is
                    crucial to a society in which technology is high in demand
                    and would love to step foot in the realm of exciting
                    engineering challenges.
                    <br />
                    <br />
                    <p id="future">Future:</p>
                    The future of software lies in IOT and Artificial
                    Intelligence. Everyday, I continue to observe this trend and
                    hope to eventually be a big part of the technological
                    movement. Rather than building remote communication for
                    humans, the task at hand is communication between "things"
                    and I woud love to commit my career towards this outlook.
                  </p>
                </Container>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    );
  }
}
