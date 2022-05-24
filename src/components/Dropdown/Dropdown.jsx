import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Dropdown.style';

const Dropdown = ({ placeholder, labelText, inputValue, setInputValue, options }) => {
  return (
    <S.DropdownWrapper>
      <S.Label>{labelText}</S.Label>
      <S.Dropdown value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
        <option value='' defaultValue disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </S.Dropdown>
    </S.DropdownWrapper>
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Dropdown;
