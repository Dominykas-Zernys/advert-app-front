import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Subtitle.style';

const Subtitle = ({ children, noMargin = false }) => {
  return <Styled.H2 noMargin={noMargin}>{children}</Styled.H2>;
};

Subtitle.propTypes = { children: PropTypes.string.isRequired, noMargin: PropTypes.bool };

export default Subtitle;
