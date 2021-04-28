import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0 };
  }

  increment() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  decrement() {
    this.setState({
      contador: this.state.contador - 1,
    });
  }
  render() {
    return (
      <div>
        <h2>{this.state.contador}</h2>
        <button onClick={this.decrement.bind(this)}>-</button>
        <button onClick={this.increment.bind(this)}>+</button>
      </div>
    );
  }
}

export default Counter;
