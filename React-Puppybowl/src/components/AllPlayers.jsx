import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { fetchAllPlayers, addNewPlayer } from '../API/index'; // Ensure the path is correct
import NewPlayerForm from './NewPlayerform'; // Import the NewPlayerForm component

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const playersData = await fetchAllPlayers(); // Fetch all players
        setPlayers(playersData); // Update state with fetched players
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    getPlayers();
  }, []);

  const handlePlayerAdded = (newPlayer) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]); // Add new player to the list
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a player"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <NewPlayerForm onPlayerAdded={handlePlayerAdded} />
      <div className="players-list">
        {filteredPlayers.map((player) => (
          <div key={player.id} className="player-card">
            <h4>{player.name}</h4>
            {player.imageUrl ? (
              <img src={player.imageUrl} alt={player.name} style={{ width: '150px' }} />
            ) : (
              <p>No Image Available</p>
            )}
            <Link to={`/players/${player.id}`}>Details</Link> {/* Link to player details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlayers;