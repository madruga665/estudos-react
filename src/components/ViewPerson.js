/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Person from './Person';
import personsData from '../Helpers/data-persons';

class ViewPerson extends React.Component {
  constructor() {
    super();
    this.state = { index: 0, persons: personsData };
  }

  next() {
    const { index, persons } = this.state;
    this.setState({
      index: index + 1,
    });
    if (index === persons.length - 1) {
      this.setState({
        index: 0,
      });
    }
  }

  olders() {
    const filtered = personsData.filter((person) => person.idade >= 18);
    this.setState({
      index: 0,
    });
    this.setState({
      persons: filtered,
    });
  }

  reset() {
    this.setState({
      persons: personsData,
    });
  }

  render() {
    const { persons, index } = this.state;
    return (
      <div>
        <Person
          nome={persons[index].nome}
          idade={persons[index].idade}
        />
        <button type="button" onClick={this.next.bind(this)}>Proxima Pessoa</button>
        <button type="button" onClick={this.olders.bind(this)}>Maiores de idade</button>
        <button type="button" onClick={this.reset.bind(this)}>Reset</button>
      </div>
    );
  }
}

export default ViewPerson;
