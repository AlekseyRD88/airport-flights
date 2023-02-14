import React from 'react';
import './flightTable.scss';
import FlightsAbout from '../flightsAbout/FlightsAbout';

const FlightTable = ({ flights }) => {
  return flights.length === 0 ? (
    <h2>No flights...</h2>
  ) : (
    <table className="table">
      <thead className="table__header">
        <tr>
          <th className="table__item">Terminal</th>
          <th className="table__item">Local time</th>
          <th className="table__item">Destination</th>
          <th className="table__item">Status</th>
          <th className="table__item">Airline</th>
          <th className="table__item">Flight</th>
        </tr>
      </thead>
      <tbody className="table__flights">
        {flights.map((flight, index) => (
          <FlightsAbout flight={flight} key={flight.id} index={index + 1} />
        ))
        .sort((a, b) => new Date(a.timeToStand) - new Date(b.timeToStand))
        }
      </tbody>
    </table>
  );
};

export default FlightTable;