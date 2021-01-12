import { render } from '@testing-library/react';
import React, { Component } from 'react'

class IncrementDecrement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
    };
    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
  }

  Increment = (evt) => {
    evt.preventDefault();
    this.setState({count: this.state.count + 1})
  }

  Decrement = (evt) => {
    evt.preventDefault();
    if (this.state.count === 0) {
      alert("Cannot be less than zero");
      return;
    }
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div>
      <h1>Current Value: {this.state.count}</h1>
      <button onClick={this.Increment}>Click to increment by 1</button>
      <button onClick={this.Decrement}>Click to decrease by 1</button>
    </div>
    )
  }
}

export default IncrementDecrement;
