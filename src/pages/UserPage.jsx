import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdvertsGrid from '../components/AdvertsGrid/AdvertsGrid';
import Container from '../components/Container/Container';
import Main from '../components/Main/Main';
import Wrapper from '../components/Wrapper/Wrapper';
import { AuthContext } from '../helpers/AuthContext';
import Subtitle from '../UI/Subtitle/Subtitle';
import Text from '../UI/Text/Text';
import Title from '../UI/Title/Title';

const UserPage = () => {
  const username = localStorage.getItem('username');

  return (
    <Main>
      <Container minHeight='4rem' width='60%'>
        <Title marginBottom='0'>Hello, {username}</Title>
      </Container>
      <Subtitle>Your adverts</Subtitle>
      <Text center={true} textIndent={false}>
        You have x adverts. If you want to post a new one, click <Link to='/create-advert'>here</Link>
      </Text>
      <AdvertsGrid>
        <div>asdfasd</div>
        <div>asdfasd</div>
        <div>asdfasd</div>
        <div>asdfasd</div>
        <div>asdfasd</div>
      </AdvertsGrid>
    </Main>
  );
};

export default UserPage;
