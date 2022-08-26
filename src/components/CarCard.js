import React from "react";
import Join from '../images/Join.svg'
import "./CarCard.css"
import { useNavigate } from 'react-router-dom';
import AvailableModal from "../views/modal";
import Popup from 'reactjs-popup'

const overlayStyle = { background: 'rgba(107, 53, 134, 0.5)' };

const CarCard = (props) => {
    const name = props.name;
    const image = props.image;
    const freePlaces = props.freePlaces;

    const navigate = useNavigate();

    const buttonJoin = () => {
    navigate("/Home")
    }

    return (
        <div className="car-card">

            <div className="user-info"><div><img src={image} className="avatar-img" alt="User" /> </div>{name}</div>
            <p className="free-places-text">{freePlaces} lugares
                disponible</p>
            


            <Popup
                trigger={<div className="show-more"><p>Ver más</p></div>}
                modal
                nested
                {...{ overlayStyle }}
            >
                {
                    (close) => {
                        return <AvailableModal onClose={close}></AvailableModal>;
                    }
                }
            </Popup>
            <div className="join-button">
                <img src={Join} className="JoinButton" alt="JoinButton" onClick={buttonJoin} />
            </div>
        </div>
    )
}

export default CarCard