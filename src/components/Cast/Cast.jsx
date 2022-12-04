import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsFilm } from '../../API/moviesAPI';
import { CoastListStyled } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getTrendFilms = async () => {
      const request = await fetchCreditsFilm(Number(movieId));
      setCast(request.data.cast);
    };
    getTrendFilms();
  }, [movieId]);

  if (!cast) return null;
  return (
    <CoastListStyled>
      {cast.map(el => {
        return (
          <li key={el.id}>
            <img
              src={
                el.profile_path
                  ? 'https://image.tmdb.org/t/p/w500' + el.profile_path
                  : 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg'
              }
              alt=""
              width={150}
            />
            <p>{el.name}</p>
            <p>{el.character}</p>
          </li>
        );
      })}
    </CoastListStyled>
  );
};

export default Cast;
