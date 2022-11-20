import React from 'react';
import Field from './field';
import User from './user';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: new User(),
      errors: {},
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    if (Object.keys(this.state.errors).length > 0) return;
    this.props.onFormSubmit(this.state.user);
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
        />
        <Field
          attr={{
            name: 'profession',
            type: 'text',
            value: this.state.user.profession,
            placeholder: 'Profession',
          }}
        />
        <Field
          attr={{
            name: 'email',
            type: 'email',
            value: this.state.user.email,
            placeholder: 'Email address',
          }}
        />
        <Field />
        <input type='submit' />
      </form>
    );
  }
}

export default Form;
