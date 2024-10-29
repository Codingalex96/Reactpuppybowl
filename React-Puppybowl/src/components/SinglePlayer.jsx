import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglePlayer } from "../API/index"; // Adjust this path accordingly

const SinglePlayer = () => {
    let { id } = useParams();
    const [player, setPlayer] = useState(null); // Initialize player as null
    const navigate = useNavigate();

    useEffect(() => {
        async function getSinglePlayer() {
            const playerData = await fetchSinglePlayer(id);
            console.log(playerData); // Log the player data
            setPlayer(playerData);
        }
        getSinglePlayer();
    }, [id]); // Ensure id is in the dependency array

    return (
        <div>
            {player ? ( // Conditional rendering based on player state
                <>
                    <h4>{player.name}</h4>
                    <h4>{player.breed}</h4>
                    <h4>{player.status}</h4>
                    <img src={player.imageUrl} alt={player.name} />
                    <button className="see-details" onClick={() => navigate(`/`)}>
                        Go Home
                    </button>
                </>
            ) : (
                <p>Loading player details...</p> // Optional loading message
            )}
        </div>
    );
};

export default SinglePlayer;