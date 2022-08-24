import React from "react";
import "./Modal.css"

const AvailableModal = (props) => {
    const onClose = props.onClose;
    return (

        <div>
            <div class="available-modal">
                <botton onClick={onClose}>Cerrar</botton>
                <div className="car-details"></div>
                <p>Datos del auto</p>
                <p>LXS-16-31</p>
                <p>Suzuki Vitara</p>
                <p>2020</p>
            </div>
            <div>
                <p>Conductor</p>
                <img src="Dariana" alt="Dariana" />
                <p>Dariana Quintero</p>
            </div>

            <div>
                <p>Pasajeros</p>


            </div>
        </div>
    )
}

export default AvailableModal;