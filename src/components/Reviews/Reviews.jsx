import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsFilm } from '../../API/moviesAPI';
import { ReviewsListStyled } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getTrendFilms = async () => {
      const request = await fetchReviewsFilm(Number(movieId));
      setReviews(request.data.results);
    };
    getTrendFilms();
  }, [movieId]);

  if (!reviews) return null;

  return reviews.length !== 0 ? (
    <ReviewsListStyled>
      {reviews.map(el => (
        <li key={el.id}>
          <p>
            <b>Имя:</b> {el.author}
          </p>
          <p>
            <b>Логин:</b> {el.author_details.username}
          </p>
          <p>
            <b>Создан:</b> {new Date(el.created_at).toLocaleDateString()}
          </p>
          <p>
            <b>Отзыв:</b> {el.content}
          </p>
        </li>
      ))}
    </ReviewsListStyled>
  ) : (
    <div>Not found</div>
  );
};

export default Reviews;
