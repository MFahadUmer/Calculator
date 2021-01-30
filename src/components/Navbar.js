import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbarContainer">
    <div>
      <h2 className="title">Math Magicians</h2>
    </div>
    <div>
      <Link to="/" className="links">
        Home
      </Link>
      <span className="verticalLine">|</span>
      <Link to="/calculator" className="links">
        Calculator
      </Link>
      <span className="verticalLine">|</span>
      <Link to="/quote" className="links">
        Quote Of The Day
      </Link>
    </div>
  </div>
);

export default Navbar;
