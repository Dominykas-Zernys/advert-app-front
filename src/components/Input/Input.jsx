import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Input.style';

const Input = ({ labelText, type, inputValue, setInputValue, height, placeholder, maxLength }) => {
  return (
    <Styled.InputWrapper className={`${type}-wrapper`}>
      <Styled.Label>{labelText}</Styled.Label>
      {type === 'textarea' ? (
        <Styled.TextArea
          maxLength={maxLength}
          placeholder={placeholder}
          value={inputValue}
          height={height}
          onChange={(e) => setInputValue(e.target.value)}
        ></Styled.TextArea>
      ) : (
        <Styled.Input
          className={placeholder === 'Tel' ? 'phone' : ''}
          placeholder={placeholder}
          value={inputValue}
          type={type}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
      {type === 'textarea' && (
        <Styled.TextAreaCount inputLength={inputValue.length} maxLength={maxLength}>
          Symbols total: <span className='current-count'>{inputValue.length}</span>
          <span>/{maxLength}</span>
        </Styled.TextAreaCount>
      )}
      {placeholder === 'Tel' ? <span className='plus'>+</span> : ''}
    </Styled.InputWrapper>
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
