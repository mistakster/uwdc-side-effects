import React from 'react';
import './Logo.css';
import logo from './logo.svg';

const Logo = () => {
  return (
    <img src={logo} className="Logo" alt="React logo"/>
  );
};

export default Logo;
