import React, { useContext } from 'react';
import * as S from './Navigation.style';
import Wrapper from '../Wrapper/Wrapper';
import { Link, NavLink } from 'react-router-dom';
import PageButton from '../../UI/PageButton/PageButton';
import { AuthContext } from '../../helpers/AuthContext';

const Navigation = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <S.Header>
      <Wrapper>
        <S.Nav>
          <S.ImgWrapper>
            <Link to='/'>
              <img src={'img/logo.jpeg'} alt='AY logo' />
            </Link>
          </S.ImgWrapper>
          <NavLink className='nav-link' activeclassname='active' to='/'>
            Home
          </NavLink>
          <NavLink className='nav-link' activeclassname='active' to='/about'>
            About Us
          </NavLink>
          {!isLoggedIn && (
            <>
              <NavLink className='nav-link' activeclassname='active' to='/register'>
                Register
              </NavLink>
              <NavLink className='nav-link' activeclassname='active' to='/login'>
                Login
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <>
              <NavLink className='nav-link' activeclassname='active' to='/user'>
                User Panel
              </NavLink>
              <NavLink className='nav-link' activeclassname='active' to='/create-advert'>
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
