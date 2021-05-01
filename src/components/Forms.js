import React from "react";
import "./styles/Forms.css";

class Forms extends React.Component {
  constructor() {
    super();
    this.state = { name: "", email: "", password: "" };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const pessoa = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    return pessoa;
  };

  render() {
    return (
      <div>
        <h1>Cadastro</h1>
        <form className="my-form">
          <div className="input-group">
            <label htmlFor="name">Nome: </label>
            <input
              id="name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <span></span>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <span></span>
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha: </label>
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <span></span>
          </div>
          <button type="submit" onClick={this.handleSubmit}>
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default Forms;
