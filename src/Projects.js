import React, { Component } from "react";
import {Animated} from "react-animated-css";

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <h1 className="category-title">My Projects</h1>
        </Animated>
      </div>
    );
  }
}
