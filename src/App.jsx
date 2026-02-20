import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList.jsx';
import MovieModal from './components/MovieModal';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

const searchMovies = async (query) => {
  if (!query) return; 

  setLoading(true);
  setError(null);
  try {
    const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=27cbb8b`);
    const data = await res.json();
    
    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      setError(data.Error); 
      setMovies([]);
    }
  } catch (err) {
    setError("Ошибка сети или CORS");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="app">
      <h1>Movie Search</h1>
      <SearchBar onSearch={searchMovies} />
      
      {loading && <p>Загрузка...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      
      <MovieList movies={movies} onMovieSelect={setSelectedId} />
      
      {selectedId && (
        <MovieModal id={selectedId} onClose={() => setSelectedId(null)} />
      )}
    </div>
  );
}