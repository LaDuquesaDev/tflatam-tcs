import React, { useState } from 'react';
import emergency from '../images/emergency.svg';
import accident from '../images/accident.svg';
import stole from '../images/stole.svg';
import technical from '../images/technical.svg';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const EmergencyButton = (args) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
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
