import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper/Wrapper';
import * as S from './Main.style';

const Main = ({ children }) => {
  return (
    <S.Main>
      <Wrapper>{children}</Wrapper>
    </S.Main>
  );
};

Main.propTypes = { children: PropTypes.node };

export default Main;
