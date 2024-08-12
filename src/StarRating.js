import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="star-rating">
      {stars.map(star => (
        <span key={star} className={`star ${star <= rating ? 'filled' : ''}`}>
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
