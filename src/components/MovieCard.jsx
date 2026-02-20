const MovieCard = ({ movie, onClick }) => {
  const posterUrl = movie.Poster !== 'N/A' 
    ? movie.Poster 
    : 'https://via.placeholder.com/300x450?text=No+Poster';

  return (
    <div className="movie-card" onClick={() => onClick(movie.imdbID)}>
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.Title} />
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <span>{movie.Year}</span>
      </div>
    </div>
  );
};

export default MovieCard;