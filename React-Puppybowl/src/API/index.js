const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2407-ftb-et-web-pt';

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${API_URL}/players`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    
    console.log("Full API Response:", data);

    
    if (data && data.data && Array.isArray(data.data.players)) {
      
      console.log("Players Array:", data.data.players);
      return data.data.players;  
    } else if (Array.isArray(data.players)) {
      
      console.log("Players Array:", data.players);
      return data.players;
    } else {
      throw new Error("Invalid data format, expected an array of players");
    }
  } catch (error) {
    console.error("Error fetching players:", error);
    return null;
  }
};

export const fetchSinglePlayer = async (id) => {
  try {
    const response = await fetch(`${API_URL}/players/${id}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching player with ID ${id}:`, error);
    return null;
  }
};

export const addNewPlayer = async (playerData) => {
    try {
      const response = await fetch(`${API_URL}/players`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const newPlayer = await response.json();
      return newPlayer;
    } catch (error) {
      console.error("Error adding new player:", error);
    }
  };