import React from 'react';
import PropTypes from 'prop-types';
import * as S from './FilterWrapper.style';

const FilterWrapper = ({ children }) => {
  return <S.FilterWrap>{children}</S.FilterWrap>;
};

FilterWrapper.propTypes = { children: PropTypes.node };

export default FilterWrapper;
