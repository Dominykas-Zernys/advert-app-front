import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Title.style';

const Title = ({ children }) => {
  return <S.H1>{children}</S.H1>;
};

Title.propTypes = { children: PropTypes.string };

export default Title;
