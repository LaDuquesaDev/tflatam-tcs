import React from 'react'
import './Start.css'
import EmergencyButton from "../components/EmergencyButton"
import Map from "../components/Map";
import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';


export default function Start() {

  const navigate = useNavigate();
  const buttonContact = () => {
    navigate("/Comments")
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
    <div className='start-container'>
      <div >
        <div className='start-map'>
          <Map />
        </div>
        <div className='btnEmergency' >
          <EmergencyButton />
        </div>
      </div>
      <div className='StartFooter'>
        <img className="startBar" id='startBar' src={require('../images/Rectangle 134.png')} alt='bar'></img>
        <p className='star-timer'>
          Tiempo estimado de llegada: <Countdown date={Date.now() + 50000} renderer={renderer} />
        </p>
        <div>
          <img className="starCar" src={require('../images/Group_41.png')} alt='car'></img>
        </div>
      </div>
    </div>
  )
}