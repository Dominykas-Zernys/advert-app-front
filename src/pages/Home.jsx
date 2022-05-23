import React from 'react';
import AdvertsGrid from '../components/AdvertsGrid/AdvertsGrid';
import Container from '../components/Container/Container';
import Main from '../components/Main/Main';
import Subtitle from '../UI/Subtitle/Subtitle';
import Title from '../UI/Title/Title';

const Home = () => {
  return (
    <Main>
      <Container minHeight='4rem' width='60%'>
        <Title marginBottom='0'>Advertise Yourself!</Title>
      </Container>
      <Subtitle>A place to advertise and find all kinds of services!</Subtitle>
      <AdvertsGrid>
        <div>sdfasd</div>
        <div>sdfsdf</div>
        <div>sdfsdf</div>
        <div>sdfsdf</div>
      </AdvertsGrid>
    </Main>
  );
};

export default Home;
