/* eslint-disable no-alert */
import React from 'react';

interface InputTextProps {}

interface InputTextState {
  text: string;
}

class InputText extends React.Component<InputTextProps, InputTextState> {
  constructor(props: InputTextProps) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.alertOnSubmit = this.alertOnSubmit.bind(this);
  }

  handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.alertOnSubmit();
    this.setState({ text: '' });
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      text: event.target.value,
    });
  }

  alertOnSubmit() {
    const { text } = this.state;
    alert(`aqui esta o que vc digitou: \n ${text}`);
  }

  render() {
    const { text } = this.state;
    return (
      <div>

        <input
          style={{ marginTop: '50px' }}
          placeholder="digite alguma coisa"
          value={text}
          type="text"
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleClick}>
          Enviar
        </button>

      </div>
    );
  }
}

export default InputText;
