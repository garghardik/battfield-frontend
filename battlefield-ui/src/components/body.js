import React from "react";
import Tabs from "./common/tabs";
import { FaStar } from 'react-icons/fa';
import "../styles/body.css";
import { Images } from "../utils/images";

const MainBody = () => {

    const TabsBody = () => {
        return (<div style={{ display: 'flex', gap: '8px', paddingTop: '50px', }}>
            <Tabs text="JOIN" />
            <Tabs text="SPECTATE" />
            <Tabs text="JOIN AS COMMANDER" />
            <Tabs text="13672" icon={<FaStar />} />
        </div>);
    }

    const InfoBody = () => {
        return (
            <div className="server-info">
                <h2 className="server-title">! RC3-BASEMAPS</h2>
                <div className="server-details">
                    <img src={Images.flag} alt="German Flag" className="flag-icon" />
                    <span>CONQUEST LARGE - LANCANG DAM - CUSTOM - 60 HZ</span>
                </div>
                <p className="server-description">
                    Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us:
                    <a href="https://www.epg.gg" target="_blank" rel="noreferrer"> www.epg.gg</a> |
                    <a href="https://discord.gg/3r5NK4d" target="_blank" rel="noreferrer"> Discord</a>
                    <p style={{ display: "flex", justifyContent: "start" }}>https://discord.gg/3r5NK4d</p>
                </p>

            </div>
        );
    }

    return (
        <>
            <InfoBody />
            <TabsBody />
        </>
    )
}

export default MainBody;