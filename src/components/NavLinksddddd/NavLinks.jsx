import React, { useContext } from 'react';
import * as Styled from './NavLinks.style';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../helpers/AuthContext';
import PageButton from '../../UI/PageButton/PageButton';

const NavLinks = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <Styled.Nav>
      <Styled.ImgWrapper>
        <Link to='/'>
          <img src={'img/logo.jpeg'} alt='AY logo' />
        </Link>
      </Styled.ImgWrapper>
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
    </Styled.Nav>
  );
};

NavLinks.propTypes = {};

export default NavLinks;
