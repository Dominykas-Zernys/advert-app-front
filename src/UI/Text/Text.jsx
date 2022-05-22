import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Text.style';

const Text = ({ children }) => {
  return <S.P>{children}</S.P>;
};

Text.propTypes = { children: PropTypes.node.isRequired };

export default Text;
