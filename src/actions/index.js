// TODO: add and export your own actions
const URL = 'https://wagon-garage-api.herokuapp.com';

export const FETCH_CARS = 'FETCH_CARS';

export function fetchCars(garage) {
  const promise = fetch(`${URL}/${garage}/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}
