import React, { Component, useRef } from 'react';

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
  const name_txb_ref = useRef('');

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    props.addName(name_txb_ref.current.value);
    name_txb_ref.current.value = '';
  };

  return (
    <form className='reg-form' onSubmit={HandleFormSubmit}>
      <label htmlFor='name-txb'>Name: </label>
      <input
        type='text'
        name='name-txb'
        id='name-txb'
        ref={name_txb_ref}
      ></input>
      <input type='submit' />
    </form>
  );
};

export class Register extends Component {
  state = {
    users: [],
  };
  addName = (newVal) => {
    const newUsers = this.state.users.concat(newVal);
    this.setState({ users: newUsers });
  };
  render() {
    return (
      <>
        <RegistrationForm addName={this.addName} />
        <UserList users={this.state.users} />
      </>
    );
  }
}

export default Register;
