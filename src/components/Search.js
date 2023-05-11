import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get('https://project-mongo-api-pb7rmnzmyq-lz.a.run.app/characters');
    const filteredCharacters = response.data.filter((character) => {
      return character.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setCharacters(filteredCharacters);
  };

  const handleReset = () => {
    setSearchTerm('');
    setCharacters([]);
  };

  return (
    <div>
      <h1>Character Search</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">
          Search for harry:
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)} />
        </label>
        <button type="submit">Search</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      {characters.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          <ul>
            {characters.map((character) => (
              <li key={character.id}>
                <h3>{character.title}</h3>
                <p>{character.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
export default Search