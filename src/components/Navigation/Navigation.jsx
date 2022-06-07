import React, { useContext } from 'react';
import * as S from './Navigation.style';
import Wrapper from '../Wrapper/Wrapper';
import NavLinks from '../NavLInks/NavLinks';
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
