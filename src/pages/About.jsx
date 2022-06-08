import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { advertStyles } from '../advertComponents/advertStyles';
import Container from '../components/Container/Container';
import Main from '../components/Main/Main';
import StylePreview from '../components/StylePreview/StylePreview';
import { AuthContext } from '../helpers/AuthContext';
import Subtitle from '../UI/Subtitle/Subtitle';
import Text from '../UI/Text/Text';
import Title from '../UI/Title/Title';

const About = () => {
  // Check if user is logged in to remove or add login and register links
  const { isLoggedIn } = useContext(AuthContext);

  // Array to map out images for style preview
  const previewArr = [
    { name: 'pastel', banner: 'img/banner_1.PNG', full: 'img/page1.PNG' },
    { name: 'currant', banner: 'img/banner_2.PNG', full: 'img/page2.PNG' },
    { name: 'retro', banner: 'img/banner_3.PNG', full: 'img/page3.PNG' },
    { name: 'elegant', banner: 'img/banner_4.PNG', full: 'img/page4.PNG' },
    { name: 'playful', banner: 'img/banner_5.PNG', full: 'img/page5.PNG' },
    { name: 'minimal', banner: 'img/banner_6.PNG', full: 'img/page6.PNG' },
    { name: 'social media', banner: 'img/banner_7.PNG', full: 'img/page7.PNG' },
    { name: 'letter', banner: 'img/banner_8.PNG', full: 'img/page8.PNG' },
  ];

  return (
    <Main>
      <Container width='85%'>
        <Title>About Us</Title>
        <Text>
          Who are we? We are whatever you decide for us to be. Because this page is for our users to place their adverts, you - the user - create the content of
          'Advertise yourself'. Do you have a business you want to advertise? Or maybe you want people to know about an event you're hosting? Or maybe you're on
          the other side of the fence - you want to find some specific services? Then this page is for you.
        </Text>
        <Subtitle>Looking for a service?</Subtitle>
        <Text>
          Look no further - on our{' '}
          <Link to='/' target='_blank' rel='noopener noreferrer'>
            homepage
          </Link>{' '}
          you will find all the adverts users have placed on 'Advertise yourself'. You don't need to register or login to see the adverts - we want our content
          to reach the widest audience possible, so all the adverts are accessible to everyone. If you are looking for something specific, you can always use
          the filter or search function to find something for your needs. The home page only shows the short version of adverts - if you want to find out more
          about any specific advert, click on it to expand.
        </Text>
        <Subtitle>Want to place an advert?</Subtitle>
        <Text>
          Placing an advert on 'Advertise Yourself' is very easy - all you need to do is{' '}
          {isLoggedIn ? (
            'register and login'
          ) : (
            <>
              <Link to='/register' target='_blank' rel='noopener noreferrer'>
                register
              </Link>
              <span> and </span>
              <Link to='/login' target='_blank' rel='noopener noreferrer'>
                login
              </Link>
            </>
          )}{' '}
          to the site, which takes no more than 5 minutes. Then, head to the{' '}
          {isLoggedIn ? (
            <Link to='/create-advert' target='_blank' rel='noopener noreferrer'>
              Create advert
            </Link>
          ) : (
            '"Create advert"'
          )}{' '}
          page. Fill in all the fields and submit your advert - you're done! Notice, that you have to upload the main image to display on your full advert and
          provide a link to a secondary image that will show up on the main page on your advert banner. This is a measure to assure a fast load time for our
          page. You will also have to choose a style for your advert. All styles are shown below.
        </Text>
        <Subtitle>Advert styles</Subtitle>
        <Text>
          Currently, there are {advertStyles.length} advert styles on our website. Choose the one you want your advert to show up in. Here you can see what the
          styles we have and how they look like. The advert banner is a smaller version of your advert that everyone will see on the{' '}
          <Link to='/' target='_blank' rel='noopener noreferrer'>
            Home
          </Link>{' '}
          page. The full version is shown when your advert banner is clicked on.
        </Text>
        {/* {previewArr.map((ad) => (
          <StylePreview key={ad.name} name={ad.name} bannerImg={ad.banner} pageImg={ad.full} />
        ))} */}
      </Container>
    </Main>
  );
};

export default About;
