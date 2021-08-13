import React from "react";

interface CounterState {
  counter: number;
  step: number;
}

class Counter extends React.Component<{}, CounterState> {
  constructor(props: any) {
    super(props);
    this.state = { counter: 0, step: 0 };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ step: Number(event.target.value) });
  };

  reset = () => {
    this.setState({counter: 0})
  }

  increment = () => {
    const { counter, step } = this.state;
    this.setState({
      counter: counter + step,
    });
  };
  decrement = () => {
    const { counter, step } = this.state;
    this.setState({
      counter: counter - step,
    });
  };

  render() {
    const { counter, step } = this.state;
    return (
      <div>
        <h2>{counter}</h2>
        <input type="number" value={step} onChange={this.handleChange} />
        <br />
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
        <br />
        <button onClick={this.reset}>Reset</button>
        <span style={{ display: "block", marginTop: 50 } }>Escolha um valor a ser incrementado e seja feliz <br/> 🤗️</span>
      </div>
    );
  }
}

export default Counter;
