import React from 'react'

interface IPerson {
  nome: string;
  idade: number;
}

class Person extends React.Component<IPerson> {
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
