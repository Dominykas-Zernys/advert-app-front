import React from 'react';
import Navigation from './Navigation';

export const loggedInNav = () => <Navigation isLoggedIn={true} />;
export const loggedOutNav = () => <Navigation isLoggedIn={false} />;

export default {
  title: 'Navigation',
  component: Navigation,
};
