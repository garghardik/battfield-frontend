import React from "react";
import { Images } from "../utils/images";
import Header from "./header";
import "../styles/serverInfo.css";
import MainBody from "./body";

const ServerInfo = () => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Images.menuBackground})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
        width: '100vw',
        marging: 0,
        padding: 0
    };

    return (<div style={backgroundStyle}>
        <div className="body">
            <Header />
            <MainBody />
        </div>
    </div>);
}

export default ServerInfo;