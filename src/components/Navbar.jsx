import React, { useState } from 'react';
import './navbar.css';
import assets from '../../assets/assets';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="Navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="nav-menu">
        <li className={menu === "Home" ? "active" : ""}>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="cart-icon">
          <img src={assets.basket_icon} alt="cart" />
          <div className="dot"></div>
        </div>
        <button>onClick={()=>setShowLogin(true)}sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
