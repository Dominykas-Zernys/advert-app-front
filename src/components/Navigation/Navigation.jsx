import React, { useContext } from 'react';
import * as S from './Navigation.style';
import Wrapper from '../Wrapper/Wrapper';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import PageButton from '../../UI/PageButton/PageButton';
import { AuthContext } from '../../helpers/AuthContext';
import NavLinks from '../NAvLInks/NavLinks';
import MobileNavLinks from '../MobileNavLinks/MobileNavLinks';

const Navigation = () => {
  return (
    <S.Header>
      <Wrapper>
        <NavLinks />
        <MobileNavLinks />
      </Wrapper>
    </S.Header>
  );
};

export default Navigation;
