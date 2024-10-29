import React, { useState } from 'react';
import { addNewPlayer } from '../API/index'; 

const NewPlayerForm = ({ onPlayerAdded }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlayer = {
      name,
      breed,
      imageUrl,
    };

    try {
      const addedPlayer = await addNewPlayer(newPlayer);
      onPlayerAdded(addedPlayer);  // Invoke callback to update player list
      setName('');
      setBreed('');
      setImageUrl('');
    } catch (error) {
      console.error("Error adding new player:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Breed:
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <button type="submit">Add Player</button>
    </form>
  );
};

export default NewPlayerForm;