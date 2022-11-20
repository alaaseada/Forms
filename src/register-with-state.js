import React, { Component } from 'react';

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((name, idx) => {
        const key_val = `name-${idx}`;
        return <li key={key_val}>{name}</li>;
      })}
    </ul>
  );
};

const RegistrationForm = (props) => {
  const HandleFormSubmit = (e) => {
    e.preventDefault();
    props.addName();
  };

  const handleNameChange = (e) => {
    props.changeName(e.target.value);
  };

  return (
    <form className='reg-form' onSubmit={HandleFormSubmit}>
      <label htmlFor='name-txb'>Name: </label>
      <input
        type='text'
        name='name-txb'
        id='name-txb'
        value={props.name}
        onChange={handleNameChange}
      ></input>
      <input type='submit' />
    </form>
  );
};

export class Register extends Component {
  state = {
    users: [],
    newVal: '',
  };

  addName = () => {
    const newUsers = this.state.users.concat(this.state.newVal);
    this.setState({ users: newUsers, newVal: '' });
  };

  changeName = (name) => {
    this.setState({ newVal: name });
  };

  render() {
    return (
      <>
        <RegistrationForm
          addName={this.addName}
          changeName={this.changeName}
          name={this.state.newVal}
        />
        <UserList users={this.state.users} />
      </>
    );
  }
}

export default Register;
