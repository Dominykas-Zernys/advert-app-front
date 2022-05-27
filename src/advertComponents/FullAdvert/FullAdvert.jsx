import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './FullAdvert.style';
import { advertStyles } from '../advertStyles';
import { capitalize } from '../../helpers/miscFunctions';

const FullAdvert = ({ adInfo }) => {
  const [adStyle, setAdStyle] = useState('');

  // Find style by style id from database
  useEffect(() => {
    const styleId = adInfo.styleId;
    setAdStyle(advertStyles.find((style) => style.id === styleId));
  }, [adInfo]);

  return (
    adStyle && (
      <S.AdWrapper adStyle={adStyle}>
        <S.TitleWrapper>
          <S.Title className='container' adStyle={adStyle}>
            {capitalize(adInfo.title)}
          </S.Title>
        </S.TitleWrapper>
        <S.ContactsWrapper>
          <S.Contact className='container' adStyle={adStyle}>
            Tel.: {adInfo.phone}
          </S.Contact>
          <S.Contact className='container' adStyle={adStyle}>
            Email: {adInfo.email}
          </S.Contact>
        </S.ContactsWrapper>
        <S.ContentWrapper>
          <S.Description className='container' adStyle={adStyle}>
            {adInfo.description}
          </S.Description>
          <S.Img className='container' adStyle={adStyle} imageSrc={adInfo.imageSrc} />
        </S.ContentWrapper>
      </S.AdWrapper>
    )
  );
};

// FullAdvert.propTypes = {};

export default FullAdvert;
