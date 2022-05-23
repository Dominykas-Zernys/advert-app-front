import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Text.style';

const Text = ({ children, textIndent = true, fontSize = '1.15rem', center = false }) => {
  return (
    <S.P fontSize={fontSize} textIndent={textIndent} center={center}>
      {children}
    </S.P>
  );
};

Text.propTypes = { children: PropTypes.node.isRequired, textIndent: PropTypes.bool, fontSize: PropTypes.string, center: PropTypes.bool };

export default Text;
