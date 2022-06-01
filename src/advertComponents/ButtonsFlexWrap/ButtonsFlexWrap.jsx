import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ButtonsFlexWrap.style';

const ButtonsFlexWrap = ({ children }) => {
  return <S.ButtonsFlex>{children}</S.ButtonsFlex>;
};

ButtonsFlexWrap.propTypes = {
  children: PropTypes.node,
};

export default ButtonsFlexWrap;
