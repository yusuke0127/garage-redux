import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';
import '../assets/stylesheets/application.scss';

import App from './components/app';
import carsReducer from './reducers/cars_reducer';
import CarsIndex from './containers/cars_index';
import CarsNew from './containers/cars_new';
import cars from './cars';

const garageReducer = (state = null) => state;

const initialState = {
  garageName: `garage${Math.floor(10 + (Math.random() * 90))}`, // prompt("Type in your Garage name"
  cars: []
};

const reducers = combineReducers({
  // key: reducer
  cars: carsReducer,
  garageName: garageReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="container">
        <Switch>
          <Route path="/" exact component={CarsIndex} />
          <Route path="/cars/new" exact component={CarsNew} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
