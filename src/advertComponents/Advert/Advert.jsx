import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Advert.style';
import { advertStyles } from '../advertStyles';
import { capitalize } from '../../helpers/miscFunctions';

const Advert = ({ adInfo }) => {
  // States for displaying 'copied' text when contacts copied
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // Hooks for getting style data using style_id
  const [adStyle, setAdStyle] = useState('');

  useEffect(() => {
    const styleId = adInfo.styleId;
    setAdStyle(advertStyles.find((style) => style.id === styleId));
  }, [adInfo]);

  // Function to copy contact information on click
  function handlePhoneCopy(e) {
    navigator.clipboard.writeText(e.target.dataset.id);
    setPhoneCopied(true);
    e.preventDefault();
  }

  function handleEmailCopy(e) {
    navigator.clipboard.writeText(e.target.dataset.id);
    setEmailCopied(true);
    e.preventDefault();
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
      <S.Ad adstyle={adStyle}>
        <S.WrapperLink imagesrc={adInfo.imageSrc} adstyle={adStyle} to={'/advert/' + adInfo.id}>
          <div className='title'>
            <h3 className='title-header'>{capitalize(adInfo.title)}</h3>{' '}
            <div className='contacts'>
              <h3 data-id={adInfo.phone} onClick={handlePhoneCopy} className='contact'>
                {phoneCopied && <span className='copied-text'>Phone copied!</span>} +{adInfo.phone}
              </h3>
              <h3 data-id={adInfo.email} onClick={handleEmailCopy} className='contact'>
                {emailCopied && <span className='copied-text'>Email copied!</span>} {adInfo.email}
              </h3>
            </div>
          </div>
          <div className='content'>
            <p className='short-description'>{capitalize(adInfo.shortDescription)}</p>
          </div>
        </S.WrapperLink>
      </S.Ad>
    )
  );
};

Advert.propTypes = {};

export default Advert;
