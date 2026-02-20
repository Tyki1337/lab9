import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieSelect }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="no-results">
        <p>Фильмы не найдены. Попробуйте другой запрос.</p>
      </div>
    );
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.imdbID} 
          movie={movie} 
          onClick={onMovieSelect} 
        />
      ))}
    </div>
  );
};

export default MovieList;