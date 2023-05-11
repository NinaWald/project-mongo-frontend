import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Spells from 'components/Spells';
import Search from './components/Search';
import Characters from './components/Characters';

export const App = () => {
  return (
    <div className="firstpage">
      <BrowserRouter>
        <h1>Hello and welcome to the Harry Potter API!</h1>
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
        <Routes>
          <Route path="/" exact> </Route>
          <Route path="/characters" element={<Characters />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};