import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Spells from 'components/Spells';
import Header from 'components/Header';
import Search from './components/Search';
import Characters from './components/Characters';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};