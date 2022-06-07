import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Title.style';

const Title = ({ children, marginBottom = '4rem' }) => {
  return <Styled.H1 marginBottom={marginBottom}>{children}</Styled.H1>;
};

Title.propTypes = { children: PropTypes.node, marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) };

export default Title;
