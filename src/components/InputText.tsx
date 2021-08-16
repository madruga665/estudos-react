import React from "react";

interface InputTextProps {}

interface InputTextState {
  text: string;
}

class InputText extends React.Component<InputTextProps, InputTextState> {
  constructor(props: InputTextProps) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.alertOnSubmit = this.alertOnSubmit.bind(this);
  }
  handleClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.alertOnSubmit();
    this.setState({ text: "" });
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      text: event.target.value,
    });
  }
  alertOnSubmit() {
    alert(`aqui esta o que vc digitou: \n ${this.state.text}`);
  }
  render() {
    return (
      <div>
        <form onClick={this.handleClick}>
          <input
            style={{ marginTop: "50px" }}
            placeholder="digite alguma coisa"
            value={this.state.text}
            type="text"
            onChange={this.handleChange}
          ></input>
          <button type="submit">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default InputText;
