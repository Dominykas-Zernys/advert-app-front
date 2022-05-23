import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = () => {
  const { isLoggedIn, checkingForToken } = useContext(AuthContext);

  // If user is not logged in, redirect to login page
  if (!checkingForToken)
    return isLoggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
