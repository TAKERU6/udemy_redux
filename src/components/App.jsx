import React, { Component } from "react";
import "../styles.css";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  tenIncrement,
  tenDecrement,
  fiveIncrement,
  fiveDecrement,
  reset
} from "../actions";

class App extends Component {
  render() {
    const {
      handleIncrement,
      handleDecrement,
      handleTenIncrement,
      handleTenDecrement,
      handleFiveIncrement,
      handleFiveDecrement,
      handleReset,
      value
    } = this.props;
    return (
      <div className="Count">
        <div>value: {value}</div>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleFiveIncrement}>+5</button>
        <button onClick={handleFiveDecrement}>-5</button>
        <button onClick={handleTenIncrement}>+10</button>
        <button onClick={handleTenDecrement}>-10</button>
        <button onClick={handleReset}>reset</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { value: state.count.value };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => dispatch(increment()),
    handleFiveIncrement: () => dispatch(fiveIncrement()),
    handleFiveDecrement: () => dispatch(fiveDecrement()),
    handleTenIncrement: () => dispatch(tenIncrement()),
    handleDecrement: () => dispatch(decrement()),
    handleTenDecrement: () => dispatch(tenDecrement()),
    handleReset: () => dispatch(reset())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
