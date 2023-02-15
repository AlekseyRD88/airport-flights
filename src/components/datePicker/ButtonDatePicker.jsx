import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const ButtonDatePicker = ({ date, handleButton, dateButton, day }) => {
  const classNames = date === dateButton 
    ? 'navigation__date-day navigation__date-day_active'
    : 'navigation__date-day';

  return (
    <button
    onClick={handleButton}
    data-day={dateButton}
    className={classNames}
    >
      <div>{moment(dateButton).format('DD/MM')}</div>
      <div>{day}</div>
    </button>
  );
};

export default ButtonDatePicker;

ButtonDatePicker.propTypes = {
  date: PropTypes.string.isRequired,
  dateButton: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  handleButton: PropTypes.func.isRequired,
};