import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container/Container';
import Main from '../components/Main/Main';
import Wrapper from '../components/Wrapper/Wrapper';
import { AuthContext } from '../helpers/AuthContext';
import Title from '../UI/Title/Title';

const UserPage = () => {
  const username = localStorage.getItem('username');

  return (
    <Main>
      <Container width='100%'>
        <Title>Hello, {username}</Title>
      </Container>
    </Main>
  );
};

export default UserPage;
