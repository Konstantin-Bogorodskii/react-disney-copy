import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import MoviesRow from './MoviesRow';
import Viewers from './Viewers';
import requests from '../api/api';

function Home() {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <MoviesRow title="Recommended for You" fetchURL={requests.fetchTrending} />
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
