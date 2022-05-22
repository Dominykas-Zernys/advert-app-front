import React from 'react';
import PropTypes from 'prop-types';
import * as S from './PageButton.style';

const PageButton = ({ children }) => {
  return <S.PageBtn>{children}</S.PageBtn>;
};

PageButton.propTypes = { children: PropTypes.string.isRequired };

export default PageButton;
