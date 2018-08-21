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
                <img src={resume} height={900} width={700} style={{ margin: 50 }} />
            </div>
        );
    }
}

