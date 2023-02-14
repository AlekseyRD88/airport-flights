import { fetchFlights } from '../gateway';

export const FLIGHT_LIST_RECEIVED = 'FLIGHTS_LIST_RECEIVED';

export const flightsListReceived = (arrival, departure) => {
  return {
    type: FLIGHT_LIST_RECEIVED,
    payload: {
      arrival,
      departure
    },
  };
};

export const getFlightsList = (date) => {
  fetchFlights(date).then(flights => {
    dispatch(flightsListReceived(flights.body.arrival, flights.body.departure))
  });
};
