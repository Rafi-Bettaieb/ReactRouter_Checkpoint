
import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import './MovieCard.css';

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie.id}`} className="movie-card">
    <div className="movie-card-content">
      <h3>{movie.title}</h3>
      <img src={movie.posterURL} alt={`${movie.title} poster`} />
      <StarRating rating={movie.rating} /> 
      <p>{movie.description}</p>
    </div>
  </Link>
);

export default MovieCard;
