/* eslint-disable react/prefer-stateless-function */
import React from 'react';

interface GreetingProps {
  name: string;
}

class Greeting extends React.Component<GreetingProps> {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>
          Hello,
          {name}
        </h1>
        <p>bem vindo ao React!</p>
      </div>
    );
  }
}

export default Greeting;
