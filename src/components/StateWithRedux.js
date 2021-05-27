import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickButton } from "../actions";
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

  handleClick = (event, inputValue) => {
    event.PreventDefault();
    clickButton(inputValue);
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

const mapStateToProps = (store) => ({
  newValue: store.clickState.newValue,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ clickButton }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StateWithRedux);
