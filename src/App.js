import './App.css';
import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile';
import NotFoundPage from './views/NotFoundPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          {/* <Route path="/chef" element={<Chef />} />
          <Route path="/boss" element={<Administrator />} /> */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
