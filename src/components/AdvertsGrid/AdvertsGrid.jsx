import React from 'react';
import PropTypes from 'prop-types';
import * as S from './AdvertsGrid.style';
import Advert from '../../advertComponents/Advert/Advert';

const AdvertsGrid = ({ adverts }) => {
  return (
    <S.Grid>
      {adverts.map((ad) => (
        <Advert key={ad.id} adInfo={ad} />
      ))}
    </S.Grid>
  );
};

AdvertsGrid.propTypes = {
  // adverts: PropTypes.arrayOf,
};

export default AdvertsGrid;
