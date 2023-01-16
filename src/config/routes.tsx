import React from 'react';

import About from '../pages/About';
import Home from '../pages/Home';
import Vote from '../pages/Vote';
import Login from '../pages/Login';

const ROUTES = [
  {
    path: '/',
    key: 'HOME_PAGE',
    exact: true,
    component: <Home />,
  },
  {
    path: '/vote',
    key: 'VOTE_PAGE',
    exact: true,
    component: <Vote />,
  },
  {
    path: '/about',
    key: 'ABOUT_PAGE',
    exact: true,
    component: <About />,
  },
  {
    path: '/login',
    key: 'LOGIN_PAGE',
    exact: true,
    component: <Login />,
  },
];
export default ROUTES;
