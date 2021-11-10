import React from 'react';
import styled from 'styled-components';
import { API_IMG_URL } from '../api/api';

function Detail({ movie }) {
  return (
    <Container>
      {/* <Background>
      <img src={`${API_IMG_URL}${movie.poster_path}`} alt="" />
    </Background> */}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div``;

export default Detail;
