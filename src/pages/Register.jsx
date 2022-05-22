import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container/Container';
import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import Main from '../components/Main/Main';
import PageButton from '../UI/PageButton/PageButton';
import Text from '../UI/Text/Text';
import Title from '../UI/Title/Title';

const Register = () => {
  function formSubmit(e) {
    e.preventDefault();
    console.log('register form submitted!');
  }

  return (
    <Main>
      <Container width='60%'>
        <Title>Register</Title>
        <Text>
          In order to post new adverts, you have to register as a new user. This
          will only take a few minutes. If you already have an account, you can
          login <Link to='/login'>here</Link>.
        </Text>
        <Form type='register' submitHandler={formSubmit}>
          <Input type='email' labelText='Enter your email:' />
          <Input type='text' labelText='Create your username:' />
          <Input type='password' labelText='Create a password:' />
          <Input type='password' labelText='Repeat the password:' />
          <PageButton>Let's go!</PageButton>
        </Form>
      </Container>
    </Main>
  );
};

export default Register;
