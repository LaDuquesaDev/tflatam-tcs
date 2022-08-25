import React from 'react'
import Car from '../images/car.svg'
import Daniela from '../images/passengerdani.png'
import Dariana from '../images/imageperfil.png'
import Angie from '../images/Angie.png'
import CarCard from '../components/CarCard'
import "./AvailableCars.css"
import Header from '../components/Header';
import Footer from '../components/Footer';


const AvailableCars = () => {
    return (
        <div className="full-list">
            <Header />
            <div className="available">
                <h1>Autos disponibles</h1>
            </div>
            <img src={Car} className="Car-icon" alt="CarIcon" />
            <div className="car-list">
                <CarCard name="Daniela" image={Daniela} freePlaces={3}></CarCard>
                <CarCard name="Dariana" image={Dariana} freePlaces={3}></CarCard>
                <CarCard name="Angie" image={Angie} freePlaces={1}></CarCard>
            </div>

            <Footer />
        </div>

    )
}

export default AvailableCars;