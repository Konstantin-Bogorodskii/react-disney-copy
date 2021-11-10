import React, { useEffect } from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLoginDeatils, setSignOutState } from '../store/reducers/userSlice';
import NavMenuItem from './NavMenuItem';
import { Link } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(state => state.userReducer.name);
  const userEmail = useSelector(state => state.userReducer.email);
  const userPhoto = useSelector(state => state.userReducer.photo);

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        setUser(user);
        history.push('/home');
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then(result => setUser(result.user))
        .catch(err => alert(err.message));
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push('/');
        })
        .catch(err => alert(err.message));
    }
  };

  const setUser = user => {
    dispatch(
      setUserLoginDeatils({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <Link to="/home">
          <img src="/images/logo.svg" alt="Disney Logo" />
        </Link>
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <NavMenuItem text="home" img="home-icon.svg" />
            <NavMenuItem text="search" img="search-icon.svg" />
            <NavMenuItem text="watchlist" img="watchlist-icon.svg" />
            <NavMenuItem text="originals" img="original-icon.svg" />
            <NavMenuItem text="movies" img="movie-icon.svg" />
            <NavMenuItem text="series" img="series-icon.svg" />
          </NavMenu>
          <SignOut>
            <UserImage src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  transition: all 0.2s ease-out 0s;

  &:hover {
    background-color: #f9f9f9;
    color: rgba(0, 0, 0, 0.6);
    border-color: transparent;
  }
`;

const UserImage = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: max-content;
  opacity: 0;
  visibility: hidden;
`;

const SignOut = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${UserImage} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      visibility: visible;
      transition: all 0.3s ease-out 0.3s;
    }
  }
`;

export default Header;
