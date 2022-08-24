import React, { useState } from 'react';
import emergency from '../images/emergency.svg';
import accident from '../images/accident.svg';
import stole from '../images/stole.svg';
import technical from '../images/technical.svg';
import call from '../images/call.gif';
import Countdown from 'react-countdown';
import timer from '../images/timer.svg';
import Swal from 'sweetalert2'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const EmergencyButton = (args) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const Completionist = () => {
        setModal(false);
        Swal.fire({
            title: "Se ha enviado un mensaje de alerta a tus contactos de emergencia",
            icon: 'success',
            width: 600,
            imageUrl: call, 
            showConfirmButton: false,
            timer: 2000,
            // backdrop: `
            //     rgba(0,0,123,0.4)
            //     url("call")
            //     center top
            //     no-repeat
            //     `
        
      

        });
    }

    // Renderer callback with condition
    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{minutes}:{seconds}</span>;
        }
    };
    return (
        <div>
            <div className='buttonPrincipal-emergency'>
                <Button color="white" onClick={toggle}>
                    <img className="" src={emergency} alt='Botón de emergencia'></img>
                </Button>
                <p>S.O.S</p>
            </div>
            <Modal className="emergency-modal" isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>BOTÓN DE EMERGENCIA</ModalHeader>
                <ModalBody>
                    <div className='emergency-types'>
                        <div>
                            <img className="types" src={accident} alt='Accidente'></img>
                            <p>Accidente</p>
                        </div>
                        <div>
                            <img className="types" src={stole} alt='Asalto'></img>
                            <p>Asalto</p>
                        </div>
                        <div>
                            <img className="types" src={technical} alt='Técnico'></img>
                            <p>Técnico</p>
                        </div>
                    </div>
                    {/* <p>Descripción: </p> */}
                    <FormGroup>
                        <Label for="exampleText">
                            Descripción
                        </Label>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                        />
                    </FormGroup>
                    <p>Si no hay descripción sobre la emergencia, se considerará de alto riesgo</p>
                    <div>
                        <img className="" src={timer} alt='temporizador'></img>
                        <Countdown date={Date.now() + 2000} renderer={renderer} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggle}>
                        Enviar
                    </Button>{' '}
                    {/* <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button> */}
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EmergencyButton; 
