import React from 'react'
import './RouteMap.css'

export default function RouteMap() {
  return (
    <div className='routeMap'>
        <div className='routeHeader'>
        <header>
            <img className="routeLogo" id='Route-logo' src={require('../images/logopque.png')} alt='Logo'></img>
            <img className="route-exit" id='Route-exit' src={require('../images/humbleicons_logout.png')} alt='exit'></img>
        </header>
         </div>
         <img className="imgprofile" id='imgProfile' src={require('../images/imageperfil.png')} alt='Logo'></img>
        <section className='routeHi'>
            
            <p>Hola Dariana!</p>
            <h2>A dónde vas?</h2>
         </section> 
         <div className='containerDirection'>
            <div className='containerSince'>
        <label for="form-select">Desde:</label>
        <select class="form-select" aria-label="Default select example">
            <option selected></option>
            <option value="1"> Casa</option>
            <option value="2">Two</option>
        </select>
        </div>
        <div className='containerUntil'>
        <label for="form-select">hasta:</label>
        <select class="form-select" aria-label="Default select example">
            <option selected></option>
            <option value="1">Trabajo</option>
            <option value="2">Two</option>
        </select>
        </div>
        </div>


    </div>
    
  )
}
