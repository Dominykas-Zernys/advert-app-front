import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../components/Container/Container';
import Dropdown from '../components/Dropdown/Dropdown';
import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import Main from '../components/Main/Main';
import { AuthContext } from '../helpers/AuthContext';
import { fetchPost } from '../helpers/fetchFunctions';
import { areThereEmptyFields, formatInfoText, restartStates } from '../helpers/miscFunctions';
import { pageColors } from '../helpers/pageColors';
import InfoText from '../UI/InfoText/InfoText';
import PageButton from '../UI/PageButton/PageButton';
import Text from '../UI/Text/Text';
import Title from '../UI/Title/Title';

const NewAdvert = () => {
  // Input values
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [style, setStyle] = useState('');

  // States for info text
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [failText, setFailText] = useState('');

  // Function to restart info text
  function restartInfoText() {
    restartStates([setSubmitSuccess, setSubmitFail], false);
    setFailText('');
  }

  // Function for form submitting
  async function formSubmit(e) {
    e.preventDefault();
    restartInfoText();
    console.log([title, shortDescription, category, image, description, email, phone, style]);
    if (areThereEmptyFields([title, shortDescription, category, image, description, email, phone, style])) {
      setSubmitFail(true);
      setFailText('Fields cannot be empty!');
      return;
    }
    const postRes = await fetchPost(
      'adverts',
      {
        title,
        shortDescription,
        category,
        image,
        description,
        email,
        phone,
        style,
      },
      localStorage.getItem('token')
    );
    if (!postRes.success) {
      setSubmitFail(true);
      setFailText(formatInfoText(postRes.err));
      return;
    }
    setSubmitSuccess(true);
    restartStates([setTitle, setShortDescription, setCategory, setImage, setDescription, setEmail, setPhone, setStyle]);
  }

  return (
    <Main>
      <Container width='70%'>
        <Title>New Advert</Title>
        <Form type={'advert'} submitHandler={formSubmit} changeHandler={restartInfoText}>
          <Input placeholder='Title' inputValue={title} setInputValue={setTitle} type='text' labelText='Create a title for your advert' />
          <Dropdown
            placeholder='Select category...'
            inputValue={category}
            setInputValue={setCategory}
            labelText='Select advert category:'
            options={[
              { value: 1, text: 'option vienas' },
              { value: 2, text: 'option du' },
            ]}
          />
          <Input
            placeholder='Short description'
            inputValue={shortDescription}
            setInputValue={setShortDescription}
            type='textarea'
            height='4rem'
            labelText='Write a short description for your advert. It will show up on the front page:'
          />
          <Input
            placeholder='Full description'
            inputValue={description}
            height='7rem'
            setInputValue={setDescription}
            type='textarea'
            labelText='Write a full description that will show up on advert page:'
          />
          <Input placeholder='Email' inputValue={email} setInputValue={setEmail} type='email' labelText='Your contact email. It will be shown on the advert:' />
          <Input placeholder='Tel' inputValue={phone} setInputValue={setPhone} type='text' labelText='Your contact phone. It will be shown on the advert:' />
          <Input inputValue={image} setInputValue={setImage} type='text' labelText='Upload an image for your advert:' />
          <Dropdown
            placeholder='Select style...'
            inputValue={style}
            setInputValue={setStyle}
            labelText='Select a style for your advert:'
            options={[
              { value: 1, text: 'option vienas' },
              { value: 2, text: 'option du' },
            ]}
          />
          <Text center={true} textIndent={false} fontSize='1rem'>
            Don't know which style you want your advert to have? Check out all styles on our <Link to='/about'>About</Link> page
          </Text>
          <PageButton>Let's go!</PageButton>
        </Form>
        {submitSuccess && <InfoText color={pageColors.text}>Advert added successfully!</InfoText>}
        {submitFail && <InfoText color={pageColors.danger}>{failText}</InfoText>}
      </Container>
    </Main>
  );
};

export default NewAdvert;
