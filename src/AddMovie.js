import React, { useState } from 'react';

const AddMovie = ({ add }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');
  const [trailerLink, setTrailerLink] = useState('');

  const addMovie = () => {
    if (title === '' || description === '' || posterURL === '' || trailerLink === '') {
      alert('Please fill all your movie info');
      return;
    }
    if (rating < 1 || rating > 5) {
      alert('The rating should be between 1 and 5');
      return;
    }
    add({ title, description, posterURL, rating, trailerLink });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
    setTrailerLink('');
  };

  return (
    <div className="add-movie">
      <input type="text" placeholder="Title" value={title} onChange={(title) => setTitle(title.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(des) => setDescription(des.target.value)} />
      <input type="text" placeholder="Poster URL" value={posterURL} onChange={(url) => setPosterURL(url.target.value)} />
      <input type="number" placeholder="Rating" value={rating} onChange={(rat) => setRating(rat.target.value)} />
      <input type="text" placeholder="Trailer Link" value={trailerLink} onChange={(link) => setTrailerLink(link.target.value)} />
      <button onClick={addMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovie;
