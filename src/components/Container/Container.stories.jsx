import React from 'react';
import Container from './Container';

export const narrowCont = () => (
  <Container width='30%'>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate corrupti
    libero ab saepe veniam autem amet delectus odio, recusandae et commodi quas?
    Sed, quaerat id unde consectetur sequi neque enim!{' '}
  </Container>
);

export const wideCont = () => (
  <Container width='90%'>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate corrupti
    libero ab saepe veniam autem amet delectus odio, recusandae et commodi quas?
    Sed, quaerat id unde consectetur sequi neque enim!{' '}
  </Container>
);

export default {
  title: 'Container',
  component: Container,
};
