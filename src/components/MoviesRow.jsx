import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { API_IMG_URL } from '../api/api';

function MoviesRow({ title, fetchURL }) {
  const { data: moviesData, isLoading, error } = useFetching(fetchURL);

  return (
    <Container>
      <h2>{title}</h2>
      <Content>
        {moviesData &&
          moviesData.results.map(movie => {
            return (
              <Wrap key={movie.id}>
                <Link
                  to={{
                    pathname: `/detail/${movie.id}`,
                    movie,
                  }}
                >
                  <img
                    src={`${API_IMG_URL}${movie.poster_path}`}
                    alt={movie.name || movie.title || movie.original_title}
                  />
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 20px;

  &::-webkit-scrollbar-track {
    ${'' /* background: #090b13; */}
    background: white;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(151, 151, 151, 0.34);
  }

  &::-webkit-scrollbar {
    height: 10px;
    diplay: none;
    transition: all 300ms ease-in-out;
  }

  &::-webkit-scrollbar-track-piece {
    background: red;
  }

  &:hover {
    &::-webkit-scrollbar {
      display: block;
    }
  }
`;

const Wrap = styled.div`
  margin-right: 10px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  min-height: 290px;
  width: 100%;
  min-width: 180px;

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s, transform 500ms;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default MoviesRow;
