import React from 'react';
import Input from './Input';

export const numberInput = () => (
  <Input labelText='Insert number:' type='number' />
);
export const textInput = () => <Input labelText='Insert text:' type='text' />;

export default {
  title: 'Input',
  component: Input,
};
