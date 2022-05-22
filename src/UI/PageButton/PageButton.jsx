import React from 'react';
import PropTypes from 'prop-types';
import * as S from './PageButton.style';

const PageButton = ({ children, handleClick }) => {
  return <S.PageBtn onClick={handleClick}>{children}</S.PageBtn>;
};

PageButton.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default PageButton;
