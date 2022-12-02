import React, { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchInfoAboutFilm } from 'API/moviesAPI';
import Movie from '../components/Movie/Movie';
import {
  LinksStyled,
  LinkCastStyled,
  LinkReviewsStyled,
} from 'Page.styled/MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

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
      {<Movie movie={movie} />}
      <LinksStyled>
        <LinkCastStyled to={`cast`}>Cast</LinkCastStyled>
        <LinkReviewsStyled to={`reviews`}>Reviews</LinkReviewsStyled>
      </LinksStyled>
      <Outlet />
    </>
  );
};

export default MovieDetails;
