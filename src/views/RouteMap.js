import React from 'react'
import { useNavigate } from "react-router-dom";
import navRouteMap from '../images/navRouteMap.svg';
import Map from "../components/Map";
import './RouteMap.css'

let options = {
    casa: { lat: 4.733580998215758, lng: -74.03514445129802 },
    trabajo: { lat: 4.681512920071723, lng: -74.04206131659186 }
    
}

export default function RouteMap() {
   
    // const [directions, setDirections] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/AvailableCars")
    }

    return (
        <div className='routeMap'>
            <div className='routeHeader'>
                <header>
                    <img className="" id='view-logo' src={navRouteMap} alt='nav'></img>
                    <div className="route-icons">
                        <img className="routeLogo" id='Route-logo' src={require('../images/logopque.png')} alt='Logo'></img>
                        <img className="routeExit" id='Route-exit' src={require('../images/humbleicons_logout.png')} alt='exit'></img>
                    </div>
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
                        <option onChange={options}>-</option>
                        <option selected value={options.casa}>Casa</option>
                        <option value={options.trabajo}>Trabajo</option>
                    </select>
                </div>
                <div className='containerUntil'>
                    <label for="form-select">hasta:</label>
                    <select class="form-select" aria-label="Default select example">
                        <option onChange={options}>-</option>
                        <option selected value={options.trabajo}>Trabajo</option>
                        <option value={options.casa}>Casa</option>
                    </select>
                </div>
                <button className="sign-in" onClick={handleClick}>Pide ahora</button>  
            </div>
            <div>
                <Map options={options}/>
            </div>
        </div>

    )
}
