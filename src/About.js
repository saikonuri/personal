import React, { Component } from "react";
import "./App.css";
import { Container } from "semantic-ui-react";

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <h1 className="category-title">About Me</h1>
        <br />
        <div id="about-me">
          <Container text textAlign={"center"}>
            <p id="about-desc">
              Welcome! I am a 3rd year at the University of Virginia studying Computer Science.
              I am currently looking for software engineering internship opportunities for the summer.
              My appreciation for this field continues to grow day by day. From learning my 
              first Hello World program ever only a few years ago to being able to develop 
              full stack applications now, I haven't ceased to stop learning something new with 
              every experience. I want to continue to test my boundaries of knowledge and curiosity 
              and hope that I can be considered as a potential candidate for challenging projects.
              <br />
              <br/>
              I am currently taking online courses in Machine Learning, Artificial Intelligence, and
              Blockchain development to explore the different fields of Computer Science. I plan on
              doing personal projects on these topics for the next few years both to make myself well
              rounded and up to date to the trends of the tech world! To know more about my past experiences,
              take a look at my resume below!
              </p>
          </Container>
        </div>
      </div>
    );
  }
}
