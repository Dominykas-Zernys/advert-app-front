import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './PageButton.style';

const PageButton = ({ children, handleClick, className = '' }) => {
  return (
    <Styled.PageBtn className={className} onClick={handleClick}>
      {children}
    </Styled.PageBtn>
  );
};

PageButton.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default PageButton;
