import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container/Container';
import Main from '../components/Main/Main';
import Subtitle from '../UI/Subtitle/Subtitle';
import Text from '../UI/Text/Text';
import Title from '../UI/Title/Title';

const About = () => {
  return (
    <Main>
      <Container width='70%'>
        <Title>About Us</Title>
        <Text>
          Who are we? We are whatever you decide for us to be. Because this page
          is for our users to place their adverts, you - the user - create the
          content of 'Advertise yourself'. Do you have a business you want to
          advertise? Or maybe you want people to know about an event you're
          hosting? Or maybe you're on the other side of the fence - you want to
          find some specific services? Then this page is for you.
        </Text>
        <Subtitle>Looking for a service?</Subtitle>
        <Text>
          Look no further - on our{' '}
          <Link to='/' target='_blank' rel='noopener noreferrer'>
            homepage
          </Link>{' '}
          you will find all the adverts users have placed on 'Advertise
          yourself'. You don't need to register or login to see the adverts - we
          want our content to reach the widest audience possible, so all the
          adverts are accessible to everyone. If you are looking for something
          specific, you can always use the filter or search options to find
          something for your needs. The home page only shows the short version
          of adverts - if you want to find out more about any specific advert,
          click on it to expand.
        </Text>
        <Subtitle>Want to place an advert?</Subtitle>
        <Text>
          Placing an advert on 'Advertise Yourself' is very easy - all you need
          to do is{' '}
          <Link to='/register' target='_blank' rel='noopener noreferrer'>
            register
          </Link>{' '}
          and{' '}
          <Link to='/login' target='_blank' rel='noopener noreferrer'>
            login
          </Link>{' '}
          to the site, which takes no more than 5 minutes.
        </Text>
      </Container>
    </Main>
  );
};

export default About;
