import SearchBar from 'components/SerchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';

import '../../node_modules/react-toastify/dist/ReactToastify.css';

import { fetchSearchFilms } from 'API/moviesAPI';
import { HomeStyled, LinkStyled } from '../Page.styled/Home.styled';

const Movies = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoader, setIsLoader] = useState(false);

  const location = useLocation();

  const submitSearchForm = filmName => {
    setSearchParams({ query: filmName });
  };

  useEffect(() => {
    if (searchParams.get('query') === null) return;

    try {
      const requestFilm = async () => {
        setIsLoader(true);
        const film = await fetchSearchFilms(searchParams.get('query'));
        if (film.data.results.length === 0) {
          toast('Films not found');
          setIsLoader(false);
          return;
        }
        setData(film.data.results);
        setIsLoader(false);
      };
      requestFilm();
    } catch (error) {
      console.log(error);
    }
  }, [searchParams]);

  if (searchParams.get('query') === null) {
    return <SearchBar submitSearchForm={submitSearchForm}></SearchBar>;
  }
  return (
    <>
      <SearchBar submitSearchForm={submitSearchForm}></SearchBar>
      {isLoader && <RotatingLines />}
      <ToastContainer />
      <HomeStyled>
        {data
          ? data.map(el => {
              return (
                <li key={el.id}>
                  <LinkStyled to={`${el.id}`} state={{ from: location }}>
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
            })
          : null}
      </HomeStyled>
    </>
  );
};

export default Movies;
