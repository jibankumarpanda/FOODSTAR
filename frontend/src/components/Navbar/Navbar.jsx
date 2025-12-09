import React, { useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState(0); // Example cart items count

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'mobile-app', label: 'Mobile App' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add your search logic here
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={assets.logo} alt="FoodStar Logo" className="logo" />
      </div>
      
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li 
            key={item.id}
            onClick={() => setMenu(item.id)}
            className={`${menu === item.id ? 'active' : ''} menu-item`}
          >
            {item.label}
          </li>
        ))}
      </ul>
      
      <div className="navbar-right">
        <div className={`search-container ${isSearchOpen ? 'active' : ''}`}>
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search food, drinks, etc..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Search food items"
            />
            <button type="submit" className="search-button" aria-label="Search">
              <img src={assets.search_icon} alt="" className="search-icon" />
            </button>
          </form>
        </div>
        
        <div className="navbar-actions">
          <button 
            className="search-toggle"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label={isSearchOpen ? 'Close search' : 'Open search'}
          >
            <img 
              src={isSearchOpen ? (assets.close_icon || assets.search_icon) : assets.search_icon} 
              alt="" 
              className="action-icon"
            />
          </button>
          
          <div className="navbar-cart">
            <div className="cart-icon-wrapper">
              <img 
                src={assets.basket_icon} 
                alt="Shopping Cart" 
                className="cart-icon"
              />
              {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
            </div>
          </div>
          
          <button 
            className="login-button"
            onClick={() => setShowLogin(true)}
            aria-label="Sign in"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
