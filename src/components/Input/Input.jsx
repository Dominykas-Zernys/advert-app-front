import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

const Input = ({ labelText, type, inputValue, setInputValue, height, placeholder, maxLength }) => {
  return (
    <S.InputWrapper className={`${type}-wrapper`}>
      <S.Label>{labelText}</S.Label>
      {type === 'textarea' ? (
        <S.TextArea placeholder={placeholder} value={inputValue} height={height} onChange={(e) => setInputValue(e.target.value)}></S.TextArea>
      ) : (
        <S.Input placeholder={placeholder} value={inputValue} type={type} onChange={(e) => setInputValue(e.target.value)} />
      )}
      {type === 'textarea' && (
        <S.TextAreaCount inputLength={inputValue.length} maxLength={maxLength}>
          Symbols total: <span>{inputValue.length}</span>/{maxLength}
        </S.TextAreaCount>
      )}
    </S.InputWrapper>
  );
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
