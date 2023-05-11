import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get('https://project-mongo-api-pb7rmnzmyq-lz.a.run.app/characters');
    const filteredCharacters = response.data.filter((character) => {
      return character['Character Name'].toLowerCase().includes(searchTerm.toLowerCase());
    });
    setCharacters(filteredCharacters);
  };

  const handleReset = () => {
    setSearchTerm('');
    setCharacters([]);
  };

  return (
    <div className="search-container">
      <h1>Character Search</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)} />
        </label>
        <button type="submit">Search</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      {characters.length > 0 ? (
        <div className="results-container">
          <h2>Search Results</h2>
          <ul>
            {characters.map((character) => (
              <li key={character['Character ID']}>
                <h3>{character['Character Name']}</h3>
                <p>Species: {character.Species}</p>
                <p>Gender: {character.Gender}</p>
                <p>House: {character.House}</p>
                <p>Patronus: {character.Patronus}</p>
                <p>Wand (Wood): {character['Wand (Wood)']}</p>
                <p>Wand (Core): {character['Wand (Core)']}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Search