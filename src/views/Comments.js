import star from '../images/star.svg';
import AccordionC from '../components/AccordionC';
import EmergencyButton from '../components/EmergencyButton';


export const Comments = () => {
    return (
        <div className='comments-principal'>
            <div>
                <h2>Has llegado a tu destino</h2>
                <p>Como evaluarías tu viaje con Dariana?</p>
                <div>
                    <img className="" src={star} alt='Estrella'></img>
                    <img className="" src={star} alt='Estrella'></img>
                    <img className="" src={star} alt='Estrella'></img>
                    <img className="" src={star} alt='Estrella'></img>
                    <img className="" src={star} alt='Estrella'></img>
                </div>
                <p>Déjale un mensaje a Dariana</p>
                <input type="text" name="name" className="" />
                <p>Evalúa a tus acompañantes</p>
                <AccordionC/>
                <button className='comments-button'>Enviar</button>
                <EmergencyButton/>
            </div>
        </div>
    )
}
