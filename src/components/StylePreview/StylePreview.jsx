import React from 'react';
import PropTypes from 'prop-types';
import * as S from './StylePreview.style';
import { capitalize } from '../../helpers/miscFunctions';

const StylePreview = ({ name, bannerImg, pageImg }) => {
  return (
    <S.PreviewWrapper>
      <S.StyleType>{capitalize(name)}</S.StyleType>
      <S.PreviewFlex>
        <div>
          <S.Img src={bannerImg} />
          <S.previewCaption>Banner</S.previewCaption>
        </div>
        <div>
          <S.Img src={pageImg} />
          <S.previewCaption>Full advert</S.previewCaption>
        </div>
      </S.PreviewFlex>
    </S.PreviewWrapper>
  );
};

StylePreview.propTypes = { name: PropTypes.string.isRequired, bannerImg: PropTypes.string.isRequired, pageImg: PropTypes.string.isRequired };

export default StylePreview;
