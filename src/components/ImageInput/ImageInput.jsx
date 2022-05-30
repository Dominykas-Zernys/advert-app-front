import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ImageInput.style';

const ImageInput = ({ setState }) => {
  return (
    <S.InputWrap>
      <label htmlFor='image'>Choose image: (jpg/jpeg/png, {'<'}1Mb)</label>
      <S.ImgInput name='image' type='file' accept='image/*' onChange={(e) => setState(e.target.files[0])} />
    </S.InputWrap>
  );
};

ImageInput.propTypes = { setState: PropTypes.func.isRequired };

export default ImageInput;
