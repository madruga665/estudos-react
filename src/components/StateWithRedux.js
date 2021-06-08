import React, { Component } from "react";
import { connect } from "react-redux";
import { clickButton } from "../redux/actions";
import "./styles/StateWithRedux.css";

class StateWithRedux extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    const { clickButton, newValue } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="state-with-redux">
        <input type="text" onChange={this.handleChange} value={inputValue} />
        <button type="submit" onClick={() => clickButton(inputValue)}>
          Atualizar
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newValue: state.clickState.value,
});

const mapDispatchToProps = (dispatch) => ({
  clickButton : (newValue) => dispatch(
    clickButton(newValue),
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(StateWithRedux);
