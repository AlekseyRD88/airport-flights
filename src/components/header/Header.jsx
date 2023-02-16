import './header.scss';
import React from 'react';

const Header = () => {
  return (
    <div className="header">
    <div className="logo">
      <span className="logo__name">Kyiv</span>
      <span className="logo__title">Sykorsky Airport</span>
    </div>
    <nav className="header__navigation">
      <ul className="header__navigation-list">
      <li className="header__navigation-list__item">Passengers Info</li>
        <li className="header__navigation-list__item">IEV Service</li>
        <li className="header__navigation-list__item">VIP</li>
        <li className="header__navigation-list__item">Press Centre</li>
      </ul>
    </nav>
    <div className="header__language">En</div>
  </div>
  );
}

export default Header;