import React from "react";
import "./tabs.css";

const Tabs = ({ text, icon }) => {
  return (
    <div className="tab-button" style={{padding : text!== "13672" ? "9px 38px" : "9px 3px"}}>
      {icon && <span className="tab-icon">{icon}</span>}
      <span className="tab-text">{text}</span>
    </div>
  );
};

export default Tabs;