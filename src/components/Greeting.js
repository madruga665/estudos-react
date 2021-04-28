import React from "react";

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <p>bem vindo ao React!</p>
      </div>
    );
  }
}

export default Greeting;
