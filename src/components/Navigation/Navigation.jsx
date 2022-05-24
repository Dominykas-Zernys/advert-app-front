import React, { useContext } from 'react';
import * as S from './Navigation.style';
import Wrapper from '../Wrapper/Wrapper';
import { NavLink } from 'react-router-dom';
import PageButton from '../../UI/PageButton/PageButton';
import { AuthContext } from '../../helpers/AuthContext';

const Navigation = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <S.Header>
      <Wrapper>
        <S.Nav>
          <S.ImgWrapper>
            <img src={'img/logo.jpeg'} alt='Advertise Yourself logo' />
          </S.ImgWrapper>
          <NavLink activeclassname='active' to='/'>
            Home
          </NavLink>
          <NavLink activeclassname='active' to='/about'>
            About Us
          </NavLink>
          {!isLoggedIn && (
            <>
              <NavLink activeclassname='active' to='/register'>
                Register
              </NavLink>
              <NavLink activeclassname='active' to='/login'>
                Login
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <>
              <NavLink activeclassname='active' to='/user'>
                User Panel
              </NavLink>
              <NavLink activeclassname='active' to='/create-advert'>
                Create Advert
              </NavLink>
              <PageButton
                handleClick={() => {
                  logout();
                }}
              >
                Logout
              </PageButton>
            </>
          )}
        </S.Nav>
      </Wrapper>
    </S.Header>
  );
};

export default Navigation;
