import dislike from '../images/dislike.svg';
import so from '../images/so-so.svg';
import good from '../images/good.svg';
import perfect from '../images/perfect.svg';
import CheckboxC from '../components/CheckboxC';
import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const AccordionC = () => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };


    return (
        <div className='comments-accordion'>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">Angie Herrera</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <div>
                            {/*<button>*/}<img className="comments-faces" src={dislike} alt='No me gusto'></img>{/*</button>*/}
                            {/*<button>*/}<img className="comments-faces" src={so} alt='Regular'></img>{/*</button>*/}
                            {/*<button>*/}<img className="comments-faces" src={good} alt='Bueno'></img>{/*</button>*/}
                            {/*<button>*/}<img className="comments-faces" src={perfect} alt='Perfecto'></img>{/*</button>*/}
                        </div>
                        <CheckboxC/>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">Daniela Cañas</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <div>
                            {/*<button>*/}<img className="comments-faces" src={dislike} alt='No me gusto'></img>{/*</button>*/}
                            {/*<button>*/}<img className="comments-faces" src={so} alt='Regular'></img>{/*</button>*/}
                            {/*<button>*/}<img className="comments-faces" src={good} alt='Bueno'></img>{/*</button>*/}
                            {/*<button>*/}<img className="comments-faces" src={perfect} alt='Perfecto'></img>{/*</button>*/}
                        </div>
                        <CheckboxC/>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">Juan Vargas</AccordionHeader>
                    <AccordionBody accordionId="3">
                        <div>
                            {/*<button>*/}<img className="comments-faces" src={dislike} alt='No me gusto'></img>{/*</button>*/}
                            {/*<button>*/}<img className="comments-faces" src={so} alt='Regular'></img>{/*</button>*/}
                            {/*<button>*/}<img className="comments-faces" src={good} alt='Bueno'></img>{/*</button>*/}
                            {/*<button>*/}<img className="comments-faces" src={perfect} alt='Perfecto'></img>{/*</button>*/}
                        </div>
                        <CheckboxC/>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AccordionC; 
