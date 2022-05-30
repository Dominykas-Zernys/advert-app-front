import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './FullAdvert.style';
import { advertStyles } from '../advertStyles';
import { capitalize } from '../../helpers/miscFunctions';

const FullAdvert = ({ adInfo }) => {
  const [adStyle, setAdStyle] = useState('');
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // Find style by style id from database
  useEffect(() => {
    const styleId = adInfo.styleId;
    setAdStyle(advertStyles.find((style) => style.id === styleId));
  }, [adInfo]);

  // Function to copy contact when clicked
  function copyPhone(e) {
    navigator.clipboard.writeText(e.target.dataset.id);
    setPhoneCopied(true);
  }

  function copyEmail(e) {
    navigator.clipboard.writeText(e.target.dataset.id);
    setEmailCopied(true);
  }

  // Hooks to display 'copied' text when contact is copied

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (phoneCopied) setPhoneCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [phoneCopied]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (emailCopied) setEmailCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [emailCopied]);

  return (
    adStyle && (
      <S.AdWrapper adStyle={adStyle}>
        <S.TitleWrapper>
          <S.Title className='container' adStyle={adStyle}>
            {capitalize(adInfo.title)}
          </S.Title>
        </S.TitleWrapper>
        <S.ContactsWrapper>
          <S.Contact onClick={copyPhone} data-id={adInfo.phone} className='container' adStyle={adStyle}>
            {phoneCopied ? 'phone copied!' : `Tel.: +${adInfo.phone}`}
          </S.Contact>
          <S.Contact onClick={copyEmail} data-id={adInfo.email} className='container' adStyle={adStyle}>
            {emailCopied ? 'email copied!' : `Email: ${adInfo.email}`}
          </S.Contact>
        </S.ContactsWrapper>
        <S.ContentWrapper>
          <S.Description className='container' adStyle={adStyle}>
            {capitalize(adInfo.description)}
          </S.Description>
          <S.Img className='container' adStyle={adStyle} imageSrc={adInfo.imageSrc} />
        </S.ContentWrapper>
      </S.AdWrapper>
    )
  );
};

FullAdvert.propTypes = {
  adInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    styleId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default FullAdvert;
