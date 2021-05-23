import React from "react";

class InputText extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.alertOnSubmit = this.alertOnSubmit.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    this.alertOnSubmit();
    this.setState({ text: "" });
  }
  handleChange(event) {
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
        <form>
          <input
            style={{ marginTop: "50px" }}
            placeholder="digite alguma coisa"
            value={this.state.text}
            type="text"
            onChange={this.handleChange}
          ></input>
          <button type="submit" onClick={this.handleClick}>
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default InputText;
