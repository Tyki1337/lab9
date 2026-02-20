import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input 
        className="search-input"
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Поиск фильмов..." 
      />
      <button type="submit" className="search-button">Найти</button>
    </form>
  );
}