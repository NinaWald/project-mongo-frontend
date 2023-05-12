import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from 'components/Loading';

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [showPatronusInfo, setShowPatronusInfo] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://project-mongo-api-pb7rmnzmyq-lz.a.run.app/characters');
        setCharacters(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePatronusClick = (character) => {
    setSelectedCharacter(character);
    setShowPatronusInfo(true);
  };

  const handleCloseClick = () => {
    setShowPatronusInfo(false);
    setSelectedCharacter(null);
  };

  return (
    <div>
      <h1>All Characters</h1>
      {isLoading ? (
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
