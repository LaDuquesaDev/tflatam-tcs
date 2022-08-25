// import React from 'react';
import passenger from '../images/passengerdani.png'
import { Icon } from '@iconify/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from "react";

const PassengerComments = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const commentsInfo = JSON.parse(localStorage.getItem("commentsSelected"));
        const commentsWithValue = commentsInfo.filter(comment => {
            if(comment !== null){
                return comment
            }
        })
        setComments(commentsWithValue)
    }, [])



    return (
        <>
            <Header />
            <section className='passengerComments-container'>
                <section className='passengerTitle-container'>
                    <img className='photo-passenger' src={passenger} alt='passenger' style={{ zIndex: "10" }}/>
                    <div className='passenger-container'>
                        <h3 className='passenger-name'>Daniela Cañas</h3>
                        <p className='passenger-type'>Pasajera</p>
                        <section className='passenger-stars'>
                            <Icon icon='bxs:star' color='#fdb50e' />
                            <Icon icon='bxs:star' color='#fdb50e' />
                            <Icon icon='bxs:star' color='#fdb50e' />
                            <Icon icon='bxs:star' color='#fdb50e' />
                            <Icon icon='bxs:star-half' color='#fdb50e' />
                        </section>
                    </div>
                </section>
                <section className='passengerText-container'>
                    <h4 className='title-recognition'>Aquí están tus reconocimientos</h4>
                    <ul>
                        {comments && comments.map((item, index) =>
                            <div className="infoProducts" key={index}>

                                <dd>{item.comments.map((element) => 
                                    
                                    <dd>
                                        <Icon icon='healthicons:happy' color='#52b130' fontSize='70px'/>
                                        {element}
                                    </dd>
                                     )
                                }</dd>
                            </div>
                        )}
                    </ul>
                </section>
            </section>
            <Footer />
        </>
    )
}

export default PassengerComments

