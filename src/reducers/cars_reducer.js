import { FETCH_CARS, FETCH_CAR, DELETE_CAR } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS: {
      return action.payload;
    }
    case DELETE_CAR: {
      const carId = action.payload;
      return state.filter(car => car.id !== carId);
    }
    case FETCH_CAR:
      return [action.payload];
    default:
      return state;
  }
}
