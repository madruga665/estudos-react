import React from "react";
import "./styles/Forms.css";

interface FormState {
  name: string;
  email: string;
  password: string;
  error: string;
};

class Forms extends React.Component<{}, FormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  }

  handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event
    let newError: string = '';

    if(field === 'name' && value.length > 40) {
      newError = "Nome deve ter menos de 40 caracteres";
    }
    this.setState({
      error: newError, [field]: value
    } as Pick<FormState,  "error" | "name">)
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const pessoa = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    alert(`${pessoa.name}\n${pessoa.email}\n${pessoa.password}`);
    this.setState({
      name: "",
      email: "",
      password: "",
      error: "",
    })
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
              onChange={this.handleChange('name')}
              style={{ borderColor: this.state.error ? 'red' : '' }}
            />
            <span>{this.state.error}</span>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange('email')}
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
              onChange={this.handleChange('password')}
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
