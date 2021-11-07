export const API_URL = 'https://api.themoviedb.org/3';

export const API_KEY = 'e893d153c2534d5eb3897a5aae50157a';

export const API_KEY_4 =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODkzZDE1M2MyNTM0ZDVlYjM4OTdhNWFhZTUwMTU3YSIsInN1YiI6IjYxODZkNTYzNjlkMjgwMDA0NDk1NzEzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wL1E3kosdjm4Sb9-3xd6UK0gb4w5prta_onZr6WAqV0';

export const API_IMG_URL = 'https://image.tmdb.org/t/p/original/';

const REQUESTS = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default REQUESTS;
