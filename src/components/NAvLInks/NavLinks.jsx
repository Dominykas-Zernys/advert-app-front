import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './NavLinks.style';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../helpers/AuthContext';
import PageButton from '../../UI/PageButton/PageButton';

const NavLinks = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
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
              window.location.reload();
            }}
          >
            Logout
          </PageButton>
        </>
      )}
    </S.Nav>
  );
};

NavLinks.propTypes = {};

export default NavLinks;
