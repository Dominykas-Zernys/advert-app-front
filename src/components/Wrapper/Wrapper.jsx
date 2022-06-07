import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Wrapper.style';

const Wrapper = ({ children }) => {
  return <Styled.Wrap>{children}</Styled.Wrap>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
