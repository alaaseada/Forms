import React, { Component } from 'react';

class Field extends Component {
  onChange = (e) => {};
  render() {
    console.log(this.props.attr);
    const {
      attr: { name, type, placeholder, value },
    } = this.props;
    return (
      <>
        <input
          name={this.props.attr.name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={this.onChange}
        ></input>
      </>
    );
  }
}

export default Field;
