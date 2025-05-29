import React from "react";
import "./playerInfo.css";

const PlayerInfo = (props) => {
    const {data} = props;
    return (
    <div className="player-count">
      <span className="player-label">{data.label}</span>
      <span className="player-value">{data.stat}</span>
    </div>
    )
}

export default PlayerInfo;