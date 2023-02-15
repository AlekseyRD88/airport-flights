import { FLIGHTS_LIST_RECEIVED } from './flights.actions';

const initialState = {
  flightsList: {
    arrival: [],
    departure: [],
  },
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
        return state;
    case FLIGHTS_LIST_RECEIVED: 
      return {
        ...state, 
        flightsList: {
          arrival: action.payload.arrival,
          departure: action.payload.departure,
        },
      };
      }
};

export default flightsReducer;