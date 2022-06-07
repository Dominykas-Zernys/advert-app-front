import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './FilterWrapper.style';

const FilterWrapper = ({ children }) => {
  return <Styled.FilterWrap>{children}</Styled.FilterWrap>;
};

FilterWrapper.propTypes = { children: PropTypes.node };

export default FilterWrapper;
