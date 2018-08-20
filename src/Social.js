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
        <SocialIcon url={githubUrl} color="black" style={style} />
        <SocialIcon url={linkedInUrl} color="#0077B5" style={style} />
        <SocialIcon url={facebookUrl} color="#3B5998" style={style} />
      </div>
    );
  }
}

var style = {
  marginRight: '1%'
}
