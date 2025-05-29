import React from "react";
import { Images } from "../utils/images";
import Header from "./header";
import "../styles/serverInfo.css";
import MainBody from "./body";

const ServerInfo = () => {
    const backgroundStyle = {
        backgroundColor : "white",
        backgroundImage: `url(${Images.menuBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        marging: 0,
        padding : 0
    };

    return <div style={backgroundStyle}>
        <div className="body">
        <Header/>
        <MainBody/>
        </div>
    </div>
        ;
}

export default ServerInfo;