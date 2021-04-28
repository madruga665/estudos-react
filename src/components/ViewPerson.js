import Person from "./Person";
import React from "react";
import { persons } from "../Helpers/data-persons";

class ViewPerson extends React.Component {
  constructor() {
    super();
    this.state = { index: 0, persons: persons };
  }
  next() {
    this.setState({
      index: this.state.index + 1,
    });
    if (this.state.index === this.state.persons.length - 1) {
      this.setState({
        index: 0,
      });
    }
  }
  olders() {
    const filtered = persons.filter((person) => person.idade >= 18);
    this.setState({
      index: 0,
    });
    this.setState({
      persons: filtered,
    });
  }

  reset() {
    this.setState({
      persons: persons,
    });
  }

  render() {
    return (
      <div>
        <Person
          nome={this.state.persons[this.state.index].nome}
          idade={this.state.persons[this.state.index].idade}
        />
        <button onClick={this.next.bind(this)}>Proxima Pessoa</button>
        <button onClick={this.olders.bind(this)}>Maiores de idade</button>
        <button onClick={this.reset.bind(this)}>Reset</button>
      </div>
    );
  }
}

export default ViewPerson;
