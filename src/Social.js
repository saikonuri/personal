import React, { Component } from "react";
import "./App.css";
import { FacebookButton } from "react-social";
import { SocialIcon } from "react-social-icons";

let facebookUrl = "https://facebook.com";
let linkedInUrl = "https://www.linkedin.com/in/sai-konuri-17a187133/";
let githubUrl = "https://github.com/saikonuri";
export default class Social extends React.Component {
  render() {
    return (
      <div className="social">
        <SocialIcon url={githubUrl} color="pink" />
        <SocialIcon url={linkedInUrl} color="cyan" />
        <SocialIcon url={facebookUrl} color="powderblue" />
      </div>
    );
  }
}
