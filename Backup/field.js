import React from 'react';

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.attr.value,
      error: false,
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    if (props.attr.value !== state.value)
      this.setState({ value: props.attr.value });
  };

  onChange = (e) => {
    const current_value = e.target.value;
    const invalid = this.props.validate
      ? this.props.validate(current_value)
      : false;
    this.setState({ value: current_value, error: invalid });
    this.props.handlers.onChange({
      name: this.props.attr.name,
      value: current_value,
      invalid,
    });
  };

  render() {
    return (
      <div className='field-div'>
        <div>
          <input
            type={this.props.attr.type}
            name={this.props.attr.name}
            placeholder={this.props.attr.placeholder}
            value={this.state.value}
            onChange={this.onChange}
          />
        </div>
        <div>
          <span className='error'>{this.state.error}</span>
        </div>
      </div>
    );
  }
}

export default Field;
