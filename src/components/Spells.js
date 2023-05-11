import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from 'components/Loading'; // Import the Loading component

const Spells = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://project-mongo-api-pb7rmnzmyq-lz.a.run.app/spells');
        setSpells(response.data);
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
      <h1>All spells</h1>
      {isLoading ? ( // Render the Loading component if isLoading is true
        <Loading />
      ) : (
        <ul>
          {spells.map((spell) => (
            <li key={spell.ID}>
              <h2>{spell.spell_name}</h2>
              <p>{spell.effect}</p>
              <p>{spell.incantation}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Spells;