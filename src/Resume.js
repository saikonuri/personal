import React from "react";
import resume from "./assets/Resume.pdf";

export default class Resume extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <embed src={resume} type="application/pdf" width="60%" height="550px" />
            </div>
        );
    }
}
