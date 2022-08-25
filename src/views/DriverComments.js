// import React from 'react';
import driver from '../images/driverdary.png'
import { Icon } from '@iconify/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DriverComments = () => {
    return (
        <>
            <Header/>
            <section className='driverComments-container'>
                <section className='driverTitle-container'>
                    <img className='photo-driver' src={driver} alt='driver' style={{ zIndex: "10" }}/>
                    <h3 className='driver-name'>Dariana Quintero</h3>
                    <p className='driver-type'>Conductora</p>
                    <section className='driver-stars'>
                        <Icon icon='bxs:star' color='#fdb50e' />
                        <Icon icon='bxs:star' color='#fdb50e' />
                        <Icon icon='bxs:star' color='#fdb50e' />
                        <Icon icon='bx:star' color='#fdb50e' />
                        <Icon icon='bx:star' color='#fdb50e' />
                    </section>
                </section>
                <section className='driverText-container'>
                    <h4 className='title-recognition'>Aquí están tus reconocimientos</h4>
                    <section className='comment'>
                        <Icon icon='healthicons:tongue' color='#ec4646' fontSize='70px' />
                        <p>Rechazo mi viaje</p>
                    </section>
                    <section className='comment'>
                        <Icon icon='healthicons:neutral' color='#e28c3c' fontSize='70px' />
                        <p>Tomó otra ruta</p>
                    </section>
                    <section className='comment'>
                        <Icon icon='healthicons:ok' color='#d5cf56' fontSize='70px' />
                        <p>Buena Conversación</p>
                    </section>
                    <section className='comment'>
                        <Icon icon='healthicons:happy' color='#52b130' fontSize='70px' />
                        <p>Excelente Servicio</p>
                    </section>
                </section>
            </section>
            <Footer/>
        </>
    )
}

export default DriverComments

