import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './InfoText.style';

const InfoText = ({ children, color }) => {
  return (
    <Styled.InfoTextWrapper>
      <Styled.InfoTextPar color={color}>{children}</Styled.InfoTextPar>
    </Styled.InfoTextWrapper>
  );
};

InfoText.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default InfoText;
