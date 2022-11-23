import React, { Component } from 'react';

export default class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      error: this.props.error,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { value: props.attr.value, error: props.error };
  }

  onChange = (e) => {
    const new_val = e.target.value;
    this.setState({ value: new_val });
    this.props.handlers.onChange(this.props.attr.name, new_val);
  };

  render() {
    const { name, type, placeholder } = this.props.attr;
    return (
      <div style={{ margin: '5px' }}>
        <span style={{ color: 'red' }}>{this.state.error}</span>
        <br />
        <input
          type={type}
          name={name}
          value={this.state.value}
          placeholder={placeholder}
          onChange={this.onChange}
        ></input>
        <br />
      </div>
    );
  }
}
