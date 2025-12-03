import React, { useState } from 'react';
import './loginpopup.css';
import assets from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState('sign up');
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' />
        </div>
        <div className='login-popup-inputs'>
            {currentState === "sign up" ? <></> : <input type='text' placeholder='Enter your username' required />  }
          <input type='text' placeholder='Enter your name' required />
          <input type='text' placeholder='Enter your email' required />
          <input type='password' placeholder='Enter your password' required />
        </div>
        <button>{currentState === "sign up" ? "create account" : "Login"}</button>
        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>by connecting, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="sign up"?<p>By creating an account, I agree to the terms of service & privacy policy.</p>:<></>}
        <p>Create a new account? <span>click here</span></p>
        <p>Alrady have an acount? <span>Login here</span></p>
        
      </form>
    </div>
    );
}