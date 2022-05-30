import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container/Container';
import Dropdown from '../components/Dropdown/Dropdown';
import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import Main from '../components/Main/Main';
import { fetchGet, fetchPostAd } from '../helpers/fetchFunctions';
import { areThereEmptyFields, formatInfoText, restartStates } from '../helpers/miscFunctions';
import { pageColors } from '../helpers/pageColors';
import InfoText from '../UI/InfoText/InfoText';
import PageButton from '../UI/PageButton/PageButton';
import Text from '../UI/Text/Text';
import Title from '../UI/Title/Title';
import ImageInput from '../components/ImageInput/ImageInput';
import { advertStyles } from '../advertComponents/advertStyles';

const NewAdvert = () => {
  // Input values
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [bannerImg, setBannerImg] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [phone, setPhone] = useState('');
  const [style, setStyle] = useState('');

  // States for info text
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [failText, setFailText] = useState('');

  // States to hold categories
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  // Functions to load all categories
  async function getCategories() {
    const cats = await fetchGet('categories');
    setCategories(cats.msg);
    setLoading(false);
  }

  useEffect(() => {
    getCategories();
  }, []);

  // Function to restart info text
  function restartInfoText() {
    restartStates([setSubmitSuccess, setSubmitFail], false);
    setFailText('');
  }

  // Function for form submitting
  async function formSubmit(e) {
    e.preventDefault();
    restartInfoText();
    if (areThereEmptyFields([title, shortDescription, category, description, email, phone, bannerImg, style]) || !image) {
      setSubmitFail(true);
      setFailText('Fields cannot be empty!');
      return;
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('shortDescription', shortDescription);
    formData.append('category', category);
    formData.append('image', image);
    formData.append('bannerImg', bannerImg);
    formData.append('description', description);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('style', style);
    const postRes = await fetchPostAd('adverts', formData, localStorage.getItem('token'));
    if (!postRes.success) {
      setSubmitFail(true);
      setFailText(formatInfoText(postRes.err));
      return;
    }
    setSubmitSuccess(true);
    restartStates([setTitle, setShortDescription, setCategory, setImage, setDescription, setBannerImg, setEmail, setPhone, setStyle]);
    e.target.image.value = '';
  }

  return (
    <Main>
      <Container width='70%'>
        <Title>New Advert</Title>
        <Form type={'advert'} submitHandler={formSubmit} changeHandler={restartInfoText}>
          <Input placeholder='Title' inputValue={title} setInputValue={setTitle} type='text' labelText='Create a title for your advert' />
          {loading ? (
            <div className='loading-text'>Loading categories...</div>
          ) : (
            <Dropdown
              placeholder='Select category...'
              inputValue={category}
              setInputValue={setCategory}
              labelText='Select advert category:'
              options={categories}
            />
          )}
          <Input
            placeholder='Short description'
            inputValue={shortDescription}
            setInputValue={setShortDescription}
            type='textarea'
            height='4rem'
            labelText='Write a short description for your advert. It will show up on the front page:'
            maxLength={100}
          />
          <Input
            placeholder='Full description'
            inputValue={description}
            height='7rem'
            setInputValue={setDescription}
            type='textarea'
            labelText='Write a full description that will show up on advert page:'
            maxLength={400}
          />
          <Input placeholder='Email' inputValue={email} setInputValue={setEmail} type='email' labelText='Your contact email. It will be shown on the advert:' />
          <Input placeholder='Tel' inputValue={phone} setInputValue={setPhone} type='text' labelText='Your contact phone. It will be shown on the advert:' />
          <ImageInput setState={setImage} />
          <Input
            placeholder='Image url'
            inputValue={bannerImg}
            setInputValue={setBannerImg}
            type='text'
            labelText='Provide a link to a secondary image for your banner:'
          />
          <Dropdown
            placeholder='Select style...'
            inputValue={style}
            setInputValue={setStyle}
            labelText='Select a style for your advert:'
            options={advertStyles}
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
