import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Container.style';

const Container = ({ width, children, minHeight = '16rem' }) => {
  return (
    <Styled.Container className='about-container' minHeight={minHeight} width={width}>
      {children}
    </Styled.Container>
  );
};

Container.propTypes = { width: PropTypes.string, children: PropTypes.node, minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) };

export default Container;
