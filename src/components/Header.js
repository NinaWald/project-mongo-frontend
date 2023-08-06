import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Hello and welcome to the Harry Potter API!</h1>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/characters">All Characters</Link>
            </li>
            <li>
              <Link to="/spells">Spells</Link>
            </li>
            <li>
              <Link to="/search">Search Characters</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

