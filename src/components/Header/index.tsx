/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header animate-appear">
        <h1>Estudando Front-end na Trybe</h1>
      </header>
    );
  }
}

export default Header;
