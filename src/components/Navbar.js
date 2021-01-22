import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbarContainer">
    <div>
      <h2 className="title">Math Magicians</h2>
    </div>
    <div>
      <Link to="/">
        <p className="links">Home </p>
      </Link>
      <span className="verticalLine">|</span>
      <Link to="/calculator">
        <p className="links">Calculator </p>
      </Link>
      <span className="verticalLine">|</span>
      <Link to="/quote">
        <p className="links">Quote Of The Day </p>
      </Link>
    </div>
  </div>
);

export default Navbar;
