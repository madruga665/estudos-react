import React from "react";
import "./styles/Forms.css";

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: { name: "", email: "", password: "" },
    };
  }
  handleChange = (event) => {
    const { target: { value, name } } = event
    let newError = '';

    if(name === 'name' && value.length > 40) {
      newError = "Nome deve ter menos de 40 caracteres";
    }
    this.setState({
      errors: {
        ...this.state.errors,
        [name]: newError
      },
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const pessoa = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    alert(`${pessoa.name}\n${pessoa.email}\n${pessoa.password}`);
  };

  render() {
    return (
      <div>
        <h1>Cadastro</h1>
        <form className="my-form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nome: </label>
            <input
              id="name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              style={{ borderColor: this.state.errors.name ? 'red' : '' }}
            />
            <span>{this.state.errors.name}</span>
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
          <button type="submit">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default Forms;
