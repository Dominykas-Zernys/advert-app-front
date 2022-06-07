import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper/Wrapper';
import * as Styled from './Main.style';

const Main = ({ children }) => {
  return (
    <Styled.Main>
      <Wrapper>{children}</Wrapper>
    </Styled.Main>
  );
};

Main.propTypes = { children: PropTypes.node };

export default Main;
