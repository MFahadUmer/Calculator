import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import Navbar from './components/Navbar';

ReactDOM.render(
  <Router>
    <Navbar />
  </Router>,
  document.getElementById('root'),
);
