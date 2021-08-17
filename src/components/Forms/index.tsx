/* eslint-disable no-alert */
import React from 'react';
import './Forms.css';

interface FormProps {}
interface FormState {
  name: string;
  email: string;
  password: string;
  error: string;
}

class Forms extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
    };
  }

  handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    let newError: string = '';

    if (field === 'name' && value.length > 40) {
      newError = 'Nome deve ter menos de 40 caracteres';
    }
    this.setState({
      error: newError, [field]: value,
    } as Pick<FormState, 'error' | 'name'>);
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { name, email, password } = this.state;
    event.preventDefault();
    const pessoa = {
      name,
      email,
      password,
    };
    alert(`${pessoa.name}\n${pessoa.email}\n${pessoa.password}`);
    this.setState({
      name: '',
      email: '',
      password: '',
      error: '',
    });
  };

  render() {
    const {
      name, error, email, password,
    } = this.state;
    return (
      <div>
        <h1>Cadastro</h1>
        <form className="my-form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">
              Nome:
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={this.handleChange('name')}
                style={{ borderColor: error ? 'red' : '' }}
              />
            </label>
            <span>{error}</span>
          </div>

          <div className="input-group">
            <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={this.handleChange('email')}
              />
            </label>
            <span />
          </div>

          <div className="input-group">
            <label htmlFor="password">
              Senha:
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={this.handleChange('password')}
              />
            </label>
            <span />
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
