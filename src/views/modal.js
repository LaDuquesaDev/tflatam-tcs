import React from "react";
import "./Modal.css";
import "./Opacity.js";
import "./Opacity.css";
import Star from '../images/Stars.png'
import Dariana from '../images/imageperfil.png'
import Angie from '../images/Angie.png'
import Daniela from '../images/passengerdani.png'
import Join from '../images/Join.svg'
import Close from '../images/close-modal.svg'
import { useNavigate } from "react-router-dom";


const AvailableModal = (props) => {
    const navigate = useNavigate()
    const onClose = props.onClose;
    return (

        <div className="full-data">
            <div className="available-modal">
                <div className="car-details"></div>
                <p className="title-modal">Datos del auto</p>
                <p className="license-modal">LXS-16-31</p>
                <p className="brand-modal">Suzuki Vitara</p>
                <p className="year-modal">2020</p>
            </div>

            <div className="driver">
                <botton onClick={onClose}><img src={Close} alt="Close" className="close-modal" /></botton>
                <p>Conductor</p>
                <img src={Dariana} alt="Dariana" onClick={() => navigate("/DriverComments")} />

                <img src={Star} alt="Star" />
                <p>Dariana Quintero</p>
            </div>
            <div className="passenger">
                <p>Pasajeros:</p>
                <dd className="list"><img src={Angie} width="30" height="30" alt="Angie" />Angie</dd>
                <dd className="list"><img src={Daniela} width="30" height="30" alt="Daniela" onClick={() => navigate("/PassengerComments")} />Daniela</dd>


            </div>
            <div>
                <img src={Join} alt="Join" className="join" width="95%" height="95%" onClick={() => navigate('/Home')} />
            </div>



        </div>
    )
}

export default AvailableModal;