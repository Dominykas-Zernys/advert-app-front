import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.style';
import Wrapper from '../Wrapper/Wrapper';
import { NavLink } from 'react-router-dom';
import PageButton from '../../UI/PageButton/PageButton';

const Navigation = (props) => {
  return (
    <S.Header>
      <Wrapper>
        <S.Nav>
          <S.ImgWrapper>
            <img src='img/logo.png' alt='Advertise Yourself logo' />
          </S.ImgWrapper>
          <NavLink activeclassname='active' to='/'>
            Home
          </NavLink>
          <NavLink activeclassname='active' to='/about'>
            About Us
          </NavLink>
          {!props.isLoggedIn && (
            <>
              <NavLink activeclassname='active' to='/register'>
                Register
              </NavLink>
              <NavLink activeclassname='active' to='/login'>
                Login
              </NavLink>
            </>
          )}
          {props.isLoggedIn && (
            <>
              <NavLink activeclassname='active' to='/user'>
                User Panel
              </NavLink>
              <PageButton
                handleClick={() => {
                  console.log('logout');
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

Navigation.propTypes = {};

export default Navigation;
