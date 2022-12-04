import React, { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';

import { fetchInfoAboutFilm } from 'API/moviesAPI';
import Movie from '../components/Movie/Movie';
import {
  LinksStyled,
  LinkCastStyled,
  LinkReviewsStyled,
  LinkGoHomeStyled,
} from 'Page.styled/MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const getTrendFilms = async () => {
      const request = await fetchInfoAboutFilm(Number(movieId));
      setMovie(request.data);
    };
    getTrendFilms();
  }, [movieId]);

  if (!movie) return null;
  return (
    <>
      <LinkGoHomeStyled to={backLinkHref}>Go back</LinkGoHomeStyled>
      {<Movie movie={movie} />}
      <LinksStyled>
        <LinkCastStyled to={`cast`} state={{ from: backLinkHref }}>
          Cast
        </LinkCastStyled>
        <LinkReviewsStyled to={`reviews`} state={{ from: backLinkHref }}>
          Reviews
        </LinkReviewsStyled>
      </LinksStyled>
      <Outlet />
    </>
  );
};

export default MovieDetails;
