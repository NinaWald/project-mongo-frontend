import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from 'components/Loading'; // Import the Loading component

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://project-mongo-api-pb7rmnzmyq-lz.a.run.app/characters');
        setCharacters(response.data);
        setIsLoading(false); // Set isLoading to false when the movies are loaded
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Also set isLoading to false on error
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Characters</h1>
      {isLoading ? ( // Render the Loading component if isLoading is true
        <Loading />
      ) : (
        <div className="characters-container">
          {characters.map((character) => (
            <div key={character.ID} className="character">
              <p className="character-name">{character['Character Name']}</p>
              <p className="character-info">House: {character.House}</p>
              <p className="character-info">Species: {character.Species}</p>
              <p className="character-info">Wand (Wood): {character['Wand (Wood)']}</p>
              <p className="character-info">Wand (Core): {character['Wand (Core)']}</p>
              <p className="character-info">Patronus: {character.Patronus}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Characters;