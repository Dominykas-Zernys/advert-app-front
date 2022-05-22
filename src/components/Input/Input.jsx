import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

const Input = ({ labelText, type }) => {
  return (
    <S.InputWrapper>
      <S.Label>{labelText}</S.Label>
      <S.Input type={type} />
    </S.InputWrapper>
  );
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
