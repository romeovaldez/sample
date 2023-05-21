import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './common/header';
import Footer from './common/footer';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  </React.StrictMode>
);
