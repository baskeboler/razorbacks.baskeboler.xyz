import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./DeathRace.scss";
import { Player } from "video-react";
class DeathRace extends Component {
  render() {
    const ytOpts = {
      modestbranding: 1,
      controls: 0,
      showinfo: 0,
      width: 640,
      height: 480
    };
    const videoUrl = `https://youtu.be/dk6Lh1pzS40`;
    return (
      <div className="death-race-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="death-race-wrapper">
            <Player src={videoUrl} preload="metadata" autoPlay={true} />
            {/* <Youtube opts={ytOpts} videoId="dk6Lh1pzS40" /> */}
            <CardText>
              <p className="death-race-text md-body-1">
                {config.userDescription}
              </p>
            </CardText>
            <UserLinks labeled config={config} />
          </div>
        </Card>
      </div>
    );
  }
}

export default DeathRace;
