// In loginpopup.jsx
import React, { useState } from 'react';
import './loginpopup.css';
import * as assets from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState('Login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    username: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowLogin(false);
  };

  const toggleState = () => {
    setCurrentState(prev => prev === 'Login' ? 'Sign Up' : 'Login');
    setFormData({
      name: '',
      email: '',
      password: '',
      username: ''
    });
  };

  return (
    <div className='login-popup' onClick={() => setShowLogin(false)}>
      <form className='login-popup-container' onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src="/src/assets/cross_icon.png"
            alt='Close' 
            style={{cursor: 'pointer'}} 
          />
        </div>
        
        <div className='login-popup-inputs'>
          {currentState === 'Sign Up' && (
            <input 
              type='text' 
              name='username' 
              placeholder='Enter your username' 
              value={formData.username}
              onChange={handleChange}
              required 
            />
          )}
          <input 
            type='text' 
            name='name' 
            placeholder='Enter your name' 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type='email' 
            name='email' 
            placeholder='Enter your email' 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <input 
            type='password' 
            name='password' 
            placeholder='Enter your password' 
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>
        
        <button type='submit'>{currentState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        
        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        
        {currentState === 'Login' ? (
          <p>Don't have an account? <span onClick={toggleState}>Sign up here</span></p>
        ) : (
          <p>Already have an account? <span onClick={toggleState}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;