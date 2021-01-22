import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import App from './components/App';
import Quote from './components/Quote';

ReactDOM.render(
  <Router>
    <div className="mainContainer">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={App} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root'),
);
