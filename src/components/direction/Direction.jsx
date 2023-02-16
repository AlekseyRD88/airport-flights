import React from 'react';
import PropTypes from 'prop-types';

const Direction = ({ direction, setDirection }) => {
  const getClassName = (buttonDirection) => {
    return direction === buttonDirection
      ? 'button button_active navigation__button'
      : 'button navigation__button';
  };
  const handleClick = (event) => {
    setDirection(event.target.textContent.toLowerCase());
  };
  return (
    <div className="navigation__direction">
      <button className={getClassName('departure')} onClick={handleClick}>
      <i className="fa-solid fa-plane navigation__icon navigation__icon_departures" />
        Departure
      </button>
      <button className={getClassName('arrival')} onClick={handleClick}>
      <i className="fa-solid fa-plane navigation__icon navigation__icon_arrivals" />
        Arrival
      </button>
    </div>
  );
};

export default Direction;

Direction.propTypes = {
  direction: PropTypes.string.isRequired,
  setDirection: PropTypes.func.isRequired,
};