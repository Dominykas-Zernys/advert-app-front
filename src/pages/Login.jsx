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

const Login = () => {
  // Input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // States for info text
  const [submitFail, setSubmitFail] = useState(false);
  const [failText, setFailText] = useState('');

  // Hooks for successful login and redirect
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Function to restart info text
  function restartInfoText() {
    setSubmitFail(false);
    setFailText('');
  }

  // Function for form submitting
  async function formSubmit(e) {
    e.preventDefault();
    restartInfoText();
    if (areThereEmptyFields([email, password])) {
      setSubmitFail(true);
      setFailText('Fields cannot be empty!');
      return;
    }
    const postRes = await fetchPost('auth/login', {
      email,
      password,
    });
    if (!postRes.success) {
      setSubmitFail(true);
      setFailText(formatInfoText(postRes.err));
      return;
    }
    restartStates([setEmail, setPassword]);
    login(postRes.msg.token, postRes.msg.username, postRes.msg.email);
    navigate('../', { replace: true });
  }

  return (
    <Main>
      <Container width='50%'>
        <Title>Login</Title>
        <Text>
          In order to post new adverts, please login. If you don't have an account, you can register <Link to='/register'>here</Link>.
        </Text>
        <Form type='login' submitHandler={formSubmit} changeHandler={restartInfoText}>
          <Input value={email} setInputValue={setEmail} type='text' labelText='Enter your email:' />
          <Input value={password} setInputValue={setPassword} type='password' labelText='Enter your password:' />
          <PageButton>Let's go!</PageButton>
        </Form>
        {submitFail && <InfoText color={pageColors.danger}>{failText}</InfoText>}
      </Container>
    </Main>
  );
};

export default Login;
