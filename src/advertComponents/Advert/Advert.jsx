import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Advert.style';

const Advert = ({ adInfo }) => {
  return (
    <S.Ad>
      <S.WrapperLink to='/'>
        <div>{adInfo.title}</div>
      </S.WrapperLink>
    </S.Ad>
  );
};

Advert.propTypes = {};

export default Advert;
