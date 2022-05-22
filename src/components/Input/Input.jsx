import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

const Input = ({ labelText, type, inputValue, setInputValue }) => {
  return (
    <S.InputWrapper>
      <S.Label>{labelText}</S.Label>
      <S.Input
        value={inputValue}
        type={type}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </S.InputWrapper>
  );
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
