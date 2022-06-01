import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './MobileNavLinks.style';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../helpers/AuthContext';
import PageButton from '../../UI/PageButton/PageButton';
import { FiMenu } from 'react-icons/fi';

const MobileNavLinks = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <S.Nav>
      <S.FlexNav>
        <FiMenu
          size='4rem'
          color='black'
          onClick={(e) => {
            setMenuOpen((prevState) => !prevState);
          }}
        />
        <S.ImgWrapper
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <Link to='/'>
            <img src={'img/logo.jpeg'} alt='AY logo' />
          </Link>
        </S.ImgWrapper>
      </S.FlexNav>
      {menuOpen && (
        <S.HamburgerMenu
          onClick={() => {
            setMenuOpen(false);
          }}
        >
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
        </S.HamburgerMenu>
      )}
    </S.Nav>
  );
};

MobileNavLinks.propTypes = {};

export default MobileNavLinks;
