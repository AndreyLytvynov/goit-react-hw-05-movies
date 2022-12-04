import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import { fetchTrendFilms } from '../API/moviesAPI';
import { HomeStyled, LinkStyled } from '../Page.styled/Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsLoader(true);
    const getTrendFilms = async () => {
      const request = await fetchTrendFilms();

      setMovies(request.data.results);
      setIsLoader(false);
    };
    getTrendFilms();
  }, []);
  return (
    <HomeStyled>
      {isLoader && <RotatingLines />}
      {movies.length > 0 &&
        movies.map(el => {
          return (
            <li key={el.id}>
              <LinkStyled to={`movies/${el.id}`} state={{ from: location }}>
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
