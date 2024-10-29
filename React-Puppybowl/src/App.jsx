import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers'; // Displays all players
import SinglePlayer from './components/SinglePlayer'; // Displays details of a single player
import NewPlayerForm from './components/NewPlayerForm'; // Form to add a new player
import Navbar from './components/Navbar'; // Import the Navbar
import './app.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Include the Navbar here */}
        <Routes>
          <Route path="/" element={<AllPlayers />} /> {/* Main player list */}
          <Route path="/players/:id" element={<SinglePlayer />} /> {/* Player details */}
          <Route path="/new-player" element={<NewPlayerForm />} /> {/* Form to add a new player */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;