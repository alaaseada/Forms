import React, { Component } from 'react';
import Field from './field';
import validator from 'validator';

class Register extends Component {
  state = {
    users: [],
    fields: {
      name: '',
      email: '',
    },
    fieldsErrors: {},
  };

  validate = () => {
    if (Object.keys(this.state.fieldsErrors).length > 0) return true;
    return false;
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) return;
    this.setState((prevState) => {
      return {
        users: prevState.users.concat(this.state.fields),
        fieldsErrors: {},
        fields: { name: '', email: '' },
      };
    });
  };

  handleChange = ({ name, value, error }) => {
    const fields = { ...this.state.fields };
    const errors = { ...this.state.fieldsErrors };

    fields[name] = value;
    errors[name] = error;

    this.setState({ fields, fieldsErrors: errors });
  };

  validateString = (value) => {
    const invalid = value ? false : 'Name is required.';
    console.log(`Value: ${value}, invalid: ${invalid}`);
    return invalid;
  };
  validateEmail = (value) => {
    return validator.isEmail(value) ? false : 'Email is invalid.';
  };

  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <Field
            attr={{
              type: 'text',
              name: 'name',
              placeholder: 'Name',
              value: this.state.fields.name,
            }}
            handlers={{
              onChange: this.handleChange,
            }}
            validate={this.validateString}
          />
          <Field
            attr={{
              type: 'email',
              name: 'email',
              placeholder: 'Email',
              value: this.state.fields.email,
            }}
            handlers={{
              onChange: this.handleChange,
            }}
            validate={this.validateEmail}
          />
          <input type={'submit'} />
        </form>
        {this.state.users.length > 0 && (
          <div>
            <h3>List of Users</h3>
            <ul>
              {this.state.users.map((user, idx) => (
                <li key={idx}>{user}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default Register;
