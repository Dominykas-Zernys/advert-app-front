import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Container.style';

const Container = ({ width, children, minHeight = '16rem' }) => {
  return (
    <S.Container className='about-container' minHeight={minHeight} width={width}>
      {children}
    </S.Container>
  );
};

Container.propTypes = { width: PropTypes.string, children: PropTypes.node, minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) };

export default Container;
