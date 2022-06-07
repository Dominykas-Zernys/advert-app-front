import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './StylePreview.style';
import { capitalize } from '../../helpers/miscFunctions';

const StylePreview = ({ name, bannerImg, pageImg }) => {
  return (
    <Styled.PreviewWrapper>
      <Styled.StyleType>{capitalize(name)}</Styled.StyleType>
      <Styled.PreviewFlex>
        <div>
          <Styled.Img src={bannerImg} />
          <Styled.PreviewCaption>Banner</Styled.PreviewCaption>
        </div>
        <div>
          <Styled.Img src={pageImg} />
          <Styled.PreviewCaption>Full advert</Styled.PreviewCaption>
        </div>
      </Styled.PreviewFlex>
    </Styled.PreviewWrapper>
  );
};

StylePreview.propTypes = { name: PropTypes.string.isRequired, bannerImg: PropTypes.string.isRequired, pageImg: PropTypes.string.isRequired };

export default StylePreview;
