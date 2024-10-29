import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlayerDetails = () => {
  const { playerId } = useParams(); 
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const response = await fetch(`${API_URL}/players/${playerId}`);
        const data = await response.json();

        
        if (data.success && data.data && data.data.player) {
          setPlayer(data.data.player);
        } else {
          setError('Player not found');
        }
      } catch (err) {
        setError('An error occurred while fetching player details');
      } finally {
        setLoading(false);
      }
    };

    fetchPlayerDetails();
  }, [playerId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {player && (
        <>
          <h2>{player.name}</h2>
          <img src={player.imageUrl} alt={player.name} />
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
        </>
      )}
    </div>
  );
};

export default PlayerDetails;