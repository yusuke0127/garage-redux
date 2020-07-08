import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCar, deleteCar } from '../actions';


class CarShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  deleteCar = () => {
    console.log(this.props.car.id);
    this.props.deleteCar(this.props.car.id);
    this.props.history.push('/');
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="car-item">
          <h3>{this.props.car.brand}</h3>
          <p>{this.props.car.model}</p>
        </div>
        <Link to="/">Back</Link>
        <button className="btn btn-danger" type="submit" onClick={this.deleteCar}>Delete</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(car => car.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarShow);
