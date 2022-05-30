import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Subtitle.style';

const Subtitle = ({ children, noMargin = false }) => {
  return <S.H2 noMargin={noMargin}>{children}</S.H2>;
};

Subtitle.propTypes = { children: PropTypes.string.isRequired, noMargin: PropTypes.bool };

export default Subtitle;
