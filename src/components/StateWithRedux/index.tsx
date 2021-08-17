import React from 'react';
import { connect } from 'react-redux';
import clickButton from '../../redux/actions';
import './StateWithRedux.css';

interface StateWithReduxProps {
  newClickButton: any;
  newValue: string;
}

interface StateWithReduxState {
  inputValue: string;
}

class StateWithRedux extends React.Component<StateWithReduxProps, StateWithReduxState> {
  constructor(props: StateWithReduxProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    const { newClickButton, newValue } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="state-with-redux">
        <input type="text" onChange={this.handleChange} value={inputValue} />
        <button type="submit" onClick={() => newClickButton(inputValue)}>
          Atualizar
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state: { clickState: { value: string; }; }) => ({
  newValue: state.clickState.value,
});

const mapDispatchToProps = (dispatch: any) => ({
  newClickButton: (newValue: string) => dispatch(
    clickButton(newValue),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(StateWithRedux);
