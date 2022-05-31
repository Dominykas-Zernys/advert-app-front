import React from 'react';
import PropTypes from 'prop-types';
import * as S from './PageButton.style';

const PageButton = ({ children, handleClick, className = '' }) => {
  return (
    <S.PageBtn className={className} onClick={handleClick}>
      {children}
    </S.PageBtn>
  );
};

PageButton.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default PageButton;
