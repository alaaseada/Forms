import React from 'react';
import Field from './field';
import User from './user';
import validator from 'validator';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: new User(),
      errors: {},
    };
  }

  InputValidator = (name, val) => {
    let errors = this.state.errors;
    let msg = '';
    switch (name) {
      case 'name':
        if (!val) msg = 'Name is required.';
        if (val.length < 8) msg = 'Name must be 8 characters or more.';
        if (msg) errors = { ...errors, name: msg };
        else delete errors['name'];
        break;
      case 'email':
        if (!validator.isEmail(val)) msg = 'A valid email is required.';
        if (msg) errors = { ...errors, email: msg };
        else delete errors['email'];
        break;
    }
    this.setState({ errors: { ...errors } });
  };

  handleInputChange = (name, value) => {
    this.InputValidator(name, value);
    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  validateForm = () => {
    let errors = {};
    const { name, email } = this.state.user;
    if (!name) errors['name'] = 'Name is required';
    if (!email) errors['email'] = 'Email address is required.';
    return errors;
  };

  submitForm = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors: errors });
      return;
    }
    this.props.onFormSubmit(this.state.user);
    this.setState({ user: new User(), errors: {} });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <Field
          attr={{
            name: 'name',
            type: 'text',
            value: this.state.user.name,
            placeholder: 'Name',
          }}
          handlers={{ onChange: this.handleInputChange }}
          error={this.state.errors.name || ''}
        />

        <Field
          attr={{
            name: 'profession',
            type: 'text',
            value: this.state.user.profession,
            placeholder: 'Profession',
          }}
          handlers={{ onChange: this.handleInputChange }}
        />
        <Field
          attr={{
            name: 'email',
            type: 'email',
            value: this.state.user.email,
            placeholder: 'Email address',
          }}
          handlers={{ onChange: this.handleInputChange }}
          error={this.state.errors.email || ''}
        />
        <input type='submit' />
      </form>
    );
  }
}

export default Form;
