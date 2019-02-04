import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: Array(9).fill(null),
      whoNext: true,
    };
  }

  handleClick(i) {
    const boxes = this.state.boxes.slice();
    boxes[i] = this.state.whoNext ? 'X' : 'O';
    this.setState({
      boxes: boxes,
      whoNext: !this.state.whoNext,
    });
  }

  showBox(i) {
    return (
      <Box
        value={this.state.boxes[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next Turn: ' + (this.state.whoNext ? 'X' : 'O');

    return (
      <div className="container">
        <div className="status">{status}</div>
        <div>
          {this.showBox(0)}
          {this.showBox(1)}
          {this.showBox(2)}
        </div>
        <div>
          {this.showBox(3)}
          {this.showBox(4)}
          {this.showBox(5)}
        </div>
        <div>
          {this.showBox(6)}
          {this.showBox(7)}
          {this.showBox(8)}
        </div>
      </div>
    );
  }
}

export default App;
