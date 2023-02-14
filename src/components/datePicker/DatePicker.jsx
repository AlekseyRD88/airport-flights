import React from 'react';
import moment from 'moment';
import ButtonDatePicker from './ButtonDatePicker';
import PropTypes from 'prop-types';

const DatePicker = ({ date, setDate, setValue }) => {
  const handleChange = event => {
    setDate(event.target.value);
    setValue('');
  };
  const handleButton = event => {
    setDate(event.target.closest('button').dataset.day);
    setValue('');
  };
  
  return (
    <div className="navigation-date">
      <div class="navigation__date-calender">
        <span className="navigation__date-value">
        {moment(date).format('DD/MM')}
        </span>
        <input className="navigation__date-input" type="date" onChange={handleChange} />
      </div>

      <div>
        <ButtonDatePicker date={date} 
        dateButton={moment().subtract(1, 'days').format('YYYY-MM-DD')}
        day="Yesterday" handleButton={handleButton}
        />
        <ButtonDatePicker date={date} 
        dateButton={moment().format('YYYY-MM-DD')}
        day="Today" handleButton={handleButton}
        />
        <ButtonDatePicker date={date} 
        dateButton={moment().add(1, 'days').format('YYYY-MM-DD')}
        day="Tomorrow" handleButton={handleButton}
        />
      </div>
    </div>
  );
};

export default DatePicker;

DatePicker.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};