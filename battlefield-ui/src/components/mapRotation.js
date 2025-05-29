import { React, useMemo } from "react";
import "../styles/mapRotation.css";
import { Images } from "../utils/images";

const MapRotation = (props) => {
    const { items } = props;
    const imagesArray = {
        firestorm: Images.firestorm,
        combat: Images.combat,
        destruction: Images.destruction,
        reinforcement: Images.reinforcement,
    }

    const imageKeys = Object.keys(imagesArray);

    // Helper to get a random image
    const getRandomImage = () => {
        const randomKey = imageKeys[Math.floor(Math.random() * imageKeys.length)];
        return imagesArray[randomKey];
    };


    return (<div style={{ marginTop: "20px" }}>
        <div className="mainTitle">MAP ROTATION</div>
        <div className="grid-container">
            {items?.map((item, index) => (
                <div className="grid-item" key={index}>
                    <div
                        className="image"
                        style={{ backgroundImage: `url(${getRandomImage()})` }}
                    />
                    <div className="title">CONQUEST LARGE <br />{`${item.title.toUpperCase()}`}</div>
                </div>
            ))}
        </div>
    </div>);
}

export default MapRotation;