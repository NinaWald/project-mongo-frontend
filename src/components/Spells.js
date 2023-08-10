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
  // console.log('Number of spells:', spells.length);
  return (
    <div>
      <h1>All spells</h1>
      {isLoading ? ( // Render the Loading component if isLoading is true
        <Loading />
      ) : (
        <div className="spells-container">
          {spells.map((spell) => (
            <div key={spell['Spell ID']} className="spell">
              <h2 className="spell-name">{spell['Spell Name']}</h2>
              <p className="spell-info">Effect: {spell.Effect}</p>
              <p className="spell-info">Incantation: {spell.Incantation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Spells;