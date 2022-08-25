import React from 'react'
import { useNavigate } from "react-router-dom";
// import Map from "../components/Map";
import './RouteMap.css'
import Header from '../components/Header';
import MapConRuta from '../components/MapConRuta';
import { useState } from 'react';

export default function RouteMap() {
    const [originIndexSelected, setOriginIndexSelected] = useState(0);
    const [destIndexSelected, setDestIndexSelected] = useState(0);

    const coordinatesOrigin = [
        [],
        [4.720151411709265, -74.06582892143456],
        [4.7195954, -74.076665],
        [4.735519, -74.063885]
    ]

    const coordinatesDestino = [
        [],
        [4.6819997074631745, -74.04196798880038]
    ]

    var latOrg;
    var longOrg;

    var latDest;
    var longDest;

    if (originIndexSelected !== 0 || destIndexSelected !== 0) {
        latOrg = coordinatesOrigin[originIndexSelected][0];
        longOrg = coordinatesOrigin[originIndexSelected][1];

        latDest = coordinatesDestino[destIndexSelected][0];
        longDest = coordinatesDestino[destIndexSelected][1];
    }



    // const [directions, setDirections] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/AvailableCars")
    }


    const onChangeOrg = (event) => {
        const index = event.target.value;
        setOriginIndexSelected(parseInt(index));

    }

    const onChangeDest = (event) => {
        const index = event.target.value;
        setDestIndexSelected(parseInt(index));
    }

    return (
        <div className='routeMap'>
            <div className='routeHeader'>
                <Header />
            </div>
            <section className='routeHi'>
                <img className="imgprofile" id='imgProfile' src={require('../images/imageperfil.png')} alt='Logo'></img>
                <section className='greeting'>
                    <p>Hola Dariana!</p>
                    <h2>A dónde vas?</h2>
                </section>
            </section>
            <div className='containerDirection'>
                <div className='containerSince'>
                    <label for="form-select">Desde:</label>

                    <select class="form-select" aria-label="Default select example" onChange={onChangeOrg}>
                        <option selected></option>
                        <option value="1">Casa 1</option>
                        <option value="2">Casa 2</option>
                        <option value="3">Casa 3</option>

                    </select>
                </div>
                <div className='containerUntil'>
                    <label for="form-select">Hasta:</label>

                    <select class="form-select" aria-label="Default select example" onChange={onChangeDest}>
                        <option selected></option>
                        <option value="1">Trabajo</option>
                        <option value="2">TCS2</option>

                    </select>
                </div>
                <button className="sign-in" onClick={handleClick}>Pide ahora</button>
            </div>
            <div>
            </div>
            {(latOrg == null || latDest != null) ? <div className="mapa-route"><MapConRuta latitudeOrigin={latOrg} longitudeOrigin={longOrg} latitudeDest={latDest} longituideDest={longDest} ></MapConRuta></div> : <div><MapConRuta></MapConRuta></div>}
            {/* <Map></Map> */}
        </div >
    )
}
