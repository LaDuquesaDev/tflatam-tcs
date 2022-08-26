import dislike from '../images/dislike.svg';
import so from '../images/so-so.svg';
import good from '../images/good.svg';
import perfect from '../images/perfect.svg';
import CheckboxC from '../components/CheckboxC';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const AccordionC = ({ setCommentsSelected, commentsSelected }) => {
    // const [commentsSelected, setCommentsSelected] = useState([])

    // console.log("manejador de comentarios", commentsSelected)
    const oneFaceClick = (name, e, index) => {
        console.log({ name });
        console.log("evento", e.currentTarget.dataset)
        const statusSelected = e.currentTarget.dataset.status;
        let newStatus = [...commentsSelected]
        newStatus[index] = {
            name,
            status: statusSelected
        }
        setCommentsSelected(newStatus)
    }

    const oneCommentClick = (index, e) => {
        console.log({ e });
        const comment = e.target.value

        let newStatus = [...commentsSelected]
        if (newStatus[index].comments) {
            if (newStatus[index].comments.includes(comment)) {
                newStatus[index].comments = newStatus[index].comments.filter(e => e !== comment)
            } else {
                newStatus[index].comments.push(comment)
            }
        } else {
            newStatus[index].comments = []
            newStatus[index].comments.push(comment)
        }
        setCommentsSelected(newStatus)
    }

    const onSubmit = () => {
        localStorage.setItem("commentsSelected", JSON.stringify(commentsSelected))
    }

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Routermap")
    }


    // localStorage.removeItem("commentsSelected")

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
            <Accordion open={open} toggle={toggle} style={{width: '90%'}}>
                <AccordionItem>
                    <AccordionHeader targetId="1">Angie Herrera</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <div className='accordionFace-principal'>
                            <button className="accordion-face" data-status="dislike" onClick={(e) => oneFaceClick("Angie Herrera", e, 0)}><img className="comments-faces" src={dislike} alt='No me gusto'></img></button>
                            <button className="accordion-face" data-status="so" onClick={(e) => oneFaceClick("Angie Herrera", e, 0)}><img className="comments-faces" src={so} alt='Regular'></img></button>
                            <button className="accordion-face" data-status="good" onClick={(e) => oneFaceClick("Angie Herrera", e, 0)}><img className="comments-faces" src={good} alt='Bueno'></img></button>
                            <button className="accordion-face" data-status="perfect" onClick={(e) => oneFaceClick("Angie Herrera", e, 0)}><img className="comments-faces" src={perfect} alt='Perfecto'></img></button>
                        </div>
                        <CheckboxC oneCommentClick={oneCommentClick} index={0} />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">Daniela Cañas</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <div className='accordionFace-principal'>
                            <button className="accordion-face" data-status="dislike" onClick={(e) => oneFaceClick("Daniela Cañas", e, 1)}><img className="comments-faces" src={dislike} alt='No me gusto'></img></button>
                            <button className="accordion-face" data-status="so" onClick={(e) => oneFaceClick("Daniela Cañas", e, 1)}><img className="comments-faces" src={so} alt='Regular'></img></button>
                            <button className="accordion-face" data-status="good" onClick={(e) => oneFaceClick("Daniela Cañas", e, 1)}><img className="comments-faces" src={good} alt='Bueno'></img></button>
                            <button className="accordion-face" data-status="perfect" onClick={(e) => oneFaceClick("Daniela Cañas", e, 1)}><img className="comments-faces" src={perfect} alt='Perfecto'></img></button>
                        </div>
                        <CheckboxC oneCommentClick={oneCommentClick} index={1} />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">Juan Vargas</AccordionHeader>
                    <AccordionBody accordionId="3">
                        <div className='accordionFace-principal'>
                            <button className="accordion-face" data-status="dislike" onClick={(e) => oneFaceClick("Juan Vargas", e, 2)}><img className="comments-faces" src={dislike} alt='No me gusto'></img></button>
                            <button className="accordion-face" data-status="so" onClick={(e) => oneFaceClick("Juan Vargas", e, 2)}><img className="comments-faces" src={so} alt='Regular'></img></button>
                            <button className="accordion-face" data-status="good" onClick={(e) => oneFaceClick("Juan Vargas", e, 2)}><img className="comments-faces" src={good} alt='Bueno'></img></button>
                            <button className="accordion-face" data-status="perfect" onClick={(e) => oneFaceClick("Juan Vargas", e, 2)}><img className="comments-faces" src={perfect} alt='Perfecto'></img></button>
                        </div>
                        <CheckboxC oneCommentClick={oneCommentClick} index={2} />
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
            <br/>
            <button className='comments-button' onClick={() => {onSubmit(); handleClick()}}>Enviar</button>
            <br/>
        </div>
    )
}

export default AccordionC; 
