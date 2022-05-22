import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Subtitle.style';

const Subtitle = ({ children }) => {
  return <S.H2>{children}</S.H2>;
};

Subtitle.propTypes = { children: PropTypes.string.isRequired };

export default Subtitle;
