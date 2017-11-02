import React, { Component } from "react";
import {Animated} from "react-animated-css";
import ReactPlayer from 'react-player'

export default class Activities extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <h1 className="category-title">My Activities</h1>
      </Animated>
      <div className="activities-content">
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <ReactPlayer url='https://www.youtube.com/watch?v=rmoCGUg8bYw' playing />
        </Animated>
      </div>
      </div>
    );
  }
}
