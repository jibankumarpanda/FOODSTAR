import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { assets } from '../../assets/assets';



const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState(0);

  const menuItems = [
    { id: 'home', label: 'Home', targetId: 'home', isLink: true, path: '/' },
    { id: 'menu', label: 'Menu', targetId: 'explore-menu' },
    { id: 'mobile-app', label: 'Mobile App', targetId: 'app-downlode' },
    { id: 'contact', label: 'Contact Us', targetId: 'footer' },
    
  ];

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setMenu(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = (e, item) => {
    e.preventDefault();
    setMenu(item.id);
    
    // If we're already on the home page, scroll to top
    if (window.location.pathname === '/') {
      const homeElement = document.getElementById('home');
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Otherwise, navigate to home
      window.location.href = '/';
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add your search logic here
    }
  };

  const toggleSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) searchInput.focus();
      }, 0);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to='/'><img src={assets.logo} alt="FoodStar Logo" className="logo" /></Link>
      </div>
      
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li 
            key={item.id}
            className={`${menu === item.id ? 'active' : ''} menu-item`}
          >
            {item.isLink ? (
              <a 
                href={item.path}
                className="nav-link"
                onClick={(e) => handleHomeClick(e, item)}
              >
                {item.label}
              </a>
            ) : (
              <a 
                href={`#${item.targetId}`}
                onClick={(e) => {
                  setMenu(item.id);
                  scrollToSection(e, item.targetId);
                }}
                className="nav-link"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
      
      <div className="navbar-right">
        <div className={`search-container ${isSearchOpen ? 'active' : ''}`}>
          <form onSubmit={handleSearch} className="search-form" onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Search food, drinks, etc..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Search food items"
            />
          </form>
        </div>
        
        <div className="navbar-actions">
          <button 
            className="search-toggle"
            onClick={toggleSearch}
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
             <Link to='/cart'><img 
                src={assets.basket_icon} 
                alt="Shopping Cart" 
                className="cart-icon"
              /></Link>
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