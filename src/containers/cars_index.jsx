import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CarsIndex extends Component {
  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to{}
      );
    });
  }

  render () {
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

export default connect(mapStateToProps)(CarsIndex);
