import React from 'react';
import * as Styled from './Navigation.style';
import Wrapper from '../Wrapper/Wrapper';
import NavLinks from '../NavLinks/NavLinks';
import MobileNavLinks from '../MobileNavLinks/MobileNavLinks';

const Navigation = () => {
  return (
    <Styled.Header>
      <Wrapper>
        <NavLinks />
        <MobileNavLinks />
      </Wrapper>
    </Styled.Header>
  );
};

export default Navigation;
