import AccordionC from '../components/AccordionC';
// import EmergencyButton from '../components/EmergencyButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState } from 'react';


export const Comments = () => {
    const [commentsSelected, setCommentsSelected] = useState([])
    const [star1, setStar1] = useState('grey-star.png');
    const [star2, setStar2] = useState('grey-star.png');
    const [star3, setStar3] = useState('grey-star.png');
    const [star4, setStar4] = useState('grey-star.png');
    const [star5, setStar5] = useState('grey-star.png');


    function oneStar() {
        setStar1('yellow-star.png');
        setStar2('grey-star.png');
        setStar3('grey-star.png');
        setStar4('grey-star.png');
        setStar5('grey-star.png');
    }
    function twoStar() {
        setStar1('yellow-star.png');
        setStar2('yellow-star.png');
        setStar3('grey-star.png');
        setStar4('grey-star.png');
        setStar5('grey-star.png');
    }
    function threeStar() {
        setStar1('yellow-star.png');
        setStar2('yellow-star.png');
        setStar3('yellow-star.png');
        setStar4('grey-star.png');
        setStar5('grey-star.png');
    }
    function fourStar() {
        setStar1('yellow-star.png');
        setStar2('yellow-star.png');
        setStar3('yellow-star.png');
        setStar4('yellow-star.png');
        setStar5('grey-star.png');
    }
    function fiveStar() {
        setStar1('yellow-star.png');
        setStar2('yellow-star.png');
        setStar3('yellow-star.png');
        setStar4('yellow-star.png');
        setStar5('yellow-star.png');
    }

    return (
        <div className='comments-principal'>
            <Header />
            <div className='comments-secondary'>
                <h2 className='comments-title'>Has llegado a tu destino</h2>
                <section className='comments-container'>
                    <p className='commentsOne'>¿Cómo evaluarías tu viaje con Dariana?</p>
                    <div className='commentStar'>
                        <img className="comment-stars" src={require(`../images/${star1}`)} alt='Estrella' onClick={oneStar}></img>
                        <img className="comment-stars" src={require(`../images/${star2}`)} alt='Estrella' onClick={twoStar}></img>
                        <img className="comment-stars" src={require(`../images/${star3}`)} alt='Estrella' onClick={threeStar}></img>
                        <img className="comment-stars" src={require(`../images/${star4}`)} alt='Estrella' onClick={fourStar}></img>
                        <img className="comment-stars" src={require(`../images/${star5}`)} alt='Estrella' onClick={fiveStar}></img>
                    </div>
                    <br/>
                    <p className='commentsTwo'>Déjale un mensaje a Dariana</p>
                    <input type="text" name="name" className='comments-description'/>
                    <br/>
                    <br/>
                    <p className='commentsThree'>Evalúa a tus acompañantes</p>
                    <AccordionC commentsSelected={commentsSelected} setCommentsSelected={setCommentsSelected} />
                    {/* <EmergencyButton /> */}
                </section>
            </div>
            <Footer />
        </div>
    )
}
