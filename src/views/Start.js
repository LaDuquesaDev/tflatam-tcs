import React from 'react'
import './Start.css'
import car from '../images/Car.svg';
export default function Start() {
  return (
    <div>
        <footer className='StartFooter'>
          <img className="startReturn" id='startReturn' src={require('../images/akar-icons_arrow-back.png')} alt='return'></img>
          <img className="startBar" id='startBar' src={require('../images/Rectangle_1.png')} alt='bar'></img>
          <p>Tiempo estimado de llegada</p>
          <div>
            <img className="car" src={car} alt='Carro'></img>
          </div>
        </footer>


    </div>
  )
}
