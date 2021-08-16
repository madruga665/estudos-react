/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import './App.css';
import ViewPerson from './components/ViewPerson';
import Tabuada from './components/Tabuada';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import InputText from './components/InputText';
import Forms from './components/Forms';
import StateWithRedux from './components/StateWithRedux';
import Card from './components/Card';

function App() {
  return (
    <div className="app">
      <Card titulo="Boas Vindas">
        <Greeting name="Luciano" />
      </Card>

      <Card titulo="Contador de Clicks" color="#2D936C">
        <Counter />
      </Card>

      <Card titulo="Entrada de Text" color="#BFAE48">
        <InputText />
      </Card>

      <Card titulo="Pessoas" color="#c0392b">
        <ViewPerson />
      </Card>

      <Card titulo="Forms" color="#14213d">
        <Forms />
      </Card>

      <Card titulo="Gerenciando estado com Redux" color="#f53b57">
        <StateWithRedux />
      </Card>

      <Card titulo="Tabuada" color="#f1c40f">
        <Tabuada />
      </Card>
    </div>
  );
}

export default App;
