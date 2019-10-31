import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
          <div className="nav-links header-font">
            <p>About</p>
            <p>Portfolio</p>
            <p>Contact</p>
          </div>
      </header>
    );
  }
}

export default Header;