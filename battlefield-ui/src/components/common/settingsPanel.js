import React from "react";
import "./settingsPanel.css";

const SettingsPanel = (props) => {
    const { settingsData } = props;
    return (
        <div className="settings-container">
            <div className="settings-title">{settingsData?.label.toUpperCase()}</div>
            {settingsData?.data.map((item, index) => (
                <div className="settings-row" key={index}>
                    <span className="label">{item.label.toUpperCase()}</span>
                    <span className="stat">{item.stat.toUpperCase()}</span>
                </div>
            ))}
        </div>
    );
}

export default SettingsPanel;