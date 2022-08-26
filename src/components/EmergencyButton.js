import React, { useState } from 'react';
import emergency from '../images/emergency.svg';
import accident from '../images/accident.svg';
import stole from '../images/stole.svg';
import technical from '../images/technical.svg';
import call from '../images/call.gif';
import mail from '../images/mail.gif';
import Countdown from 'react-countdown';
import timer from '../images/timer.svg';
import Swal from 'sweetalert2'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const EmergencyButton = (args) => {
    const [runTimmer, setRunTimmer] = useState(true)

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
       
    }

    const handleClick = () => {
        Swal.fire({
            title: "Se ha enviado un mensaje de alerta a tus contactos de emergencia",
            width: 600,
            imageUrl: mail,
            showConfirmButton: true, 
         })
    }

    const Completionist = () => {
        setModal(false);
        Swal.fire({
            title: "Se ha enviado un mensaje de alerta y esta realizando una llamada a tus contactos de emergencia",
            width: 600,
            imageUrl: call,
            showConfirmButton: false,
            timer: 5000,
        })
    }

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
        <div className='emergencyButton'>
            <div className='buttonPrincipal-emergency'>
                <Button className='btnSos' color="white" onClick={toggle}>
                    <img className="" src={emergency} alt='Botón de emergencia'></img>
                    <p>S.O.S</p>
                </Button>
            </div>
            <Modal className="emergency-modal" isOpen={modal} toggle={toggle} {...args} centered>
                <ModalHeader toggle={toggle}>BOTÓN DE EMERGENCIA</ModalHeader>
                <ModalBody>
                    <div className='emergency-types'>
                        <div className='emergency-option'>
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
                            onChange={() => setRunTimmer(false)}
                        />
                    </FormGroup>
                    <p className='EmergencyDescription'>Si no hay descripción sobre la emergencia,</p>
                    <p className='EmergencyDescription'>se considerará de alto riesgo</p>
                    <div className='countdownT'>
                        <img className="countdownT-img" src={timer} alt='temporizador'></img>
                        {runTimmer && <Countdown className='countdown-font' date={Date.now() + 10000} renderer={renderer} />}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => {toggle(); handleClick(); setRunTimmer(true)}}>
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
