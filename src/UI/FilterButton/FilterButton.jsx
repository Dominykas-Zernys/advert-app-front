import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './FilterButton.style';
import { capitalize } from '../../helpers/miscFunctions';

const FilterButton = ({ labelText, id, checkedBtn = false }) => {
  return (
    <Styled.FilterBtn>
      {checkedBtn ? (
        <Styled.RadioInput value={0} defaultChecked='checked' name='category-radio' id={labelText} type='radio' data-id={id} />
      ) : (
        <Styled.RadioInput value={id} name='category-radio' id={labelText} type='radio' data-id={id} />
      )}
      <Styled.RadioLabel htmlFor={labelText}>{capitalize(labelText)}</Styled.RadioLabel>
    </Styled.FilterBtn>
  );
};

FilterButton.propTypes = { labelText: PropTypes.string.isRequired, id: PropTypes.number.isRequired, checkedBtn: PropTypes.bool };

export default FilterButton;
