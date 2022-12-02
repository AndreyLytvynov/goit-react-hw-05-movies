import React, { useEffect, useState } from 'react';

import { fetchTrendFilms } from '../API/moviesAPI';
import { HomeStyled, LinkStyled } from '../Page.styled/Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendFilms = async () => {
      const request = await fetchTrendFilms();

      setMovies(request.data.results);
    };

    getTrendFilms();
  }, []);
  return (
    <HomeStyled>
      {movies.length > 0 &&
        movies.map(el => {
          return (
            <li key={el.id}>
              <LinkStyled to={`movies/${el.id}`}>
                <img
                  src={'https://image.tmdb.org/t/p/w500' + el.poster_path}
                  alt=""
                />
                <p>{el.title}</p>
              </LinkStyled>
            </li>
          );
        })}
    </HomeStyled>
  );
};

export default Home;
