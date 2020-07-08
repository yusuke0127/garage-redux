import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

const required = value => value ? undefined : 'Required';
const plateNumber = value =>
  value && !/^[A-Z0-9]+/.test(value) ? 'Invalid plate number(Capitalized letter and no special characters allowed' : undefined;

class CarsNew extends Component {
  onSubmit = (values) => {
    console.log(values);
    this.props.createCar(values, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  renderField({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <div className="form-group"> <label>{label}</label>
        <input
          className="form-control"
          type={type} {...input}
        />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
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
            validate={[required]}

          />
          <Field
            className="form-control"
            label="Model"
            name="model"
            component={this.renderField}
            validate={[required]}
          />
          <Field
            className="form-control"
            label="Owner"
            name="owner"
            component={this.renderField}
            validate={[required]}

          />
          <Field
            className="form-control"
            label="Plate"
            name="plate"
            component={this.renderField}
            validate={[required, plateNumber]}
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
