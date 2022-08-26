// import React from 'react';
import driver from '../images/driverdary.png'
import { Icon } from '@iconify/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';


const DriverComments = () => {
    const navigate = useNavigate();
    const returnButton = () => {
        navigate(-1)
    }

    return (
        <>
            <Header />
            <section className='driverComments-container'>
                <section className='driverTitle-container'>
                    <img className='photo-driver' src={driver} alt='driver' style={{ zIndex: "10", marginTop:'3.5em'}} />
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
                <br/>
                <button className="comments-return" type="submit" onClick={returnButton}>
                    <img src={require('../images/returnTravel.png')} />
                </button>
                <section className='driverText-container'>
                    <h4 className='title-recognition' style={{fontSize:'large'}}>Aquí están tus reconocimientos</h4>
                    <section className='comment'>
                        <Icon icon='healthicons:tongue' color='#ec4646' fontSize='60px' />
                        <p>Rechazo mi viaje</p>
                    </section>
                    <section className='comment'>
                        <Icon icon='healthicons:neutral' color='#e28c3c' fontSize='60px' />
                        <p>Tomó otra ruta</p>
                    </section>
                    <section className='comment'>
                        <Icon icon='healthicons:ok' color='#d5cf56' fontSize='60px' />
                        <p>Buena Conversación</p>
                    </section>
                    <section className='comment'>
                        <Icon icon='healthicons:happy' color='#52b130' fontSize='60px' />
                        <p>Excelente Servicio</p>
                    </section>
                </section>
            </section>
            <Footer />
        </>
    )
}

export default DriverComments

