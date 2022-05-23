import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../components/Container/Container';
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

const Register = () => {
  // Input values
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  // States for info text
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [failText, setFailText] = useState('');

  // // Hooks for redirection if user is already logged in
  // const { isLoggedIn } = useContext(AuthContext);
  // const navigate = useNavigate();

  // // Redirect to homepage if user is already logged in
  // useEffect(() => {
  //   isLoggedIn && navigate('../', { replace: true });
  // }, [isLoggedIn]);

  // Function to restart info text
  function restartInfoText() {
    restartStates([setSubmitSuccess, setSubmitFail], false);
    setFailText('');
  }

  // Function for form submitting
  async function formSubmit(e) {
    e.preventDefault();
    restartInfoText();
    if (areThereEmptyFields([email, username, password, repeatPassword])) {
      setSubmitFail(true);
      setFailText('Fields cannot be empty!');
      return;
    }
    if (password !== repeatPassword) {
      setSubmitFail(true);
      setFailText('The passwords must match!');
      return;
    }
    const postRes = await fetchPost('auth/register', {
      email,
      username,
      password,
    });
    if (!postRes.success) {
      setSubmitFail(true);
      setFailText(formatInfoText(postRes.err));
      return;
    }
    setSubmitSuccess(true);
    restartStates([setEmail, setUsername, setPassword, setRepeatPassword]);
  }

  return (
    <Main>
      <Container width='60%'>
        <Title>Register</Title>
        <Text>
          In order to post new adverts, you have to register as a new user. This will only take a few minutes. If you already have an account, you can login{' '}
          <Link to='/login'>here</Link>.
        </Text>
        <Form type='register' submitHandler={formSubmit} changeHandler={restartInfoText}>
          <Input inputValue={email} setInputValue={setEmail} type='email' labelText='Enter your email:' />
          <Input inputValue={username} setInputValue={setUsername} type='text' labelText='Create your username:' />
          <Input inputValue={password} setInputValue={setPassword} type='password' labelText='Create a password:' />
          <Input inputValue={repeatPassword} setInputValue={setRepeatPassword} type='password' labelText='Repeat the password:' />
          <PageButton>Let's go!</PageButton>
        </Form>
        {submitSuccess && (
          <InfoText color={pageColors.text}>
            Register successful! You can now login <Link to='/login'>here</Link>
          </InfoText>
        )}
        {submitFail && <InfoText color={pageColors.danger}>{failText}</InfoText>}
      </Container>
    </Main>
  );
};

export default Register;
