import SearchBar from 'components/SerchBar/SearchBar';
import { useState, useEffect } from 'react';
import { fetchSearchFilms } from 'API/moviesAPI';
import { HomeStyled, LinkStyled } from '../Page.styled/Home.styled';

const Movies = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState(null);

  const submitSearchForm = filmName => {
    setName(filmName);
  };

  useEffect(() => {
    if (name === '') return;
    try {
      const requestFilm = async () => {
        const film = await fetchSearchFilms(name);
        setData(film.data.results);
      };
      requestFilm();
    } catch (error) {
      console.log(error);
    }
  }, [name]);

  return (
    <>
      <SearchBar submitSearchForm={submitSearchForm}></SearchBar>
      <HomeStyled>
        {data &&
          data.map(el => {
            console.log(el);
            return (
              <li ey={el.id}>
                <LinkStyled to={`${el.id}`}>
                  <img
                    src={
                      el.backdrop_path
                        ? 'https://image.tmdb.org/t/p/w500' + el.poster_path
                        : 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg'
                    }
                    alt=""
                  />
                  <p>{el.title}</p>
                </LinkStyled>
              </li>
            );
          })}
      </HomeStyled>
    </>
  );
};

export default Movies;
