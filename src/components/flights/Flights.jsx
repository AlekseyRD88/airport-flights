import React, { useEffect, useState } from 'react';
import './flights.scss';
import Search from '../search/Search';
import FlightsTable from '../flightsTable/FlightsTable';
import Navigation from '../navigation/Navigation';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import * as flightsActions from '../flights.actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { flightArrivalSelector, flightDepartureSelector } from '../flights.selectors';
import moment from 'moment';
import qs from 'qs';

const Flights = ({ departureFlights, arrivalFlights, getFlightsList }) => {
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [direction, setDirection] = useState('');
  const [value, setValue] = useState('');
  const { search, pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    history.push(
      `/${direction}?date=${date}${value ? `&search=${value}` : ''}`
    );
  }, [date, value, direction]);

  useEffect(() => {
    getFlightsList(date);
  }, [date]);

  useEffect(() => {
    if (search) {
      const data = qs.parse(search, { ignoreQueryPrefix: true });
      if (data.date) {
        setDate(data.date);
      }
      if (data.search) {
        set(data.search);
      }
    }
    setDirection(pathname.slice(1) === 'arrival' ? 'arrival' : 'departure');
  }, []);

  const filterFlights = (flights) => {
    return flights.filter((flight) => {
      const place = flight['airportToId.city_en']
        ? flight['airportToId.city_en']
        : flight['airportFromId.city_en'];
      
      return (
      place.toLowerCase().includes(value) || 
      flight.airline.en.name.toLowerCase().includes(value) ||
      flight.codeShareData[0].codeShare.toLowerCase().includes(value)
      );
    });
  };

  return (
    <div className="flights-board">
      <Search setValue={setValue} />
      <div className="about">
        <Navigation date={date} setDate={setDate} 
        direction={direction} setDirection={setDirection} setValue={setValue} />
        <Switch>
          <Route path="/departure">
            <FlightsTable flights={filterFlights(departureFlights)} />
          </Route>
          <Route path="/arrival">
            <FlightsTable flights={filterFlights(arrivalFlights)} />
          </Route>
          <Route path="*">
            <h4>Reload this page</h4>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    arrivalFlights: flightArrivalSelector(state),
    departureFlights: flightDepartureSelector(state),
  };
};

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
}

export default connect(mapState, mapDispatch)(Flights);

Flights.propTypes = {
  arrivalFlights: PropTypes.array.isRequired,
  departureFlights: PropTypes.array.isRequired,
  getFlightsList: PropTypes.func.isRequired,
};