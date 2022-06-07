import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './ImageInput.style';

const ImageInput = ({ setState }) => {
  return (
    <Styled.InputWrap>
      <label htmlFor='image'>Choose image: (jpg/jpeg/png, {'<'}1Mb)</label>
      <Styled.ImgInput name='image' type='file' accept='image/*' onChange={(e) => setState(e.target.files[0])} />
    </Styled.InputWrap>
  );
};

ImageInput.propTypes = { setState: PropTypes.func.isRequired };

export default ImageInput;
