import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    console.log(values);
    this.props.createCar(values, (car) => {
      this.props.history.push('/'); // Navigate after submit return post;
    });
  }
  renderField(field) {
    return (
      <div className="form-group"> <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type} {...field.input}
        />
      </div>
    );
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
          />
          <Field
            className="form-control"
            label="Model"
            name="model"
            component={this.renderField}
          />
          <Field
            className="form-control"
            label="Owner"
            name="owner"
            component={this.renderField}
          />
          <Field
            className="form-control"
            label="Plate"
            name="plate"
            component={this.renderField}
          />
          <button className="btn btn-danger" type="submit" disabled={this.props.pristine || this.props.submitting}>
              Create car
          </button>
        </form>
      </div>
    );
  }
}


export default reduxForm({ form: 'newCarForm' })(
  connect(null, { createCar })(CarsNew)
);
