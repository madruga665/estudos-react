import React from "react";

class InputText extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleClick() {
    this.Submit();
  }
  handleChange (event) {
    this.setState ({
      text: event.target.value
    })
  }
  Submit () {
    alert(`aqui esta o que vc digitou: ${this.state.text}`)
  }
  render() {
    return (
      <div>
        <input
          style={{ marginTop: "50px" }}
          placeholder="digite alguma coisa"
          value={this.state.text}
          type="text"
          onChange={this.handleChange}
        >
        </input>
        <button onClick={this.handleClick}>Enviar</button>
      </div>
    );
  }
}

export default InputText;
