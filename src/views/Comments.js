import star from '../images/star.svg';
import AccordionC from '../components/AccordionC';
import EmergencyButton from '../components/EmergencyButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState } from 'react';


export const Comments = () => {
    const [commentsSelected, setCommentsSelected] = useState([])
    console.log({commentsSelected})
    return (
        <div className='comments-principal'>
            <Header/>
            <div>
                <h2>Has llegado a tu destino</h2>
                <p>Como evaluarías tu viaje con Dariana?</p>
                <div>
                    <img className="" src={star} alt='Estrella'></img>
                    <img className="" src={star} alt='Estrella'></img>
                    <img className="" src={star} alt='Estrella'></img>
                    <img className="" src={star} alt='Estrella'></img>
                    <img className="" src={star} alt='Estrella'></img>
                </div>
                <p>Déjale un mensaje a Dariana</p>
                <input type="text" name="name" className="" />
                <EmergencyButton/>
                <p>Evalúa a tus acompañantes</p>
                <AccordionC setCommentsSelected={setCommentsSelected} commentsSelected={commentsSelected}/>
                {/* <EmergencyButton/> */}
            </div>
            <Footer/>
        </div>
    )
}
