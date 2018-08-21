import React from "react";
import resume from "./assets/Resume.jpg";

export default class Resume extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="resume-background">
                <br />
                <h1 className="category-title">Resume</h1>
                <img src={resume} height={1000} width={800} style={{ margin: 50 }} />
            </div>
        );
    }
}

