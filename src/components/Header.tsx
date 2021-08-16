import React from "react";
import "./styles/Header.css"
import './styles/Animations.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header animate-appear" >
        <h1>Estudando Front-end na Trybe</h1>
      </header>
    );
  }
}

export default Header;
