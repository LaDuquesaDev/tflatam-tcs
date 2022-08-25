import React from 'react'
import './Start.css'
import EmergencyButton from "../components/EmergencyButton"
import Map from "../components/Map";
import  Countdown  from  'react-countdown' ;
import { useNavigate } from 'react-router-dom';
import car from '../images/Car.svg';
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
    <div>
        <div className='startMap'>
          <Map />
          <div className='btnEmergency' >
             <EmergencyButton/>
          </div>
          </div>
        <footer className='StartFooter'>
          <img className="startBar" id='startBar' src={require('../images/Rectangle_1.png')} alt='bar'></img>
          <p>
            Tiempo estimado de llegada: <Countdown date={Date.now() + 15000} renderer={renderer} />
          </p>

          <div>
          <img className="starCar" src={require('../images/Group_41.png')} alt='car'></img>
      
          </div>
        </footer>


    </div>
  )
}