import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './ButtonsFlexWrap.style';

const ButtonsFlexWrap = ({ children }) => {
  return <Styled.ButtonsFlex>{children}</Styled.ButtonsFlex>;
};

ButtonsFlexWrap.propTypes = {
  children: PropTypes.node,
};

export default ButtonsFlexWrap;
