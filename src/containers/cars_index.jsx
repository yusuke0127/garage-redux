import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCars } from '../actions';

class CarsIndex extends Component {
  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="car-item">
            <h3>{car.brand}</h3>
            <p>{car.owner}</p>
            <p>{car.model}</p>
          </div>
        </Link>
      );
    });
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <div className="first-row">
          <h3>Garage Name</h3>
          <p>Description</p>
          <Link className="btn btn-ghost" to="/">Back to list</Link>
        </div>
        {this.renderCars()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { cars: state.cars };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
