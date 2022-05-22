import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container/Container';
import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import Main from '../components/Main/Main';
import PageButton from '../UI/PageButton/PageButton';
import Text from '../UI/Text/Text';
import Title from '../UI/Title/Title';

const Login = () => {
  function formSubmit(e) {
    e.preventDefault();
    console.log('login form submitted!');
  }

  return (
    <Main>
      <Container width='40%'>
        <Title>Login</Title>
        <Text>
          In order to post new adverts, please login. If you don't have an
          account, you can register <Link to='/register'>here</Link>.
        </Text>
        <Form type='login' submitHandler={formSubmit}>
          <Input type='text' labelText='Enter your username:' />
          <Input type='password' labelText='Enter your password:' />
          <PageButton>Let's go!</PageButton>
        </Form>
      </Container>
    </Main>
  );
};

export default Login;
