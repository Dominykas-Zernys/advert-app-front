import React from 'react';
import PropTypes from 'prop-types';
import * as S from './AdvertsGrid.style';

const AdvertsGrid = ({ children }) => {
  return <S.Grid>{children}</S.Grid>;
};

AdvertsGrid.propTypes = {
  children: PropTypes.node,
};

export default AdvertsGrid;
