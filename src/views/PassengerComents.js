// import React from 'react';
import passenger from '../images/passengerdani.png'
import { Icon } from '@iconify/react';

const PassengerComments = () => {
    return (
        <>
            <h2>header</h2>
            <section className='passengerComments-container'>
                <section className='passengerTitle-container'>
                    <img className='photo-passenger' src={passenger} alt='passenger' />
                    <h3 className='passenger-name'>Daniela Cañas</h3>
                    <p className='passenger-type'>Pasajera</p>
                    <section className='passenger-stars'>
                        <Icon icon='bxs:star' color='#fdb50e' />
                        <Icon icon='bxs:star' color='#fdb50e' />
                        <Icon icon='bxs:star' color='#fdb50e' />
                        <Icon icon='bxs:star' color='#fdb50e' />
                        <Icon icon='bxs:star-half' color='#fdb50e' />
                    </section>
                </section>
                <section className='passengerText-container'>
                    <h4 className='title-recognition'>Aquí están tus reconocimientos</h4>
                    <section className='comment'>
                        <Icon icon='healthicons:tongue' color='#ec4646' fontSize='70px' />
                        <p>No me agrada</p>
                    </section>
                    <section className='comment'>
                        <Icon icon='healthicons:neutral' color='#e28c3c' fontSize='70px' />
                        <p>Meh</p>
                    </section>
                    <section className='comment'>
                        <Icon icon='healthicons:ok' color='#d5cf56' fontSize='70px' />
                        <p>Silenciosa</p>
                    </section>
                    <section className='comment'>
                        <Icon icon='healthicons:happy' color='#52b130' fontSize='70px' />
                        <p>Amable y Conversadora</p>
                    </section>
                </section>

            </section>
        </>
    )
}

export default PassengerComments

