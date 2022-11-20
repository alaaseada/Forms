import React, { Component } from 'react';
import List from './list';
import Form from './form';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  RegisterUser = (user) => {
    this.setState({ users: this.state.users.concat(user) });
  };

  render() {
    return (
      <div className='container'>
        <Form onFormSubmit={this.RegisterUser} />
        {this.state.users.length > 0 && (
          <div className='user-list'>
            <h3>Registered Users</h3>
            <List users={this.state.users} />
          </div>
        )}
      </div>
    );
  }
}
