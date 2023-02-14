import { FLIGHT_LIST_RECEIVED } from './flights.actions';

const initialState = {
  flightsList: {
    arrival: [],
    departure: [],
  },
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_LIST_RECEIVED: {
      return {
        ...state, 
        flightsList: {
          arrival: action.payload.arrival,
          departure: action.payload.departure,
        },
      };
      }
      default:
        return state;
    }
};

export default flightsReducer;