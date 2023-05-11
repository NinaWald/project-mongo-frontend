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
        setIsLoading(false); // Set isLoading to false when the spells are loaded
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
            <li key={spell['Spell ID']}>
              <h2>{spell['Spell Name']}</h2>
              <p>The effect of the spell:{spell.Effect}</p>
              <p>How to say the spell:{spell.Incantation}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Spells;