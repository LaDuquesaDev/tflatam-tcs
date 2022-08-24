import React from "react";
import Join from '../images/Join.svg'
import "./CarCard.css"
import AvailableModal from "../views/modal";
import Popup from 'reactjs-popup'

const CarCard = (props) => {
    const name = props.name;
    const image = props.image;
    const freePlaces = props.freePlaces;
    return (
        <div className="car-card">

            <div className="user-info"><img src={image} className="avatar-img" alt="User" /> {name}</div>
            <div className="available">
                <p className="free-places-text">{freePlaces} lugares disponible</p>
            </div>

            <div className="show-more">
                <p>Ver más</p>
            </div>


            <Popup
                trigger={<div className="join-button">
                    <img src={Join} className="JoinButton" alt="JoinButton" />
                </div>}
                modal
            >
                {
                    (close) => {
                        return <AvailableModal onClose={close}></AvailableModal>;
                    }
                }
            </Popup>
        </div>
    )
}

export default CarCard