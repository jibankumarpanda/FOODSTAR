import React, { useState } from 'react';
import './navbar.css';
import assets from '../../assets/assets';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="Navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</li>
        <li onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li oneClick={() => setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>Mobile-app</li>
        <li oneClick={() => setMenu("contact us")}className={menu==="contact-us"?"active":""}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="cart" />
          <div className="dot"></div>
        </div>
        <button>onClick={()=>setShowLogin(true)}sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
