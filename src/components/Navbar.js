import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import App from './App';
import Quote from './Quote';
import Home from './Home';

const Navbar = () => (
  <div className="navbarContainer">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={App} />
      <Route path="/quote" component={Quote} />
    </Switch>
    <div>
      <h2>Math Magicians</h2>
    </div>
    <div>
      <Link to="/">Home </Link>
      <Link to="/calculator">Calculator </Link>
      <Link to="/quote">Quote of the Day </Link>
    </div>
  </div>
);

export default Navbar;
