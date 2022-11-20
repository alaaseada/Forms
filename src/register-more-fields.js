import React from 'react';
import validator from 'validator';

class Register extends React.Component {
  state = {
    users: [],
    fields: {
      name: '',
      email: '',
      profession: '',
    },
    fieldErrors: {},
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const fieldErrors = this.validate(this.state.fields);
    this.setState({ fieldErrors });
    if (Object.keys(fieldErrors).length) return;
    this.setState({
      users: this.state.users.concat(this.state.fields),
      fields: { name: '', email: '', profession: '' },
    });
  };

  handleFieldChange = (e) => {
    e.preventDefault();
    const fields = { ...this.state.fields };
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  validate = (user) => {
    const errors = {};
    if (!user.name) errors.name = 'Name is required.';
    if (!user.email || !validator.isEmail(user.email))
      errors.email = 'Email is required in this format xxx@xxx.xx';
    if (!user.profession) errors.profession = 'Profession is required.';
    return errors;
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <input
            name='name'
            type='text'
            placeholder='name'
            value={this.state.fields.name}
            onChange={this.handleFieldChange}
          />
          <span style={{ color: 'red', textAlign: 'center' }}>
            {this.state.fieldErrors.name}
          </span>
          <br />
          <input
            name='email'
            type='email'
            placeholder='Email'
            value={this.state.fields.email}
            onChange={this.handleFieldChange}
          />
          <span style={{ color: 'red', textAlign: 'center' }}>
            {this.state.fieldErrors.email}
          </span>
          <br />
          <select
            name='profession'
            value={this.state.fields.profession}
            onChange={this.handleFieldChange}
          >
            <option value={null}>---Select---</option>
            <option value='Engineer'>Engineer</option>
            <option value='Doctor'>Doctor</option>{' '}
            <option value='Teacher'>Teacher</option>
          </select>
          <span style={{ color: 'red', textAlign: 'center' }}>
            {this.state.fieldErrors.profession}
          </span>
          <br />
          <input type='submit' />
        </form>
        {this.state.users.length > 0 && (
          <div>
            <h3>List of users:</h3>
            <ul>
              {this.state.users.map((user, idx) => (
                <li key={idx}>
                  {user.name} - {user.email} - {user.profession}
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default Register;
