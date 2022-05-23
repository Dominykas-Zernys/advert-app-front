import React from 'react';
import Container from '../components/Container/Container';
import Main from '../components/Main/Main';
import Title from '../UI/Title/Title';

const ErrorPage = () => {
  return (
    <Main>
      <Container width='50%'>
        <div className='error-wrapper'>
          <Title>404 Not found</Title>
        </div>
      </Container>
    </Main>
  );
};

export default ErrorPage;
