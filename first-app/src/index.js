import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './common/header';
import Footer from './common/footer';
import Page from './page';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Page />
      <Footer />
    </Router>
  </React.StrictMode>
);
