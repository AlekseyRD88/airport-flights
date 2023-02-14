import './header.scss';
import React from 'react';

const Header = () => {
  return (
    <div className="header">
    <div className="logo">
      <span className="logo__name">Kyiv</span>
      <span className="logo__title">Sykorsky Airport</span>
    </div>
    <nav className="navigation">
      <ul className="navigation-list">
      <li className="navigation-list__item">Passengers Info</li>
        <li className="navigation-list-item">IEV Service</li>
        <li className="navigation-list-item">VIP</li>
        <li className="navigation-list-item">Press Centre</li>
      </ul>
    </nav>
    <div className="language">En</div>
  </div>
  );
}

export default Header;