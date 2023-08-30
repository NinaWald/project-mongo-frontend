import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from 'components/Loading';

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [showPatronusInfo, setShowPatronusInfo] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    // Function to fetch data with retries
    const fetchDataWithRetry = async (maxRetries) => {
      async function fetchData() {
        try {
          const response = await axios.get('https://project-mongo-api-pb7rmnzmyq-lz.a.run.app/characters');
          setCharacters(response.data);
          setIsLoading(false);
          return true; // Exit the loop if successful
        } catch (error) {
          console.error(error);
          return false; // Retry if unsuccessful
        }
      }

      // eslint-disable-next-line no-plusplus
      for (let retry = 0; retry < maxRetries; retry++) {
        // eslint-disable-next-line no-await-in-loop
        const success = await fetchData();
        if (success) return; // Exit the loop if successful
        if (retry < maxRetries - 1) {
          // Retry after a delay (e.g., 2 seconds)
          // eslint-disable-next-line no-await-in-loop, no-promise-executor-return
          await new Promise((resolve) => setTimeout(resolve, 2000));
        } else {
          setIsLoading(false);
        }
      }
    };

    // Call fetchDataWithRetry with a maximum number of retries
    fetchDataWithRetry(3); // Retry up to 3 times before giving up
  }, []);

  const handlePatronusClick = (character) => {
    setSelectedCharacter(character);
    setShowPatronusInfo(true);
  };

  const handleCloseClick = () => {
    setShowPatronusInfo(false);
    setSelectedCharacter(null);
  };
  // console.log('Number of characters:', characters.length);
  return (
    <div>
      <h1>All Characters</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="characters-container">
          {characters.map((character) => (
            <div key={character['Character ID']} className="character">
              <p className="character-name">{character['Character Name']}</p>
              <p className="character-info">House: {character.House}</p>
              <p className="character-info">Species: {character.Species}</p>
              {character['Wand (Wood)'] ? (
                <p className="character-info">Wand (Wood): {character['Wand (Wood)']}</p>
              ) : (
                <p className="character-info">Wand (Wood): - </p>
              )}
              {character['Wand (Core)'] ? (
                <p className="character-info">Wand (Core): {character['Wand (Core)']}</p>
              ) : (
                <p className="character-info">Wand (Core): - </p>
              )}
              <p className="character-info">
                Patronus:{' '}
                {character.Patronus ? (
                  <span
                    onClick={() => handlePatronusClick(character)}
                    onKeyDown={() => {}}
                    role="button"
                    tabIndex={0}
                    className="patronus">
                    {character.Patronus}
                  </span>
                ) : (
                  'none'
                )}
              </p>
            </div>
          ))}
          {showPatronusInfo && selectedCharacter && (
            <div className="patronus-info">
              <p>
                <strong>{selectedCharacter['Character Name']}</strong> has a{' '}
                <strong>{selectedCharacter.Patronus}</strong> patronus,
                which is a magical guardian in
                the shape of an animal. In the Harry Potter series,
                a Patronus is a spell that conjures a magical guardian,
                used primarily to protect against dark creatures known as Dementors.
                The Patronus takes the form of an animal that represents the casters personality,
                and is a manifestation of their positive emotions and memories.
              </p>
              <button type="button" onClick={handleCloseClick}>Close</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Characters;
