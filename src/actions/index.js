// TODO: add and export your own actions
const URL = 'https://wagon-garage-api.herokuapp.com';

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CAR_CREATED = 'CAR_CREATED';
export const DELETE_CAR = 'DELETE_CAR';

export function fetchCars(garage) {
  console.log(garage);
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/tokyodrift/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json());
  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function createCar(body, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/tokyodrift/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: CAR_CREATED,
    payload: request
  };
}

export function deleteCar(id) {
  const requestDelete = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json());

  return {
    type: DELETE_CAR,
    payload: requestDelete
  };
}

// verb: DELETE
// url: https://wagon-garage-api.herokuapp.com/cars/:id
