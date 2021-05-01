import React from "react";
import "./styles/Forms.css";

class Forms extends React.Component {
  constructor() {
    super();
    this.state = { name: "", email: "", password: "" };
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.name);
  }
  render() {
    return (
      <div>
        <h1>Cadastro</h1>
        <form className="my-form">
          <div className="input-group">
            <label htmlFor="name">Nome: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <span></span>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" />
            <span></span>
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha: </label>
            <input id="password" type="password" />
            <span></span>
          </div>
          <button type="submit" onClick={this.handleSubmit}>Enviar</button>
        </form>
      </div>
    );
  }
}

export default Forms;
