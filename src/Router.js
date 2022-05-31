import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import ProtectedRoute from './helpers/ProtectedRoute';
import RedirectRoute from './helpers/redirectRoute';
import About from './pages/About';
import AdvertPage from './pages/AdvertPage';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import NewAdvert from './pages/NewAdvert';
import Register from './pages/Register';
import UserPage from './pages/UserPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<RedirectRoute />}>
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='/register' element={<RedirectRoute />}>
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='/user' element={<ProtectedRoute />}>
          <Route path='/user' element={<UserPage />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/advert/:adId' element={<AdvertPage />} />
        <Route path='/create-advert' element={<ProtectedRoute />}>
          <Route path='/create-advert' element={<NewAdvert />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
