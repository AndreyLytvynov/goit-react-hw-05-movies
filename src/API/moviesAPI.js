import axios from 'axios';

const KEY = '3df068295885145f3971dff471bf342e';
const LANGUAGE = 'uk';

export const contentURL = 'https://image.tmdb.org/t/p/w500';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export async function fetchTrendFilms(page = 1) {
  try {
    const response = await instance.get(
      `/trending/movie/week?api_key=${KEY}&page=${page}&language=${LANGUAGE}`
    );
    if (response.status === 200) return response;

    throw new Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSearchFilms(searchQuery, page = 1) {
  try {
    const response = await instance.get(
      `/search/movie?api_key=${KEY}&query=${searchQuery}&page=${page}&language=${LANGUAGE}`
    );
    if (response.status === 200) return response;
    throw new Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchInfoAboutFilm(idFilm) {
  try {
    const response = await instance.get(
      `/movie/${idFilm}?api_key=${KEY}&language=${LANGUAGE}`
    );
    if (response.status === 200) return response;
    throw new Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCreditsFilm(idFilm) {
  try {
    const response = await instance.get(
      `/movie/${idFilm}/credits?api_key=${KEY}`
    );
    if (response.status === 200) return response;
    throw new Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchReviewsFilm(idFilm) {
  try {
    const response = await instance.get(
      `/movie/${idFilm}/reviews?api_key=${KEY}`
    );
    if (response.status === 200) return response;
    throw new Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
}
