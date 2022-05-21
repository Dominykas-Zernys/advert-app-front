import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Wrapper.style';

const Wrapper = ({ children }) => {
  return <S.Wrap>{children}</S.Wrap>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
