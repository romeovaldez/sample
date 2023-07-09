import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './common/header';
import Footer from './common/footer';
import Page from './page';
import { BrowserRouter } from 'react-router-dom';
import './common/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Page />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
