import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { Container, Header, Button, Icon } from "semantic-ui-react";
import resume from "./assets/Resume_Sai.pdf";

export default class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <embed src={resume} type="application/pdf" width="60%" height="550px" />
            </div>
        );
    }
}
