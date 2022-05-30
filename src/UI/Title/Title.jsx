import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Title.style';

const Title = ({ children, marginBottom = '4rem' }) => {
  return <S.H1 marginBottom={marginBottom}>{children}</S.H1>;
};

Title.propTypes = { children: PropTypes.node, marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) };

export default Title;
