import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

const Input = ({ labelText, type, inputValue, setInputValue, height, placeholder, maxLength }) => {
  return (
    <S.InputWrapper className={`${type}-wrapper`}>
      <S.Label>{labelText}</S.Label>
      {type === 'textarea' ? (
        <S.TextArea
          maxLength={maxLength}
          placeholder={placeholder}
          value={inputValue}
          height={height}
          onChange={(e) => setInputValue(e.target.value)}
        ></S.TextArea>
      ) : (
        <S.Input
          className={placeholder === 'Tel' ? 'phone' : ''}
          placeholder={placeholder}
          value={inputValue}
          type={type}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
      {type === 'textarea' && (
        <S.TextAreaCount inputLength={inputValue.length} maxLength={maxLength}>
          Symbols total: <span className='current-count'>{inputValue.length}</span>
          <span>/{maxLength}</span>
        </S.TextAreaCount>
      )}
      {placeholder === 'Tel' ? <span className='plus'>+</span> : ''}
    </S.InputWrapper>
  );
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func,
  height: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
};

export default Input;
