import React, { useState, useEffect } from 'react';

export default function MovieModal({ id, onClose }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=27cbb8b`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        {loading ? (
          <p>Загрузка деталей...</p>
        ) : details ? (
          <div className="modal-body">
            <img src={details.Poster} alt={details.Title} />
            <div className="modal-text">
              <h2>{details.Title}</h2>
              <p><strong>Год:</strong> {details.Year}</p>
              <p><strong>Рейтинг:</strong> ⭐ {details.imdbRating}</p>
              <p><strong>Сюжет:</strong> {details.Plot}</p>
              <p><strong>Актеры:</strong> {details.Actors}</p>
            </div>
          </div>
        ) : (
          <p>Не удалось загрузить данные</p>
        )}
      </div>
    </div>
  );
}