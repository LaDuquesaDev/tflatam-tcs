import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import './Profile.css';
import Header from '../components/Header';
// import Footer from '../components/Footer';


export default function Profile() {

  const [currentActiveTab, setCurrentActiveTab] = useState('1');
  // const [tabColor, setTabColor] = useState('#D9D9D9');
  // const [fontColor, setFontColor] = useState('#635E5E');

  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  }

  return (
    <div className='profile-group'>
      <Header />
      <img
        className='profile-icon'
        alt='gradient header'
        src={require('../images/profile-view.png')}
      />
      <h1 className='profile-h1'>Perfil</h1>
      <div className='profile-tabs'>
        <Nav tabs>
          <NavItem>
            <NavLink
              style={{ backgroundColor: '#DC3091' }}
              className={classnames('profile-tab', {
                active:
                  currentActiveTab === '1'
              })}
              onClick={() => { toggle('1'); }}
            >
              Personal
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames('profile-tab', {
                active:
                  currentActiveTab === '2'
              })}
              onClick={() => { toggle('2'); }}
            >
              Contacto
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames('profile-tab', {
                active:
                  currentActiveTab === '3'
              })}
              onClick={() => { toggle('3'); }}
            >
              Viajes
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={currentActiveTab}>
          <TabPane tabId="1">
            <div className='profile-personal'>

              <label for="first-name" className='profile-label'>Nombre: </label>
              <input className='profile-input' type="text" id="first-name" name="first-name" value='Amaya' />

              <label for="last-name" className='profile-label'>Apellido: </label>
              <input className='profile-input' type="text" id="last-name" name="last-name" value='De Esesarte' />

              <label for="cell" className='profile-label'>Celular: </label>
              <input className='profile-input' type="text" id="cell" name="cell" value='5567386602' />

              <label for="mail" className='profile-label'>Correo: </label>
              <input className='profile-input' type="text" id="mail" name="mail" value='amaya@tcs.com' />

              <div className='select-group'>
                <label for="gender" className='profile-label'>Genero: </label>
                <select name='gender' id='gender' >
                  <option value='woman'>Mujer</option>
                  <option value='men'>Hombre</option>
                  <option value='non-binary'>No Binario</option>
                </select>
              </div>

              <p className='profile-label'>Destinos:</p>
              <div className='destination'>
                <div>
                  <label for="destination-home" className='profile-label'>Casa: </label>
                  <input className='profile-input' type="text" id="destination-home" name="home" value='Calle 15 - Zona Sur' />

                </div>
                <div>
                  <label for="destination-work" className='profile-label'>Trabajo: </label>
                  <select name='destination-work' id='destination-work' >
                    <option value='tcs1'>TCS-1</option>
                    <option value='tcs2'>TCS-2</option>
                  </select>
                </div>
                <button>+</button>
              </div>

              <div className='select-group'>
                <label for="role" className='profile-label'>Rol: </label>
                <select name='role' id='role' >
                  <option value='passenger'>Pasajero</option>
                  <option value='driver'>Conductor</option>
                </select>
              </div>

            </div>
          </TabPane>

          <TabPane tabId="2">
            <div className='profile-contacts'>
              <h3 className='profile-h3'>EXTERNO</h3>

              <label for="first-name" className='profile-label'>Nombre: </label>
              <input className='profile-input' type="text" id="first-name" name="first-name" value='Sofía' />

              <label for="last-name" className='profile-label'>Apellido: </label>
              <input className='profile-input' type="text" id="last-name" name="last-name" value='Díaz' />

              <label for="cell" className='profile-label'>Celular: </label>
              <input className='profile-input' type="text" id="cell" name="cell" value='5543998713' />

              <label for="mail" className='profile-label'>Correo: </label>
              <input className='profile-input' type="text" id="mail" name="mail" value='sofia@correo.com' />

              <div className='select-group'>
                <label for="relation" className='profile-label'>Parentezco: </label>
                <select name='relation' id='relation' >
                  <option value='family'>Familia</option>
                  <option value='friend'>Amigo</option>
                  <option value='other'>Otro</option>
                </select>
              </div>
              <br />

              <h3 className='profile-h3'>INTERNO</h3>

              <div className='select-group'>
                <label for="hr-leader" className='profile-label'>Líder RH: </label>
                <select name='hr-leader' id='hr-leader' >
                  <option value='hr1'>RH-1</option>
                  <option value='hr2'>RH-2</option>
                </select>
              </div>

            </div>
          </TabPane>

          <TabPane tabId="3">
            <div className='profile-trips'>
              <div className='profile-tip-box'>
                <p>Rocío Gutiérrez - 23/08/22</p>
                <button>+</button>
              </div>
              <div className='profile-tip-box'>
                <p>Diego López - 22/08/22</p>
                <button>+</button>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
