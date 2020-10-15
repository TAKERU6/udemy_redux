import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    count: 0
  };

  handleClickPlus = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleClickMinus = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="Count">
        <div>Count: {this.state.count}</div>
        <button onClick={this.handleClickPlus}>+1</button>
        <button onClick={this.handleClickMinus}>-1</button>
      </div>
    );
  }
}

export default App;
