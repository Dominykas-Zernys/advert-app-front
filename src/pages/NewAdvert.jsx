import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';

const NewAdvert = () => {
  // Hooks for redirection if user not logged in
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect to login page if user is not logged in
  useEffect(() => {
    !isLoggedIn && navigate('/login', { replace: true });
  }, [isLoggedIn]);

  return <div>NewAdvert</div>;
};

export default NewAdvert;
