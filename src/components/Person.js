import React from 'react'

class Person extends React.Component {
  render() {
    const {nome, idade} = this.props
    return (
      <div>
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
      </div>
    );
  }
}

export default Person;
