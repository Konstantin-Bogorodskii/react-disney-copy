import React from 'react';
import styled from 'styled-components';

function NavMenuItem({ text, img }) {
  return (
    <NavItem>
      <a href={`/${text}`}>
        <img src={`/images/${img}`} alt={text} />
        <span>{text}</span>
      </a>
    </NavItem>
  );
}

const NavItem = styled.li`
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
        content: '';
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
`;

export default NavMenuItem;
