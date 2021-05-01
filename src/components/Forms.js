import React from "react";
import "./styles/Forms.css";

class Forms extends React.Component {
  render() {
    return (
      <div>
        <h1>Cadastro</h1>
        <form className="my-form">
          <div className="input-group">
            <label for="name">Nome: </label>
            <input id="name" type="text" />
            <span></span>
          </div>

          <div className="input-group">
            <label for="email">Email: </label>
            <input id="email" type="email" />
            <span></span>
          </div>

          <div className="input-group">
            <label for="password">Senha: </label>
            <input id="password" type="password" />
            <span></span>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Forms;
