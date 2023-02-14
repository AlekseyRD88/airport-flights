import React from 'react';
import './navigation.scss';
import DatePicker from '../datePicker/DatePicker';
import Direction from '../direction/Direction';

const Navigation = ({ setValue, date, setDate, direction, setDirection }) => {
  return(
    <div className="navigation">
      <Direction direction={direction} setDirection={setDirection} />
      <DatePicker 
      setValue={setValue} date={date} setDate={setDate} />
    </div>
  );
}

export default Navigation;