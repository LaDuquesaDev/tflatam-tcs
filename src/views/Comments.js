import star from '../images/star.svg';
import AccordionC from '../components/AccordionC';
// import EmergencyButton from '../components/EmergencyButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState } from 'react';


export const Comments = () => {
    const [commentsSelected, setCommentsSelected] = useState([])
    console.log({commentsSelected})
    return (
        <div className='comments-principal'>
            <Header />
            <div className='comments-secondary'>
                <h2 className='comments-title'>Has llegado a tu destino</h2>
                <section className='comments-container'>
                    <p className='commentsOne'>Como evaluarías tu viaje con Dariana?</p>
                    <div className='commentStar'>
                        <img className="" src={star} alt='Estrella'></img>
                        <img className="" src={star} alt='Estrella'></img>
                        <img className="" src={star} alt='Estrella'></img>
                        <img className="" src={star} alt='Estrella'></img>
                        <img className="" src={star} alt='Estrella'></img>
                    </div>
                    <p className='commentsTwo'>Déjale un mensaje a Dariana</p>
                    <input type="text" name="name" className='comments-description' />
                    {/* <EmergencyButton /> */}
                    <p className='commentsThree'>Evalúa a tus acompañantes</p>
                    <AccordionC commentsSelected={commentsSelected} setCommentsSelected={setCommentsSelected} />
                    {/* <EmergencyButton /> */}
                </section>
            </div>
            <Footer />
    </div>
  )
}
