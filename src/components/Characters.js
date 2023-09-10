import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from 'components/Loading';

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [characters, setCharacters] = useState([]);
  const [showPatronusInfo, setShowPatronusInfo] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  /*
const fetchDataWithRetry = async (maxRetries) => {: This defines a function named fetchDataWithRetry
that takes the maximum number of retries as a parameter.
This function encapsulates the logic for fetching data with retries.
let retries = 0;: This initializes a variable retries to keep track of the number of retry attempts.
 It starts at 0.
---
const retryFetch = async () => {: This defines another inner function named retryFetch.
 It's responsible for managing the retry logic.
  */
  useEffect(() => {
    // Function to fetch data with retries
    const fetchDataWithRetry = async (maxRetries) => {
      let retries = 0;

      const fetchData = async () => {
        try {
          const response = await axios.get('https://project-mongo-api-pb7rmnzmyq-lz.a.run.app/characters');
          setCharacters(response.data);
          setIsLoading(false);
          return true; // Indicates a successful fetch
        } catch (error) {
          console.error(error);
          return false; // Indicates an unsuccessful fetch
        }
      };
      /*
    const retryFetch = async () => {: This defines another inner function named retryFetch.
    It's responsible for managing the retry logic.
    if (retries < maxRetries) { ... }: This condition checks if the number of retries is less
    than the maximum allowed retries.

    If it is, it proceeds to fetch data using the fetchData function.
    const success = await fetchData();: It calls the fetchData function and awaits its result.
    If the fetch is successful,
    it sets the success variable to true. If it fails, success is set to false.

    if (!success) { ... }: If the fetch is not successful (i.e., success is false),
    it increments the retries counter by 1 and schedules a retry after a 2-second delay
    using setTimeout.
    This recursive retry mechanism continues
    until either the fetch is successful or the maximum retries are reached.

    else { setIsLoading(false); }: If the maximum retries are reached without a successful fetch,
    it sets isLoading to false to indicate that the loading process is complete.
*/
      const retryFetch = async () => {
        if (retries < maxRetries) {
          const success = await fetchData();
          if (!success) {
            retries += 1; // Increment retries
            // Retry after a delay (e.g., 2 seconds)
            setTimeout(retryFetch, 2000);
          }
        } else {
          setIsLoading(false);
          setErrorMessage('Failed to fetch data after 3 retries.');
        }
      };

      retryFetch();
    };

    /*
    retryFetch();: Finally, it invokes the retryFetch function
     to start the retry process when the fetchDataWithRetry function is called.
     fetchDataWithRetry(3);: This line calls the fetchDataWithRetry function
    with a maximum of 3 retries.
    This initiates the fetch process when the component mounts.

    The [] dependency array ensures that this effect only runs once when the component mounts,
    similar to componentDidMount in class-based components.
    */

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
        <div>
          {errorMessage ? (
            <p>{errorMessage}</p>
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
      )};
    </div>
  );
}
export default Characters;
