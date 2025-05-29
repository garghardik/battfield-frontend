import React, { useEffect, useState } from "react";
import PlayerInfo from "../common/playerInfo";
import "./main.css";
import SettingsPanel from "../common/settingsPanel";
import MapRotation from "../mapRotation";

const Statistics = () => {
    const [settingsData, setSettingsData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/battlefield/server-settings`)
            .then(response => response.json())
            .then(json => {
                console.log("json data:::", json);
                setSettingsData(json);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });

    }, [])

    const Info = () => {
        return (
            <div className="containerTop">
                {settingsData[0]?.type === "gameSpecifics" ? settingsData[0]?.data?.map((data, index) => (
                    <PlayerInfo data={data} key={index} />
                )) : <></>}
            </div>
        );
    }

    return (
        <>
            <Info />
            <div className="settingsContainer">
                {settingsData[1]?.type === "control" ? settingsData[1]?.data?.map((data, index) => (
                    <SettingsPanel settingsData={data} key={index} />
                )) : <></>}
            </div>
            <MapRotation items={settingsData[2]?.data} />
        </>
    );
}

export default Statistics;