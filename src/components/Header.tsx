import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney Logo" />
      </Logo>
      <NavMenu>
        <li>
          <a href="/home">
            <img src="/images/home-icon.svg" alt="Home" />
            <span>HOME</span>
          </a>
        </li>
        <li>
          <a href="/home">
            <img src="/images/search-icon.svg" alt="Home" />
            <span>SEARCH</span>
          </a>
        </li>
        <li>
          <a href="/home">
            <img src="/images/watchlist-icon.svg" alt="Home" />
            <span>watchlist</span>
          </a>
        </li>
        <li>
          <a href="/home">
            <img src="/images/original-icon.svg" alt="Home" />
            <span>originals</span>
          </a>
        </li>
        <li>
          <a href="/home">
            <img src="/images/movie-icon.svg" alt="Home" />
            <span>movies</span>
          </a>
        </li>
        <li>
          <a href="/home">
            <img src="/images/series-icon.svg" alt="Home" />
            <span>series</span>
          </a>
        </li>
      </NavMenu>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: #090b13;
  padding: 0 36px;
  letter-spacing: 8px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 3px;
      white-space: nowrap;
      position: relative;
      margin-top: 2px;
      text-transform: uppercase;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        content: "";
        height: 2px;
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: -6px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1) !important;
        visibility: visible !important;
        opacity: 1 !important;
      }
    }
  }

  

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
