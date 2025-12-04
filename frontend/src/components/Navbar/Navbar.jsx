import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          FoodStar
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/place-order" className="nav-link">
              Place Order
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
