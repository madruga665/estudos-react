/* eslint-disable react/prefer-stateless-function */
import React from 'react';

interface PersonProps {
  nome: string;
  idade: number;
}

class Person extends React.Component<PersonProps> {
  render() {
    const { nome, idade } = this.props;
    return (
      <div>
        <h2>
          Nome:
          {nome}
        </h2>
        <p>
          Idade:
          {idade}
        </p>
      </div>
    );
  }
}

export default Person;
