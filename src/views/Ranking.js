import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import './Ranking.css';

const drivers =
  [
    {
      id: 1,
      user: 'Rocío Gutiérrez',
      score: 4.7
    },
    {
      id: 2,
      user: 'Raúl Díaz',
      score: 4.6
    },
    {
      id: 3,
      user: 'Mariana Hurtado',
      score: 4.6
    },
    {
      id: 4,
      user: 'Diego López',
      score: 4.5
    }
  ]


const passengers =
  [
    {
      id: 1,
      user: 'Jimena Pérez',
      score: 4.7
    },
    {
      id: 2,
      user: 'José Fernández',
      score: 4.6
    },
    {
      id: 3,
      user: 'Carla Beltrán',
      score: 4.5
    },
    {
      id: 4,
      user: 'María Hernández',
      score: 4.4
    }
  ]


function Ranking() {
  const navigate = useNavigate();

  return (
    <div className='ranking-group'>
      <Header />
      <img
        className='ranking-back'
        alt='back icon'
        src={require('../images/returnTravel.png')}
        onClick={() => navigate(-1)}
      />
      <img
        className='ranking-icon'
        alt='profile icon'
        src={require('../images/ranking-view.png')}
      />
      <h1 className='ranking-h1'>Ranking</h1>
      <div className='ranking-info'>
        <h2 className='ranking-h2'>Conductores</h2>
        <table className='table background'>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id} className='ranking-table'>
                <td>{driver.user}</td>
                <td>
                  <img
                    className='chart-icon'
                    alt='pink star icon'
                    src={require('../images/pink-star.png')}
                  />
                </td>
                <td>{driver.score}</td>
                <td>
                  <img
                    className='chart-icon'
                    alt='pink plus icon'
                    src={require('../images/plus.png')}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='ranking-info'>
        <h2 className='ranking-h2'>Pasajeros</h2>
        <table className='table background'>
          <tbody>
            {passengers.map((passenger) => (
              <tr key={passenger.id} className='ranking-table'>
                <td>{passenger.user}</td>
                <td>
                  <img
                    className='chart-icon'
                    alt='purple star icon'
                    src={require('../images/purple-star.png')}
                  />
                </td>
                <td>{passenger.score}</td>
                <td>
                  <img
                    className='chart-icon'
                    alt='purple plus icon'
                    src={require('../images/purple-plus.png')}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Ranking;