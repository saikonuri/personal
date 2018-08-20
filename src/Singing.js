import React from "react";
import { Container, Header, Button, Icon } from "semantic-ui-react";
import sing from './assets/sing.jpg';

var hans = {
  fontSize: "20px"
};

var quote = {
  color: "orange"
};

export default class Singing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="activities-content">
          <div className="media">
              <img src={sing} alt={"logo"} width={500} height={375} />
          </div>
          <div className="description-activities">
              <h2 id="activity-title"> Music </h2>
              <Container text>
                <p id="sing-desc">
                  <text style={quote}>"Where words fail, music speaks." </text>
                  <br />
                  <i style={hans}>-Hans Christian Andersen</i>
                </p>
              </Container>
          </div>
        </div>
      </div>
    );
  }
}
