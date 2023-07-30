import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './containers/header/Header';

import Menu from './containers/menu/Menu';

import Main from './containers/main/Main'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className='wrapper'>
      <Menu />
      <Main />
    </div>
  </React.StrictMode>
);