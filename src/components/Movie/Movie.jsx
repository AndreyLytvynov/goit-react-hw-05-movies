import React from 'react';
import { MovieStyled } from './Movie.styled';

const Movie = ({ movie }) => {
  return (
    <MovieStyled>
      <img
        src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
        alt=""
      />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>
        <span>Рейтинг:</span> {movie.vote_average}
      </p>
      <div>
        <p>
          <span>Жанр: </span>
        </p>
        <ul>
          {movie.genres.map(el => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
      </div>
    </MovieStyled>
  );
};

export default Movie;
