import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Dropdown.style';
import { capitalize } from '../../helpers/miscFunctions';

const Dropdown = ({ placeholder, labelText, inputValue, setInputValue, options }) => {
  return (
    <Styled.DropdownWrapper>
      <Styled.Label>{labelText}</Styled.Label>
      <Styled.Dropdown value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
        <option value='' defaultValue disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {capitalize(opt.name)}
          </option>
        ))}
      </Styled.Dropdown>
    </Styled.DropdownWrapper>
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
