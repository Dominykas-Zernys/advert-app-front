import React from 'react';
import PropTypes from 'prop-types';

const ImageInput = ({ setState }) => {
  return <input name='image' type='file' accept='image/*' onChange={(e) => setState(e.target.files[0])} />;
};

ImageInput.propTypes = {};

export default ImageInput;
