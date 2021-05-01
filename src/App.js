import React from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import InputText from "./components/InputText";
import "./App.css";
import ViewPerson from "./components/ViewPerson";
import Forms from "./components/Forms";

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
        <ViewPerson/>
      </Card>

      <Card titulo="Forms" color="#14213d">
        <Forms />
      </Card>

    </div>
  );
}

export default App;
