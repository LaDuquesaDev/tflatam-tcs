import './App.css';
import Login from './views/Login';
import Home from './views/Home';
import RouterMap from './views/RouteMap';
import Start from './views/Start'
import PassengerComments from './views/PassengerComents';
import DriverComments from './views/DriverComments';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Comments } from './views/Comments';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/PassengerComments" element={<PassengerComments />} />
          <Route path="/DriverComments" element={<DriverComments />} />
          <Route path="" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/RouterMap" element={<RouterMap />} />
          <Route path="/Start" element={<Start />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
