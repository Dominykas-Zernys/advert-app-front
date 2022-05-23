import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const RedirectRoute = () => {
  const { isLoggedIn, checkingForToken } = useContext(AuthContext);

  // If user is logged in, redirect to home page
  if (!checkingForToken) return !isLoggedIn ? <Outlet /> : <Navigate to='/' />;
};

export default RedirectRoute;
