import './App.css';
import Login from './views/Login';
// import Register from './views/Register';
import Profile from './views/Profile';
// import Contact from './views/Contact';
import NotFoundPage from './views/NotFoundPage';
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
          <Route path="" element={<Login />} />
          {/* <Route path="/Register" element={<Register />} /> */}
          <Route path="/Profile" element={<Profile />} />
          {/* <Route path="/Register/emergencyContact" element={<Contact />} /> */}
          <Route path="/comments" element={<Comments />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
