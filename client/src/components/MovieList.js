import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieList.css";

const MovieList = () => {
  const { language } = useParams();  // Get selected language from URL
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/movies?language=${language}`)  // Send language filter directly
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, [language]);

  return (
    <div className="movie-list">
      <h2>{language.toUpperCase()} Movies</h2>
      {movies.length === 0 ? (
        <p>No movies available in this language.</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            {/* Directly using public/assets path */}
            <img src={`/assets/${movie.image}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Seats:</strong> {movie.seatsAvailable}</p>
            <p>👍 {movie.likes} Likes</p>
            <p>⭐ {movie.rating} / 5</p>
            <ul>
              {movie.reviews.map((review, index) => (
                <li key={index}>• {review}</li>
              ))}
            </ul>
            <button 
              className="book-button"
              onClick={() => navigate(`/movies/${language}/${movie.id}/seats`)}
            >
              🎟 Book Now
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
