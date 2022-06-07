import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Form.style';

const Form = ({ children, submitHandler, type, changeHandler }) => {
  return (
    <Styled.Form className={type} onSubmit={submitHandler} onChange={changeHandler}>
      {children}
    </Styled.Form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  submitHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default Form;
