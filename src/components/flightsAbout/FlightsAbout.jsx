import React from 'react';
import './flightsAbout.scss';
import moment from 'moment';
import PropTypes from 'prop-types';

const FlightsAbout = ({ flight, index }) => {
  const { airline, actual, term, status, codeShareData } = flight;
  const airportDestination = flight['airportToID.city_en']
  ? flight['airportToID.city_en']
  : flight['airportFromID.city_en'];

  let terminal;
  if (term === 'A') {
    terminal = '#63c745';
  } else if (term === 'B') {
    terminal = '#d16aae';
  } else terminal = '#1eb7ee';

  const terminalStyle = {color: terminal, borderColor: terminal};

  const classNames = 
    index % 2 === 1
      ? 'table__flight table__flight_odd'
      : 'table__flight';
  return (
    <tr className={classNames}>
       <td className="table__item">
        <span className="terminal" style={terminalStyle}>
          {term}
        </span>
       </td>
       <td className="table__item">
        {moment(actual).format('h:mm a')}
       </td>
       <td className="table__item">{airportDestination}</td>
       <td className="table__item">{status}</td>
       <td className="table__item airline">
        <img className="airline__logo" src={airline.en.logoName} alt={airline.en.name} />
        {airline.en.name}
       </td>
       <td className="table__item">{codeShareData[0].codeShare}</td>
    </tr>
  );
};

export default FlightsAbout;

FlightsAbout.propTypes = {
  flight: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};