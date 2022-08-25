import React from 'react'
import Map from "../components/Map";
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import  Countdown  from  'react-countdown' ;
import '../views/Home.css'

export default function Home() {
  const navigate = useNavigate();
  const buttonContact = () => {
    navigate("/Start")
  }

  const returnButton = () => {
    navigate("/RouterMap")
  }
   // Renderer callback with condition
   const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        buttonContact()
    } else {
        // Render a countdown
        return <span>{minutes}:{seconds}</span>;
    }
};

  return (
    <div className='home-container'>
      <Map />
        {/* <img
          className="home-return"
          id='return'
          src={require('../images/returnTravel.png')}
          alt='return'>
        </img> */}
        <button className="home-return" type="submit" onClick={returnButton}>
          <img src={require('../images/returnTravel.png')} />
        </button>
        <img 
          className='home-driver' 
          alt='driver'
          src={require('../images/driverdary.png')} 
        />
        <h3 className='home-name'>Dariana Quintero</h3>
        <section className='home-stars'>
          <Icon icon='bxs:star' color='#fdb50e' />
          <Icon icon='bxs:star' color='#fdb50e' />
          <Icon icon='bxs:star' color='#fdb50e' />
          <Icon icon='bx:star' color='#fdb50e' />
          <Icon icon='bx:star' color='#fdb50e' />
        </section>
        <img
          className='home-gradient-bar'
          alt='gradient header'
          src={require('../images/Rectangle 134.png')}
        />
        <section className='timer' >
          <p>
            Tiempo estimado de espera: <Countdown date={Date.now() + 15000} renderer={renderer} />
          </p>
        </section>
        <img
          className='home-car'
          alt='driverCar'
          src={require('../images/Group_41.png')} />
    </div>
  )
}