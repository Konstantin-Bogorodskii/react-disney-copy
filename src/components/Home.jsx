import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import MoviesRow from './MoviesRow';
import Viewers from './Viewers';
import requests from '../api/api';

function Home() {
  return (
    <Container>
      {/* <ImageSlider /> */}
      {/* <Viewers /> */}
      <MoviesRow title="Trending Now" fetchURL={requests.fetchTrending} />
      {/* <MoviesRow title="Top Rated" fetchURL={requests.fetchTopRated} />
      <MoviesRow title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <MoviesRow title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <MoviesRow title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <MoviesRow title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <MoviesRow title="Documentaries" fetchURL={requests.fetchDocumentaries} /> */}
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  overflow-y: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
