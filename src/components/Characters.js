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
        <ul>
          {characters.map((character) => (
            <li key={character.ID}>
              <p>House: {character.house}</p>
              <p>Species: {character.species}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Characters;