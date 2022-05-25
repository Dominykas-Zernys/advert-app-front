import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './FullAdvert.style';
import { advertStyles } from '../advertStyles';

const FullAdvert = ({ adInfo }) => {
  const [adStyle, setAdStyle] = useState('');

  // Find style by style id from database
  useEffect(() => {
    const styleId = adInfo.style_id;
    setAdStyle(advertStyles.find((style) => style.id === styleId));
  }, [adInfo]);

  return (
    adStyle && (
      <S.AdWrapper adStyle={adStyle}>
        <div>
          <h1>{adInfo.title}</h1>
          <h2>{adInfo.description}</h2>
          <p>{adInfo.short_description}</p>
          <img src={adInfo.image_src} alt='' />
        </div>
      </S.AdWrapper>
    )
  );
};

// FullAdvert.propTypes = {};

export default FullAdvert;
