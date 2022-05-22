import React from 'react';
import PropTypes from 'prop-types';
import * as S from './InfoText.style';

const InfoText = ({ children, color }) => {
  return (
    <S.infoTextWrapper>
      <S.infoTextPar color={color}>{children}</S.infoTextPar>
    </S.infoTextWrapper>
  );
};

InfoText.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default InfoText;
