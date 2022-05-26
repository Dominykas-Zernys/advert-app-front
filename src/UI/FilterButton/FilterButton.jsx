import React from 'react';
import PropTypes from 'prop-types';
import * as S from './FilterButton.style';
import { capitalize } from '../../helpers/miscFunctions';

const FilterButton = ({ labelText, id, checkedBtn = false }) => {
  return (
    <S.FilterBtn>
      {checkedBtn ? (
        <S.RadioInput value={0} defaultChecked='checked' name='category-radio' id={labelText} type='radio' data-id={id} />
      ) : (
        <S.RadioInput value={id} name='category-radio' id={labelText} type='radio' data-id={id} />
      )}
      <S.RadioLabel htmlFor={labelText}>{capitalize(labelText)}</S.RadioLabel>
    </S.FilterBtn>
  );
};

FilterButton.propTypes = {};

export default FilterButton;
