import React from 'react';
import PropTypes from 'prop-types';
import User from './user';

function List(props) {
  return (
    <ul>
      {props.users.map((user, idx) => {
        const _key = `reg-user-${idx}`;
        return (
          <li key={_key}>
            {user.name}, {user.email}, {user.profession}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
